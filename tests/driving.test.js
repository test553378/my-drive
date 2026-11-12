import test from "node:test";
import assert from "node:assert/strict";
import { TRACKS } from "../tracks.js";
import { VEHICLES } from "../vehicle-config.js";
import {
  createRace,
  createRivals,
  advance,
  activateBoost,
  EDGE,
  TOTAL,
  LAP,
  center,
  slope,
  WHEEL_RADIUS,
} from "../driving.js";

function run(state, seconds, rivals = createRivals(), dt = 1 / 60) {
  for (let i = 0; i < Math.round(seconds / dt); i++) advance(state, rivals, dt);
  return rivals;
}

test("a child can finish both laps without steering or turbo", () => {
  const s = createRace();
  s.phase = "countdown";
  run(s, 85);
  assert.equal(s.phase, "finish");
  assert.equal(s.z, TOTAL);
  assert.equal(s.lap, 2);
  assert.ok(s.rank >= 1 && s.rank <= 5);
  assert.ok(s.time < 75);
  assert.ok(Math.abs(s.offset) <= EDGE);
});
test("holding either arrow for a full race keeps the entire car inside the road", () => {
  for (const direction of ["steerL", "steerR"]) {
    const s = createRace();
    const rivals = createRivals();
    s.phase = "race";
    s[direction] = true;
    for (let i = 0; i < 6000; i++) {
      advance(s, rivals, 1 / 60);
      assert.ok(Math.abs(s.offset) <= EDGE);
      assert.ok(s.v >= 0);
    }
    assert.equal(s.phase, "finish");
  }
});
test("releasing and opposing arrows stop lateral travel and hold the current offset", () => {
  const s = createRace();
  s.phase = "race";
  s.steerR = true;
  run(s, 4, []);
  assert.ok(s.offset > 5);
  s.steerR = false;
  const before = s.offset;
  run(s, 12, []);
  assert.equal(s.offset, before);
  assert.equal(s.steerV, 0);
  s.steerL = s.steerR = true;
  run(s, 5, []);
  assert.equal(s.offset, before);
});
test("turbo is optional, finite, cannot stack, and recharges", () => {
  const s = createRace();
  assert.equal(activateBoost(s), false);
  s.phase = "race";
  assert.equal(activateBoost(s), true);
  assert.equal(activateBoost(s), false);
  run(s, 2, []);
  assert.ok(s.v > 44);
  run(s, 4, []);
  assert.equal(s.boost, 0);
  assert.ok(s.charge >= 60);
  assert.equal(activateBoost(s), true);
});
test("pause freezes countdown, distance, race time, wheels and rivals", () => {
  const s = createRace();
  s.phase = "race";
  const rivals = run(s, 3);
  s.phase = "pause";
  const before = structuredClone({ s, rivals });
  run(s, 10, rivals);
  assert.deepEqual({ s, rivals }, before);
});
test("contact slows gently with a cooldown, and never ends a race", () => {
  const s = createRace();
  s.phase = "race";
  s.v = 44;
  const rivals = [{ z: 0.1, v: 44, l: 0, wheelAngle: 0 }];
  assert.equal(advance(s, rivals, 1 / 60), "contact");
  assert.ok(s.v > 34);
  assert.equal(s.phase, "race");
  assert.equal(advance(s, rivals, 1 / 60), null);
});
test("wheel travel follows distance, does not reverse or jump when turbo expires", () => {
  const s = createRace();
  s.phase = "race";
  s.v = 20;
  advance(s, [], 0.05);
  const expected = (s.z / WHEEL_RADIUS) % (Math.PI * 2);
  assert.ok(Math.abs(s.wheelAngle - expected) < 1e-10);
});
test("simulation remains comparable at 30 and 60 frames per second", () => {
  const a = createRace(),
    b = createRace();
  a.phase = b.phase = "race";
  a.steerL = b.steerL = true;
  run(a, 30, [], 1 / 30);
  run(b, 30, [], 1 / 60);
  assert.ok(Math.abs(a.z - b.z) < 1);
  assert.ok(Math.abs(a.v - b.v) < 0.01);
  assert.ok(Math.abs(a.offset - b.offset) < 0.01);
});
test("background-sized time gaps cannot teleport the car", () => {
  const s = createRace();
  s.phase = "race";
  s.v = 44;
  advance(s, [], 3600);
  assert.ok(s.z <= 2.21);
  assert.equal(s.time, 0.05);
  advance(s, [], NaN);
  advance(s, [], -100);
  assert.ok(Number.isFinite(s.z));
});
test("track position and heading stay continuous across both lap seams", () => {
  for (const z of [0, LAP, TOTAL]) {
    assert.ok(Math.abs(center(z - 0.001) - center(z + 0.001)) < 0.001);
    assert.ok(Math.abs(slope(z - 0.001) - slope(z + 0.001)) < 0.001);
  }
  assert.ok(Math.abs(center(0) - center(LAP)) < 1e-10);
});

test("all 32 vehicle/course pairs hold their lane for more than ten seconds, including bends", () => {
  for (const track of TRACKS)
    for (let model = 0; model < VEHICLES.length; model++) {
      const s = createRace(0, model, {}, track.id);
      s.phase = "race";
      s.offset = 2;
      s.v = 20;
      s.obstacles = [];
      s.pedestrians = [];
      run(s, 12, []);
      assert.equal(s.offset, 2, `${track.id}/${model}`);
      s.steerR = true;
      run(s, 0.4, []);
      s.steerR = false;
      const offset = s.offset;
      advance(s, [], 0.05);
      assert.equal(s.offset, offset);
      assert.equal(s.steerV, 0);
    }
});
