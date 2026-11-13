import { missionRace } from "./helpers/mission-driver.js";
import test from "node:test";
import assert from "node:assert/strict";
import { TRACKS, trackPose, pointAt, mapPath, cameraPose } from "../tracks.js";
import { createRace, advance, createRivals } from "../driving.js";
test("four distinct closed routes have continuous position, heading and finite grade at the lap seam", () => {
  assert.equal(TRACKS.length, 4);
  assert.equal(new Set(TRACKS.map(mapPath)).size, 4);
  for (const t of TRACKS) {
    const a = trackPose(t, -0.001),
      b = trackPose(t, 0.001);
    assert.ok(Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < 0.01);
    assert.ok(Math.hypot(a.tx - b.tx, a.tz - b.tz) < 0.01);
    assert.equal(pointAt(t, 0).x, pointAt(t, t.length).x);
    for (let d = 0; d < t.length; d += 7) {
      const p = trackPose(t, d),
        cam = cameraPose(t, d, 0);
      assert.ok(Object.values(p).every(Number.isFinite));
      assert.ok(cam.eye.every(Number.isFinite));
    }
  }
  assert.ok(TRACKS[1].bounds.maxY - TRACKS[1].bounds.minY > 40);
  assert.ok(TRACKS[1].tunnel);
  assert.equal(TRACKS[2].crossings.length, 3);
});
test("all 32 vehicle/course pairs can finish two real laps and pass all checkpoints", () => {
  for (const t of TRACKS)
    for (let model = 0; model < 8; model++) {
      if (model >= 5) {
        const { s } = missionRace(model, t.id);
        assert.equal(s.phase, "finish");
        assert.equal(s.heroClear, true);
        assert.equal(s.checkpointsPassed, 16);
        continue;
      }
      const s = createRace(0, model, {}, t.id);
      s.phase = "race";
      const rivals = createRivals(model);
      for (let i = 0; i < 16000 && s.phase === "race"; i++)
        advance(s, rivals, 0.05);
      assert.equal(s.phase, "finish", `${t.id}/${model}`);
      assert.equal(s.checkpointsPassed, 16);
      assert.equal(s.z, t.length * 2);
    }
});
test("teleporting past a checkpoint cannot award a lap or a finish", () => {
  const s = createRace();
  s.phase = "race";
  s.z = 2799;
  advance(s, [], 0.05);
  assert.notEqual(s.phase, "finish");
  assert.equal(s.checkpointsPassed, 0);
  assert.ok(s.z < 200);
});
test("large excursions on the harder courses return to the route safely", () => {
  const s = createRace(0, 0, {}, "C04");
  s.phase = "race";
  s.offset = 12;
  s.steerR = true;
  for (let i = 0; i < 30; i++) advance(s, [], 0.05);
  assert.ok(Math.abs(s.offset) < 10);
  assert.equal(s.phase, "race");
});
