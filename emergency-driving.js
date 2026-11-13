import { getTrack } from "./tracks.js";
import { vehicle } from "./vehicle-config.js";
import {
  roadGraph,
  edgePose,
  mainStation,
  moveRoad,
  tickUTurn,
} from "./roads.js";
import {
  tickMission,
  dispatchMission,
  autoStopTarget,
  arriveMission,
  isWorking,
} from "./missions.js";
import {
  hasPuncture,
  tickCondition,
  applyImpact,
  enterRepair,
  repairArea,
  inPit,
} from "./damage.js";
import { tickPedestrians, contactPedestrian } from "./pedestrians.js";
import { sweptContact } from "./collisions.js";
import { tickRivals } from "./rival-ai.js";
import { raceRank } from "./race-metrics.js";
import { DAMAGE } from "./race-config.js";
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
function ledgerMove(s, edge, from, to, direction) {
  if (direction < 0) return;
  const t = getTrack(s.courseId),
    l = s.ledger,
    interval = t.length / 8,
    a = edge.station + from,
    b = edge.station + to;
  while (
    l.next < 8 &&
    a < l.next * interval + 1e-7 &&
    b >= l.next * interval - 1e-7
  )
    l.next++;
  if (b >= t.length - 1e-7 && a < t.length - 1e-7) {
    const done = s.missions.completed.includes(s.missions.plan[l.laps]?.id);
    if (l.next === 8 && done) {
      l.laps++;
      l.next = 1;
      s.z = l.laps * t.length;
    } else l.blocked++;
  } else if (l.laps < 2)
    s.z = Math.max(
      s.z,
      l.laps * t.length + Math.min(b, l.next * interval - 0.001),
    );
  s.checkpointsPassed = l.laps * 8 + l.next - 1;
}
function onPhysicalMain(s, fn) {
  if (!s.onMain) return null;
  const z = s.z,
    offset = s.offset;
  s.z = s.ledger.laps * getTrack(s.courseId).length + mainStation(s);
  s.offset *= s.road.direction;
  const result = fn();
  s.z = z;
  s.offset = offset;
  return result;
}
export function advanceEmergency(s, rivals, seconds) {
  const dt = clamp(Number.isFinite(seconds) ? seconds : 0, 0, 0.05),
    track = getTrack(s.courseId),
    spec = vehicle(s.model);
  if (s.phase === "countdown") {
    s.count -= dt;
    if (s.count <= -0.26) s.phase = "race";
    return null;
  }
  if (s.phase !== "race") return null;
  const oldStation = mainStation(s),
    oldSpeed = s.v,
    oldOffset = s.offset,
    oldRoad = s.road.edge;
  s.time += dt;
  s.boost = Math.max(0, s.boost - dt);
  s.charge = Math.min(100, s.charge + dt * 12);
  let event = tickCondition(s, dt);
  if (s.onMain)
    onPhysicalMain(s, () => {
      event = tickPedestrians(s, dt) || event;
    });
  else event = tickPedestrians(s, dt, { activate: false }) || event;
  if (s.onMain && s.road.direction === 1 && dispatchMission(s, oldStation))
    event = "mission-dispatch";
  tickMission(s, dt);
  const turning = tickUTurn(s, dt),
    edge = roadGraph(s.courseId).edges[s.road.edge],
    pose = edgePose(edge, s.road.d, 0, s.road.direction),
    working = isWorking(s),
    delta = autoStopTarget(s);
  const forceStop = s.stopTimer > 0 || s.repairTimer > 0 || turning;
  let target =
    spec.top * (1 - clamp(pose.grade, -0.15, 0.25) * 0.55) +
    (s.boost > 0 ? 18 : 0);
  for (
    let ahead = 0;
    ahead < Math.max(25, (s.v * s.v) / (2 * spec.brake));
    ahead += 8
  ) {
    const p = edgePose(edge, s.road.d + ahead * s.road.direction);
    target = Math.min(
      target,
      Math.sqrt(38 / Math.max(0.00001, Math.abs(p.curvature))) +
        (s.boost > 0 ? 8 : 0),
    );
  }
  if (hasPuncture(s)) target = Math.min(target, spec.top * DAMAGE.topFactor);
  if (delta !== null)
    target = Math.min(
      target,
      Math.sqrt(2 * spec.brake * Math.max(0, delta - 3)),
    );
  if (
    s.brake ||
    forceStop ||
    (working && s.missions.active.stage !== "AUTO_STOP")
  )
    target = 0;
  if (forceStop) s.v = 0;
  else if (target < s.v)
    s.v = Math.max(
      target,
      s.v -
        spec.brake *
          dt *
          (s.missions.active?.stage === "SUSPECT_STOPPING" ? 1.5 : 1),
    );
  else
    s.v +=
      (target - s.v) *
      (1 -
        Math.exp(-dt * spec.accel * (hasPuncture(s) ? DAMAGE.accelFactor : 1)));
  if (!working && !turning && !forceStop) {
    const dir = Number(s.steerR) - Number(s.steerL),
      want =
        dir *
        spec.turn *
        (0.5 + (s.v / spec.top) * 0.5) *
        (hasPuncture(s) ? DAMAGE.handlingFactor : 1);
    s.steerV = dir
      ? s.steerV + (want - s.steerV) * (1 - Math.exp(-dt * 10))
      : 0;
    s.offset +=
      (s.steerV + (hasPuncture(s) ? s.damageSide * DAMAGE.drift : 0)) *
      dt *
      Math.min(1, s.v / 6);
    const physical = s.ledger.laps * track.length + (mainStation(s) || 0),
      pit = s.onMain ? repairArea(track, physical) : null;
    if (
      hasPuncture(s) &&
      s.pitAssist &&
      pit &&
      pit.delta < DAMAGE.repairLead &&
      !dir &&
      s.road.direction === 1
    ) {
      const inside = Math.min(7.95, track.halfWidth - 1.6),
        blend = clamp((40 - pit.delta) / 30, 0, 1),
        goal = inside + (pit.offset - inside) * blend;
      s.offset += clamp(
        (goal - s.offset) * (1 - Math.exp(-dt * 2.6)),
        -spec.turn * dt * 1.1,
        spec.turn * dt * 1.1,
      );
    }
    if (s.pitExit && !dir && s.onMain) {
      s.offset *= Math.exp(-dt * 3);
      if (Math.abs(s.offset) < 0.5) s.pitExit = false;
    }
    const expanded =
      s.onMain &&
      ((hasPuncture(s) && pit && pit.delta < 45 && pit.delta > -26) ||
        inPit(track, physical, s.offset) ||
        s.pitExit);
    const limit = expanded
      ? track.halfWidth + 4.5
      : edge.width - spec.width / 2 - 0.35;
    s.offset = clamp(s.offset, -limit, limit);
  } else {
    s.steerV = 0;
    s.steerL = s.steerR = false;
  }
  // Steering chooses a connected edge at an intersection; no destination warp.
  if (!turning && s.v > 0)
    moveRoad(s, s.v * dt, (...args) => ledgerMove(s, ...args));
  if (
    s.onMain &&
    s.road.direction === 1 &&
    s.missions.active?.stage === "RETURN_TO_TRACK"
  ) {
    s.road.joinedTravel = (s.road.joinedTravel || 0) + s.v * dt;
    if (s.road.joinedTravel >= 12) s.missions.active.stage = "DONE";
  }
  if (delta !== null && delta < 3.5 && s.v < 0.5) arriveMission(s);
  s.motionSteer = working
    ? 0
    : clamp(
        (s.offset - oldOffset) / Math.max(dt, 0.001),
        -spec.turn,
        spec.turn,
      );
  s.roll += (-s.motionSteer * 0.013 - s.roll) * (1 - Math.exp(-dt * 7));
  s.pitch +=
    (clamp((-(s.v - oldSpeed) / Math.max(dt, 0.001)) * 0.0025, -0.06, 0.045) -
      s.pitch) *
    (1 - Math.exp(-dt * 7));
  s.wheelAngle = (s.wheelAngle + (s.v * dt) / spec.radius) % (Math.PI * 2);
  s.bounce = Math.sin(s.road.d * 0.85) * Math.min(0.018, s.v * 0.0004);
  if (s.onMain && oldRoad === s.road.edge)
    onPhysicalMain(s, () => {
      const previous =
        s.ledger.laps * track.length + (oldStation ?? mainStation(s));
      for (const object of s.obstacles) {
        if (object.hit) continue;
        const c = sweptContact(previous, s.z, s.offset, s.model, object);
        if (c) {
          object.hit = true;
          event = applyImpact(s, object, s.v * c.strength * object.severity);
          s.v *= 0.8;
        }
      }
      event = contactPedestrian(s, previous) || event;
      if (enterRepair(s, track)) event = "repair-start";
    });
  const physicalZ = s.onMain
    ? s.ledger.laps * track.length + mainStation(s)
    : s.z;
  tickRivals(
    { ...s, z: physicalZ, offset: s.offset * s.road.direction },
    rivals,
    dt,
  );
  if (s.onMain && !working)
    for (const r of rivals) {
      const gap =
        ((r.z - physicalZ + track.length * 1.5) % track.length) -
        track.length / 2;
      if (
        Math.abs(gap) < (spec.length + 4.86) * 0.4 &&
        Math.abs(r.l - s.offset * s.road.direction) < spec.width / 2 + 1.05 &&
        s.time - s.hit > 2 &&
        r.finishTime === undefined
      ) {
        s.hit = s.time;
        s.v *= 0.8;
        event = "contact";
      }
    }
  s.lap = Math.min(2, s.ledger.laps + 1);
  s.rank = raceRank(s, rivals);
  if (s.ledger.laps === 2 && s.missions.completed.length === 2) {
    s.heroClear = true;
    s.phase = "finish";
    s.z = track.length * 2;
    s.steerL = s.steerR = false;
    s.rank = raceRank(s, rivals);
    return "finish";
  }
  return event;
}
