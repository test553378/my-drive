import { getTrack } from "./tracks.js";
import { seededRandom } from "./hazards.js";
import { SAFETY } from "./race-config.js";
import { vehicle } from "./vehicle-config.js";
import { sweptContact } from "./collisions.js";
export function createPedestrians(courseId, seed = 12345) {
  const t = getTrack(courseId),
    rng = seededRandom(seed + 31),
    out = [];
  for (let lap = 0; lap < 2; lap++)
    t.crossings.forEach((f, i) =>
      out.push({
        id: `ped-${lap}-${i}`,
        distance: (lap + f) * t.length,
        side: rng() > 0.5 ? 1 : -1,
        delay: rng() * 0.6,
        enabled: rng() > 0.15,
        phase: "waiting",
        elapsed: 0,
        offset: 0,
        hit: false,
        rewarded: false,
      }),
    );
  return out;
}
export function tickPedestrians(s, dt, { activate = true } = {}) {
  const t = getTrack(s.courseId),
    spec = vehicle(s.model);
  let event = null;
  for (const p of s.pedestrians) {
    const delta = p.distance - s.z,
      minLead =
        s.v * SAFETY.minimumReactionSeconds +
        (s.v * s.v) / (2 * spec.brake) +
        12,
      lead = minLead + Math.max(55, s.v * 2.2);
    if (p.phase === "waiting") {
      if (!activate) continue;
      p.offset = p.side * (t.halfWidth + 2);
      if (!p.enabled) {
        p.phase = "skipped";
        continue;
      }
      if (delta < minLead) {
        p.phase = "skipped";
        continue;
      }
      if (delta < lead) {
        p.phase = "warning";
        p.elapsed = 0;
        event = "crossing-warning";
      }
    } else if (p.phase === "warning") {
      p.elapsed += dt;
      if (p.elapsed >= SAFETY.warningSeconds + p.delay) {
        p.phase = "crossing";
        p.elapsed = 0;
      }
    } else if (p.phase === "crossing") {
      p.elapsed += dt;
      const travel = p.elapsed * SAFETY.pedestrianSpeed;
      p.offset = p.side * (t.halfWidth + 2 - travel);
      if (travel > 2 * (t.halfWidth + 2)) {
        p.phase = "safe";
        p.offset = -p.side * (t.halfWidth + 3);
      }
    }
    if (p.phase === "safe" && !p.hit && !p.rewarded && s.z > p.distance + 8) {
      p.rewarded = true;
      event = "safe-crossing";
    }
  }
  return event;
}
export function contactPedestrian(s, previousDistance) {
  for (const p of s.pedestrians) {
    if (p.phase !== "crossing" || p.hit || s.v <= 0.5) continue;
    if (
      sweptContact(previousDistance, s.z, s.offset, s.model, {
        distance: p.distance,
        offset: p.offset,
        radius: 0.3,
      })
    ) {
      p.hit = true;
      p.phase = "safe";
      p.offset = -p.side * (getTrack(s.courseId).halfWidth + 3);
      s.penaltyTime += SAFETY.penaltySeconds;
      s.stopTimer = SAFETY.stopSeconds;
      s.v = 0;
      s.boost = 0;
      s.steerV = 0;
      return "pedestrian-contact";
    }
  }
  return null;
}
export function pedestrianStop(track, distance, pedestrians) {
  return pedestrians.some(
    (p) =>
      (p.phase === "warning" || p.phase === "crossing") &&
      p.distance - distance > 0 &&
      p.distance - distance < 12,
  );
}
