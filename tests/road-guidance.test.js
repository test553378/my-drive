import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { createRace, advance } from "../driving.js";
import {
  raceRoadGraph,
  roadGraph,
  edgePose,
  playerPose,
  mainContact,
  wrap,
  angleDelta,
  edgeWidth,
  requestUTurn,
} from "../roads.js";
import { missionNavigation, missionTarget } from "../missions.js";
import { guidancePoints, buildRoadGuidance } from "../render/road-guidance.js";
import { buildMissionWorld } from "../render/mission-world.js";
import { trackPose, TRACKS } from "../tracks.js";
import { driveUntil, driveStep, onMain } from "./helpers/mission-driver.js";
import { release } from "../render/mesh.js";
const near = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
const textures = () => ({
  color: new THREE.Texture(),
  normal: new THREE.Texture(),
  rough: new THREE.Texture(),
});

test("T06/T07/T12: one stable active graph drives roads, ports and chosen hospitals for every vehicle/course/seed", () => {
  for (const t of TRACKS)
    for (const model of [0, 1, 2, 3, 4, 5, 6, 7])
      for (const seed of [1, 17, 42, 12345, 98765]) {
        const s = createRace(0, model, {}, t.id, seed),
          g = raceRoadGraph(s),
          plans = s.missions?.plan || [],
          sites = new Set(plans.map((p) => p.site)),
          hospitals =
            model === 6 ? [...new Set(plans.map((p) => p.hospital))] : [];
        for (const h of g.hospitals) {
          assert.ok(hospitals.includes(h.index));
          sites.add(h.site);
        }
        assert.deepEqual(
          g.hospitals.map((h) => h.index).sort(),
          hospitals.sort(),
        );
        assert.equal(g.sites.length, sites.size);
        for (const e of Object.values(g.edges))
          if (!e.main) assert.ok(sites.has(e.site));
        for (const n of Object.values(g.nodes))
          for (const p of n.ports) assert.ok(g.edges[p.edge]);
        assert.equal(
          Object.values(g.edges).filter((e) => !e.main).length,
          sites.size * 3,
        );
        if (s.missions) {
          s.missions.completed = plans.map((p) => p.id);
          s.missions.active = null;
          assert.equal(raceRoadGraph(s), g);
        }
      }
});
test("T03/T04/T05: branch endpoints are tangent, wide, coplanar and include a parallel section on all courses", () => {
  for (const t of TRACKS) {
    const g = roadGraph(t.id);
    for (const site of g.sites) {
      const a = g.edges["access-" + site.index],
        e = g.edges["exit-" + site.index];
      for (const [edge, d, node] of [
        [a, 0, site.entry],
        [e, e.length, site.merge],
      ]) {
        const p = edgePose(edge, d),
          q = trackPose(t, g.nodes[node].station);
        assert.ok(near(p, q) < 0.01);
        assert.ok(Math.abs(angleDelta(p.yaw - q.yaw)) < 0.03);
        assert.ok(Math.abs(edgeWidth(edge, d) - t.halfWidth) < 1e-10);
      }
      assert.ok(a.parallelLength > 65);
      for (const d of [65, 70, 75]) {
        const p = a.table.find((p) => p.mainStation >= site.gate + d),
          q = trackPose(t, p.mainStation, site.side * (t.halfWidth + 4));
        assert.ok(near(p, q) < 0.05);
      }
      for (const edge of [a, e])
        for (let d = 0; d < edge.length; d += 3) {
          const p = edgePose(edge, d);
          assert.ok(Object.values(p).every(Number.isFinite));
          assert.ok(edgeWidth(edge, d) >= 6);
        }
    }
  }
});
test("T01/T02/T10: a brief early left/right press is retained across main nodes and enters the correct branch (3×4)", () => {
  for (const model of [5, 6, 7])
    for (const t of TRACKS) {
      const s = createRace(0, model, {}, t.id, 12345);
      s.phase = "race";
      for (let i = 0; i < 6000; i++) {
        const n = missionNavigation(s);
        if (n?.upcoming?.distance < 110 && !n.uTurn) break;
        advance(s, [], 0.05);
      }
      const nav = missionNavigation(s);
      assert.ok(
        nav?.upcoming && nav.upcoming.distance > 60,
        model + "/" + t.id,
      );
      const expected = nav.upcoming.edge;
      s.steerR = nav.upcoming.turn === "right";
      s.steerL = !s.steerR;
      for (let i = 0; i < 4; i++) advance(s, [], 0.05);
      s.steerR = s.steerL = false;
      assert.equal(s.road.intent?.edge, expected);
      const g = raceRoadGraph(s);
      let previous = playerPose(s),
        maxStep = 0;
      for (let i = 0; i < 1000 && s.onMain; i++) {
        advance(s, [], 0.05);
        const p = playerPose(s);
        maxStep = Math.max(maxStep, near(previous, p));
        previous = p;
      }
      assert.equal(s.road.edge, expected);
      assert.ok(maxStep < 4);
      assert.ok(g.edges[expected]);
    }
});
test("T01/T05/T08: visible bounded ground arrows follow real routes, reverse after a missed fork and guide return", () => {
  const s = createRace(0, 7, {}, "C01", 12345);
  s.phase = "race";
  driveUntil(s, [], (s) => !!s.missions.active, { actions: false });
  let data = guidancePoints(s);
  assert.ok(data.points.length >= 8);
  assert.ok(data.points.length <= 24);
  assert.ok(data.points.some((p) => p.edge.startsWith("access-")));
  const guide = buildRoadGuidance();
  guide.update(s);
  assert.ok(guide.stats().visible);
  assert.equal(guide.stats().count, data.points.length);
  for (const p of data.points)
    assert.ok(
      Object.values(p)
        .filter((x) => typeof x === "number")
        .every(Number.isFinite),
    );
  const site = roadGraph(s.courseId).sites[s.missions.active.site];
  onMain(s, site.gate + 12);
  guide.update(s);
  assert.equal(guide.stats().uTurn, true);
  assert.ok(requestUTurn(s));
  for (let i = 0; i < 14; i++) advance(s, [], 0.05);
  assert.equal(s.road.direction, -1);
  assert.ok(!missionNavigation(s).uTurn);
  driveUntil(s, [], (s) => s.missions.active?.stage === "FIRE_ACTION");
  guide.update(s);
  assert.equal(guide.stats().visible, false);
  driveUntil(s, [], (s) => s.missions.active?.stage === "RETURN_TO_TRACK");
  guide.update(s);
  assert.equal(guide.stats().visible, true);
  assert.ok(guidancePoints(s).points.length > 0 || guide.stats().uTurn);
  assert.ok(missionTarget(s).label.includes("もど"));
  release(guide.root);
});
test("T06/T12: vehicle facilities and all rendered service-road IDs agree with active graph (3×4)", () => {
  for (const model of [0, 5, 6, 7])
    for (const t of TRACKS) {
      const s = createRace(0, model, {}, t.id, 42),
        g = raceRoadGraph(s),
        world = buildMissionWorld(textures(), g),
        ids = new Set();
      world.root.traverse((o) => {
        if (o.name.startsWith("service-road-")) ids.add(o.name.slice(13));
      });
      assert.deepEqual(
        [...ids].sort(),
        Object.values(g.edges)
          .filter((e) => !e.main)
          .map((e) => e.id)
          .sort(),
      );
      assert.equal(
        world.sites.filter(Boolean).length,
        model === 6 || model === 7 ? g.sceneSites.length : 0,
      );
      assert.equal(
        world.hospitals.filter(Boolean).length,
        model === 6 ? g.hospitals.length : 0,
      );
      for (const site of world.sites.filter(Boolean))
        assert.equal(site.flames.length, model === 7 ? 3 : 0);
      s.phase = "race";
      world.frame(s, null);
      release(world.root);
    }
});
test("T12: physical main-road contact follows overlapping slip pavement without awarding lap progress", () => {
  for (const t of TRACKS) {
    const s = createRace(0, 7, {}, t.id, 42),
      g = raceRoadGraph(s),
      e = Object.values(g.edges).find((e) => e.id.startsWith("access-"));
    s.phase = "race";
    s.road = { edge: e.id, d: 4, direction: 1, turnTimer: 0 };
    s.onMain = false;
    s.offset = 0;
    s.v = 12;
    const before = s.ledger.next;
    assert.ok(mainContact(s));
    advance(s, [], 0.05);
    assert.equal(s.ledger.next, before);
    s.road.d = e.length * 0.8;
    assert.equal(mainContact(s), null);
  }
});

test("T03/T12: fixed layouts keep separate service corridors apart and connectors outside main centerlines", () => {
  for (const t of TRACKS) {
    const g = roadGraph(t.id),
      sets = g.sites.map((site) =>
        Object.values(g.edges)
          .filter((e) => !e.main && e.site === site.index)
          .flatMap((e) =>
            Array.from({ length: Math.ceil(e.length / 5) + 1 }, (_, i) =>
              edgePose(e, (e.length * i) / Math.ceil(e.length / 5)),
            ),
          ),
      );
    for (let i = 0; i < sets.length; i++)
      for (let j = i + 1; j < sets.length; j++)
        for (const p of sets[i])
          for (const q of sets[j])
            assert.ok(
              Math.hypot(p.x - q.x, p.z - q.z) > 12,
              t.id + " separated corridors",
            );
    for (const e of Object.values(g.edges).filter((e) => !e.main && !e.closed))
      for (const p of e.table.filter(
        (p, i) => i % 5 === 0 && !Number.isFinite(p.mainStation),
      )) {
        const min = Math.min(
          ...t.table.map((q) => Math.hypot(p.x - q.x, p.z - q.z)),
        );
        assert.ok(min > t.halfWidth + 1, t.id + "/" + e.id);
      }
  }
});
test("T02/T08: opposite input cancels a pending choice and a miss is recoverable without changing the selected jobs", () => {
  for (const t of TRACKS) {
    const s = createRace(0, 7, {}, t.id, 12345);
    s.phase = "race";
    for (let i = 0; i < 6000; i++) {
      const n = missionNavigation(s);
      if (n?.upcoming?.distance < 110 && !n.uTurn) break;
      advance(s, [], 0.05);
    }
    const jobs = JSON.stringify(s.missions.plan),
      n = missionNavigation(s),
      right = n.upcoming.turn === "right";
    s.steerR = right;
    s.steerL = !right;
    advance(s, [], 0.05);
    assert.ok(s.road.intent);
    s.steerR = !right;
    s.steerL = right;
    advance(s, [], 0.05);
    assert.equal(s.road.intent, null);
    s.steerR = s.steerL = false;
    for (let i = 0; i < 200; i++) advance(s, [], 0.05);
    assert.ok(s.onMain);
    driveUntil(s, [], (s) => s.phase === "finish");
    assert.equal(s.phase, "finish");
    assert.equal(JSON.stringify(s.missions.plan), jobs);
  }
});

test("T01/T08: the ground U-turn stays above a sloping mountain road rather than disappearing under it", () => {
  const s = createRace(0, 7, {}, "C02", 12345);
  s.phase = "race";
  driveUntil(s, [], (s) => !!s.missions.active, { actions: false });
  onMain(s, 400);
  assert.ok(missionNavigation(s).uTurn);
  const guide = buildRoadGuidance();
  guide.update(s);
  guide.root.updateMatrixWorld(true);
  const marker = guide.root.getObjectByName("Ground U-turn");
  assert.ok(marker.visible);
  let minimum = Infinity;
  marker.traverse((o) => {
    if (!o.isMesh) return;
    const positions = o.geometry.getAttribute("position");
    for (let i = 0; i < positions.count; i++) {
      const v = new THREE.Vector3()
        .fromBufferAttribute(positions, i)
        .applyMatrix4(o.matrixWorld);
      let best = Infinity,
        y = 0;
      for (let d = 398; d < 420; d += 0.15) {
        const q = trackPose("C02", d),
          dist = Math.hypot(v.x - q.x, v.z - q.z);
        if (dist < best) {
          best = dist;
          y = q.y;
        }
      }
      minimum = Math.min(minimum, v.y - y);
    }
  });
  assert.ok(
    minimum > 0.025,
    `ground marker must remain visible above pavement: ${minimum}`,
  );
  release(guide.root);
});
