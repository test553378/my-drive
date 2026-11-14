import * as THREE from "three";
import { trackPose } from "../tracks.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { edgePose, playerPose, edgeWidth } from "../roads.js";
const Y = new THREE.Vector3(0, 1, 0);
const lerp = (a, b, t) =>
  new THREE.Vector3(a.x, a.y, a.z).lerp(new THREE.Vector3(b.x, b.y, b.z), t);
const corridorCache = new WeakMap();
export function branchClearance(graph, p) {
  if (!corridorCache.has(graph))
    corridorCache.set(
      graph,
      Object.values(graph.edges)
        .filter((e) => !e.main)
        .flatMap((e) => {
          const count = Math.ceil(e.length / 6);
          return Array.from({ length: count + 1 }, (_, i) => ({
            ...edgePose(e, (e.length * i) / count),
            width: edgeWidth(e, (e.length * i) / count),
          }));
        }),
    );
  let best = Infinity;
  for (const q of corridorCache.get(graph))
    best = Math.min(best, Math.hypot(p.x - q.x, p.z - q.z) - q.width);
  return best;
}
export function buildMissionWorld(textures, graph) {
  const root = new THREE.Group();
  root.name = "Emergency service roads";
  const mat = (color) =>
    new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.08 });
  const white = mat(0xe8ece8),
    stone = mat(0x8e968d),
    blue = mat(0x397db5),
    pink = mat(0xe89ab4),
    glass = new THREE.MeshPhysicalMaterial({
      color: 0x376273,
      roughness: 0.15,
      metalness: 0.25,
      clearcoat: 0.6,
    }),
    green = mat(0x389c70),
    dark = mat(0x253642),
    yellow = mat(0xe5b54b);
  const asphalt = new THREE.MeshStandardMaterial({
    map: textures.color,
    normalMap: textures.normal,
    roughnessMap: textures.rough,
    normalScale: new THREE.Vector2(0.3, 0.3),
    roughness: 1,
  });
  const boxGeo = new RoundedBoxGeometry(1, 1, 1, 2, 0.06),
    sphere = new THREE.SphereGeometry(1, 12, 8),
    cylinder = new THREE.CylinderGeometry(1, 1, 1, 10);
  function box(parent, x, y, z, w, h, d, material) {
    const o = new THREE.Mesh(boxGeo, material);
    o.position.set(x, y, z);
    o.scale.set(w, h, d);
    o.castShadow = true;
    o.receiveShadow = true;
    parent.add(o);
    return o;
  }
  function ribbon(edge, left, right, lower, material, marking = false) {
    const count = Math.ceil(edge.length / 3),
      pos = [],
      uv = [],
      ix = [];
    for (let i = 0; i <= count; i++)
      for (const off of [left, right]) {
        const d = (edge.length * i) / count,
          w = edgeWidth(edge, d),
          raw = typeof off === "function" ? off(w) : off;
        let o = raw;
        const center = edgePose(edge, d);
        if (material === asphalt && Number.isFinite(center.mainStation)) {
          const q = trackPose(graph.track, center.mainStation),
            normalOffset = -(center.x - q.x) * q.tz + (center.z - q.z) * q.tx,
            alignment = Math.max(0.5, center.tx * q.tx + center.tz * q.tz),
            side = graph.sites.find((s) => s.index === edge.site).side;
          // Draw the union at coplanar mouths rather than two flickering asphalt surfaces.
          o =
            side > 0
              ? Math.min(
                  w,
                  Math.max(
                    raw,
                    (graph.track.halfWidth - normalOffset - 0.06) / alignment,
                  ),
                )
              : Math.max(
                  -w,
                  Math.min(
                    raw,
                    (-graph.track.halfWidth - normalOffset + 0.06) / alignment,
                  ),
                );
        }
        const p = edgePose(edge, d, o);
        pos.push(p.x, p.y + lower, p.z);
        uv.push((o + w) / 2, (p.mainStation ?? (edge.uvStation || 0) + d) / 2);
      }
    for (let i = 0; i < count; i++) {
      const d = (edge.length * (i + 0.5)) / count,
        p = edgePose(edge, d);
      if (Number.isFinite(p.mainStation)) {
        const q = trackPose(graph.track, p.mainStation);
        if (marking) {
          const off =
              typeof left === "function" ? left(edgeWidth(edge, d)) : left,
            v = edgePose(edge, d, off);
          if (Math.hypot(v.x - q.x, v.z - q.z) < graph.track.halfWidth + 0.2)
            continue;
        }
      }
      const n = i * 2;
      ix.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
    }
    // Omitted mouth markings must not leave unused zero-normal vertices.
    const used = [...new Set(ix)],
      remap = new Map(used.map((old, i) => [old, i])),
      packed = used.flatMap((i) => pos.slice(i * 3, i * 3 + 3)),
      packedUV = used.flatMap((i) => uv.slice(i * 2, i * 2 + 2));
    pos.length = 0;
    pos.push(...packed);
    uv.length = 0;
    uv.push(...packedUV);
    for (let i = 0; i < ix.length; i++) ix[i] = remap.get(ix[i]);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(ix);
    g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, material);
    mesh.name = "service-road-" + edge.id;
    mesh.receiveShadow = true;
    root.add(mesh);
  }
  for (const e of Object.values(graph.edges))
    if (!e.main) {
      ribbon(
        e,
        (w) => -w - 2,
        (w) => w + 2,
        -0.13,
        stone,
      );
      ribbon(
        e,
        (w) => -w,
        (w) => w,
        0.003,
        asphalt,
      );
      for (const sign of [-1, 1])
        ribbon(
          e,
          (w) => sign * (w - 0.5) - 0.08,
          (w) => sign * (w - 0.5) + 0.08,
          0.025,
          white,
          true,
        );
      // Elevated mountain roads have actual supports, rather than floating ribbons.
      if (graph.courseId === "C02")
        for (let d = 12; d < e.length; d += 24) {
          const p = edgePose(e, d);
          box(root, p.x, (p.y - 4) / 2, p.z, 0.8, p.y + 4, 0.8, stone);
        }
    }
  const sites = [];
  for (const site of graph.sites.filter(
    (site) => graph.kind !== "police" && graph.sceneSites.includes(site.index),
  )) {
    const p = edgePose(graph.edges[site.scene.edge], site.scene.d),
      g = new THREE.Group();
    g.name =
      (graph.kind === "fire" ? "fire-site-" : "rescue-site-") + site.index;
    g.position.set(p.x - p.tz * 18, p.y, p.z + p.tx * 18);
    g.rotation.y = p.yaw - Math.PI / 2;
    root.add(g);
    box(g, 0, 0.05, 0, 28, 0.2, 23, stone);
    if (graph.courseId === "C02")
      for (const x of [-11, 11])
        for (const z of [-8, 8])
          box(g, x, -(p.y + 4) / 2, z, 0.8, p.y + 4, 0.8, stone);
    box(g, 0, 3.8, 0, 13, 7.6, 10, white);
    box(g, 0, 7.8, 0, 13.8, 0.35, 10.8, dark);
    box(g, 0, 1.6, -5.08, 2.1, 3.2, 0.12, blue);
    for (const x of [-4, 0, 4])
      for (const y of [2.5, 5.5])
        if (x || y > 3) box(g, x, y, -5.1, 2, 1.5, 0.12, glass);
    const flames = [];
    for (let i = 0; i < (graph.kind === "fire" ? 3 : 0); i++) {
      const fire = new THREE.Group();
      fire.position.set((i - 1) * 3.8, 2.9 + (i === 1 ? 2.8 : 0), -5.6);
      for (const [radius, height, color] of [
        [1.05, 2.4, 0xe4511c],
        [0.72, 1.8, 0xff9827],
        [0.38, 1.3, 0xffed83],
      ]) {
        const mesh = new THREE.Mesh(
          new THREE.LatheGeometry(
            [
              new THREE.Vector2(0, 0),
              new THREE.Vector2(radius * 0.7, height * 0.12),
              new THREE.Vector2(radius, height * 0.28),
              new THREE.Vector2(radius * 0.55, height * 0.62),
              new THREE.Vector2(0, height),
            ],
            12,
          ),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0.93,
            depthWrite: false,
          }),
        );
        mesh.position.z = -(1.05 - radius) * 0.85;
        fire.add(mesh);
      }
      g.add(fire);
      flames.push(fire);
    }
    const pad = new THREE.Group();
    pad.position.set(p.x, p.y + 0.04, p.z);
    pad.rotation.y = p.yaw;
    box(pad, 0, 0, 0, 9, 0.025, 12, green);
    for (const side of [-1, 1])
      box(pad, side * 4.2, 0.025, 0, 0.15, 0.03, 11, white);
    root.add(pad);
    sites[site.index] = { group: g, flames, pad, pose: p };
  }
  const hospitals = [];
  for (const h of graph.hospitals) {
    const p = edgePose(graph.edges[h.edge], h.d),
      g = new THREE.Group(),
      color = h.id === "hospital-0" ? blue : pink;
    g.name = h.id;
    g.position.set(p.x - p.tz * 19, p.y, p.z + p.tx * 19);
    g.rotation.y = p.yaw - Math.PI / 2;
    root.add(g);
    box(g, 0, 0.03, 0, 31, 0.15, 23, stone);
    if (graph.courseId === "C02")
      for (const x of [-13, 13])
        for (const z of [-8, 8])
          box(g, x, -(p.y + 4) / 2, z, 0.8, p.y + 4, 0.8, stone);
    box(g, 0, 4, 0, 18, 8, 12, white);
    box(g, 0, 8.2, 0, 18.8, 0.5, 12.8, color);
    box(g, 0, 1.8, -6.1, 3.6, 3.6, 0.15, glass);
    for (const x of [-6, -3, 3, 6])
      for (const y of [2.5, 5.8]) box(g, x, y, -6.12, 1.6, 1.6, 0.14, glass);
    // A blue/pink medical sign, without the protected Red Cross emblem.
    box(g, 0, 6.3, -6.25, 2.1, 2.1, 0.18, color);
    box(g, 0, 6.3, -6.4, 1.4, 0.35, 0.06, white);
    box(g, 0, 6.3, -6.4, 0.35, 1.4, 0.06, white);
    const pad = new THREE.Group();
    pad.position.set(p.x, p.y + 0.04, p.z);
    pad.rotation.y = p.yaw;
    box(pad, 0, 0, 0, 9, 0.03, 12, color);
    root.add(pad);
    hospitals[h.index] = { group: g, pose: p };
  }
  // Batch static architecture; moving actors and flames keep independent transforms.
  root.updateMatrixWorld(true);
  const batches = new Map();
  root.traverse((o) => {
    if (o.isMesh && o.geometry === boxGeo) {
      if (!batches.has(o.material)) batches.set(o.material, []);
      batches.get(o.material).push(o);
    }
  });
  for (const [material, objects] of batches) {
    const inst = new THREE.InstancedMesh(boxGeo, material, objects.length);
    objects.forEach((o, i) => {
      inst.setMatrixAt(i, o.matrixWorld);
      o.removeFromParent();
    });
    inst.castShadow = inst.receiveShadow = true;
    root.add(inst);
  }
  function person(color) {
    const g = new THREE.Group(),
      shirt = mat(color),
      skin = mat(0xe9bb91),
      limbs = [];
    box(g, 0, 1.05, 0, 0.52, 0.64, 0.32, shirt);
    const head = new THREE.Mesh(sphere, skin);
    head.scale.setScalar(0.23);
    head.position.y = 1.62;
    g.add(head);
    for (const side of [-1, 1])
      for (const arm of [false, true]) {
        const joint = new THREE.Group(),
          mesh = new THREE.Mesh(cylinder, arm ? shirt : dark);
        mesh.scale.set(0.09, arm ? 0.54 : 0.62, 0.09);
        mesh.position.y = -(arm ? 0.27 : 0.31);
        joint.position.set(side * (arm ? 0.35 : 0.15), arm ? 1.28 : 0.76, 0);
        joint.add(mesh);
        g.add(joint);
        limbs.push(joint);
      }
    root.add(g);
    return { root: g, limbs };
  }
  const crew = person(0x428d8a),
    patient = person(0x8dbb64),
    officer = person(0x35618e),
    driver = person(0xe3af51);
  const water = new THREE.InstancedMesh(
    cylinder,
    new THREE.MeshStandardMaterial({
      color: 0x88d9ff,
      roughness: 0.12,
      transparent: true,
      opacity: 0.8,
    }),
    20,
  );
  water.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  root.add(water);
  const spray = new THREE.InstancedMesh(
    sphere,
    new THREE.MeshBasicMaterial({
      color: 0xc6f0ff,
      transparent: true,
      opacity: 0.7,
    }),
    24,
  );
  spray.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  root.add(spray);
  const matrix = new THREE.Matrix4(),
    q = new THREE.Quaternion();
  let hits = [];
  const workStages = new Set([
    "FIRE_ACTION",
    "PATIENT_WAIT",
    "BOARDING",
    "HANDOFF",
    "SUSPECT_STOPPED",
    "POLICE_CHECK",
    "SUCCESS",
  ]);
  function frame(s, suspectPose) {
    const m = s.missions?.active,
      p = playerPose(s);
    hits = [];
    water.visible = spray.visible = false;
    for (const a of [crew, patient, officer, driver]) a.root.visible = false;
    for (const [i, site] of sites.entries())
      for (const [j, fire] of (site?.flames || []).entries()) {
        const showing = m?.kind === "fire" && m.site === i && m.fires[j] > 0;
        fire.visible = showing;
        if (showing) {
          const size = Math.max(0.02, m.fires[j] / 2.5);
          fire.scale.set(
            size,
            size * (1 + Math.sin(s.time * 9 + j) * 0.06),
            size,
          );
          if (m.stage === "FIRE_ACTION")
            hits.push({
              id: "fire-" + j,
              label: "ひを ながおし",
              point: fire
                .getWorldPosition(new THREE.Vector3())
                .add(new THREE.Vector3(0, 0.7, 0)),
            });
        }
      }
    if (!m) return;
    const hospital =
        m.stage === "HANDOFF" ||
        (m.stage === "SUCCESS" && m.kind === "ambulance"),
      location = hospital ? hospitals[m.hospital] : sites[m.site],
      focus =
        location?.group.position.clone() || new THREE.Vector3(p.x, p.y, p.z);
    const rp = location?.pose || p,
      front = {
        x: focus.x + rp.tz * 6,
        y: rp.y + 0.05,
        z: focus.z - rp.tx * 6,
      },
      door = { x: focus.x + rp.tz * 4, y: rp.y + 0.05, z: focus.z - rp.tx * 4 },
      car = { x: p.x - p.tz * 2, y: p.y + 0.05, z: p.z + p.tx * 2 };
    function actor(a, position, walking = true) {
      a.root.visible = true;
      a.root.position.copy(position);
      a.root.rotation.y = Math.atan2(front.x - car.x, front.z - car.z);
      a.limbs.forEach(
        (l, i) =>
          (l.rotation.x = walking
            ? Math.sin(s.time * 7) * (i % 2 ? -0.55 : 0.55)
            : 0),
      );
    }
    if (m.kind === "ambulance") {
      if (m.stage === "PATIENT_WAIT") {
        actor(patient, lerp(front, front, 0), false);
        hits.push({
          id: "patient",
          label: "ひとを タッチ",
          point: patient.root.position.clone().add(new THREE.Vector3(0, 1, 0)),
        });
      }
      if (m.stage === "BOARDING") {
        const t = m.animation / 5;
        actor(crew, lerp(car, front, Math.min(1, t / 0.45)));
        if (t > 0.45) {
          actor(crew, lerp(front, car, (t - 0.45) / 0.55));
          actor(patient, lerp(front, car, (t - 0.45) / 0.55));
          patient.root.position.x += rp.tz * 0.6;
          patient.root.position.z -= rp.tx * 0.6;
        } else actor(patient, lerp(front, front, 0), false);
      }
      if (m.stage === "HANDOFF") {
        const t = m.animation / 5;
        if (t < 0.94) {
          actor(crew, lerp(car, door, t));
          actor(patient, lerp(car, door, t));
          patient.root.position.x += rp.tz * 0.6;
          patient.root.position.z -= rp.tx * 0.6;
        }
      }
    }
    if (
      m.kind === "police" &&
      suspectPose &&
      ["SUSPECT_STOPPED", "POLICE_CHECK", "SUCCESS"].includes(m.stage)
    ) {
      const stop = {
        x: suspectPose.x - suspectPose.tz * 2,
        y: suspectPose.y + 0.05,
        z: suspectPose.z + suspectPose.tx * 2,
      };
      actor(driver, lerp(stop, stop, 0), false);
      if (m.stage === "SUSPECT_STOPPED")
        hits.push({
          id: "suspect",
          label: "くるまを タッチ",
          point: new THREE.Vector3(
            suspectPose.x,
            suspectPose.y + 1.2,
            suspectPose.z,
          ),
        });
      if (m.stage === "POLICE_CHECK")
        actor(officer, lerp(car, stop, Math.min(1, m.animation / 3)));
    }
    if (m.stage === "FIRE_ACTION" && m.holding >= 0 && m.fires[m.holding] > 0) {
      const end = sites[m.site].flames[m.holding]
        .getWorldPosition(new THREE.Vector3())
        .add(new THREE.Vector3(0, 0.8, 0));
      const start = new THREE.Vector3(
        p.x - p.tz * 1.4,
        p.y + 1.7,
        p.z + p.tx * 1.4,
      );
      const point = (t) =>
        start
          .clone()
          .lerp(end, t)
          .add(new THREE.Vector3(0, Math.sin(t * Math.PI) * 2, 0));
      for (let i = 0; i < 20; i++) {
        const a = point(i / 20),
          b = point((i + 1) / 20),
          v = b.clone().sub(a);
        q.setFromUnitVectors(Y, v.clone().normalize());
        matrix.compose(
          a.add(b).multiplyScalar(0.5),
          q,
          new THREE.Vector3(0.09, v.length(), 0.09),
        );
        water.setMatrixAt(i, matrix);
      }
      for (let i = 0; i < 24; i++) {
        const t = (s.time * 1.7 + i / 24) % 1,
          a = point(t);
        a.x += Math.sin(i * 7 + s.time * 8) * 0.18;
        a.z += Math.cos(i * 3 + s.time * 9) * 0.18;
        matrix.compose(
          a,
          new THREE.Quaternion(),
          new THREE.Vector3(0.08, 0.08, 0.08),
        );
        spray.setMatrixAt(i, matrix);
      }
      water.instanceMatrix.needsUpdate =
        spray.instanceMatrix.needsUpdate = true;
      water.visible = spray.visible = true;
      water.computeBoundingSphere();
      spray.computeBoundingSphere();
    }
    if (m.kind === "fire" && m.stage === "SUCCESS") {
      const age = 1.1 - m.celebration,
        center = sites[m.site].group.position;
      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2,
          r = 1 + age * 4;
        matrix.compose(
          new THREE.Vector3(
            center.x + Math.cos(angle) * r,
            center.y + 3 + Math.sin(age * Math.PI) * 3,
            center.z + Math.sin(angle) * r,
          ),
          new THREE.Quaternion(),
          new THREE.Vector3(0.1, 0.16, 0.1),
        );
        spray.setMatrixAt(i, matrix);
      }
      spray.instanceMatrix.needsUpdate = true;
      spray.visible = true;
      spray.computeBoundingSphere();
    }
  }
  function workView(s, suspectPose) {
    const m = s.missions?.active;
    if (!m || !workStages.has(m.stage)) return null;
    if (m.kind === "police" && suspectPose) {
      const p = playerPose(s),
        focus = new THREE.Vector3(p.x, p.y, p.z)
          .add(new THREE.Vector3(suspectPose.x, suspectPose.y, suspectPose.z))
          .multiplyScalar(0.5);
      return {
        eye: focus
          .clone()
          .add(new THREE.Vector3(-suspectPose.tz * 18, 9, suspectPose.tx * 18)),
        aim: focus.clone().add(new THREE.Vector3(0, 1.2, 0)),
        fov: 48,
      };
    }
    const h =
        m.kind === "ambulance" &&
        (m.stage === "HANDOFF" || m.stage === "SUCCESS"),
      location = h ? hospitals[m.hospital] : sites[m.site],
      p = location.pose,
      focus = location.group.position.clone();
    return {
      eye: focus.clone().add(new THREE.Vector3(p.tz * 25, 9, -p.tx * 25)),
      aim: focus.clone().add(new THREE.Vector3(0, 3, 0)),
      fov: 43,
    };
  }
  function targets(camera, width, height) {
    return hits.map((h) => {
      const p = h.point.clone().project(camera);
      return {
        ...h,
        x: (p.x * 0.5 + 0.5) * width,
        y: (-0.5 * p.y + 0.5) * height,
        visible:
          p.z > -1 && p.z < 1 && Math.abs(p.x) < 1.1 && Math.abs(p.y) < 1.1,
      };
    });
  }
  return { root, sites, hospitals, frame, workView, targets };
}
