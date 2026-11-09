import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import * as THREE from "three";
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { MeshoptDecoder } from "meshoptimizer";
import { QUALITY, fitBuffer, frameStats } from "../graphics-lab/src/quality.js";
import { buildCircuit } from "../graphics-lab/src/scene.js";
import { mergeRigidParts } from "../graphics-lab/src/merge-parts.js";
const base = new URL("../graphics-lab/", import.meta.url),
  manifest = JSON.parse(await readFile(new URL("asset-manifest.json", base)));
test("self-hosted assets match their recorded hashes and each first visit stays below 20MB", async () => {
  for (const [name, info] of Object.entries(manifest.files)) {
    const bytes = await readFile(new URL("assets/" + name, base));
    assert.equal(bytes.length, info.bytes);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), info.sha256);
  }
  const bundle = await readFile(new URL("app.bundle.js", base));
  assert.equal(bundle.length, manifest.bundle.bytes);
  assert.equal(
    createHash("sha256").update(bundle).digest("hex"),
    manifest.bundle.sha256,
  );
  for (const q of Object.values(QUALITY)) {
    let bytes = bundle.length + 60000;
    for (const name of [
      "asphalt-color.jpg",
      "asphalt-normal.jpg",
      "asphalt-rough.jpg",
      "sunset.hdr",
      q.model,
    ])
      bytes += manifest.files[name].bytes;
    assert.ok(bytes < 20000000, `${q.label}: ${bytes} bytes`);
  }
});
test("both external GLBs preserve four wheel hierarchies and contain none of the excluded trademark image bytes", async () => {
  await MeshoptDecoder.ready;
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({ "meshopt.decoder": MeshoptDecoder });
  for (const model of manifest.models) {
    const d = await io.read(new URL("assets/" + model.name, base).pathname),
      nodes = d.getRoot().listNodes();
    for (const name of [
      "WheelFrontL",
      "WheelFrontR",
      "WheelRearL",
      "WheelRearR",
    ])
      assert.ok(nodes.some((n) => n.getName() === name));
    assert.ok(
      !nodes.some((n) =>
        ["License Plate", "InteriorSteeringEmblem"].includes(n.getName()),
      ),
    );
    for (const t of d.getRoot().listTextures()) {
      const hash = createHash("sha256").update(t.getImage()).digest("hex");
      assert.ok(
        !["1453559c5852", "8cca97aa2b8f", "54297a994035"].some((h) =>
          hash.startsWith(h),
        ),
      );
    }
    assert.ok(d.getRoot().getExtras().attribution.includes("CC-BY-4.0"));
  }
  assert.ok(manifest.models[1].triangles < manifest.models[0].triangles * 0.6);
});
test("real road geometry faces up, uses all three PBR maps and the near scene remains three-dimensional", () => {
  const textures = {
      color: new THREE.Texture(),
      normal: new THREE.Texture(),
      rough: new THREE.Texture(),
    },
    c = buildCircuit(textures);
  assert.equal(c.road.map, textures.color);
  assert.equal(c.road.normalMap, textures.normal);
  assert.equal(c.road.roughnessMap, textures.rough);
  const road = c.root.children.filter((o) => o.material === c.road);
  assert.equal(road.length, 20);
  for (const m of road) {
    const normals = m.geometry.getAttribute("normal");
    for (let i = 0; i < normals.count; i++) assert.ok(normals.getY(i) > 0.99);
    assert.ok(m.receiveShadow);
  }
  assert.ok(c.root.children.some((o) => o.isInstancedMesh));
  assert.ok(c.root.children.filter((o) => o.isMesh).length > 20);
});
test("pixel budgets hold in both tablet orientations and statistics retain slow visible frames", () => {
  for (const q of Object.values(QUALITY))
    for (const [w, h] of [
      [1080, 810],
      [810, 1080],
      [3840, 2160],
    ]) {
      const [bw, bh] = fitBuffer(w, h, q.pixels, 4096);
      assert.ok(bw * bh <= q.pixels);
      assert.ok(Math.max(bw, bh) <= 4096);
    }
  assert.equal(frameStats([16, 16, 2000]).p95, 2000);
  assert.ok(frameStats([2000, 2000]).fps < 1);
});
test("rigid mesh merging preserves transformed geometry and reduces draw objects", () => {
  const root = new THREE.Group(),
    mat = new THREE.MeshStandardMaterial();
  for (const x of [-2, 2]) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mat);
    mesh.position.x = x;
    root.add(mesh);
  }
  mergeRigidParts(root);
  assert.equal(root.children.length, 1);
  const b = new THREE.Box3().setFromObject(root);
  assert.equal(b.min.x, -2.5);
  assert.equal(b.max.x, 2.5);
  assert.equal(root.children[0].geometry.index.count, 72);
});
