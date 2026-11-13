import * as THREE from "three";
import { getTrack, trackPose } from "../../tracks.js";
const track = getTrack("C01");
export { track };
export function buildCircuit(
  textures,
  route = track,
  { game = false, serviceGap = () => false, sceneryClear = () => true } = {},
) {
  const track = route;
  const pitGap = (d) =>
    game &&
    track.repairFractions.some(
      (f) =>
        Math.abs(
          ((d - f * track.length + track.length * 1.5) % track.length) -
            track.length / 2,
        ) < 31,
    );
  const root = new THREE.Group();
  root.name = "C01 — full closed circuit";
  const asphalt = new THREE.MeshStandardMaterial({
    map: textures.color,
    normalMap: textures.normal,
    roughnessMap: textures.rough,
    normalScale: new THREE.Vector2(0.3, 0.3),
    roughness: 1,
    metalness: 0,
  });
  const grass = new THREE.MeshStandardMaterial({
    color: 0x60684b,
    roughness: 1,
    vertexColors: true,
  });
  const white = new THREE.MeshStandardMaterial({
    color: 0xe3dfd3,
    roughness: 0.85,
  });
  const red = new THREE.MeshStandardMaterial({
    color: 0x942d23,
    roughness: 0.8,
  });
  const concrete = new THREE.MeshStandardMaterial({
    color: 0x9c9d94,
    roughness: 0.96,
  });
  const metal = new THREE.MeshStandardMaterial({
    color: 0x858d91,
    metalness: 0.8,
    roughness: 0.36,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: 0x292f32,
    metalness: 0.4,
    roughness: 0.52,
  });
  const glass = new THREE.MeshStandardMaterial({
    color: 0x35515b,
    metalness: 0.35,
    roughness: 0.18,
  });
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const place = (mesh, d, offset, y = 0) => {
    const p = trackPose(track, d, offset);
    mesh.position.set(p.x, p.y + y, p.z);
    mesh.rotation.y = p.yaw;
    return mesh;
  };
  function box(d, o, y, w, h, l, mat) {
    if (!sceneryClear(trackPose(track, d, o), Math.max(w, l) / 2 + 4)) return;
    const m = place(new THREE.Mesh(boxGeo, mat), d, o, y);
    m.scale.set(w, h, l);
    m.receiveShadow = true;
    root.add(m);
    return m;
  }
  function ribbon(a, b, left, right, y, mat) {
    const count = Math.max(1, Math.ceil((b - a) / 2)),
      pos = [],
      uv = [],
      ix = [];
    for (let i = 0; i <= count; i++) {
      const d = a + ((b - a) * i) / count;
      for (const offset of [left, right]) {
        const p = trackPose(track, d, offset);
        pos.push(p.x, p.y + y, p.z);
        uv.push((offset + track.halfWidth) / 2, d / 2);
      }
    }
    for (let i = 0; i < count; i++) {
      const n = i * 2;
      ix.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(ix);
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat);
    m.receiveShadow = true;
    root.add(m);
    return m;
  }
  // Separate chunks let the renderer cull road behind and beside the camera.
  for (let d = 0; d < track.length; d += 70) {
    ribbon(
      d,
      Math.min(d + 70, track.length),
      -track.halfWidth,
      track.halfWidth,
      0.003,
      asphalt,
    );
    for (const side of [-1, 1])
      ribbon(
        d,
        Math.min(d + 70, track.length),
        side * (track.halfWidth - 0.35) - 0.07,
        side * (track.halfWidth - 0.35) + 0.07,
        0.009,
        white,
      );
  }
  const curbs = new THREE.InstancedMesh(
      boxGeo,
      white,
      Math.ceil(track.length / 2) * 2,
    ),
    curbRed = [];
  const matrix = new THREE.Matrix4(),
    quaternion = new THREE.Quaternion(),
    scale = new THREE.Vector3(0.7, 0.085, 1.98),
    up = new THREE.Vector3(0, 1, 0);
  let index = 0;
  for (let d = 1; d < track.length; d += 2)
    for (const side of [-1, 1]) {
      if (serviceGap(d, side)) continue;
      const p = trackPose(track, d, side * (track.halfWidth + 0.12));
      quaternion.setFromAxisAngle(up, p.yaw);
      matrix.compose(
        new THREE.Vector3(p.x, p.y + 0.035, p.z),
        quaternion,
        scale,
      );
      curbs.setMatrixAt(index++, matrix);
      if (Math.floor(d / 2) % 2 === 0) curbRed.push(matrix.clone());
    }
  curbs.count = index;
  curbs.receiveShadow = true;
  root.add(curbs);
  const alternating = new THREE.InstancedMesh(boxGeo, red, curbRed.length);
  curbRed.forEach((m, i) => alternating.setMatrixAt(i, m));
  alternating.receiveShadow = true;
  root.add(alternating);
  // Subtle braking traces follow the actual route, with real perspective/parallax.
  const rubber = new THREE.MeshStandardMaterial({
    color: 0x11100f,
    transparent: true,
    opacity: 0.19,
    roughness: 1,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  });
  for (const start of [270, 490, 720, 1060])
    for (const side of [-1, 1])
      ribbon(
        start,
        start + 70,
        side * 1.2 - 0.1,
        side * 1.2 + 0.1,
        0.013,
        rubber,
      );
  // Continuous 3D corrugated rails and instanced supporting posts.
  const posts = new THREE.InstancedMesh(
    boxGeo,
    metal,
    Math.ceil(track.length / 8) * 2,
  );
  index = 0;
  const railPositions = [],
    railIndices = [];
  for (const side of [-1, 1]) {
    for (let d = 0; d < track.length; d += 4) {
      if (pitGap(d) || serviceGap(d, side)) continue;
      const base = railPositions.length / 3;
      for (const dd of [d, Math.min(d + 4, track.length)])
        for (const h of [0.58, 0.69, 0.79, 0.9]) {
          const p = trackPose(
            track,
            dd,
            side *
              (track.halfWidth + 1.4 + (h === 0.69 || h === 0.79 ? 0.07 : 0)),
          );
          railPositions.push(p.x, p.y + h, p.z);
        }
      for (let k = 0; k < 3; k++) {
        const a = base + k;
        railIndices.push(a, a + 4, a + 1, a + 1, a + 4, a + 5);
      }
    }
    for (let d = 0; d < track.length; d += 8) {
      if (pitGap(d) || serviceGap(d, side)) continue;
      const p = trackPose(track, d, side * (track.halfWidth + 1.5));
      quaternion.setFromAxisAngle(up, p.yaw);
      matrix.compose(
        new THREE.Vector3(p.x, p.y + 0.45, p.z),
        quaternion,
        new THREE.Vector3(0.12, 0.9, 0.16),
      );
      posts.setMatrixAt(index++, matrix);
    }
  }
  posts.count = index;
  const railGeo = new THREE.BufferGeometry();
  railGeo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(railPositions, 3),
  );
  railGeo.setIndex(railIndices);
  railGeo.computeVertexNormals();
  const railMat = metal.clone();
  railMat.side = THREE.DoubleSide;
  root.add(new THREE.Mesh(railGeo, railMat), posts);
  const groundGeo = new THREE.PlaneGeometry(2800, 2800, 44, 44);
  groundGeo.rotateX(-Math.PI / 2);
  const colors = [];
  const p = groundGeo.getAttribute("position");
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i),
      z = p.getZ(i),
      v =
        0.84 +
        0.12 * Math.sin(x * 0.047) * Math.cos(z * 0.039) +
        0.05 * Math.sin(x * 0.32 + z * 0.1);
    colors.push(v, v, v);
    p.setY(i, game && track.id === "C02" ? -4 : -0.09);
  }
  groundGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  groundGeo.computeVertexNormals();
  const ground = new THREE.Mesh(groundGeo, grass);
  ground.receiveShadow = true;
  root.add(ground);
  // The near environment is geometry, not a photographic backplate.
  for (let i = 0; i < 7; i++) {
    const d = 65 + i * 15;
    box(d, 24, 2.5, 13, 5, 13, concrete);
    box(d, 24, 5.25, 15, 0.45, 14, dark);
    box(d, 17.47, 1.75, 0.08, 3.2, 10, dark);
    box(d, 17.4, 3.95, 0.1, 1.05, 10, glass);
    for (let n = 0; n < 9; n++)
      box(d, 17.38, 0.35 + n * 0.29, 0.04, 0.025, 9.5, metal);
    box(d, 17, 5.35, 0.2, 0.25, 13, red);
  }
  // A pit apron and edge stripe, physically beside the circuit.
  ribbon(40, 180, track.halfWidth + 1.7, 32, 0.001, concrete);
  ribbon(40, 180, track.halfWidth + 2.5, track.halfWidth + 2.62, 0.009, white);
  for (let i = 0; i < 6; i++)
    for (let step = 0; step < 4; step++) {
      box(
        390 + i * 9,
        -25 - step * 2,
        0.45 + step * 0.8,
        1.8,
        0.25,
        8,
        concrete,
      );
      box(
        390 + i * 9,
        -25 - step * 2,
        0.7 + step * 0.8,
        1.2,
        0.3,
        7.6,
        step % 2 ? red : dark,
      );
    }
  for (let i = 0; i < 4; i++)
    box(1050 + i * 35, -33, 3.1, 8, 6.2, 14, concrete);
  const boxes = new Map();
  for (const mesh of [...root.children])
    if (mesh.isMesh && !mesh.isInstancedMesh && mesh.geometry === boxGeo) {
      mesh.updateMatrix();
      if (!boxes.has(mesh.material)) boxes.set(mesh.material, []);
      boxes.get(mesh.material).push(mesh.matrix.clone());
      root.remove(mesh);
    }
  for (const [material, matrices] of boxes) {
    const instances = new THREE.InstancedMesh(
      boxGeo,
      material,
      matrices.length,
    );
    matrices.forEach((matrix, i) => instances.setMatrixAt(i, matrix));
    instances.receiveShadow = true;
    root.add(instances);
  }
  const center = trackPose(track, 0);
  return { root, road: asphalt, center };
}
