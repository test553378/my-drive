import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import * as THREE from "three";
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { MeshoptDecoder } from "meshoptimizer";
import { utilityBody } from "../render/vehicles.js";
import { buildGameCircuit } from "../render/circuit.js";
import { TRACKS, trackPose } from "../tracks.js";
import { mountainTerrain } from "../render/terrain.js";
import { createRace } from "../driving.js";
import { edgePose } from "../roads.js";
import { release } from "../render/mesh.js";
test("mountain terrain remains below the entire elevated road and both shoulders", () => {
  const track = TRACKS[1],
    { mesh, heightAt } = mountainTerrain(track);
  for (let d = 0; d < track.length; d += 2) {
    const p = trackPose(track.id, d);
    for (const offset of [-track.halfWidth, 0, track.halfWidth]) {
      const height = heightAt(p.x + p.tz * offset, p.z - p.tx * offset);
      assert.ok(Number.isFinite(height));
      assert.ok(height < p.y - 0.5, `terrain must not occlude road at ${d}`);
    }
  }
  release(mesh);
});
test("the main game's local bundle and all model/PBR assets match their committed integrity record", async () => {
  const m = JSON.parse(
    await readFile(new URL("../game-assets.json", import.meta.url)),
  );
  for (const f of [m.bundle, ...Object.values(m.files)]) {
    const b = await readFile(new URL("../" + f.path, import.meta.url));
    assert.equal(b.length, f.bytes, f.path);
    assert.equal(
      createHash("sha256").update(b).digest("hex"),
      f.sha256,
      f.path,
    );
  }
  for (const file of ["concept-mobile.glb", "concept-high.glb"]) {
    const names = [
      "asphalt-color.jpg",
      "asphalt-normal.jpg",
      "asphalt-rough.jpg",
      "sunset.hdr",
      file,
      "concept-rival.glb",
    ];
    assert.ok(
      names.reduce((n, k) => n + m.files[k].bytes, 0) + m.bundle.bytes <
        20000000,
    );
  }
  const sw = await readFile(
    new URL("../service-worker.js", import.meta.url),
    "utf8",
  );
  for (const f of Object.values(m.files))
    assert.ok(
      sw.includes('"' + f.path + '"'),
      f.path + " is available offline",
    );
});
test("the distant GLB retains its wheel rig and attribution and genuinely reduces geometry and image cost", async () => {
  await MeshoptDecoder.ready;
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({ "meshopt.decoder": MeshoptDecoder });
  const d = await io.read(
    new URL("../graphics-lab/assets/concept-rival.glb", import.meta.url)
      .pathname,
  );
  assert.equal(d.getRoot().listTextures().length, 0);
  assert.ok(d.getRoot().getExtras().attribution.includes("CC-BY-4.0"));
  for (const name of ["WheelFrontL", "WheelFrontR", "WheelRearL", "WheelRearR"])
    assert.ok(
      d
        .getRoot()
        .listNodes()
        .some((n) => n.getName() === name),
    );
  let count = 0;
  for (const m of d.getRoot().listMeshes())
    for (const p of m.listPrimitives())
      count +=
        (p.getIndices()?.getCount() || p.getAttribute("POSITION").getCount()) /
        3;
  assert.equal(count, 28229);
  assert.ok(count < 100756 * 0.3);
});
test("original truck, bus, ambulance and fire bodies merge their rounded panels and wheel openings into finite distinct PBR meshes", () => {
  const counts = [];
  for (const model of [2, 3, 6, 7]) {
    const root = utilityBody(model, 0),
      bounds = new THREE.Box3().setFromObject(root);
    assert.ok(bounds.min.toArray().every(Number.isFinite));
    assert.ok(bounds.max.toArray().every(Number.isFinite));
    assert.ok(root.children.length >= 6 && root.children.length <= 12);
    assert.ok(root.children.some((m) => m.material.transparent));
    assert.ok(root.children.some((m) => m.material.clearcoat > 0.5));
    counts.push(
      root.children.reduce(
        (n, m) =>
          n +
          (m.geometry.index?.count ||
            m.geometry.getAttribute("position").count),
        0,
      ),
    );
    release(root);
  }
  assert.equal(new Set(counts).size, 4);
});
test("every real closed route receives textured road geometry and reachable pit scenery", () => {
  const textures = {
    color: new THREE.Texture(),
    normal: new THREE.Texture(),
    rough: new THREE.Texture(),
  };
  for (const track of TRACKS) {
    const c = buildGameCircuit(textures, track);
    assert.equal(c.road.map, textures.color);
    assert.ok(c.root.children.some((o) => o.isInstancedMesh));
    const roads = c.root.children.filter(
      (o) => o.material === c.road && o.geometry.getAttribute("uv"),
    );
    assert.ok(roads.length >= 20);
    for (const road of roads) {
      const p = road.geometry.getAttribute("position");
      for (let i = 0; i < p.count; i++) assert.ok(Number.isFinite(p.getY(i)));
    }
    release(c.root);
  }
});

test("V8: all three flames share one fixed 3D view, roads face up, and mountain service roads stay above terrain", () => {
  const textures = {
    color: new THREE.Texture(),
    normal: new THREE.Texture(),
    rough: new THREE.Texture(),
  };
  for (const track of TRACKS) {
    const c = buildGameCircuit(textures, track),
      s = createRace(0, 7, {}, track.id, 42);
    s.phase = "race";
    for (let site = 0; site < 3; site++) {
      const job = s.missions.plan[0];
      s.missions.active = {
        ...job,
        site,
        kind: "fire",
        stage: "FIRE_ACTION",
        fires: [2.5, 2.5, 2.5],
        holding: -1,
        pointer: null,
      };
      s.road.edge = "loop-" + site;
      s.road.d = c.graph.sites[site].scene.d;
      s.onMain = false;
      c.root.updateMatrixWorld(true);
      c.missions.frame(s, null);
      const view = c.missions.workView(s, null),
        camera = new THREE.PerspectiveCamera(view.fov, 1080 / 810, 0.1, 900);
      camera.position.copy(view.eye);
      camera.lookAt(view.aim);
      camera.updateMatrixWorld();
      const targets = c.missions.targets(camera, 1080, 810);
      assert.equal(targets.length, 3);
      assert.ok(
        targets.every(
          (t) => t.visible && t.x > 170 && t.x < 910 && t.y > 180 && t.y < 650,
        ),
      );
      s.time += 2;
      c.missions.frame(s, null);
      assert.deepEqual(c.missions.workView(s, null), view);
    }
    c.missions.root.traverse((o) => {
      if (o.geometry) {
        const p = o.geometry.getAttribute("position");
        for (let i = 0; i < p.count; i++)
          assert.ok(
            Number.isFinite(p.getX(i)) &&
              Number.isFinite(p.getY(i)) &&
              Number.isFinite(p.getZ(i)),
          );
        if (o.name.startsWith("service-road-")) {
          const n = o.geometry.getAttribute("normal");
          for (let i = 0; i < n.count; i++) assert.ok(n.getY(i) > 0.8);
        }
      }
    });
    if (track.id === "C02") {
      const points = Object.values(c.graph.edges)
          .filter((e) => !e.main)
          .flatMap((e) =>
            Array.from({ length: 40 }, (_, i) =>
              edgePose(e, (e.length * i) / 39),
            ),
          ),
        terrain = mountainTerrain(track, points);
      for (const p of points) assert.ok(terrain.heightAt(p.x, p.z) < p.y - 0.2);
      release(terrain.mesh);
    }
    release(c.root);
  }
});
