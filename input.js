// Pointer ownership prevents one finger from releasing a different held input.
export function createInput(state, allowed = () => state.phase === "race") {
  const held = new Map(),
    keys = new Set(),
    elements = new Map();
  function sync(field) {
    state[field] = keys.has(field) || [...held.values()].includes(field);
    elements.get(field)?.classList.toggle("is-down", state[field]);
  }
  function bind(element, field) {
    elements.set(field, element);
    element.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (!allowed()) return;
      held.set(e.pointerId, field);
      sync(field);
      try {
        element.setPointerCapture(e.pointerId);
      } catch {}
    });
    const release = (e) => {
      const owned = held.get(e.pointerId);
      held.delete(e.pointerId);
      if (owned) sync(owned);
    };
    for (const event of ["pointerup", "pointercancel", "lostpointercapture"])
      element.addEventListener(event, release);
  }
  function key(field, down) {
    if (down && allowed()) keys.add(field);
    else keys.delete(field);
    sync(field);
  }
  function clear() {
    const fields = new Set([...elements.keys(), ...keys, ...held.values()]);
    held.clear();
    keys.clear();
    for (const field of fields) sync(field);
  }
  return { bind, key, clear };
}
// Safari decides native gestures from touch-action at contact start. The
// touchend fallback only cancels a second short tap on a non-interactive area;
// buttons retain native click activation and Pointer Events retain ownership.
export function installGameGestures(root, { onInterrupt = () => {} } = {}) {
  const view = root.ownerDocument.defaultView;
  const listeners = [],
    recent = [];
  const interactive =
    "button,a,input,textarea,select,summary,[role=button],[contenteditable]";
  let active = false,
    tap = null,
    lastTap = null,
    lastTouch = -Infinity;
  let sawZoom = false;
  const readViewport = () => ({
    scale: view.visualViewport?.scale ?? 1,
    width: view.visualViewport?.width ?? view.innerWidth,
    height: view.visualViewport?.height ?? view.innerHeight,
  });
  let previousViewport = readViewport();
  const now = () => view.performance.now();
  const inside = (e) => root.contains(e.target);
  const button = (e) => !!e.target.closest?.(interactive);
  const reset = () => {
    tap = lastTap = null;
    lastTouch = -Infinity;
  };
  function record(type, e, detail = {}) {
    recent.push({
      atMs: Math.round(now()),
      type,
      active,
      target: e?.target?.id || e?.target?.tagName || "viewport",
      touches: e?.touches?.length ?? null,
      cancelable: !!e?.cancelable,
      prevented: !!e?.defaultPrevented,
      scale: readViewport().scale,
      ...detail,
    });
    if (recent.length > 32) recent.shift();
  }
  function listen(target, name, handler, options) {
    target?.addEventListener(name, handler, options);
    listeners.push(() => target?.removeEventListener(name, handler, options));
  }
  function interrupt(reason) {
    reset();
    if (active) {
      record("input-interrupted", null, { reason });
      onInterrupt(reason);
    }
  }
  listen(
    root,
    "pointerdown",
    (e) => {
      if (active && inside(e) && e.pointerType === "touch") lastTouch = now();
    },
    { passive: true },
  );
  listen(
    root,
    "pointercancel",
    (e) => {
      tap = lastTap = null;
      if (active) record("pointercancel", e);
    },
    { passive: true },
  );
  listen(
    root,
    "touchstart",
    (e) => {
      if (!active || !inside(e)) return;
      lastTouch = now();
      tap =
        e.touches.length === 1
          ? {
              at: now(),
              id: e.touches[0].identifier,
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
              blank: !button(e),
              moved: false,
            }
          : null;
      if (e.touches.length !== 1) lastTap = null;
      record("touchstart", e);
    },
    { passive: true },
  );
  listen(
    root,
    "touchmove",
    (e) => {
      if (!tap) return;
      const point = Array.from(e.touches).find((p) => p.identifier === tap.id);
      if (
        e.touches.length !== 1 ||
        !point ||
        Math.hypot(point.clientX - tap.x, point.clientY - tap.y) > 24
      ) {
        tap.moved = true;
        lastTap = null;
      }
    },
    { passive: true },
  );
  listen(
    root,
    "touchend",
    (e) => {
      if (!active || !inside(e)) {
        reset();
        return;
      }
      const point = Array.from(e.changedTouches).find(
        (p) => p.identifier === tap?.id,
      );
      if (
        !tap ||
        !point ||
        e.touches.length ||
        tap.moved ||
        !tap.blank ||
        button(e) ||
        now() - tap.at > 350
      ) {
        tap = lastTap = null;
        record("touchend", e);
        return;
      }
      const current = { at: now(), x: point.clientX, y: point.clientY };
      const double =
        lastTap &&
        current.at - lastTap.at <= 350 &&
        Math.hypot(current.x - lastTap.x, current.y - lastTap.y) <= 32;
      if (double && e.cancelable) e.preventDefault();
      lastTap = current;
      tap = null;
      record(double ? "blank-double-tap" : "touchend", e);
    },
    { passive: false },
  );
  listen(
    root,
    "touchcancel",
    (e) => {
      reset();
      if (active) record("touchcancel", e);
      if (active && e.touches.length === 0) onInterrupt("touchcancel");
    },
    { passive: true },
  );
  for (const name of ["gesturestart", "gesturechange", "gestureend"])
    listen(
      root,
      name,
      (e) => {
        if (!active || !inside(e)) return;
        tap = lastTap = null;
        if (e.cancelable) e.preventDefault();
        record(name, e);
      },
      { passive: false },
    );
  listen(
    root,
    "dblclick",
    (e) => {
      if (active && inside(e) && now() - lastTouch < 900) {
        if (e.cancelable) e.preventDefault();
        record("dblclick", e);
      }
    },
    false,
  );
  listen(
    root,
    "contextmenu",
    (e) => {
      if (active && inside(e) && e.cancelable) e.preventDefault();
    },
    false,
  );
  listen(view, "blur", () => interrupt("blur"), { passive: true });
  listen(view, "orientationchange", () => interrupt("orientationchange"), {
    passive: true,
  });
  listen(view, "resize", () => interrupt("resize"), { passive: true });
  listen(
    view.visualViewport,
    "resize",
    () => {
      const current = readViewport(),
        changed = Math.abs(current.scale - previousViewport.scale) > 0.01;
      if (changed && active) sawZoom = true;
      record(changed ? "viewport-scale-change" : "viewport-resize", null);
      if (active)
        interrupt(changed ? "viewport-scale-change" : "viewport-resize");
      previousViewport = current;
    },
    { passive: true },
  );
  return {
    setActive(value) {
      value = !!value;
      if (active === value) return;
      if (!value) interrupt("play-ended");
      active = value;
      reset();
      root.classList.toggle("game-gestures-active", active);
      record("policy-change");
    },
    snapshot: () => ({
      active,
      policy: "active-play-surface",
      zoomObservedDuringPlay: sawZoom,
      viewport: readViewport(),
      recent: recent.map((e) => ({ ...e })),
    }),
    destroy() {
      interrupt("destroy");
      active = false;
      root.classList.remove("game-gestures-active");
      listeners.forEach((remove) => remove());
    },
  };
}
