import { createAI, tickRivals, curveTarget } from "./rival-ai.js";
import { DAMAGE } from "./race-config.js";
import {
  initCondition,
  hasPuncture,
  tickCondition,
  applyImpact,
  repairArea,
  inPit,
  enterRepair,
} from "./damage.js";
import { createObstacles } from "./hazards.js";
import {
  createPedestrians,
  tickPedestrians,
  contactPedestrian,
  pedestrianStop,
} from "./pedestrians.js";
import { sweptContact } from "./collisions.js";
import { raceRank } from "./race-metrics.js";
// Pure simulation: longitudinal route distance, metres, seconds and radians.
import { normalizeParts } from "./garage.js";
import { vehicle } from "./vehicle-config.js";
import { getTrack, trackPose } from "./tracks.js";
export const LAP = 1400,
  TOTAL = LAP * 2,
  ROAD = 9.7,
  EDGE = ROAD - 1.75,
  TAU = Math.PI * 2,
  WHEEL_RADIUS = 0.43;
export const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
export const center = (z) => trackPose("C01", z).x;
export const slope = (z) => {
  const p = trackPose("C01", z);
  return p.tx / (p.tz || 1e-6);
};
export const laneWorldX = (z, offset) => trackPose("C01", z, offset).x;
export function createRivals(
  model = 0,
  difficulty = "normal",
  courseId = "C01",
) {
  return createAI(model, difficulty, courseId);
}
export function createRace(
  color = 0,
  model = 0,
  parts = {},
  courseId = "C01",
  seed = 12345,
  aiDifficulty = "normal",
) {
  const track = getTrack(courseId),
    p = trackPose(track, 0);
  const s = {
    phase: "menu",
    z: 0,
    offset: 0,
    v: 0,
    steerL: false,
    steerR: false,
    steerV: 0,
    motionSteer: 0,
    boost: 0,
    charge: 100,
    time: 0,
    lap: 1,
    rank: 5,
    color,
    model,
    parts: normalizeParts(parts),
    courseId: track.id,
    aiDifficulty,
    brake: false,
    siren: false,
    fallTimer: 0,
    prev: 0,
    roll: 0,
    pitch: 0,
    camX: p.x,
    camZ: p.z,
    camH: 3.45,
    cameraOffset: 0,
    hit: -20,
    count: 3.2,
    wheelAngle: 0,
    bounce: 0,
    checkpointsPassed: 0,
    nextCheckpoint: track.length / 8,
    outTime: 0,
    recoverTimer: 0,
  };
  initCondition(s);
  s.seed = seed;
  s.obstacles = createObstacles(track.id, seed);
  s.pedestrians = createPedestrians(track.id, seed);
  return s;
}
export function activateBoost(s) {
  if (
    s.phase !== "race" ||
    s.charge < 60 ||
    s.boost > 0 ||
    s.brake ||
    hasPuncture(s) ||
    s.repairTimer > 0 ||
    s.stopTimer > 0 ||
    s.fallTimer > 0
  )
    return false;
  s.charge = 0;
  s.boost = 2.55;
  return true;
}
function progress(s, track, travel) {
  const previous = s.z,
    next = Math.min(previous + travel, track.length * 2),
    interval = track.length / track.checkpointCount;
  if (previous > s.nextCheckpoint + 3) {
    s.z = Math.max(0, s.nextCheckpoint - 0.2);
    s.offset = 0;
    s.v *= 0.5;
    return "recovered";
  }
  s.z = next;
  while (
    s.nextCheckpoint <= next + 0.00001 &&
    s.nextCheckpoint >= previous - 0.00001
  ) {
    if (
      Math.abs(s.offset) > track.halfWidth + 0.5 &&
      !inPit(track, s.nextCheckpoint, s.offset)
    ) {
      s.z = s.nextCheckpoint - 0.2;
      s.offset = 0;
      s.v *= 0.5;
      return "recovered";
    }
    s.checkpointsPassed++;
    s.nextCheckpoint += interval;
  }
  return null;
}
export function advance(s, rivals, seconds) {
  const dt = clamp(Number.isFinite(seconds) ? seconds : 0, 0, 0.05),
    track = getTrack(s.courseId),
    spec = vehicle(s.model);
  if (s.phase === "countdown") {
    s.count -= dt;
    if (s.count <= -0.26) s.phase = "race";
    return null;
  }
  if (s.phase !== "race") return null;
  const previousDistance = s.z,
    previousOffset = s.offset;
  s.time += dt;
  s.boost = Math.max(0, s.boost - dt);
  s.charge = Math.min(100, s.charge + dt * 12);
  s.recoverTimer = Math.max(0, s.recoverTimer - dt);
  let event = tickCondition(s, dt);
  event = tickPedestrians(s, dt) || event;
  if (spec.kind === "bike" && Math.abs(s.roll) > 0.65 && s.fallTimer <= 0)
    s.fallTimer = 0.9;
  let fallen = s.fallTimer > 0;
  if (fallen) {
    s.fallTimer = Math.max(0, s.fallTimer - dt);
    s.roll *= Math.exp(-dt * 5);
    if (s.fallTimer === 0) {
      s.roll = 0;
      fallen = false;
      event = "bike-recovered";
    }
  }
  const forced = s.stopTimer > 0 || s.repairTimer > 0 || fallen;
  const p = trackPose(track, s.z),
    dir = Number(s.steerR) - Number(s.steerL),
    previousSpeed = s.v,
    punctured = hasPuncture(s),
    pit = repairArea(track, s.z);
  if (forced) {
    s.v = 0;
    s.steerV = 0;
    s.motionSteer = 0;
    if (s.repairTimer > 0) s.wheelAngle = (s.wheelAngle + dt * 3) % TAU;
  } else {
    const pavedPit = inPit(track, s.z, s.offset),
      offroad = Math.abs(s.offset) > track.halfWidth - 0.5 && !pavedPit;
    let target =
      spec.top * (1 - clamp(p.grade, -0.15, 0.25) * 0.55) +
      (s.boost > 0 ? 18 : 0);
    for (let ahead = 0; ahead <= (s.v * s.v) / (2 * spec.brake); ahead += 8) {
      const corner = curveTarget(track, s.z + ahead, spec.top, 38);
      target = Math.min(
        target,
        Math.sqrt(corner * corner + 2 * spec.brake * ahead) +
          (s.boost > 0 ? 8 : 0),
      );
    }
    if (punctured) target = Math.min(target, spec.top * DAMAGE.topFactor);
    if (offroad) target *= 0.55;
    if (s.brake) target = 0;
    if (s.brake) s.v = Math.max(0, s.v - spec.brake * dt);
    else
      s.v +=
        (target - s.v) *
        (1 - Math.exp(-dt * spec.accel * (punctured ? DAMAGE.accelFactor : 1)));
    const targetSteer =
      dir *
      spec.turn *
      (0.5 + (s.v / spec.top) * 0.5) *
      (punctured ? DAMAGE.handlingFactor : 1);
    // Releasing/cancelling all steering stops lateral travel immediately.
    // Following a curved route must preserve the lane-relative offset too.
    s.steerV = dir
      ? s.steerV + (targetSteer - s.steerV) * (1 - Math.exp(-dt * 10))
      : 0;
    s.offset +=
      (s.steerV + (punctured ? s.damageSide * DAMAGE.drift : 0)) *
      dt *
      Math.min(1, s.v / 6);
    const guide =
      punctured && s.pitAssist && pit && pit.delta < DAMAGE.repairLead;
    if (!dir && guide && s.v > 0) {
      const inside = Math.min(EDGE, track.halfWidth - 1.6),
        mix = clamp((40 - pit.delta) / 30, 0, 1),
        goal = inside + (pit.offset - inside) * mix;
      s.offset += clamp(
        (goal - s.offset) * (1 - Math.exp(-dt * 2.6)),
        -spec.turn * dt * 1.1,
        spec.turn * dt * 1.1,
      );
    }
    if (s.pitExit && !dir && s.v > 0) {
      s.offset *= Math.exp(-dt * 3);
      if (Math.abs(s.offset) < 0.5) s.pitExit = false;
    }
    const expanded =
      (punctured && pit && pit.delta < 45 && pit.delta > -26) ||
      pavedPit ||
      s.pitExit ||
      s.repairTimer > 0;
    const limit =
      track.difficulty === 1 && !expanded ? EDGE : track.halfWidth + 4.5;
    s.offset = clamp(s.offset, -limit, limit);
    s.outTime =
      Math.abs(s.offset) > track.halfWidth + 1 &&
      !inPit(track, s.z, s.offset) &&
      !s.pitExit
        ? s.outTime + dt
        : 0;
    if (s.outTime > 0.85) {
      s.offset = 0;
      s.v *= 0.5;
      s.outTime = 0;
      s.recoverTimer = 0.6;
      event = "recovered";
    }
    const factor = clamp(1 + p.curvature * s.offset, 0.8, 1.25),
      travel = Math.min((s.v * dt) / factor, track.length * 2 - s.z);
    event = progress(s, track, travel) || event;
    s.wheelAngle = (s.wheelAngle + (travel * factor) / spec.radius) % TAU;
    s.motionSteer = dt
      ? clamp((s.offset - previousOffset) / dt, -spec.turn, spec.turn)
      : 0;
    s.roll += (-s.motionSteer * 0.013 - s.roll) * (1 - Math.exp(-dt * 7));
    const acceleration = dt > 0 ? (s.v - previousSpeed) / dt : 0;
    s.pitch +=
      (clamp(-acceleration * 0.0025, -0.06, 0.045) - s.pitch) *
      (1 - Math.exp(-dt * 7));
    s.bounce = Math.sin(s.z * 0.85) * Math.min(0.018, s.v * 0.0004);
    for (const object of s.obstacles) {
      if (object.hit) continue;
      const contact = sweptContact(
        previousDistance,
        s.z,
        s.offset,
        s.model,
        object,
      );
      if (contact) {
        object.hit = true;
        const impact = s.v * contact.strength * object.severity;
        s.v *= 0.8;
        event = applyImpact(s, object, impact);
        s.hit = s.time;
      }
    }
    event = contactPedestrian(s, previousDistance) || event;
    if (enterRepair(s, track)) event = "repair-start";
  }
  tickRivals(s, rivals, dt);
  for (const r of rivals) {
    const gap =
      ((((r.z - s.z + track.length / 2) % track.length) + track.length) %
        track.length) -
      track.length / 2;
    if (
      !forced &&
      Math.abs(gap) < (spec.length + 4.86) * 0.4 &&
      Math.abs(r.l - s.offset) < spec.width / 2 + 1.05 &&
      s.time - s.hit > 2 &&
      r.finishTime === undefined
    ) {
      s.hit = s.time;
      s.v *= 0.8;
      s.offset = clamp(
        s.offset + (s.offset > r.l ? 0.4 : -0.4),
        -track.halfWidth - 4,
        track.halfWidth + 4,
      );
      event = "contact";
    }
  }
  s.lap = Math.min(2, 1 + Math.floor(s.z / track.length));
  s.rank = raceRank(s, rivals);
  if (
    s.z >= track.length * 2 &&
    s.checkpointsPassed >= track.checkpointCount * 2
  ) {
    s.phase = "finish";
    s.steerL = s.steerR = false;
    s.rank = raceRank(s, rivals);
    return "finish";
  }
  return event;
}
