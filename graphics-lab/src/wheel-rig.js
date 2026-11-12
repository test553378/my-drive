import * as THREE from "three";

// Keep steering, rolling and fixed brake calipers in separate frames.
export function extractWheelRig(model) {
  model.updateMatrixWorld(true);
  const root = new THREE.Group(),
    units = [];
  root.name = "External concept car";
  for (const name of [
    "WheelFrontL",
    "WheelFrontR",
    "WheelRearL",
    "WheelRearR",
  ]) {
    const wheel = model.getObjectByName(name);
    if (!wheel) throw Error(`GLB is missing wheel: ${name}`);
    const position = wheel.getWorldPosition(new THREE.Vector3()),
      axle = new THREE.Vector3(1, 0, 0).transformDirection(wheel.matrixWorld),
      // The source GLBs pose the front wheels at -30 degrees. Remove that
      // authoring yaw before adding our own steering/spin frames. Keep the
      // wheel's authored roll, side, scale and hub position intact.
      neutral = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        Math.atan2(axle.z, axle.x),
      ),
      outer = new THREE.Group(),
      spin = new THREE.Group();
    outer.position.copy(position);
    root.add(outer);
    outer.add(spin);
    root.updateMatrixWorld(true);
    for (const child of [...wheel.children]) {
      (/BrakePad/.test(child.name) ? outer : spin).attach(child);
      child.position.applyQuaternion(neutral);
      child.quaternion.premultiply(neutral);
    }
    wheel.removeFromParent();
    units.push({ outer, spin, front: name.startsWith("WheelFront") });
  }
  return { root, units };
}
