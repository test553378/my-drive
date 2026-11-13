import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { buildBody, buildWheel, buildAero } from "../vehicles.js";
import { vehicle, wheelLayout } from "../vehicle-config.js";
import { extractWheelRig } from "../graphics-lab/src/wheel-rig.js";
import { mergeRigidParts } from "../graphics-lab/src/merge-parts.js";
import { ShapeMesh, BodyMesh, release } from "./mesh.js";
export const PAINT = [0xe42d29, 0x1b66ca, 0xf8b419, 0x249672];
const rgb = (index) => {
  const c = new THREE.Color(PAINT[index]).getRGB(
    new THREE.Color(),
    THREE.SRGBColorSpace,
  );
  return [c.r, c.g, c.b];
};

// Original utility bodies: rounded panels with real wheel openings, glazing,
// pillars and interiors. No manufacturer logos or downloaded utility assets.
export function utilityBody(model, color, wide = false) {
  const spec = vehicle(model),
    root = new THREE.Group(),
    w = spec.width + (wide ? 0.18 : 0),
    l = spec.length,
    paint = new THREE.MeshPhysicalMaterial({
      color: PAINT[color],
      metalness: 0.5,
      roughness: 0.26,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
    }),
    white = new THREE.MeshPhysicalMaterial({
      color: 0xe5e6dc,
      metalness: 0.25,
      roughness: 0.3,
      clearcoat: 0.7,
    }),
    dark = new THREE.MeshStandardMaterial({ color: 0x171e24, roughness: 0.7 }),
    chrome = new THREE.MeshStandardMaterial({
      color: 0x9fa8aa,
      metalness: 0.9,
      roughness: 0.28,
    }),
    glass = new THREE.MeshPhysicalMaterial({
      color: 0x749ca9,
      metalness: 0.12,
      roughness: 0.09,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
    red = new THREE.MeshBasicMaterial({ color: 0xe82324 }),
    lamp = new THREE.MeshBasicMaterial({ color: 0xf3f0d8 }),
    bodyMat = spec.kind === "ambulance" ? white : paint;
  function box(x, y, z, b, h, d, mat = bodyMat, round = true) {
    const g =
      round && Math.min(b, h, d) > 0.085
        ? new RoundedBoxGeometry(
            b,
            h,
            d,
            2,
            Math.min(0.1, b * 0.12, h * 0.12, d * 0.12),
          )
        : new THREE.BoxGeometry(b, h, d);
    const m = new THREE.Mesh(g, mat);
    m.position.set(x, y, z);
    root.add(m);
    return m;
  }
  const beam = (a, b, r, mat = chrome) => {
    const delta = new THREE.Vector3(...b).sub(new THREE.Vector3(...a));
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, delta.length(), 12),
      mat,
    );
    mesh.position.fromArray(a).addScaledVector(delta, 0.5);
    mesh.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      delta.normalize(),
    );
    root.add(mesh);
  };
  function skirt(side, start = -l / 2, end = l / 2, top = 1.5) {
    const shape = new THREE.Shape();
    shape.moveTo(start, 0.42);
    for (const z of spec.wheelZ
      .filter((z) => z > start + spec.radius && z < end - spec.radius)
      .sort((a, b) => a - b)) {
      const r = spec.radius + 0.09;
      shape.lineTo(z - r, 0.42);
      shape.lineTo(z - r, spec.radius);
      shape.absarc(z, spec.radius, r, Math.PI, 0, true);
      shape.lineTo(z + r, 0.42);
    }
    shape.lineTo(end, 0.42);
    shape.lineTo(end, top);
    shape.lineTo(start, top);
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelSize: 0.025,
      bevelThickness: 0.025,
      bevelSegments: 2,
      steps: 1,
      curveSegments: 16,
    });
    const m = new THREE.Mesh(g, bodyMat);
    m.rotation.y = -Math.PI / 2;
    m.position.x = (side * w) / 2 + (side > 0 ? 0.04 : 0.04);
    root.add(m);
  }
  box(0, 0.43, 0, w * 0.86, 0.2, l * 0.96, dark);
  if (spec.kind === "bus") {
    for (const side of [-1, 1]) {
      skirt(side, -l / 2, l / 2, 1.55);
      box((side * w) / 2, 1.64, 0, 0.08, 0.12, l, white);
      box((side * w) / 2, 2.83, 0, 0.08, 0.16, l, bodyMat);
      for (let z = -l / 2 + 0.5; z < l / 2 - 0.3; z += 0.86) {
        box((side * w) / 2, 2.22, z, 0.035, 1.08, 0.72, glass, false);
        box((side * w) / 2, 2.22, z + 0.42, 0.075, 1.16, 0.075, dark, false);
        box(side * w * 0.3, 1.05, z, 0.4, 0.45, 0.44, dark);
        box(side * w * 0.3, 1.35, z - 0.12, 0.42, 0.5, 0.12, dark);
      }
      box(side * (w / 2 + 0.015), 1.24, 0, 0.05, 0.14, l * 0.98, white, false);
    }
    box(0, 2.94, 0, w + 0.02, 0.18, l, white);
    box(0, 2.19, l / 2 - 0.02, w * 0.9, 1.12, 0.05, glass, false);
    box(0, 2.19, -l / 2, w * 0.9, 1.1, 0.05, glass, false);
    box(0, 1.1, l / 2, w, 0.9, 0.16, bodyMat);
    box(0, 1.1, -l / 2, w, 0.9, 0.16, bodyMat);
    box(0, 2.72, l / 2 + 0.035, 1.35, 0.22, 0.045, dark, false);
    for (const x of [-0.6, -0.3, 0, 0.3, 0.6])
      box(x, 2.72, l / 2 + 0.061, 0.18, 0.05, 0.02, lamp, false);
    for (const side of [-1, 1])
      box(side * (w / 2 + 0.04), 1.97, l * 0.25, 0.04, 1.2, 0.92, glass, false);
    box(0, 3.06, -0.7, w * 0.65, 0.15, 1.65, chrome);
  } else {
    const cabBack = spec.kind === "truck" ? l * 0.12 : l * 0.04,
      cabFront = l / 2 - 0.08;
    for (const side of [-1, 1]) {
      skirt(side, cabBack, cabFront, 1.45);
      box(
        side * w * 0.48,
        1.94,
        (cabBack + cabFront) / 2,
        0.035,
        0.91,
        cabFront - cabBack - 0.18,
        glass,
        false,
      );
      box(
        side * w * 0.48,
        2.43,
        (cabBack + cabFront) / 2,
        0.12,
        0.12,
        cabFront - cabBack,
        bodyMat,
      );
      box(side * w * 0.48, 1.94, cabBack + 0.07, 0.12, 1, 0.12, bodyMat);
      box(side * w * 0.48, 1.94, cabFront - 0.02, 0.13, 1, 0.12, bodyMat);
      box(
        side * w * 0.47,
        1.3,
        cabBack + 0.4,
        0.055,
        0.04,
        0.28,
        chrome,
        false,
      );
      beam(
        [side * w * 0.46, 1.95, cabFront - 0.2],
        [side * w * 0.62, 1.95, cabFront - 0.15],
        0.03,
      );
      box(side * w * 0.62, 1.9, cabFront - 0.15, 0.14, 0.34, 0.2, dark);
    }
    box(
      0,
      2.48,
      (cabBack + cabFront) / 2,
      w,
      0.18,
      cabFront - cabBack + 0.12,
      bodyMat,
    );
    box(0, 1.94, cabFront, w * 0.88, 0.92, 0.04, glass, false);
    box(0, 1.13, cabFront, w, 0.62, 0.24, bodyMat);
    box(0, 1.05, cabFront + 0.135, w * 0.5, 0.27, 0.03, dark, false);
    for (const y of [0.96, 1.04, 1.12])
      box(0, y, cabFront + 0.155, w * 0.48, 0.02, 0.025, chrome, false);
    box(0, 0.73, cabFront + 0.16, w * 0.96, 0.18, 0.2, chrome);
    box(0, 1.55, cabBack + 0.07, w * 0.8, 0.1, 0.4, dark);
    for (const side of [-1, 1]) {
      box(
        side * w * 0.25,
        1.05,
        (cabBack + cabFront) / 2,
        0.52,
        0.4,
        0.5,
        dark,
      );
      box(
        side * w * 0.25,
        1.35,
        (cabBack + cabFront) / 2 - 0.12,
        0.52,
        0.55,
        0.15,
        dark,
      );
      const tireStart = -l / 2;
      skirt(side, tireStart, cabBack - 0.08, 1.5);
    }
    if (spec.kind === "truck") {
      box(0, 1.78, -l * 0.2, w * 1.01, 2.24, l * 0.59, chrome);
      for (const side of [-1, 1])
        for (let z = -l * 0.48; z < l * 0.08; z += 0.22)
          box(side * w * 0.513, 1.78, z, 0.025, 2.03, 0.028, white, false);
      for (const x of [-w * 0.25, w * 0.25]) {
        box(x, 1.78, -l * 0.5 - 0.035, w * 0.48, 2.1, 0.04, white, false);
        beam([x, 1.05, -l * 0.5 - 0.065], [x, 2.55, -l * 0.5 - 0.065], 0.018);
      }
    } else {
      box(0, 2.07, -l * 0.23, w, 1.22, l * 0.54, bodyMat);
      box(0, 2.69, -l * 0.23, w, 0.15, l * 0.54, white);
      for (const side of [-1, 1]) {
        box(
          side * w * 0.51,
          1.34,
          -l * 0.22,
          0.045,
          0.18,
          l * 0.58,
          spec.kind === "ambulance" ? paint : white,
          false,
        );
        if (spec.kind === "ambulance") {
          const green = new THREE.MeshStandardMaterial({
            color: 0x2e926a,
            roughness: 0.4,
          });
          box(side * w * 0.512, 2.13, -0.7, 0.025, 0.56, 0.18, green, false);
          box(side * w * 0.514, 2.13, -0.7, 0.025, 0.18, 0.58, green, false);
          box(side * w * 0.51, 2.24, -l * 0.35, 0.03, 0.43, 0.72, glass, false);
        } else {
          for (let z = -l * 0.38; z < l * 0.04; z += 0.85) {
            box(side * w * 0.51, 1.92, z, 0.04, 0.9, 0.73, chrome, false);
            for (let y = 1.55; y < 2.4; y += 0.09)
              box(side * w * 0.518, y, z, 0.02, 0.018, 0.7, dark, false);
          }
        }
      }
      if (spec.kind === "fire") {
        for (const side of [-1, 1])
          beam(
            [side * 0.48, 2.85, -l * 0.44],
            [side * 0.48, 2.85, l * 0.36],
            0.05,
          );
        for (let z = -l * 0.42; z < l * 0.35; z += 0.3)
          beam([-0.48, 2.85, z], [0.48, 2.85, z], 0.026);
        for (const side of [-1, 1])
          box(side * w * 0.54, 0.94, -l * 0.32, 0.16, 0.28, 0.65, chrome);
      }
    }
  }
  for (const side of [-1, 1]) {
    box(side * w * 0.34, 0.91, l / 2 + 0.03, 0.35, 0.14, 0.04, lamp, false);
    box(side * w * 0.34, 0.8, -l / 2 - 0.03, 0.3, 0.13, 0.04, red, false);
  }
  box(0, 0.98, -l / 2 - 0.015, w * 0.96, 1.05, 0.12, bodyMat);
  box(0, 0.52, -l / 2 - 0.08, w * 0.98, 0.16, 0.2, chrome);
  root.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = false;
    }
  });
  mergeRigidParts(root);
  return root;
}

export class VehicleFactory {
  constructor(assets) {
    this.assets = assets;
    this.templates = new Map();
  }
  async load(name) {
    if (this.templates.has(`${name}:0`)) return;
    const raw = await this.assets.model(name);
    for (const variant of [0, 1, 5]) {
      const source = raw.clone(true);
      if (variant === 1)
        for (const part of [
          "BodyRoofPanel",
          "BodyWindowsRearSides",
          "BodyRearwindow",
          "BodyDoorRWindow",
          "BodyDoorLWindow",
          "BodyDoorRWindowGasket",
          "BodyDoorLWindowGasket",
        ])
          source.getObjectByName(part)?.removeFromParent();
      const { root, units } = extractWheelRig(source);
      for (const unit of units) mergeRigidParts(unit.spin);
      mergeRigidParts(source);
      source.position.y = 0.004;
      root.add(source);
      for (const [index, unit] of units
        .sort(
          (a, b) =>
            a.outer.position.z - b.outer.position.z ||
            a.outer.position.x - b.outer.position.x,
        )
        .entries()) {
        unit.outer.name = `axle-${index}`;
        unit.spin.name = `roll-${index}`;
      }
      root.traverse((o) => {
        if (o.geometry) o.geometry.userData.shared = true;
        if (!o.isMesh) return;
        o.castShadow = true;
        o.receiveShadow = false;
        for (const m of [].concat(o.material)) {
          m.userData.shared = true;
          if (m.name?.startsWith("Paint 1")) {
            m.clearcoat = 1;
            m.clearcoatRoughness = 0.18;
            m.normalScale?.set(0.1, 0.1);
          }
          if (m.name === "Glass") {
            m.transmission = 0;
            m.transparent = true;
            m.opacity = 0.35;
            m.depthWrite = false;
            m.roughness = 0.06;
          }
        }
      });
      this.templates.set(`${name}:${variant}`, root);
    }
  }
  create(setup, modelName, distant = false) {
    const spec = vehicle(setup.model),
      root = new THREE.Group(),
      body = new THREE.Group(),
      wheels = [],
      lights = [];
    root.add(body);
    const external = [0, 1, 5].includes(setup.model);
    if (external) {
      const base = this.templates
        .get(`${distant ? "concept-rival.glb" : modelName}:${setup.model}`)
        .clone(true);
      root.add(base);
      base.traverse((o) => {
        if (o.isMesh && o.material.name === "Paint 1 Carmine") {
          o.material = o.material.clone();
          o.material.userData = {};
          o.material.color.set(PAINT[setup.color]);
        }
      });
      for (let i = 0; i < 4; i++) {
        const outer = base.getObjectByName(`axle-${i}`),
          spin = base.getObjectByName(`roll-${i}`),
          front = outer.position.z > 0;
        const rest = outer.position.clone();
        if (setup.parts.tyres === 1) {
          for (const child of [...spin.children]) spin.remove(child);
          const replacement = buildWheel(ShapeMesh, 1, !distant).object;
          replacement.scale.setScalar(spec.radius / 0.43);
          spin.add(replacement);
        }
        wheels.push({ outer, spin, front, rest });
      }
      base.scale.x = setup.parts.body ? 1.1 : 1;
      body.add(
        ...base.children.filter((c) => !c.name.startsWith("axle-")).slice(),
      );
      body.scale.x = setup.parts.body ? 1.1 : 1;
      if (setup.model === 5) {
        const stripe = new THREE.MeshStandardMaterial({
          color: 0xe3e6df,
          metalness: 0.3,
          roughness: 0.3,
        });
        for (const side of [-1, 1]) {
          const panel = new THREE.Mesh(
            new RoundedBoxGeometry(0.035, 0.16, 1.3, 2, 0.015),
            stripe,
          );
          panel.position.set(side * 1.03, 0.72, -0.05);
          body.add(panel);
        }
      }
    } else {
      const shape = [1, 4, 5].includes(setup.model)
        ? buildBody(
            BodyMesh,
            rgb(setup.color),
            setup.model,
            setup.parts.body,
            !distant,
          ).object
        : utilityBody(setup.model, setup.color, !!setup.parts.body);
      body.add(shape);
      const geometry = buildWheel(
        ShapeMesh,
        setup.parts.tyres,
        !distant,
      ).object;
      for (const wheel of wheelLayout(setup.model, setup.parts.body)) {
        const outer = new THREE.Group(),
          spin = new THREE.Group(),
          copy = geometry.clone(true);
        copy.scale.setScalar(spec.radius / 0.43);
        spin.add(copy);
        outer.add(spin);
        outer.position.set(wheel.x, spec.radius + 0.01, wheel.z);
        root.add(outer);
        wheels.push({
          outer,
          spin,
          front: wheel.z > 0,
          rest: outer.position.clone(),
        });
      }
    }
    if (external && setup.parts.aero) {
      const carbon = new THREE.MeshStandardMaterial({
        color: 0x171d20,
        metalness: 0.25,
        roughness: 0.48,
      });
      const piece = (x, y, z, w, h, l) => {
        const mesh = new THREE.Mesh(
          new RoundedBoxGeometry(
            w,
            h,
            l,
            2,
            Math.min(0.025, h * 0.4, w * 0.4, l * 0.4),
          ),
          carbon,
        );
        mesh.position.set(x, y, z);
        body.add(mesh);
      };
      // Narrow carbon lips follow the bumper; no rectangular stage under the car.
      piece(0, 0.17, 2.29, 1.72, 0.035, 0.19);
      piece(0, 0.21, -2.2, 1.7, 0.05, 0.25);
      for (const side of [-1, 1])
        piece(side * 1.025, 0.25, -0.04, 0.055, 0.055, 2.5);
      if (setup.parts.aero === 2) {
        piece(0, 1.1, -1.94, 1.86, 0.06, 0.35);
        for (const side of [-1, 1]) {
          piece(side * 0.94, 1.14, -1.94, 0.025, 0.23, 0.38);
          piece(side * 0.52, 0.87, -1.94, 0.055, 0.43, 0.07);
        }
      }
    } else {
      const aero = buildAero(
        BodyMesh,
        setup.model,
        setup.parts.body,
        setup.parts.aero,
      );
      if (aero) body.add(aero.object);
    }
    if (spec.emergency) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0x1d2834,
        roughness: 0.25,
      });
      const bar = new THREE.Mesh(
        new RoundedBoxGeometry(spec.width * 0.6, 0.13, 0.3, 2, 0.04),
        mat,
      );
      bar.position.set(0, spec.roof + 0.04, 0);
      body.add(bar);
      for (const side of [-1, 1]) {
        const m = new THREE.MeshStandardMaterial({
          color: side < 0 ? 0xe92323 : 0x176aff,
          emissive: side < 0 ? 0xff1111 : 0x115bff,
          emissiveIntensity: 0.02,
          metalness: 0.15,
          roughness: 0.18,
        });
        const light = new THREE.Mesh(
          new RoundedBoxGeometry(0.3, 0.13, 0.28, 2, 0.035),
          m,
        );
        light.position.set(side * 0.38, spec.roof + 0.11, 0);
        body.add(light);
        lights.push(light);
      }
    }
    root.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = false;
      }
    });
    return {
      root,
      body,
      wheels,
      lights,
      external,
      setup: JSON.parse(JSON.stringify(setup)),
      modelName: external
        ? distant
          ? "concept-rival.glb"
          : modelName
        : `original-${spec.kind}`,
    };
  }
  animate(instance, motion, reduced = false) {
    const spec = vehicle(instance.setup.model),
      lean = spec.kind === "bike" ? -2.1 : 1;
    instance.body.rotation.z = reduced ? 0 : (motion.roll || 0) * lean;
    instance.body.rotation.x = reduced ? 0 : motion.pitch || 0;
    for (const [i, w] of instance.wheels.entries()) {
      const flat = motion.flatVisual?.[i] || 0,
        vertical = 1 - flat * 0.45;
      w.spin.rotation.x = motion.wheelAngle || 0;
      w.outer.rotation.y = w.front ? -(motion.motionSteer || 0) * 0.035 : 0;
      w.outer.scale.y = vertical;
      w.outer.position.y = w.rest.y - spec.radius * (1 - vertical);
    }
    for (const [i, l] of instance.lights.entries())
      l.material.emissiveIntensity =
        motion.siren &&
        motion.phase === "race" &&
        (Math.floor(motion.time * 5) + i) % 2 === 0
          ? 2
          : 0.02;
  }
  dispose(instance) {
    if (instance) release(instance.root, { keepShared: true });
  }
}
