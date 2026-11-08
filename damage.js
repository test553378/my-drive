import { DAMAGE } from "./race-config.js";
import { vehicle, wheelLayout } from "./vehicle-config.js";
import { nearestWheel } from "./collisions.js";
export const hasPuncture = (s) => s.flatMask.some(Boolean);
export function initCondition(s) {
  const n = wheelLayout(s.model).length;
  Object.assign(s, {
    flatMask: Array(n).fill(false),
    flatVisual: Array(n).fill(0),
    damageSide: 0,
    damageAge: 0,
    repairTimer: 0,
    repairProgress: 0,
    pitAssist: false,
    pitExit: false,
    stopTimer: 0,
    penaltyTime: 0,
  });
  return s;
}
export function repairArea(track, distance) {
  const lap = Math.floor(distance / track.length);
  let best;
  for (let n = lap; n <= lap + 1; n++)
    for (const fraction of track.repairFractions) {
      const center = (n + fraction) * track.length,
        delta = center - distance;
      if (delta >= -22 && (!best || delta < best.delta))
        best = { center, delta, offset: track.halfWidth + 2.5 };
    }
  return best;
}
export function inPit(track, distance, offset) {
  const p = repairArea(track, distance);
  return (
    !!p &&
    Math.abs(p.delta) <= 26 &&
    offset >= track.halfWidth - 0.5 &&
    offset <= track.halfWidth + 5
  );
}
export function applyImpact(s, object, impact, config = DAMAGE) {
  if (impact < config.impactThreshold) return "contact";
  const index = nearestWheel(s, object);
  if (s.flatMask[index]) return "contact";
  s.flatMask[index] = true;
  s.damageAge = 0;
  s.boost = 0;
  s.v = Math.min(s.v, vehicle(s.model).top * config.topFactor);
  s.pitAssist = true;
  const wheel = wheelLayout(s.model, s.parts.body)[index];
  s.damageSide = wheel.x < 0 ? 1 : wheel.x > 0 ? -1 : 0;
  if (vehicle(s.model).kind === "bike") {
    s.fallTimer = 0.9;
    s.roll = 0.8;
  }
  return "puncture";
}
export function tickCondition(s, dt, config = DAMAGE) {
  s.damageAge += dt;
  s.stopTimer = Math.max(0, s.stopTimer - dt);
  let event = null;
  if (s.repairTimer > 0) {
    s.repairTimer = Math.max(0, s.repairTimer - dt);
    s.repairProgress = 1 - s.repairTimer / config.repairSeconds;
    if (s.repairTimer === 0) {
      s.flatMask.fill(false);
      s.flatVisual.fill(0);
      s.damageSide = 0;
      s.pitAssist = false;
      s.pitExit = true;
      s.roll = 0;
      s.pitch = 0;
      event = "repaired";
    }
  }
  s.flatVisual = s.flatVisual.map((v, i) => {
    const target = s.flatMask[i]
      ? s.repairTimer > 0
        ? 1 - s.repairProgress
        : 1
      : 0;
    return v + (target - v) * Math.min(1, dt * 7);
  });
  return event;
}
export function enterRepair(s, track, config = DAMAGE) {
  const pit = repairArea(track, s.z);
  if (
    hasPuncture(s) &&
    s.repairTimer <= 0 &&
    pit &&
    Math.abs(pit.delta) <= 22 &&
    Math.abs(s.offset - pit.offset) < 1.6
  ) {
    s.repairTimer = config.repairSeconds;
    s.repairProgress = 0;
    s.v = 0;
    s.steerV = 0;
    s.boost = 0;
    return true;
  }
  return false;
}
