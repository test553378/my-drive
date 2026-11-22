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
    element.setAttribute?.("data-pointer-control", "");
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
// game touch defaults are cancelled before Safari can zoom. Pointer Events
// retain held-input ownership and activate click-based controls exactly once.
export function installGameGestures(
  root,
  { onInterrupt = () => {}, mode = "play", isSurface = () => true } = {},
) {
  const view = root.ownerDocument.defaultView;
  const menu = mode === "menu",
    activeClass = menu ? "menu-gestures-active" : "game-gestures-active";
  const listeners = [],
    recent = [],
    pointerTaps = new Map(),
    completedTaps = new Map();
  let forwardingClick = false;
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
  const inside = (e) => root.contains(e.target) && isSurface(e.target);
  const button = (e) => !!e.target.closest?.(interactive);
  const tapButton = (e) => {
    const element = e.target.closest?.("button");
    return element &&
      !element.disabled &&
      !element.hasAttribute?.("data-pointer-control") &&
      typeof element.click === "function"
      ? element
      : null;
  };
  const reset = () => {
    tap = lastTap = null;
    lastTouch = -Infinity;
    pointerTaps.clear();
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
      if (!active || !inside(e)) return;
      if (e.pointerType !== "touch") {
        if (e.pointerType === "mouse") {
          lastTouch = -Infinity;
          completedTaps.delete(e.target.closest?.("button"));
        }
        return;
      }
      lastTouch = now();
      const element = tapButton(e);
      if (element)
        pointerTaps.set(e.pointerId, {
          element,
          x: e.clientX,
          y: e.clientY,
          moved: false,
        });
      for (const [element, at] of completedTaps)
        if (now() - at > 1000) completedTaps.delete(element);
    },
    { passive: true, capture: true },
  );
  listen(
    root,
    "pointermove",
    (e) => {
      const owned = pointerTaps.get(e.pointerId);
      if (owned && Math.hypot(e.clientX - owned.x, e.clientY - owned.y) > 24)
        owned.moved = true;
    },
    { passive: true },
  );
  listen(
    root,
    "pointerup",
    (e) => {
      const owned = pointerTaps.get(e.pointerId);
      pointerTaps.delete(e.pointerId);
      if (
        !active ||
        !inside(e) ||
        !owned ||
        owned.moved ||
        owned.element.disabled
      )
        return;
      const rect = owned.element.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      )
        return;
      // Cancelling Touch Events can remove Safari's compatibility click. Invoke
      // the existing handler from trusted pointerup; block any later ghost click.
      completedTaps.set(owned.element, now());
      if (completedTaps.size > 16)
        completedTaps.delete(completedTaps.keys().next().value);
      record("pointer-tap", e);
      forwardingClick = true;
      try {
        owned.element.click();
      } finally {
        forwardingClick = false;
      }
    },
    { passive: true },
  );
  listen(view, "pointerup", (e) => pointerTaps.delete(e.pointerId), {
    passive: true,
  });
  listen(root, "lostpointercapture", (e) => pointerTaps.delete(e.pointerId), {
    passive: true,
  });
  listen(
    root,
    "click",
    (e) => {
      if (forwardingClick || !inside(e)) return;
      const element = e.target.closest?.("button"),
        at = completedTaps.get(element);
      const fromTouch =
        e.pointerType === "touch" || (!e.pointerType && e.detail > 0);
      if (
        fromTouch &&
        ((active && now() - lastTouch < 1000) ||
          (at !== undefined && now() - at < 1000))
      ) {
        if (e.cancelable) e.preventDefault();
        e.stopImmediatePropagation();
        record("compatibility-click-blocked", e);
      }
    },
    { capture: true, passive: false },
  );
  listen(
    root,
    "pointercancel",
    (e) => {
      pointerTaps.delete(e.pointerId);
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
      // Racing has no native pan/zoom. Menus retain single-finger vertical
      // scrolling, but a second contact cannot start browser pinch zoom.
      if (e.cancelable && (!menu || e.touches.length > 1)) e.preventDefault();
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
    { passive: false, capture: true },
  );
  listen(
    root,
    "touchmove",
    (e) => {
      if (
        active &&
        inside(e) &&
        e.cancelable &&
        (!menu || e.touches.length > 1)
      )
        e.preventDefault();
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
    { passive: false },
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
      if (e.cancelable) e.preventDefault();
      const blank = tap.blank;
      lastTap = current;
      tap = null;
      record(
        double
          ? blank
            ? "blank-double-tap"
            : "control-double-tap"
          : "touchend",
        e,
      );
    },
    { passive: false },
  );
  listen(
    root,
    "touchcancel",
    (e) => {
      tap = lastTap = null;
      // Pointer cancellation owns one contact. Do not discard another
      // finger's pending button tap while that finger is still on the screen.
      if (e.touches.length === 0) pointerTaps.clear();
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
      if (!menu && active && inside(e) && e.cancelable) e.preventDefault();
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
      root.classList.toggle(activeClass, active);
      record("policy-change");
    },
    snapshot: () => ({
      active,
      policy: menu ? "menu-double-tap" : "active-play-surface",
      pinchZoomAllowed: false,
      zoomObservedDuringPlay: sawZoom,
      viewport: readViewport(),
      recent: recent.map((e) => ({ ...e })),
    }),
    destroy() {
      interrupt("destroy");
      active = false;
      completedTaps.clear();
      root.classList.remove(activeClass);
      listeners.forEach((remove) => remove());
    },
  };
}
