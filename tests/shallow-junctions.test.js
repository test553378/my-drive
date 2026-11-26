import test from "node:test";
import assert from "node:assert/strict";
import { TRACKS, trackPose } from "../tracks.js";
import {
  roadGraph,
  edgePose,
  edgeWidth,
  angleDelta,
  playerPose,
} from "../roads.js";
import { createRace, createRivals, advance } from "../driving.js";
import { driveStep, driveUntil } from "./helpers/mission-driver.js";
import { requestUTurn, raceRoadGraph } from "../roads.js";

const degrees = (a) => (Math.abs(angleDelta(a)) * 180) / Math.PI;
test("AC01–03: every entry/return profile stays shallow, unfolded and parallel before its connector", () => {
  for (const track of TRACKS) {
    const graph = roadGraph(track.id);
    for (const site of graph.sites) {
      for (const role of ["access", "exit"]) {
        const edge = graph.edges[role + "-" + site.index];
        let parallel = 0,
          previous = null;
        for (let d = 0; d <= edge.length; d += 0.5) {
          const p = edgePose(edge, d);
          if (!Number.isFinite(p.mainStation)) continue;
          const q = trackPose(track, p.mainStation),
            off = -(p.x - q.x) * q.tz + (p.z - q.z) * q.tx;
          assert.ok(
            degrees(p.yaw - q.yaw) < 15,
            `${track.id}/${edge.id} shallow at ${d}`,
          );
          assert.ok(Math.abs(p.y - q.y) < 0.01);
          assert.ok(
            1 + q.curvature * off - Math.abs(q.curvature) * edgeWidth(edge, d) >
              0.35,
            `${track.id}/${edge.id} full-width offset does not fold`,
          );
          if (
            Math.abs(Math.abs(off) - (track.halfWidth + 4)) < 0.01 &&
            previous
          )
            parallel += d - previous;
          previous = d;
        }
        assert.ok(
          parallel > 12,
          `${track.id}/${edge.id} has a real parallel section`,
        );
      }
    }
  }
});

test("AC04/07/08/10: 3 vehicles × 4 courses drive to work and merge forward without jumping at a road transition", () => {
  for (const model of [5, 6, 7])
    for (const track of TRACKS) {
      const s = createRace(0, model, {}, track.id, 12345),
        rivals = createRivals(model, "normal", track.id);
      s.phase = "race";
      let transitions = 0;
      for (
        let i = 0;
        i < 30000 && !(s.missions.completed.length === 1 && !s.missions.active);
        i++
      ) {
        const before = playerPose(s),
          edge = s.road.edge,
          turning = s.road.turnTimer;
        driveStep(s, rivals, i);
        if (edge !== s.road.edge && !turning && !s.road.turnTimer) {
          const after = playerPose(s);
          assert.ok(
            Math.hypot(
              after.x - before.x,
              after.y - before.y,
              after.z - before.z,
            ) < 4,
            `${model}/${track.id}: no position jump ${edge}→${s.road.edge}`,
          );
          assert.ok(
            degrees(after.yaw - before.yaw) < 15,
            `${model}/${track.id}: no yaw snap ${edge}→${s.road.edge}`,
          );
          transitions++;
        }
      }
      assert.equal(s.missions.completed.length, 1, `${model}/${track.id}`);
      assert.equal(s.missions.active, null);
      assert.equal(s.onMain, true);
      assert.equal(s.road.direction, 1);
      assert.ok(transitions > 3);
      assert.ok(rivals.every((r) => r.z > 0));
    }
});

test("AC03–05: forward ring exit and reverse recovery join without a yaw/height discontinuity", () => {
  for (const track of TRACKS) {
    const graph = roadGraph(track.id);
    for (const site of graph.sites) {
      const access = graph.edges["access-" + site.index],
        loop = graph.edges["loop-" + site.index],
        exit = graph.edges["exit-" + site.index];
      for (const [a, ad, b, bd] of [
        [access, access.length, loop, 0],
        [loop, loop.length, exit, 0],
      ]) {
        const p = edgePose(a, ad),
          q = edgePose(b, bd);
        assert.ok(Math.hypot(p.x - q.x, p.y - q.y, p.z - q.z) < 0.01);
        assert.ok(degrees(p.yaw - q.yaw) < 1, `${track.id} ${a.id}→${b.id}`);
        assert.ok(Math.abs(p.grade - q.grade) < 0.01);
        const reverseA = edgePose(b, bd, 0, -1),
          reverseB = edgePose(a, ad, 0, -1);
        assert.ok(degrees(reverseA.yaw - reverseB.yaw) < 1);
      }
    }
  }
});

test("AC05: service centerlines do not cross themselves or the ring outside the shared junction", () => {
  for (const track of TRACKS) {
    const graph = roadGraph(track.id);
    for (const site of graph.sites) {
      const edges = ["access", "loop", "exit"].map(
          (role) => graph.edges[role + "-" + site.index],
        ),
        samples = edges.map((edge) =>
          Array.from({ length: Math.ceil(edge.length / 4) + 1 }, (_, i) => {
            const d = (edge.length * i) / Math.ceil(edge.length / 4);
            return { ...edgePose(edge, d), d };
          }),
        );
      for (let k = 0; k < edges.length; k++) {
        const e = edges[k],
          points = samples[k];
        for (let i = 0; i < points.length; i++)
          for (let j = 0; j < i; j++) {
            const gap = points[i].d - points[j].d;
            if (gap < 35 || (e.closed && gap > e.length - 35)) continue;
            assert.ok(
              Math.abs(points[i].y - points[j].y) >= 6 ||
                Math.hypot(
                  points[i].x - points[j].x,
                  points[i].z - points[j].z,
                ) > 12,
              `${track.id}/${e.id} has no self intersection`,
            );
          }
      }
      for (let k = 0; k < edges.length; k++)
        for (let l = 0; l < k; l++)
          for (const p of samples[k])
            for (const q of samples[l]) {
              if (
                Math.hypot(p.x - site.hubPose.x, p.z - site.hubPose.z) < 50 &&
                Math.hypot(q.x - site.hubPose.x, q.z - site.hubPose.z) < 50
              )
                continue;
              assert.ok(
                Math.abs(p.y - q.y) >= 6 ||
                  Math.hypot(p.x - q.x, p.z - q.z) > 12,
                `${track.id}/${edges[k].id}/${edges[l].id} separated outside junction`,
              );
            }
    }
  }
});

test("AC07/08: missing the ring outlet and using U-turn remains recoverable on all 12 combinations", () => {
  for (const model of [5, 6, 7])
    for (const track of TRACKS) {
      const s = createRace(0, model, {}, track.id, 12345);
      s.phase = "race";
      driveUntil(s, [], (s) => s.missions.active?.stage === "RETURN_TO_TRACK");
      assert.equal(s.missions.active?.stage, "RETURN_TO_TRACK");
      const edge = raceRoadGraph(s).edges[s.road.edge],
        plan = JSON.stringify(s.missions.plan),
        ledger = JSON.stringify(s.ledger);
      assert.ok(edge.closed);
      s.steerL = s.steerR = false;
      s.road.intent = null;
      let wrapped = false;
      for (let i = 0; i < 10000 && !wrapped; i++) {
        const before = s.road.d;
        advance(s, [], 0.05);
        wrapped = s.road.direction > 0 ? s.road.d < before : s.road.d > before;
      }
      assert.ok(
        wrapped,
        `${model}/${track.id}: can pass the outlet and keep driving`,
      );
      assert.equal(s.road.edge, edge.id);
      assert.equal(JSON.stringify(s.ledger), ledger);
      assert.equal(requestUTurn(s), true);
      driveUntil(
        s,
        [],
        (s) => s.missions.completed.length === 1 && !s.missions.active,
      );
      assert.equal(s.missions.active, null);
      assert.equal(s.onMain, true);
      assert.equal(s.road.direction, 1);
      assert.equal(JSON.stringify(s.missions.plan), plan);
    }
});
