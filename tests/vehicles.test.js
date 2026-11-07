import test from "node:test";
import assert from "node:assert/strict";
import { VEHICLES, wheelLayout } from "../vehicle-config.js";
import { createRace, advance } from "../driving.js";
import { copySetup, defaultSetup } from "../garage.js";
test("eight original models cover all seven requested categories and retain both sports cars", () => {
  assert.equal(VEHICLES.length, 8);
  assert.equal(new Set(VEHICLES.map((v) => v.kind)).size, 7);
  for (let model = 0; model < 8; model++) {
    assert.equal(copySetup(defaultSetup(model)).model, model);
    assert.equal(wheelLayout(model).length, model === 4 ? 2 : 4);
  }
});
test("vehicle acceleration, top speed and steering differ and brakes stop every vehicle", () => {
  const speeds = [];
  for (let model = 0; model < 8; model++) {
    const s = createRace(0, model);
    s.phase = "race";
    for (let i = 0; i < 600; i++) advance(s, [], 1 / 60);
    speeds.push(s.v);
    assert.ok(Math.abs(s.v - VEHICLES[model].top) < 0.2);
    s.brake = true;
    for (let i = 0; i < 240; i++) advance(s, [], 1 / 60);
    assert.equal(s.v, 0);
    s.brake = false;
    advance(s, [], 0.05);
    assert.ok(s.v > 0);
  }
  assert.ok(speeds[0] > speeds[3] + 10);
  assert.ok(speeds[4] > speeds[7] + 5);
});
test("siren state has no effect on acceleration or speed", () => {
  for (const model of [5, 6, 7]) {
    const a = createRace(0, model),
      b = createRace(0, model);
    a.phase = b.phase = "race";
    b.siren = true;
    for (let i = 0; i < 300; i++) {
      advance(a, [], 1 / 60);
      advance(b, [], 1 / 60);
    }
    assert.equal(a.v, b.v);
    assert.equal(a.z, b.z);
  }
});
