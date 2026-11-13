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
import { extractWheelRig } from "../graphics-lab/src/wheel-rig.js";
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
for (const model of manifest.models)
  test(`${model.name}: actual wheel axes stay straight while rolling and follow steering without moving the hubs or spinning calipers`, async () => {
    await MeshoptDecoder.ready;
    const io = new NodeIO()
        .registerExtensions(ALL_EXTENSIONS)
        .registerDependencies({ "meshopt.decoder": MeshoptDecoder }),
      doc = await io.read(new URL("assets/" + model.name, base).pathname);
    // Read the shipped GLB transforms, including the non-identity scene parent.
    // Checking only the animation pivot angle missed the baked front-wheel pose.
    function hierarchy(node) {
      const object = new THREE.Group();
      object.name = node.getName();
      object.position.fromArray(node.getTranslation());
      object.quaternion.fromArray(node.getRotation());
      object.scale.fromArray(node.getScale());
      for (const child of node.listChildren()) object.add(hierarchy(child));
      return object;
    }
    const source = new THREE.Group();
    for (const node of doc.getRoot().listScenes()[0].listChildren())
      source.add(hierarchy(node));
    source.updateMatrixWorld(true);
    const names = ["WheelFrontL", "WheelFrontR", "WheelRearL", "WheelRearR"],
      centers = names.map((n) =>
        source.getObjectByName(n).getWorldPosition(new THREE.Vector3()),
      ),
      { root, units } = extractWheelRig(source);
    assert.equal(units.length, 4);
    for (const [i, unit] of units.entries()) {
      const rim = unit.spin.getObjectByName(names[i] + "Rim"),
        caliper = unit.outer.getObjectByName(names[i] + "BrakePad");
      assert.ok(rim && caliper, names[i]);
      assert.equal(caliper.parent, unit.outer);
      assert.ok(unit.outer.position.distanceTo(centers[i]) < 1e-6);
      for (const steering of [0, -0.24, 0.24, 0]) {
        unit.outer.rotation.y = unit.front ? steering : 0;
        root.updateMatrixWorld(true);
        const fixedPosition = caliper.getWorldPosition(new THREE.Vector3()),
          fixedRotation = caliper.getWorldQuaternion(new THREE.Quaternion()),
          expectedAxis = new THREE.Vector3(1, 0, 0).applyAxisAngle(
            new THREE.Vector3(0, 1, 0),
            unit.front ? steering : 0,
          );
        for (const rolling of [0, 0.8, 3.4, 8.5]) {
          unit.spin.rotation.x = rolling;
          root.updateMatrixWorld(true);
          const axis = new THREE.Vector3(1, 0, 0).applyQuaternion(
            rim.getWorldQuaternion(new THREE.Quaternion()),
          );
          assert.ok(
            axis.distanceTo(expectedAxis) < 1e-6,
            `${names[i]}: axle ${axis.toArray()} must be ${expectedAxis.toArray()} (roll ${rolling})`,
          );
          assert.ok(
            caliper
              .getWorldPosition(new THREE.Vector3())
              .distanceTo(fixedPosition) < 1e-6,
          );
          assert.ok(
            1 -
              Math.abs(
                caliper
                  .getWorldQuaternion(new THREE.Quaternion())
                  .dot(fixedRotation),
              ) <
              1e-6,
          );
          assert.ok(
            unit.spin
              .getWorldPosition(new THREE.Vector3())
              .distanceTo(centers[i]) < 1e-6,
          );
        }
      }
    }
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
test("rigid merging accepts indexed rounded panels together with non-indexed extruded wheel openings", () => {
  const root = new THREE.Group(),
    mat = new THREE.MeshStandardMaterial();
  const a = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mat),
    b = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1).toNonIndexed(), mat);
  b.position.x = 2;
  root.add(a, b);
  mergeRigidParts(root);
  assert.equal(root.children.length, 1);
  const bounds = new THREE.Box3().setFromObject(root);
  assert.equal(bounds.min.x, -0.5);
  assert.equal(bounds.max.x, 2.5);
  assert.equal(root.children[0].geometry.index.count, 72);
});
