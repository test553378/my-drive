import * as THREE from "three";
import { edgePose, navigationSegments, raceRoadGraph } from "../roads.js";
import { missionNavigation, missionTarget, isWorking } from "../missions.js";

// Bounded world-space geometry: no lights, textures, ray tests or input handlers.
export function guidancePoints(s, limit = 250, spacing = 14) {
  const nav = missionNavigation(s),
    target = missionTarget(s);
  if (!nav || !target || nav.uTurn || isWorking(s) || s.phase !== "race")
    return { nav, points: [] };
  const segments = navigationSegments(s, nav, target),
    points = [];
  let walked = 0,
    next = 8;
  for (const seg of segments) {
    const length = Math.abs(seg.end - seg.start),
      dir = Math.sign(seg.end - seg.start) || 1;
    while (next <= walked + length && next <= limit) {
      const d = seg.start + (next - walked) * dir;
      points.push({
        ...edgePose(seg.edge, d, 0, dir),
        distance: next,
        edge: seg.edge.id,
      });
      next += spacing;
    }
    walked += length;
    if (walked > limit) break;
  }
  return { nav, points };
}
export function buildRoadGuidance() {
  const root = new THREE.Group();
  root.name = "Road mission guidance";
  const shape = new THREE.Shape();
  shape.moveTo(0, 3.4);
  shape.lineTo(-2.1, 0.6);
  shape.lineTo(-0.9, 0.6);
  shape.lineTo(-0.9, -2.4);
  shape.lineTo(0.9, -2.4);
  shape.lineTo(0.9, 0.6);
  shape.lineTo(2.1, 0.6);
  shape.closePath();
  const geometry = new THREE.ShapeGeometry(shape);
  geometry.rotateX(Math.PI / 2);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -3,
    polygonOffsetUnits: -3,
    toneMapped: false,
  });
  const arrows = new THREE.InstancedMesh(geometry, material, 24);
  arrows.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  arrows.frustumCulled = false;
  root.add(arrows);
  const positions = new Float32Array(2 * 86 * 3),
    indices = [];
  for (let i = 0; i < 85; i++) {
    const n = i * 2;
    indices.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
  }
  const ribbonGeo = new THREE.BufferGeometry();
  ribbonGeo.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage),
  );
  ribbonGeo.setIndex(indices);
  const line = new THREE.Mesh(
    ribbonGeo,
    new THREE.MeshBasicMaterial({
      color: 0x2be8fa,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    }),
  );
  line.frustumCulled = false;
  root.add(line);
  const uturn = new THREE.Group();
  uturn.name = "Ground U-turn";
  root.add(uturn);
  for (let i = 0; i < 9; i++) {
    const a = new THREE.Mesh(geometry, material),
      theta = (i * Math.PI) / 8;
    a.position.set(-2.5 * Math.cos(theta), 0.08, 2.5 * Math.sin(theta));
    a.rotation.y = theta;
    a.scale.setScalar(0.4);
    uturn.add(a);
  }
  const matrix = new THREE.Matrix4(),
    rotation = new THREE.Quaternion(),
    scale = new THREE.Vector3(),
    color = new THREE.Color(),
    up = new THREE.Vector3(0, 1, 0);
  let data = { visible: false, count: 0, uTurn: false, edges: [] };
  function update(s) {
    const { nav, points } = guidancePoints(s),
      active = s.phase === "race" && !!missionTarget(s) && !isWorking(s);
    root.visible = active;
    uturn.visible = active && !!nav?.uTurn;
    arrows.count = points.length;
    line.visible = points.length > 1;
    if (uturn.visible) {
      const road = s.road,
        edge = raceRoadGraph(s).edges[road.edge],
        p = edgePose(edge, road.d + 8 * road.direction, 0, road.direction);
      uturn.position.set(p.x, p.y + 0.14, p.z);
      uturn.rotation.set(p.pitch || 0, p.yaw, 0, "YXZ");
    }
    for (let i = 0; i < points.length; i++) {
      const p = points[i],
        near =
          nav.upcoming && Math.abs(p.distance - nav.upcoming.distance) < 45,
        boost = near
          ? 1.15 + 0.5 * (1 - Math.min(160, nav.upcoming.distance) / 160)
          : 1;
      rotation.setFromAxisAngle(up, p.yaw);
      rotation.multiply(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(1, 0, 0),
          p.pitch || 0,
        ),
      );
      matrix.compose(
        new THREE.Vector3(p.x, p.y + 0.065, p.z),
        rotation,
        scale.set(boost, boost, boost),
      );
      arrows.setMatrixAt(i, matrix);
      arrows.setColorAt(i, color.set(near ? 0xffe657 : 0x46efff));
    }
    arrows.instanceMatrix.needsUpdate = true;
    if (arrows.instanceColor) arrows.instanceColor.needsUpdate = true;
    // More closely spaced samples make the line follow the actual curved road.
    const dense = guidancePoints(s, 250, 3).points;
    for (let i = 0; i < dense.length; i++) {
      const p = dense[i];
      for (let j = 0; j < 2; j++) {
        const o = j ? 0.45 : -0.45,
          n = (i * 2 + j) * 3;
        positions[n] = p.x - p.tz * o;
        positions[n + 1] = p.y + 0.045;
        positions[n + 2] = p.z + p.tx * o;
      }
    }
    ribbonGeo.setDrawRange(0, Math.max(0, dense.length - 1) * 6);
    ribbonGeo.attributes.position.needsUpdate = true;
    data = {
      visible: active,
      count: points.length,
      uTurn: uturn.visible,
      edges: [...new Set(points.map((p) => p.edge))],
      upcoming: nav?.upcoming || null,
    };
  }
  return { root, update, stats: () => data };
}
