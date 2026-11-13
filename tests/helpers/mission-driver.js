import { advance, createRace, createRivals } from "../../driving.js";
import {
  missionNavigation,
  holdFire,
  interactMission,
} from "../../missions.js";
import { requestUTurn, roadGraph, wrap } from "../../roads.js";
import { getTrack } from "../../tracks.js";
export function onMain(s, z) {
  s.z = z;
  if (!s.road) return;
  const g = roadGraph(s.courseId),
    station = wrap(z, getTrack(s.courseId).length),
    e = Object.values(g.edges).find(
      (e) => e.main && station >= e.station && station < e.station + e.length,
    );
  Object.assign(s.road, {
    edge: e.id,
    d: station - e.station,
    direction: 1,
    turnTimer: 0,
  });
  s.onMain = true;
}
export function driveStep(
  s,
  rivals,
  i = 0,
  { siren = true, actions = true } = {},
) {
  const m = s.missions.active;
  if (
    siren &&
    m?.kind === "police" &&
    ["DRIVE_TO_SCENE", "CHASE_LOOP"].includes(m.stage)
  )
    s.siren = true;
  if (actions && m?.stage === "FIRE_ACTION" && m.pointer === null) {
    const f = m.fires.findIndex((n) => n > 0);
    if (f >= 0) holdFire(s, f, 1);
  }
  if (
    actions &&
    (m?.stage === "PATIENT_WAIT" || m?.stage === "SUSPECT_STOPPED")
  )
    interactMission(s);
  if (i % 2 === 0) {
    const nav = missionNavigation(s);
    s.steerL = s.steerR = false;
    if (nav?.uTurn) requestUTurn(s);
    else if (nav && nav.remaining < 28) {
      s.steerL = nav.turn === "left";
      s.steerR = nav.turn === "right";
    }
  }
  return advance(s, rivals, 0.05);
}
export function driveUntil(s, rivals, predicate, options = {}) {
  for (let i = 0; i < 40000 && !predicate(s); i++)
    driveStep(s, rivals, i, options);
  return s;
}
export function missionRace(model, course, seed = 12345) {
  const s = createRace(0, model, {}, course, seed),
    rivals = createRivals(model, "normal", course);
  s.phase = "race";
  driveUntil(s, rivals, (s) => s.phase === "finish");
  return { s, rivals };
}
