import test from "node:test";
import assert from "node:assert/strict";
import { createRace, advance, activateBoost } from "../driving.js";
import { VEHICLES, wheelLayout } from "../vehicle-config.js";
import { TRACKS, getTrack } from "../tracks.js";
import { DAMAGE, SAFETY } from "../race-config.js";
import { applyImpact, repairArea } from "../damage.js";
import { sweptContact } from "../collisions.js";
import { createObstacles } from "../hazards.js";
import { createPedestrians } from "../pedestrians.js";
import { raceRank } from "../race-metrics.js";
function at(s, d) {
  const t = getTrack(s.courseId);
  s.z = d;
  s.checkpointsPassed = Math.floor(d / (t.length / 8));
  s.nextCheckpoint = ((s.checkpointsPassed + 1) * t.length) / 8;
}
test("swept collision catches fast travel and light contact cannot puncture", () => {
  const s = createRace();
  s.v = 40;
  const o = { distance: 8, offset: 0, radius: 0.7 };
  assert.ok(sweptContact(0, 12, 0, 0, o));
  assert.equal(sweptContact(0, 12, 5, 0, o), null);
  assert.equal(applyImpact(s, o, DAMAGE.impactThreshold - 0.01), "contact");
  assert.ok(s.flatMask.every((v) => !v));
});
test("all eight models damage the nearest wheel, including either motorcycle wheel", () => {
  for (let model = 0; model < 8; model++)
    for (let index = 0; index < wheelLayout(model).length; index++) {
      const s = createRace(0, model);
      s.phase = "race";
      at(s, 100);
      s.v = 40;
      const w = wheelLayout(model)[index];
      assert.equal(
        applyImpact(s, { distance: 100 + w.z, offset: -w.x }, 40),
        "puncture",
      );
      assert.equal(s.flatMask.filter(Boolean).length, 1);
      assert.equal(s.flatMask[index], true);
      assert.equal(activateBoost(s), false);
      assert.ok(s.v <= VEHICLES[model].top * 0.6);
    }
});
test("puncture caps speed, slows acceleration and keeps the vehicle controllable", () => {
  const s = createRace();
  s.phase = "race";
  at(s, 200);
  s.v = 40;
  applyImpact(s, { distance: 201.47, offset: -0.965 }, 40);
  s.pitAssist = false;
  s.obstacles = [];
  s.steerR = true;
  for (let i = 0; i < 80; i++) advance(s, [], 0.05);
  assert.ok(s.v <= 44 * 0.6 + 0.001);
  assert.ok(s.v > 0);
  assert.ok(s.offset > 0);
  assert.equal(s.boost, 0);
});
test("repair is automatic inside the pit, lasts about three seconds and restores performance", () => {
  const s = createRace();
  s.phase = "race";
  const track = getTrack("C01"),
    pit = repairArea(track, 100);
  at(s, pit.center - 18);
  s.offset = pit.offset;
  s.v = 10;
  s.flatMask[0] = true;
  s.flatVisual[0] = 1;
  advance(s, [], 0.05);
  assert.equal(s.repairTimer, 3);
  assert.equal(s.v, 0);
  const z = s.z;
  for (let i = 0; i < 59; i++) advance(s, [], 0.05);
  assert.ok(s.flatMask[0]);
  assert.equal(s.z, z);
  for (let i = 0; i < 3; i++) advance(s, [], 0.05);
  assert.ok(s.flatMask.every((v) => !v));
  assert.equal(s.repairTimer, 0);
  for (let i = 0; i < 160; i++) advance(s, [], 0.05);
  assert.ok(s.v > 43);
  assert.ok(Math.abs(s.offset) < 1);
});
test("a punctured motorcycle recovers upright without becoming undriveable", () => {
  const s = createRace(0, 4);
  s.phase = "race";
  at(s, 100);
  s.v = 35;
  applyImpact(s, { distance: 100.83, offset: 0 }, 35);
  s.obstacles = [];
  assert.ok(s.fallTimer > 0);
  for (let i = 0; i < 24; i++) advance(s, [], 0.05);
  assert.equal(s.fallTimer, 0);
  assert.ok(Math.abs(s.roll) < 0.1);
  assert.ok(s.v > 0);
  assert.equal(s.phase, "race");
});
test("obstacle placements leave a clear centre corridor even for a wide bus", () => {
  for (const t of TRACKS)
    for (let seed = 0; seed < 12; seed++)
      for (const o of createObstacles(t.id, seed)) {
        assert.ok(Math.abs(o.offset) - o.radius > VEHICLES[3].width / 2 + 0.5);
      }
});
test("pedestrians are exclusive to city crossings, seeded and warned before entering", () => {
  for (const t of TRACKS)
    assert.equal(createPedestrians(t.id).length, t.id === "C03" ? 6 : 0);
  assert.deepEqual(createPedestrians("C03", 3), createPedestrians("C03", 3));
  assert.notDeepEqual(createPedestrians("C03", 3), createPedestrians("C03", 4));
  const s = createRace(0, 0, {}, "C03");
  s.phase = "race";
  s.obstacles = [];
  s.v = 44;
  let warned = false;
  for (let i = 0; i < 300; i++) {
    advance(s, [], 0.05);
    const p = s.pedestrians.find((p) => p.phase === "warning");
    if (p) {
      warned = true;
      assert.ok(p.distance - s.z > 44 * SAFETY.minimumReactionSeconds);
      break;
    }
  }
  assert.ok(warned);
});
test("pedestrian contact applies one ten-second penalty and a three-second stop, with no injury motion", () => {
  const s = createRace(0, 0, {}, "C03");
  s.phase = "race";
  s.v = 20;
  s.obstacles = [];
  s.pedestrians = [
    {
      id: "test",
      distance: 1,
      offset: 0,
      radius: 0.3,
      phase: "crossing",
      elapsed: 0,
      side: 1,
      hit: false,
    },
  ];
  // Keep the walker centred in the contact footprint on this tick.
  s.pedestrians[0].elapsed =
    (getTrack("C03").halfWidth + 2) / SAFETY.pedestrianSpeed;
  advance(s, [], 0.05);
  assert.equal(s.penaltyTime, 10);
  assert.equal(s.stopTimer, 3);
  assert.equal(s.v, 0);
  assert.equal(s.pedestrians[0].phase, "safe");
  assert.ok(Math.abs(s.pedestrians[0].offset) > getTrack("C03").halfWidth);
  const z = s.z;
  for (let i = 0; i < 58; i++) advance(s, [], 0.05);
  assert.equal(s.z, z);
  assert.equal(s.penaltyTime, 10);
  for (let i = 0; i < 5; i++) advance(s, [], 0.05);
  assert.ok(s.v > 0);
  assert.equal(s.penaltyTime, 10);
});
test("waiting with the brake does not penalise the driver and contact cannot improve final rank", () => {
  const s = createRace(0, 0, {}, "C03");
  s.phase = "race";
  s.brake = true;
  s.steerR = true;
  s.offset = 3;
  s.obstacles = [];
  s.pedestrians = [
    {
      id: "wait",
      distance: 10,
      offset: 0,
      phase: "crossing",
      elapsed: 0,
      side: 1,
      hit: false,
    },
  ];
  for (let i = 0; i < 150; i++) advance(s, [], 0.05);
  assert.equal(s.penaltyTime, 0);
  assert.equal(s.z, 0);
  assert.equal(s.offset, 3);
  s.phase = "finish";
  s.time = 80;
  s.z = 3000;
  const rivals = [{ z: 2900, v: 30, speed: 30 }];
  assert.equal(raceRank(s, rivals), 1);
  s.penaltyTime = 10;
  assert.equal(raceRank(s, rivals), 2);
});

test("repair guidance reaches the next pit for every vehicle on every course", () => {
  for (const track of TRACKS)
    for (const [model, spec] of VEHICLES.entries()) {
      const s = createRace(0, model, {}, track.id);
      s.phase = "race";
      s.obstacles = [];
      s.pedestrians = [];
      s.z = track.length * 0.28;
      s.checkpointsPassed = 2;
      s.nextCheckpoint = (track.length * 3) / 8;
      s.v = spec.top;
      applyImpact(s, { distance: s.z + 1, offset: -4 }, 40);
      let entered = false,
        repaired = false;
      for (let i = 0; i < 1200; i++) {
        advance(s, [], 0.05);
        if (s.repairTimer > 0) entered = true;
        if (entered && !s.flatMask.some(Boolean)) {
          repaired = true;
          break;
        }
      }
      assert.ok(
        repaired,
        `${spec.name} ${track.id} must reach and complete repair`,
      );
    }
});
