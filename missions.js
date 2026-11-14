import {
  roadGraph,
  raceRoadGraph,
  roadKind,
  edgePose,
  navigateRoad,
} from "./roads.js";
import { vehicle } from "./vehicle-config.js";
import { seededRandom } from "./hazards.js";
export const MISSION_KINDS = { 5: "police", 6: "ambulance", 7: "fire" };
export const WORK_STAGES = new Set([
  "AUTO_STOP",
  "FIRE_ACTION",
  "PATIENT_WAIT",
  "BOARDING",
  "HANDOFF",
  "SUSPECT_STOPPING",
  "SUSPECT_STOPPED",
  "POLICE_CHECK",
  "SUCCESS",
]);
export const isWorking = (s) =>
  !!s.missions?.active && WORK_STAGES.has(s.missions.active.stage);
const labels = {
  fire: "かじだ！ げんばへ むかおう",
  ambulance: "ひとを たすけよう",
  police: "にげる くるまを おいかけよう",
};
export function initMissions(s) {
  const kind = MISSION_KINDS[s.model];
  if (!kind) {
    s.missions = null;
    s.road = null;
    s.ledger = null;
    s.heroClear = false;
    s.onMain = true;
    return;
  }
  const g = roadGraph(s.courseId),
    rng = seededRandom(s.seed + 8001),
    pool = [...g.sites],
    plan = [];
  for (let lap = 0; lap < 2; lap++) {
    const site = pool.splice(Math.floor(rng() * pool.length), 1)[0],
      spec = vehicle(s.model),
      lead = spec.top * 3 + spec.top ** 2 / (2 * spec.brake) + 35 + rng() * 30;
    plan.push({
      id: `${s.courseId}-${kind}-${lap}-${site.index}`,
      lap,
      kind,
      site: site.index,
      dispatchAt: Math.max(25, site.gate - lead),
      fireCount: rng() > 0.5 ? 3 : 2,
      hospital: Math.floor(rng() * g.hospitals.length),
      escapeStart: rng() * g.edges["loop-" + site.index].length,
    });
  }
  s.missions = { plan, active: null, completed: [], notice: null, serial: 0 };
  s.road = { edge: "main-0", d: 0, direction: 1, turnTimer: 0 };
  s.onMain = true;
  s.ledger = { laps: 0, next: 1, blocked: 0 };
  s.heroClear = false;
}
export function missionNotice(s, text) {
  s.missions.notice = { id: ++s.missions.serial, text };
}
export function clearMissionInput(s, pointer) {
  const m = s.missions?.active;
  if (m && (pointer === undefined || m.pointer === pointer)) {
    m.pointer = null;
    m.holding = -1;
  }
}
export function holdFire(s, index, pointer) {
  const m = s.missions?.active;
  if (
    s.phase !== "race" ||
    m?.stage !== "FIRE_ACTION" ||
    m.fires[index] === undefined ||
    m.fires[index] <= 0 ||
    m.pointer !== null
  )
    return false;
  m.pointer = pointer;
  m.holding = index;
  return true;
}
export function interactMission(s) {
  const m = s.missions?.active;
  if (s.phase !== "race" || !m) return false;
  if (m.stage === "PATIENT_WAIT") {
    m.stage = "BOARDING";
    m.animation = 0;
    return true;
  }
  if (m.stage === "SUSPECT_STOPPED") {
    m.stage = "POLICE_CHECK";
    m.animation = 0;
    return true;
  }
  return false;
}
export function missionTarget(s) {
  const m = s.missions?.active;
  if (
    !m ||
    m.kind !== roadKind(s.model) ||
    s.phase === "menu" ||
    s.phase === "finish"
  )
    return null;
  const g = raceRoadGraph(s),
    site = g.sites.find((site) => site.index === m.site);
  if (m.stage === "RETURN_TO_TRACK" || m.stage === "DONE") {
    const currentSite =
      g.sites.find((site) => site.index === g.edges[s.road.edge]?.site) || site;
    const edge = Object.values(g.edges).find(
      (e) => e.main && e.from === currentSite.merge,
    );
    return { edge: edge.id, d: 12, direction: 1, label: "ほんせんへ もどろう" };
  }
  if (
    m.stage === "DRIVE_TO_HOSPITAL" ||
    m.stage === "HANDOFF" ||
    (m.stage === "AUTO_STOP" && m.stopRole === "hospital")
  )
    return { ...g.hospitals.find((h) => h.index === m.hospital) };
  if (m.kind === "police")
    return {
      edge: "loop-" + m.site,
      d: m.suspect.d,
      label:
        m.stage === "CHASE_LOOP"
          ? "サイレンで つかまえよう"
          : "にげる くるまを おおう",
    };
  return {
    ...site.scene,
    label: m.kind === "fire" ? "かじの げんば" : "たすける ひと",
  };
}
export function missionNavigation(s) {
  const m = s.missions?.active;
  if (
    !m ||
    m.kind !== roadKind(s.model) ||
    s.phase === "menu" ||
    s.phase === "finish"
  )
    return null;
  if (m?.stage === "CHASE_LOOP" && s.road.edge === "loop-" + m.site) {
    const e = raceRoadGraph(s).edges[s.road.edge];
    return {
      uTurn: s.road.direction < 0,
      turn: "straight",
      remaining: e.length - s.road.d,
      cost: 0,
      target: edgePose(e, m.suspect.d),
      path: [],
    };
  }
  if (m?.stage === "RETURN_TO_TRACK" && s.onMain) {
    const e = raceRoadGraph(s).edges[s.road.edge];
    return {
      uTurn: s.road.direction < 0,
      turn: "straight",
      remaining: Infinity,
      cost: 12 - (s.road.joinedTravel || 0),
      target: edgePose(e, Math.min(e.length, s.road.d + 20)),
      path: [],
    };
  }
  return navigateRoad(s, missionTarget(s));
}
export function dispatchMission(s, station) {
  const ms = s.missions;
  if (!ms || ms.active || s.ledger.laps >= 2 || !s.onMain) return false;
  const p = ms.plan[s.ledger.laps];
  if (ms.completed.includes(p.id) || station < p.dispatchAt) return false;
  ms.active = {
    ...p,
    stage: "DRIVE_TO_SCENE",
    animation: 0,
    holding: -1,
    pointer: null,
    fires: Array(p.fireCount).fill(2.5),
    patientOnboard: false,
    suspect: {
      d: p.escapeStart,
      speed: vehicle(s.model).top * 0.75,
      stopped: false,
      offset: 0,
    },
    celebration: 0,
  };
  s.siren = p.kind !== "police";
  missionNotice(s, labels[p.kind]);
  return true;
}
export function completeMission(s) {
  const ms = s.missions,
    m = ms.active;
  if (ms.completed.includes(m.id)) return;
  ms.completed.push(m.id);
  m.stage = "SUCCESS";
  m.celebration = 1.1;
  m.holding = -1;
  m.pointer = null;
  s.siren = false;
  missionNotice(
    s,
    m.kind === "ambulance"
      ? "びょういんに とどけたね！"
      : "おしごと せいこう！",
  );
}
export function tickMission(s, dt) {
  const ms = s.missions,
    m = ms?.active;
  if (!m) return;
  if (m.kind === "police" && !m.suspect.stopped) {
    if (m.stage === "SUSPECT_STOPPING")
      m.suspect.speed = Math.max(
        0,
        m.suspect.speed - vehicle(s.model).brake * dt,
      );
    const e = raceRoadGraph(s).edges["loop-" + m.site];
    m.suspect.d = (m.suspect.d + m.suspect.speed * dt) % e.length;
    if (m.stage === "SUSPECT_STOPPING" && m.suspect.speed === 0)
      m.suspect.stopped = true;
  }
  if (
    m.stage === "DRIVE_TO_SCENE" &&
    s.road.edge === "loop-" + m.site &&
    m.kind === "police"
  )
    m.stage = "CHASE_LOOP";
  if (m.stage === "CHASE_LOOP" && s.siren && s.road.edge === "loop-" + m.site) {
    const e = raceRoadGraph(s).edges[s.road.edge],
      p = edgePose(e, s.road.d, s.offset, s.road.direction),
      q = edgePose(e, m.suspect.d),
      gap = Math.abs(s.road.d - m.suspect.d);
    if (
      Math.min(gap, e.length - gap) < 11 &&
      Math.hypot(p.x - q.x, p.z - q.z) < 10
    ) {
      m.stage = "SUSPECT_STOPPING";
      // Only after capture, physically pull into separated stopping lanes.
      m.parkingSide = Math.sign(s.offset * s.road.direction) || -1;
      s.boost = 0;
    }
  }
  if (m.stage === "SUSPECT_STOPPING") {
    const blend = 1 - Math.exp(-dt * 4),
      old = m.suspect.offset;
    m.suspect.offset += (-m.parkingSide * 2.1 - m.suspect.offset) * blend;
    m.suspect.motionSteer = (m.suspect.offset - old) / Math.max(dt, 0.001);
    s.offset += (m.parkingSide * 2.1 * s.road.direction - s.offset) * blend;
  }
  if (
    m.stage === "SUSPECT_STOPPING" &&
    m.suspect.stopped &&
    s.v < 0.05 &&
    Math.abs(s.offset * s.road.direction - m.parkingSide * 2.1) < 0.08 &&
    Math.abs(m.suspect.offset + m.parkingSide * 2.1) < 0.08
  ) {
    m.stage = "SUSPECT_STOPPED";
    m.animation = 0;
  }
  if (m.stage === "FIRE_ACTION" && m.holding >= 0) {
    m.fires[m.holding] = Math.max(0, m.fires[m.holding] - dt);
    if (!m.fires[m.holding]) clearMissionInput(s);
    if (m.fires.every((f) => f === 0)) completeMission(s);
  }
  if (["BOARDING", "HANDOFF", "POLICE_CHECK"].includes(m.stage)) {
    m.animation += dt;
    if (m.animation >= 5) {
      if (m.stage === "BOARDING") {
        m.patientOnboard = true;
        m.stage = "DRIVE_TO_HOSPITAL";
        missionNotice(s, "びょういんへ はこぼう");
      } else {
        if (m.stage === "HANDOFF") m.patientOnboard = false;
        completeMission(s);
      }
    }
  }
  if (m.stage === "SUCCESS") {
    m.celebration = Math.max(0, m.celebration - dt);
    if (m.celebration === 0) {
      m.stage = "RETURN_TO_TRACK";
      missionNotice(s, "やじるしを みて ほんせんへ");
    }
  }
  if (m.stage === "DONE") {
    ms.active = null;
    missionNotice(s, "ほんせんに もどったよ！");
  }
}
export function autoStopTarget(s) {
  const m = s.missions?.active;
  if (
    !m ||
    !["DRIVE_TO_SCENE", "DRIVE_TO_HOSPITAL", "AUTO_STOP"].includes(m.stage) ||
    m.kind === "police"
  )
    return null;
  const target = missionTarget(s),
    e = raceRoadGraph(s).edges[s.road.edge];
  if (target.edge !== e.id) return null;
  let delta = (target.d - s.road.d) * s.road.direction;
  if (e.closed) delta = ((delta % e.length) + e.length) % e.length;
  if (delta < Math.max(20, (s.v * s.v) / (2 * vehicle(s.model).brake) + 8)) {
    if (m.stage !== "AUTO_STOP")
      m.stopRole = m.stage === "DRIVE_TO_HOSPITAL" ? "hospital" : "scene";
    m.stage = "AUTO_STOP";
    return delta;
  }
  return null;
}
export function arriveMission(s) {
  const m = s.missions?.active;
  if (m?.stage !== "AUTO_STOP") return;
  s.v = 0;
  s.steerV = 0;
  s.steerL = s.steerR = false;
  clearMissionInput(s);
  m.stage =
    m.stopRole === "hospital"
      ? "HANDOFF"
      : m.kind === "fire"
        ? "FIRE_ACTION"
        : "PATIENT_WAIT";
  m.animation = 0;
}
