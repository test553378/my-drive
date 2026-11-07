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
export function installGameGestures(root) {
  let lastTouch = -Infinity;
  const target = (e) => e.target.closest?.("canvas,button,[data-game-surface]");
  root.addEventListener(
    "pointerdown",
    (e) => {
      if (e.pointerType === "touch" && target(e)) lastTouch = performance.now();
    },
    { passive: true },
  );
  // A fallback only for touch-generated double clicks within game controls.
  // No touchend suppression: all individual taps, multi-touch and scrolling remain intact.
  root.addEventListener("dblclick", (e) => {
    if (target(e) && performance.now() - lastTouch < 900) e.preventDefault();
  });
  root.addEventListener("contextmenu", (e) => {
    if (target(e) && !e.target.closest("textarea")) e.preventDefault();
  });
}
