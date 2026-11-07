import { vehicle, wheelLayout } from "./vehicle-config.js";
export function sweptContact(previous, next, offset, model, object) {
  const s = vehicle(model),
    radius = object.radius || 0.3;
  if (
    object.distance < Math.min(previous, next) - s.length / 2 - radius ||
    object.distance > Math.max(previous, next) + s.length / 2 + radius
  )
    return null;
  const overlap = s.width / 2 + radius - Math.abs(offset - object.offset);
  if (overlap <= 0) return null;
  return {
    strength: Math.max(
      0.05,
      Math.min(1, overlap / Math.min(s.width, radius * 2)),
    ),
  };
}
export function nearestWheel(state, object) {
  const wheels = wheelLayout(state.model, state.parts.body);
  let best = 0,
    min = Infinity;
  wheels.forEach((w, i) => {
    const d =
      (state.z + w.z - object.distance) ** 2 +
      (state.offset - w.x - object.offset) ** 2;
    if (d < min) {
      min = d;
      best = i;
    }
  });
  return best;
}
