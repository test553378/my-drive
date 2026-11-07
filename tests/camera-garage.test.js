import { TRACKS, trackPose, cameraPose } from "../tracks.js";
import test from "node:test";
import assert from "node:assert/strict";
import { perspective, lookAt, mul, projectPoint } from "../camera.js";
import { center, laneWorldX, createRace, advance } from "../driving.js";
import { defaultSetup, copySetup, normalizeParts } from "../garage.js";

test("right and left project correctly on every closed route, including corners and lap seams", () => {
  for (const t of TRACKS)
    for (let d = -0.1; d < t.length * 2; d += 113)
      for (const direction of [-1, 1]) {
        const p = trackPose(t, d, direction * 2),
          c = trackPose(t, d),
          camera = cameraPose(t, d, 0);
        const vp = mul(
          perspective((62 * Math.PI) / 180, 1080 / 810, 0.2, 520),
          lookAt(camera.eye, camera.aim),
        );
        const player = projectPoint(vp, [p.x, p.y + 0.6, p.z]),
          road = projectPoint(vp, [c.x, c.y + 0.6, c.z]);
        assert.ok(
          direction * (player[0] - road[0]) > 0,
          `${t.id}/${d}/${direction}`,
        );
        const yaw = p.yaw - direction * 0.15;
        const nose = projectPoint(vp, [
          p.x + Math.sin(yaw) * 1.47,
          p.y + 0.44,
          p.z + Math.cos(yaw) * 1.47,
        ]);
        const straight = projectPoint(vp, [
          p.x + p.tx * 1.47,
          p.y + 0.44,
          p.z + p.tz * 1.47,
        ]);
        assert.ok(direction * (nose[0] - straight[0]) > 0);
      }
});

test("the old +X convention is explicitly caught as a reversed screen direction", () => {
  const x = center(0),
    vp = mul(
      perspective(Math.PI / 3, 4 / 3, 0.2, 435),
      lookAt([x, 3.45, -10.5], [x, 1.1, 34]),
    );
  assert.ok(
    projectPoint(vp, [x + 3, 0.6, 0])[0] < projectPoint(vp, [x, 0.6, 0])[0],
  );
  assert.ok(
    projectPoint(vp, [laneWorldX(0, 3), 0.6, 0])[0] >
      projectPoint(vp, [x, 0.6, 0])[0],
  );
});

test("garage setup copies do not share mutable parts between cars or a new race", () => {
  const nova = defaultSetup(0),
    aero = defaultSetup(1),
    saved = copySetup(nova);
  const race = createRace(saved.color, saved.model, saved.parts);
  race.parts.body = 1;
  saved.parts.aero = 2;
  assert.equal(nova.parts.body, 0);
  assert.equal(aero.parts.body, 0);
  assert.equal(nova.parts.aero, 1);
  assert.equal(race.parts.aero, 1);
});

test("unknown parts fall back to valid child-friendly defaults", () => {
  assert.deepEqual(normalizeParts({ tyres: -1, body: 99, aero: "bad" }), {
    tyres: 0,
    body: 0,
    aero: 1,
  });
});

test("all 24 vehicle and part combinations have identical assisted handling", () => {
  const reference = createRace();
  reference.phase = "race";
  for (let i = 0; i < 240; i++) advance(reference, [], 1 / 60);
  for (const model of [0, 1])
    for (const tyres of [0, 1])
      for (const body of [0, 1])
        for (const aero of [0, 1, 2]) {
          const s = createRace(0, model, { tyres, body, aero });
          s.phase = "race";
          for (let i = 0; i < 240; i++) advance(s, [], 1 / 60);
          const baseline = createRace(0, model);
          baseline.phase = "race";
          for (let i = 0; i < 240; i++) advance(baseline, [], 1 / 60);
          assert.equal(s.z, baseline.z);
          assert.equal(s.v, baseline.v);
          assert.equal(s.offset, baseline.offset);
        }
});
