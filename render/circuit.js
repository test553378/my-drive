import * as THREE from "three";
import { buildCircuit } from "../graphics-lab/src/scene.js";
import { trackPose } from "../tracks.js";
import { mountainTerrain } from "./terrain.js";
export function buildGameCircuit(textures, track) {
  const circuit = buildCircuit(textures, track, { game: true }),
    root = circuit.root,
    box = new THREE.BoxGeometry(1, 1, 1),
    groups = new Map(),
    concrete = new THREE.MeshStandardMaterial({
      color: 0x9a9e98,
      roughness: 0.9,
    }),
    metal = new THREE.MeshStandardMaterial({
      color: 0x889291,
      metalness: 0.8,
      roughness: 0.34,
    }),
    glass = new THREE.MeshStandardMaterial({
      color: 0x384f5a,
      metalness: 0.35,
      roughness: 0.2,
    }),
    dark = new THREE.MeshStandardMaterial({ color: 0x273138, roughness: 0.8 }),
    green = new THREE.MeshStandardMaterial({ color: 0x338267, roughness: 0.8 }),
    white = new THREE.MeshStandardMaterial({
      color: 0xe1e3d9,
      roughness: 0.85,
    }),
    amber = new THREE.MeshBasicMaterial({ color: 0xf8c45a }),
    up = new THREE.Vector3(0, 1, 0);
  function place(d, o, y, w, h, l, mat, geometry = box) {
    const p = trackPose(track, d, o),
      q = new THREE.Quaternion().setFromAxisAngle(up, p.yaw),
      m = new THREE.Matrix4();
    m.compose(
      new THREE.Vector3(p.x, p.y + y, p.z),
      q,
      new THREE.Vector3(w, h, l),
    );
    const key = mat.uuid + geometry.uuid;
    if (!groups.has(key)) groups.set(key, { mat, geometry, matrices: [] });
    groups.get(key).matrices.push(m);
  }
  function ribbon(start, end, left, right, height, mat) {
    const positions = [],
      indices = [],
      count = Math.ceil((end - start) / 3);
    for (let i = 0; i <= count; i++)
      for (const o of [left, right]) {
        const p = trackPose(track, start + ((end - start) * i) / count, o);
        positions.push(
          p.x,
          p.y + (typeof height === "function" ? height(o, p) : height),
          p.z,
        );
      }
    for (let i = 0; i < count; i++) {
      const n = i * 2;
      indices.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.receiveShadow = true;
    root.add(mesh);
  }
  // Every repair area is reachable through a real break in the guardrail.
  for (const fraction of track.repairFractions) {
    const d = fraction * track.length,
      W = track.halfWidth;
    ribbon(d - 30, d + 30, W - 0.1, W + 5, 0.008, green);
    place(d, W + 8, 1.55, 4, 3.1, 12, concrete);
    place(d, W + 5.2, 3.2, 6, 0.15, 13, metal);
    for (const dz of [-12, 12])
      place(d + dz, W + 4, 1.6, 0.12, 3.2, 0.12, metal);
    for (let x = 0; x < 6; x++)
      place(d + x * 4 - 10, W + 2.7, 0.035, 0.22, 0.025, 1.6, white);
    place(d - 24, W + 3, 2.5, 1.7, 1, 0.1, green);
  }
  const treeGeo = new THREE.SphereGeometry(1, 10, 7),
    trunkGeo = new THREE.CylinderGeometry(0.6, 0.8, 1, 8),
    foliage = [0x344e35, 0x4b653e, 0x567548].map(
      (color) => new THREE.MeshStandardMaterial({ color, roughness: 1 }),
    ),
    bark = new THREE.MeshStandardMaterial({ color: 0x665246, roughness: 1 });
  if (track.theme === "city") {
    const walls = [0xa1a5a1, 0xc3b8a2, 0x778b91].map(
      (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.83 }),
    );
    for (let d = 10, i = 0; d < track.length; d += 31, i++)
      for (const side of [-1, 1]) {
        const h = 8 + ((i * 7) % 6) * 3,
          o = side * (track.halfWidth + 19);
        place(d, o, h / 2, 9, h, 17, walls[i % 3]);
        place(d, o, h + 0.1, 9.6, 0.35, 17.5, dark);
        for (let y = 2; y < h; y += 2.7)
          for (let z = -5; z <= 5; z += 2.5)
            place(d + z, o - side * 4.56, y, 0.06, 1.3, 1.4, glass);
        place(d, side * (track.halfWidth + 1.9), 3, 0.12, 6, 0.12, metal);
        place(d, side * (track.halfWidth + 0.4), 5.9, 3, 0.1, 0.5, metal);
      }
    for (const f of track.crossings) {
      const d = f * track.length;
      for (let o = -track.halfWidth; o < track.halfWidth; o += 1.5)
        place(d, o, 0.025, 0.8, 0.025, 5, white);
      for (const side of [-1, 1]) {
        place(d - 7, side * (track.halfWidth + 2), 1.8, 0.12, 3.6, 0.12, metal);
        place(d - 7, side * (track.halfWidth + 2), 3.5, 1, 0.8, 0.1, amber);
      }
      ribbon(
        d - 3,
        d + 3,
        track.halfWidth,
        track.halfWidth + 24,
        -0.015,
        circuit.road,
      );
    }
  } else if (track.theme === "mountain") {
    const terrain = mountainTerrain(track);
    root.add(terrain.mesh);
    const earth = new THREE.MeshStandardMaterial({
      color: 0x626e52,
      roughness: 1,
      side: THREE.DoubleSide,
    });
    for (let d = 0; d < track.length; d += 35)
      for (const side of [-1, 1])
        ribbon(
          d,
          Math.min(d + 35, track.length),
          side * (track.halfWidth + 0.6),
          side * (track.halfWidth + 20),
          (o, p) => {
            const t = THREE.MathUtils.smoothstep(
              Math.abs(o) - track.halfWidth,
              0,
              18,
            );
            return -0.02 + (terrain.heightAt(p.x, p.z) - p.y) * t;
          },
          earth,
        );
    for (let d = 0, i = 0; d < track.length; d += 38, i++)
      for (const side of [-1, 1]) {
        const o = side * (track.halfWidth + 27),
          p = trackPose(track, d, o),
          base = terrain.heightAt(p.x, p.z) - p.y;
        place(d, o, base + 2.6, 0.5, 5.2, 0.5, bark, trunkGeo);
        place(d, o, base + 6.2, 3, 4, 3, foliage[i % 3], treeGeo);
      }
    if (track.tunnel)
      for (
        let d = track.tunnel[0] * track.length;
        d < track.tunnel[1] * track.length;
        d += 4
      ) {
        for (const side of [-1, 1])
          place(d, side * (track.halfWidth + 1), 2.8, 0.6, 5.6, 4.1, concrete);
        place(d, 0, 5.7, track.halfWidth * 2 + 2, 0.5, 4.1, concrete);
        if (Math.floor(d / 4) % 4 === 0) place(d, 0, 5.4, 3, 0.05, 0.2, amber);
      }
  } else {
    for (let d = 180, i = 0; d < track.length; d += 32, i++)
      for (const side of [-1, 1]) {
        const o = side * (track.halfWidth + 20 + (i % 3) * 6);
        place(d, o, 1.5, 0.35, 3, 0.35, bark, trunkGeo);
        place(d, o, 4, 2.8, 3.3, 2.8, foliage[i % 3], treeGeo);
      }
    if (track.theme === "grandprix")
      for (let d = 180; d < track.length; d += 240)
        for (let row = 0; row < 6; row++) {
          place(
            d,
            -track.halfWidth - 11 - row * 1.7,
            0.5 + row * 0.65,
            1.7,
            0.4,
            33,
            concrete,
          );
          place(
            d,
            -track.halfWidth - 11 - row * 1.7,
            0.8 + row * 0.65,
            1.2,
            0.25,
            32,
            row % 2 ? dark : green,
          );
        }
  }
  for (let row = 0; row < 4; row++)
    for (let c = 0; c < 12; c++)
      place(
        row * 0.7,
        -track.halfWidth + ((c + 0.5) * track.halfWidth) / 6,
        0.03,
        track.halfWidth / 6,
        0.015,
        0.7,
        (row + c) % 2 ? white : dark,
      );
  for (const { mat, geometry, matrices } of groups.values()) {
    const instance = new THREE.InstancedMesh(geometry, mat, matrices.length);
    matrices.forEach((m, i) => instance.setMatrixAt(i, m));
    instance.receiveShadow = true;
    root.add(instance);
  }
  return circuit;
}
