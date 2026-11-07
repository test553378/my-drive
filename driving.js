// Pure driving simulation: metres, seconds, radians. No browser or storage access.
export const LAP = 1400;
export const TOTAL = LAP * 2;
export const ROAD = 9.7;
export const EDGE = ROAD - 1.75;
export const TAU = Math.PI * 2;
export const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
export function center(z) {
  return (
    15 * Math.sin((z * TAU) / LAP) +
    7.8 * Math.sin((z * TAU * 2) / LAP + 0.45) +
    4.6 * Math.sin((z * TAU * 3) / LAP + 0.9)
  );
}
export const slope = (z) => (center(z + 1) - center(z - 1)) / 2;
export function createRivals() {
  return [
    { z: 125, v: 37.4, l: -3.4, c: 1, wheelAngle: 0 },
    { z: 87, v: 38.3, l: 3.1, c: 2, wheelAngle: 0 },
    { z: 51, v: 37, l: -4.3, c: 3, wheelAngle: 0 },
    { z: 20, v: 36.2, l: 4.4, c: 1, wheelAngle: 0 },
  ];
}
export function createRace(color = 0, model = 0) {
  return {
    phase: "menu",
    z: 0,
    offset: 0,
    v: 0,
    steerL: false,
    steerR: false,
    steerV: 0,
    boost: 0,
    charge: 100,
    time: 0,
    lap: 1,
    rank: 5,
    color,
    model,
    prev: 0,
    roll: 0,
    pitch: 0,
    camX: center(0),
    camZ: 0,
    camH: 3.45,
    hit: -20,
    count: 3.2,
    wheelAngle: 0,
    bounce: 0,
  };
}
export function activateBoost(state) {
  if (state.phase !== "race" || state.charge < 60 || state.boost > 0)
    return false;
  state.charge = 0;
  state.boost = 2.55;
  return true;
}
export function advance(state, rivals, seconds) {
  const dt = clamp(Number.isFinite(seconds) ? seconds : 0, 0, 0.05);
  if (state.phase === "countdown") {
    state.count -= dt;
    if (state.count <= -0.26) state.phase = "race";
    return null;
  }
  if (state.phase !== "race") return null;
  state.time += dt;
  state.boost = Math.max(0, state.boost - dt);
  state.charge = Math.min(100, state.charge + dt * 12);
  const dir = Number(state.steerR) - Number(state.steerL);
  const previousSpeed = state.v;
  const targetSpeed = 44 + (state.boost > 0 ? 18 : 0);
  state.v += (targetSpeed - state.v) * (1 - Math.exp(-dt * 1.05));
  const travel = Math.min(state.v * dt, TOTAL - state.z);
  state.z += travel;
  state.wheelAngle = (state.wheelAngle + travel / 0.57) % TAU;
  // Assistance follows the road automatically. Releasing both arrows recentres gently.
  const targetSteer = dir * (3.2 + state.v * 0.075);
  state.steerV += (targetSteer - state.steerV) * (1 - Math.exp(-dt * 6));
  state.offset = clamp(state.offset + state.steerV * dt, -EDGE, EDGE);
  if (!dir) state.offset *= Math.exp(-dt * 0.85);
  state.roll += (-state.steerV * 0.013 - state.roll) * (1 - Math.exp(-dt * 7));
  const acceleration = dt > 0 ? (state.v - previousSpeed) / dt : 0;
  state.pitch +=
    (clamp(-acceleration * 0.0025, -0.06, 0.045) - state.pitch) *
    (1 - Math.exp(-dt * 7));
  state.bounce = Math.sin(state.z * 0.85) * Math.min(0.018, state.v * 0.0004);
  let event = null;
  for (const rival of rivals) {
    const distance = rival.v * dt;
    rival.z += distance;
    rival.wheelAngle = (rival.wheelAngle + distance / 0.57) % TAU;
    if (
      Math.abs(rival.z - state.z) < 3.6 &&
      Math.abs(rival.l - state.offset) < 2.45 &&
      state.time - state.hit > 2
    ) {
      state.hit = state.time;
      state.v *= 0.8;
      state.offset = clamp(
        state.offset + (state.offset > rival.l ? 0.4 : -0.4),
        -EDGE,
        EDGE,
      );
      event = "contact";
    }
  }
  state.lap = Math.min(2, 1 + Math.floor(state.z / LAP));
  state.rank = 1 + rivals.filter((r) => r.z > state.z).length;
  if (state.z >= TOTAL) {
    state.phase = "finish";
    state.steerL = state.steerR = false;
    return "finish";
  }
  return event;
}
