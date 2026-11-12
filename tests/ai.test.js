import test from "node:test";
import assert from "node:assert/strict";
import { createAI, tickRivals, AI_LEVELS, curveTarget } from "../rival-ai.js";
import { createRace, advance } from "../driving.js";
import { TRACKS, trackPose } from "../tracks.js";
import { vehicle } from "../vehicle-config.js";

function context(courseId = "C01") {
  const p = createRace(0, 0, {}, courseId);
  p.z = -1000;
  p.time = 0;
  p.obstacles = [];
  p.pedestrians = [];
  return p;
}
export function benchmark(courseId, difficulty) {
  const p = context(courseId),
    cars = createAI(0, difficulty, courseId);
  let passes = 0;
  for (
    let i = 0;
    i < 6000 && cars.some((r) => r.finishTime === undefined);
    i++
  ) {
    const positions = cars.map((r) => r.z),
      lanes = cars.map((r) => r.l);
    p.time += 0.05;
    tickRivals(p, cars, 0.05);
    for (let n = 0; n < cars.length; n++) {
      const r = cars[n];
      assert.ok(
        r.z - positions[n] <= (vehicle(r.model).top * 0.05) / 0.8 + 1e-6,
      );
      assert.ok(
        Math.abs(r.l - lanes[n]) <= AI_LEVELS[difficulty].lateral * 0.05 + 1e-6,
      );
      assert.ok(r.speed <= vehicle(r.model).top);
      assert.ok(
        Math.abs(r.l) <=
          TRACKS.find((t) => t.id === courseId).halfWidth -
            vehicle(r.model).width / 2,
      );
      if (r.overtaking) passes++;
    }
  }
  assert.ok(
    cars.every((r) => r.finishTime !== undefined),
    `${courseId}/${difficulty} finishes`,
  );
  return {
    times: cars.map((r) => Number((r.finishTime / 2).toFixed(2))),
    passes,
  };
}
test("all four circuits have repeatable two-lap AI runs, bounded motion and faster hard lap times", () => {
  for (const track of TRACKS) {
    const easy = benchmark(track.id, "easy"),
      normal = benchmark(track.id, "normal"),
      hard = benchmark(track.id, "hard");
    const mean = (x) => x.times.reduce((a, b) => a + b) / x.times.length;
    assert.ok(mean(hard) < mean(normal), track.id);
    assert.ok(mean(normal) < mean(easy), track.id);
  }
});
test("hard AI cannot be beaten by simply leaving the car on the centre line in C01", () => {
  const p = createRace(0, 0, {}, "C01", 12345, "hard"),
    cars = createAI(0, "hard");
  p.phase = "race";
  p.obstacles = [];
  for (let i = 0; i < 2400 && p.phase !== "finish"; i++) advance(p, cars, 0.05);
  assert.equal(p.phase, "finish");
  assert.ok(p.rank > 1);
});
test("AI previews sharp corners and accelerates with bounded rates rather than teleporting its speed", () => {
  const p = context("C02"),
    r = createAI(0, "normal", "C02")[0];
  r.speed = r.v = 40;
  let bend = 0;
  for (let d = 0; d < 1650; d += 5)
    if (Math.abs(trackPose("C02", d).curvature) > 0.05) {
      bend = d;
      break;
    }
  r.z = bend - 12;
  const old = r.speed;
  tickRivals(p, [r], 0.05);
  assert.ok(r.speed < old);
  assert.ok(old - r.speed <= vehicle(0).brake * 0.05 + 1e-6);
  assert.ok(curveTarget(TRACKS[1], bend, 44, 28) < 30);
});
test("an AI car plans an overtake and returns toward its racing line without jumping", () => {
  const p = context(),
    cars = createAI(0, "hard");
  cars.length = 2;
  Object.assign(cars[0], { z: 120, l: 0, speed: 38, v: 38 });
  Object.assign(cars[1], { z: 139, l: 0, speed: 10, v: 10 });
  tickRivals(p, cars, 0.05);
  assert.equal(cars[0].overtaking, true);
  assert.ok(Math.abs(cars[0].l) > 0);
  assert.ok(Math.abs(cars[0].l) < 0.3);
});
test("AI respects crossings and shares puncture, repair and pedestrian penalty rules", () => {
  const p = context("C03"),
    r = createAI(0, "hard", "C03")[0];
  Object.assign(r, { z: 100, l: 0, v: 20, speed: 20 });
  p.pedestrians = [{ phase: "warning", distance: 130, offset: 0, hit: false }];
  for (let i = 0; i < 120; i++) {
    p.time += 0.05;
    tickRivals(p, [r], 0.05);
  }
  assert.ok(r.z < 127);
  assert.equal(r.speed, 0);
  Object.assign(r, { z: 200, l: 0, v: 40, speed: 40 });
  p.pedestrians = [
    { phase: "crossing", distance: 202, offset: 0, hit: false, side: 1 },
  ];
  tickRivals(p, [r], 0.05);
  assert.equal(r.penaltyTime, 10);
  assert.equal(r.stopTimer, 3);
  r.stopTimer = 0;
  r.z = 300;
  r.l = 0;
  r.v = r.speed = 44;
  p.pedestrians = [];
  p.obstacles = [{ distance: 302, offset: 0, radius: 1, severity: 1 }];
  tickRivals(p, [r], 0.05);
  assert.ok(r.flatMask.some(Boolean));
  assert.ok(r.speed <= 26.4);
});
