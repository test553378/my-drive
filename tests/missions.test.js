import test from "node:test";
import assert from "node:assert/strict";
import {
  createRace,
  createRivals,
  advance,
  activateBoost,
} from "../driving.js";
import {
  roadGraph,
  edgePose,
  playerPose,
  requestUTurn,
  mainStation,
  graphMap,
} from "../roads.js";
import {
  holdFire,
  clearMissionInput,
  interactMission,
  isWorking,
} from "../missions.js";
import { TRACKS, getTrack } from "../tracks.js";
import { vehicle } from "../vehicle-config.js";
import {
  onMain,
  driveUntil,
  driveStep,
  missionRace,
} from "./helpers/mission-driver.js";
const near = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
test("T03/T17: every course has three real connected service loops and two reachable distinct hospitals", () => {
  for (const t of TRACKS) {
    const g = roadGraph(t.id);
    assert.equal(g.sites.length, 3);
    assert.equal(g.hospitals.length, 2);
    for (const e of Object.values(g.edges)) {
      assert.ok(e.length > 20);
      const a = edgePose(e, 0),
        b = edgePose(e, e.length);
      assert.ok(near(a, g.nodes[e.from]) < 0.03, e.id);
      assert.ok(near(b, g.nodes[e.to]) < 0.03, e.id);
      for (let d = 0; d < e.length; d += 5)
        assert.ok(Object.values(edgePose(e, d)).every(Number.isFinite));
    }
    for (const h of g.hospitals) assert.ok(g.edges[h.edge] && h.d > 0);
  }
});
test("T01/T02/T13/T17: all 3 vehicles × 4 courses × 5 seeds complete two real missions and two checked laps", () => {
  for (const model of [5, 6, 7])
    for (const track of TRACKS)
      for (const seed of [1, 17, 42, 12345, 98765]) {
        const initial = createRace(0, model, {}, track.id, seed),
          again = createRace(0, model, {}, track.id, seed);
        assert.deepEqual(initial.missions.plan, again.missions.plan);
        assert.notEqual(
          initial.missions.plan[0].site,
          initial.missions.plan[1].site,
        );
        for (const p of initial.missions.plan)
          assert.ok(
            roadGraph(track.id).sites[p.site].gate - p.dispatchAt >
              vehicle(model).top * 2,
          );
        const { s } = missionRace(model, track.id, seed);
        assert.equal(
          s.phase,
          "finish",
          `${model}/${track.id}/${seed}: ${s.missions.active?.stage}`,
        );
        assert.equal(s.missions.completed.length, 2);
        assert.equal(s.checkpointsPassed, 16);
        assert.equal(s.ledger.laps, 2);
        assert.equal(s.heroClear, true);
        assert.equal(s.z, track.length * 2);
      }
});
test("T04: a U-turn keeps world position fixed, changes the real travel direction and rejects double activation", () => {
  const s = createRace(0, 7);
  s.phase = "race";
  assert.equal(requestUTurn(s), false);
  driveUntil(s, [], (s) => !!s.missions.active, { actions: false });
  const p = playerPose(s),
    d = mainStation(s);
  assert.equal(requestUTurn(s), true);
  assert.equal(requestUTurn(s), false);
  for (let i = 0; i < 14; i++) advance(s, [], 0.05);
  assert.equal(s.road.direction, -1);
  assert.ok(near(p, playerPose(s)) < 0.01);
  for (let i = 0; i < 30; i++) advance(s, [], 0.05);
  assert.ok(mainStation(s) < d);
  for (const model of [0, 1, 2, 3, 4])
    assert.equal(requestUTurn(createRace(0, model)), false);
});
test("T05/T06: missed missions hold the lap, do not redraw the job, and can be recovered by real driving", () => {
  const s = createRace(0, 7),
    r = createRivals(7);
  s.phase = "race";
  for (let i = 0; i < 6000; i++) advance(s, r, 0.05);
  assert.equal(s.ledger.laps, 0);
  assert.ok(s.ledger.blocked >= 2);
  assert.equal(s.phase, "race");
  const id = s.missions.active.id;
  assert.ok(r.every((r) => r.finishTime !== undefined));
  driveUntil(s, r, (s) => s.phase === "finish");
  assert.equal(s.phase, "finish");
  assert.equal(s.missions.completed[0], id);
  assert.equal(s.heroClear, true);
});
test("T07/T11/T15: fire progress is cumulative, one finger owns the hose, pauses freeze work and rivals run during work", () => {
  const s = createRace(0, 7),
    r = createRivals(7);
  s.phase = "race";
  driveUntil(s, r, (s) => s.missions.active?.stage === "FIRE_ACTION", {
    actions: false,
  });
  const m = s.missions.active,
    clock = s.time,
    z = r[0].z;
  assert.equal(isWorking(s), true);
  assert.equal(activateBoost(s), false);
  assert.equal(holdFire(s, 0, 11), true);
  assert.equal(holdFire(s, 1, 12), false);
  for (let i = 0; i < 20; i++) advance(s, r, 0.05);
  const left = m.fires[0];
  assert.ok(left < 2.5 && left > 0);
  clearMissionInput(s, 12);
  assert.equal(m.pointer, 11);
  clearMissionInput(s, 11);
  for (let i = 0; i < 10; i++) advance(s, r, 0.05);
  assert.equal(m.fires[0], left);
  assert.ok(s.time > clock);
  assert.ok(r[0].z > z);
  s.phase = "pause";
  advance(s, r, 1);
  assert.equal(m.fires[0], left);
  s.phase = "race";
  assert.equal(holdFire(s, 0, 13), true);
  for (let i = 0; i < 50; i++) advance(s, r, 0.05);
  assert.equal(m.fires[0], 0);
  assert.equal(s.missions.completed.length, 0);
  driveUntil(s, r, (s) => s.phase === "finish");
  assert.equal(s.heroClear, true);
});
test("T08/T11: boarding is not success; hospital handoff is automatic and only counts after its animation", () => {
  const s = createRace(0, 6),
    r = createRivals(6);
  s.phase = "race";
  driveUntil(s, r, (s) => s.missions.active?.stage === "PATIENT_WAIT", {
    actions: false,
  });
  assert.equal(s.missions.completed.length, 0);
  assert.equal(interactMission(s), true);
  assert.equal(interactMission(s), false);
  for (let i = 0; i < 105; i++) advance(s, r, 0.05);
  assert.equal(s.missions.active.patientOnboard, true);
  assert.equal(s.missions.completed.length, 0);
  driveUntil(s, r, (s) => s.missions.active?.stage === "HANDOFF", {
    actions: false,
  });
  assert.equal(s.missions.completed.length, 0);
  for (let i = 0; i < 105; i++) advance(s, r, 0.05);
  assert.equal(s.missions.completed.length, 1);
  assert.equal(s.siren, false);
  assert.equal(s.missions.active.patientOnboard, false);
});
test("T09/T10: police pursuit has no positional assistance, requires siren, and waits for the officer check", () => {
  const s = createRace(0, 5),
    r = createRivals(5);
  s.phase = "race";
  driveUntil(s, r, (s) => s.missions.active?.stage === "CHASE_LOOP", {
    actions: false,
    siren: false,
  });
  const m = s.missions.active,
    e = roadGraph(s.courseId).edges["loop-" + m.site];
  assert.equal(s.siren, false);
  for (let i = 0; i < 400; i++) {
    const before = m.suspect.d;
    driveStep(s, r, i, { actions: false, siren: false });
    const movement = (m.suspect.d - before + e.length) % e.length;
    assert.ok(Math.abs(movement - vehicle(5).top * 0.75 * 0.05) < 1e-6);
  }
  assert.equal(m.stage, "CHASE_LOOP");
  s.mute = true;
  s.siren = true;
  driveUntil(s, r, (s) => s.missions.active?.stage === "SUSPECT_STOPPED", {
    actions: false,
  });
  assert.equal(s.missions.completed.length, 0);
  assert.equal(interactMission(s), true);
  assert.equal(interactMission(s), false);
  for (let i = 0; i < 105; i++) advance(s, r, 0.05);
  assert.equal(s.missions.completed.length, 1);
  assert.equal(s.siren, false);
});
test("T14: ordinary vehicles keep ordinary two-lap races without work or U-turn controls", () => {
  for (const model of [0, 1, 2, 3, 4])
    assert.equal(createRace(0, model).missions, null);
});

test("T05: reversing and oscillating over the line cannot award checkpoints or a second dispatch", () => {
  const s = createRace(0, 7);
  s.phase = "race";
  driveUntil(s, [], (s) => !!s.missions.active, { actions: false });
  const id = s.missions.active.id,
    cp = s.checkpointsPassed;
  assert.equal(requestUTurn(s), true);
  for (let i = 0; i < 2000; i++) advance(s, [], 0.05);
  assert.equal(s.ledger.laps, 0);
  assert.equal(s.checkpointsPassed, cp);
  assert.equal(s.missions.active.id, id);
  assert.equal(s.missions.completed.length, 0);
});
test("T02/T08: seeds vary candidates, dispatch times, flame counts and both hospitals", () => {
  for (const t of TRACKS) {
    const all = Array.from(
      { length: 24 },
      (_, i) => createRace(0, 6, {}, t.id, i).missions.plan,
    ).flat();
    assert.equal(new Set(all.map((p) => p.hospital)).size, 2);
    assert.equal(new Set(all.map((p) => p.site)).size, 3);
    assert.ok(new Set(all.map((p) => p.dispatchAt)).size > 10);
    assert.equal(new Set(all.map((p) => p.fireCount)).size, 2);
  }
});
test("T14: a new ordinary race clears emergency progress and hero status when reusing the UI state", () => {
  const previous = missionRace(7, "C01").s;
  Object.assign(previous, createRace(0, 0));
  assert.equal(previous.missions, null);
  assert.equal(previous.ledger, null);
  assert.equal(previous.heroClear, false);
  assert.equal(previous.onMain, true);
});

test("T16: every branch and hospital has a finite minimap projection", () => {
  for (const t of TRACKS) {
    const g = roadGraph(t.id),
      map = graphMap(g);
    assert.ok(map.main.startsWith("M"));
    assert.ok(map.branches.length > 500);
    assert.equal(/NaN|Infinity/.test(map.main + map.branches), false);
    for (const h of g.hospitals)
      assert.ok(
        Object.values(map.project(edgePose(g.edges[h.edge], h.d))).every(
          Number.isFinite,
        ),
      );
  }
});

// Fixtures select a physical starting point only in pure tests; browser tests drive the real controls.
test("T12/T14: emergency pedestrians impose the same ten-second penalty and keep walking off the main road", () => {
  const s = createRace(0, 7, {}, "C03", 42);
  s.phase = "race";
  const ped = s.pedestrians.find((p) => p.enabled);
  onMain(s, ped.distance - 2);
  s.v = 20;
  Object.assign(ped, {
    phase: "crossing",
    offset: 0,
    elapsed: (getTrack(s.courseId).halfWidth + 2) / 3.2,
  });
  advance(s, [], 0.05);
  assert.equal(s.penaltyTime, 10);
  assert.ok(s.stopTimer > 0);
  assert.equal(s.v, 0);
  const other = s.pedestrians.find((p) => p !== ped);
  Object.assign(other, { phase: "warning", elapsed: 0, delay: 0 });
  s.road.edge = "access-0";
  s.road.d = 60;
  s.onMain = false;
  advance(s, [], 0.05);
  assert.ok(other.elapsed > 0);
});
