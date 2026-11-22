import test from "node:test";
import assert from "node:assert/strict";
import { installGameGestures, createInput } from "../input.js";
import { clearMissionInput, holdFire } from "../missions.js";
function fixture(policy = {}) {
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
    ...policy,
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
test("gesture policy cancels browser tap defaults only while active", () => {
  const f = fixture();
  assert.equal(f.tap(0).defaultPrevented, false);
  assert.equal(f.tap(160).defaultPrevented, false);
  f.guard.setActive(true);
  assert.ok(f.classes.has("game-gestures-active"));
  assert.equal(f.tap(400).defaultPrevented, true);
  assert.equal(f.tap(560).defaultPrevented, true);
  f.guard.setActive(false);
  assert.equal(f.tap(720).defaultPrevented, false);
  assert.ok(!f.classes.size);
  f.guard.setActive(true);
  assert.equal(f.tap(880).defaultPrevented, true);
  f.guard.destroy();
});
test("menu guard covers all short taps but leaves out-of-scope dialogs untouched", () => {
  const f = fixture({
    mode: "menu",
    isSurface: (target) => target.id !== "diagnostics",
  });
  f.guard.setActive(true);
  assert.ok(f.classes.has("menu-gestures-active"));
  assert.equal(f.guard.snapshot().policy, "menu-double-tap");
  assert.equal(f.guard.snapshot().pinchZoomAllowed, false);
  assert.equal(f.tap(0).defaultPrevented, true);
  assert.equal(f.tap(160).defaultPrevented, true);
  const outside = { ...f.blank, id: "diagnostics" };
  assert.equal(f.tap(320, { target: outside }).defaultPrevented, false);
  assert.equal(f.tap(480, { target: outside }).defaultPrevented, false);
  for (const target of [
    f.button,
    { ...f.blank, tagName: "P", closest: () => ({}) },
  ]) {
    assert.equal(f.tap(640, { target }).defaultPrevented, true);
    assert.equal(f.tap(800, { target }).defaultPrevented, true);
  }
  assert.equal(f.send("contextmenu").defaultPrevented, false);
  f.guard.destroy();
  assert.ok(!f.classes.size);
});
test("menu guard blocks pinch while allowing one-finger scrolling and long holds", () => {
  const f = fixture({ mode: "menu" });
  f.guard.setActive(true);
  for (const type of ["gesturestart", "gesturechange", "gestureend"])
    assert.equal(f.send(type).defaultPrevented, true);
  f.tap(0);
  f.at(160);
  f.send("touchstart", { touches: [f.point(), f.point(30, 30, 2)] });
  assert.equal(
    f.send("touchmove", { touches: [f.point(), f.point(60, 60, 2)] })
      .defaultPrevented,
    true,
  );
  assert.equal(
    f.send("touchend", { changedTouches: [f.point(), f.point(60, 60, 2)] })
      .defaultPrevented,
    false,
  );
  assert.equal(f.tap(320).defaultPrevented, true);
  f.at(500);
  f.send("touchstart", { touches: [f.point()] });
  assert.equal(
    f.send("touchmove", { touches: [f.point(10, 100)] }).defaultPrevented,
    false,
  );
  f.at(560);
  assert.equal(
    f.send("touchend", { changedTouches: [f.point(10, 100)] }).defaultPrevented,
    false,
  );
  assert.equal(f.tap(700, { duration: 700 }).defaultPrevented, false);
  f.view.visualViewport.scale = 1.5;
  f.view.visualViewport.dispatchEvent(new Event("resize"));
  assert.equal(f.guard.snapshot().zoomObservedDuringPlay, true);
  assert.equal(f.guard.snapshot().viewport.scale, 1.5);
  f.guard.destroy();
});
test("short button taps are consumed but long holds and drags are not mistaken for taps", () => {
  const f = fixture();
  f.guard.setActive(true);
  assert.equal(f.tap(0, { target: f.button }).defaultPrevented, true);
  assert.equal(f.tap(140, { target: f.button }).defaultPrevented, true);
  assert.equal(f.tap(300).defaultPrevented, true);
  assert.equal(f.tap(500, { duration: 600 }).defaultPrevented, false);
  assert.equal(f.tap(1300).defaultPrevented, true);
  assert.equal(f.tap(1450, { x: 100 }).defaultPrevented, true);
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
  assert.equal(f.tap(300).defaultPrevented, true);
  f.send("pointercancel", { pointerId: 1 });
  assert.equal(f.tap(450).defaultPrevented, true);
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
  assert.equal(f.options.get("touchstart").passive, false);
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

test("touch buttons activate once, including after a phase change; ghost clicks are blocked, keyboard and mouse clicks survive", () => {
  const f = fixture();
  let clicks = 0;
  f.button.getBoundingClientRect = () => ({
    left: 0,
    right: 100,
    top: 0,
    bottom: 100,
  });
  f.button.click = () => {
    clicks++;
    f.guard.setActive(false);
  };
  f.guard.setActive(true);
  f.send("pointerdown", {
    target: f.button,
    pointerType: "touch",
    pointerId: 7,
    clientX: 20,
    clientY: 20,
  });
  assert.equal(
    f.send("touchstart", { target: f.button, touches: [f.point()] })
      .defaultPrevented,
    true,
  );
  f.send("pointerup", {
    target: f.button,
    pointerType: "touch",
    pointerId: 7,
    clientX: 20,
    clientY: 20,
  });
  assert.equal(clicks, 1);
  assert.equal(
    f.send("click", { target: f.button, pointerType: "touch", detail: 1 })
      .defaultPrevented,
    true,
  );
  assert.equal(
    f.send("click", { target: f.button, detail: 0 }).defaultPrevented,
    false,
  );
  assert.equal(
    f.send("click", { target: f.button, pointerType: "mouse", detail: 1 })
      .defaultPrevented,
    false,
  );
  assert.equal(clicks, 1);
  f.guard.destroy();
});
test("cancelled, dragged, released-outside, interrupted and held pointer controls cannot create tap clicks", () => {
  const f = fixture();
  let clicks = 0;
  f.button.getBoundingClientRect = () => ({
    left: 0,
    right: 100,
    top: 0,
    bottom: 100,
  });
  f.button.click = () => clicks++;
  f.guard.setActive(true);
  const down = () =>
    f.send("pointerdown", {
      target: f.button,
      pointerType: "touch",
      pointerId: 7,
      clientX: 20,
      clientY: 20,
    });
  const up = (x = 20) =>
    f.send("pointerup", {
      target: f.button,
      pointerType: "touch",
      pointerId: 7,
      clientX: x,
      clientY: 20,
    });
  down();
  f.send("pointercancel", { pointerId: 7 });
  up();
  down();
  f.send("lostpointercapture", { pointerId: 7 });
  up();
  down();
  f.send("pointermove", { pointerId: 7, clientX: 70, clientY: 20 });
  up();
  down();
  up(110);
  down();
  f.view.dispatchEvent(new Event("resize"));
  up();
  f.button.hasAttribute = () => true;
  down();
  up();
  assert.equal(clicks, 0);
  f.guard.destroy();
});

test("cancelling one touch does not discard another finger pending on a click control", () => {
  const f = fixture();
  let first = 0,
    second = 0;
  f.button.getBoundingClientRect = () => ({
    left: 0,
    right: 100,
    top: 0,
    bottom: 100,
  });
  f.button.click = () => first++;
  const other = { ...f.button, id: "sound", click: () => second++ };
  other.closest = () => other;
  f.guard.setActive(true);
  for (const [target, pointerId] of [
    [f.button, 1],
    [other, 2],
  ])
    f.send("pointerdown", {
      target,
      pointerType: "touch",
      pointerId,
      clientX: 20,
      clientY: 20,
    });
  f.send("pointercancel", { target: f.button, pointerId: 1 });
  f.send("touchcancel", { target: f.button, touches: [f.point(20, 20, 2)] });
  f.send("pointerup", {
    target: other,
    pointerType: "touch",
    pointerId: 2,
    clientX: 20,
    clientY: 20,
  });
  assert.equal(first, 0);
  assert.equal(second, 1);
  f.guard.destroy();
});
