import test from "node:test";
import assert from "node:assert/strict";
import { installGameGestures, createInput } from "../input.js";
import { clearMissionInput, holdFire } from "../missions.js";
function fixture() {
  let clock = 0,
    interrupts = [];
  const view = new EventTarget();
  Object.assign(view, {
    innerWidth: 1080,
    innerHeight: 810,
    performance: { now: () => clock },
    visualViewport: new EventTarget(),
  });
  Object.assign(view.visualViewport, { scale: 1, width: 1080, height: 810 });
  const root = new EventTarget(),
    classes = new Set(),
    options = new Map(),
    original = root.addEventListener;
  root.addEventListener = (name, fn, opts) => {
    options.set(name, opts);
    original.call(root, name, fn, opts);
  };
  root.ownerDocument = { defaultView: view };
  root.contains = (el) => !!el?.inside;
  root.classList = {
    toggle: (name, on) => (on ? classes.add(name) : classes.delete(name)),
    remove: (name) => classes.delete(name),
  };
  const guard = installGameGestures(root, {
    onInterrupt: (reason) => interrupts.push(reason),
  });
  const blank = {
      inside: true,
      id: "hud",
      tagName: "DIV",
      closest: () => null,
    },
    button = {
      inside: true,
      id: "siren",
      tagName: "BUTTON",
      closest: () => button,
    };
  const point = (x = 10, y = 20, id = 1) => ({
    identifier: id,
    clientX: x,
    clientY: y,
  });
  const send = (
    name,
    {
      target = blank,
      touches = [],
      changedTouches = [],
      cancelable = true,
      ...props
    } = {},
  ) => {
    const e = new Event(name, { cancelable });
    Object.defineProperty(e, "target", { value: target });
    Object.assign(e, { touches, changedTouches, ...props });
    root.dispatchEvent(e);
    return e;
  };
  const tap = (
    at,
    { x = 10, y = 20, target = blank, duration = 60, cancelable = true } = {},
  ) => {
    clock = at;
    send("touchstart", { target, touches: [point(x, y)] });
    clock += duration;
    return send("touchend", {
      target,
      changedTouches: [point(x, y)],
      cancelable,
    });
  };
  return {
    view,
    root,
    guard,
    classes,
    options,
    blank,
    button,
    point,
    send,
    tap,
    at: (t) => {
      clock = t;
    },
    interrupts,
  };
}
test("gesture policy blocks the second short blank/HUD tap only while active", () => {
  const f = fixture();
  assert.equal(f.tap(0).defaultPrevented, false);
  assert.equal(f.tap(160).defaultPrevented, false);
  f.guard.setActive(true);
  assert.ok(f.classes.has("game-gestures-active"));
  assert.equal(f.tap(400).defaultPrevented, false);
  assert.equal(f.tap(560).defaultPrevented, true);
  f.guard.setActive(false);
  assert.equal(f.tap(720).defaultPrevented, false);
  assert.ok(!f.classes.size);
  f.guard.setActive(true);
  assert.equal(f.tap(880).defaultPrevented, false);
  f.guard.destroy();
});
test("native button taps, long holds, drags and separated taps remain untouched", () => {
  const f = fixture();
  f.guard.setActive(true);
  assert.equal(f.tap(0, { target: f.button }).defaultPrevented, false);
  assert.equal(f.tap(140, { target: f.button }).defaultPrevented, false);
  assert.equal(f.tap(300).defaultPrevented, false);
  assert.equal(f.tap(500, { duration: 600 }).defaultPrevented, false);
  assert.equal(f.tap(1300).defaultPrevented, false);
  assert.equal(f.tap(1450, { x: 100 }).defaultPrevented, false);
  f.at(1700);
  f.send("touchstart", { touches: [f.point()] });
  f.send("touchmove", { touches: [f.point(90)] });
  f.at(1760);
  assert.equal(
    f.send("touchend", { changedTouches: [f.point(90)] }).defaultPrevented,
    false,
  );
  f.guard.destroy();
});
test("multi-touch and pointer cancellation cannot become an accidental double-tap", () => {
  const f = fixture();
  f.guard.setActive(true);
  f.tap(0);
  f.at(150);
  f.send("touchstart", { touches: [f.point(), f.point(20, 20, 2)] });
  f.send("touchend", {
    touches: [f.point()],
    changedTouches: [f.point(20, 20, 2)],
  });
  f.send("touchend", { changedTouches: [f.point()] });
  assert.equal(f.tap(300).defaultPrevented, false);
  f.send("pointercancel", { pointerId: 1 });
  assert.equal(f.tap(450).defaultPrevented, false);
  f.guard.destroy();
});
test("Safari gesture events are canceled only on the active play surface", () => {
  const f = fixture();
  assert.equal(f.send("gesturestart").defaultPrevented, false);
  f.guard.setActive(true);
  for (const type of ["gesturestart", "gesturechange", "gestureend"])
    assert.equal(f.send(type).defaultPrevented, true);
  assert.equal(
    f.send("gesturestart", { target: { inside: false } }).defaultPrevented,
    false,
  );
  assert.equal(
    f.send("gesturechange", { cancelable: false }).defaultPrevented,
    false,
  );
  f.guard.setActive(false);
  assert.equal(f.send("gesturechange").defaultPrevented, false);
  f.guard.destroy();
});
test("listeners explicitly allow prevention only where required; mouse double clicks stay native", () => {
  const f = fixture();
  assert.equal(f.options.get("touchend").passive, false);
  assert.equal(f.options.get("gesturestart").passive, false);
  assert.equal(f.options.get("touchstart").passive, true);
  f.guard.setActive(true);
  assert.equal(f.send("dblclick").defaultPrevented, false);
  f.send("pointerdown", { pointerType: "touch" });
  assert.equal(f.send("dblclick").defaultPrevented, true);
  f.guard.setActive(false);
  assert.equal(f.send("dblclick").defaultPrevented, false);
  f.guard.destroy();
});
test("orientation, viewport and blur interruptions clear held input and fire ownership without erasing progress", () => {
  const f = fixture(),
    s = {
      phase: "race",
      missions: {
        active: {
          stage: "FIRE_ACTION",
          pointer: null,
          holding: -1,
          fires: [1.2],
        },
      },
    };
  const input = createInput(s),
    b = new EventTarget();
  b.classList = { toggle: () => {} };
  b.setPointerCapture = () => {};
  input.bind(b, "steerR");
  const guard = installGameGestures(f.root, {
    onInterrupt: () => {
      input.clear();
      clearMissionInput(s);
    },
  });
  guard.setActive(true);
  for (const type of ["orientationchange", "resize", "blur"]) {
    const e = new Event("pointerdown", { cancelable: true });
    Object.assign(e, { pointerId: 9 });
    b.dispatchEvent(e);
    assert.equal(s.steerR, true);
    assert.ok(holdFire(s, 0, 12));
    f.view.dispatchEvent(new Event(type));
    assert.equal(s.steerR, false);
    assert.equal(s.missions.active.pointer, null);
    assert.deepEqual(s.missions.active.fires, [1.2]);
  }
  guard.destroy();
  f.guard.destroy();
});
test("viewport diagnostics distinguish scale changes, remain bounded and observe inactive dialog zoom without blocking it", () => {
  const f = fixture();
  f.guard.setActive(true);
  for (let i = 0; i < 100; i++) f.tap(i * 500);
  assert.ok(f.guard.snapshot().recent.length <= 32);
  f.view.visualViewport.scale = 1.3;
  f.view.visualViewport.dispatchEvent(new Event("resize"));
  const r = f.guard.snapshot();
  assert.equal(r.zoomObservedDuringPlay, true);
  assert.equal(r.viewport.scale, 1.3);
  assert.ok(r.recent.some((e) => e.type === "viewport-scale-change"));
  assert.ok(r.recent.every((e) => !("x" in e) && !("text" in e)));
  f.guard.setActive(false);
  const event = new Event("resize", { cancelable: true });
  f.view.visualViewport.scale = 1.7;
  f.view.visualViewport.dispatchEvent(event);
  assert.equal(event.defaultPrevented, false);
  const n = f.interrupts.length;
  f.guard.destroy();
  f.view.dispatchEvent(new Event("resize"));
  assert.equal(f.interrupts.length, n);
});
