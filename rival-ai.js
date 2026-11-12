import { getTrack, trackPose } from "./tracks.js";
import { vehicle } from "./vehicle-config.js";
import {
  initCondition,
  tickCondition,
  hasPuncture,
  applyImpact,
  repairArea,
  enterRepair,
} from "./damage.js";
import { contactPedestrian } from "./pedestrians.js";
import { sweptContact } from "./collisions.js";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export const AI_LEVELS = Object.freeze({
  easy: {
    label: "かんたん",
    top: 0.8,
    acceleration: 6,
    grip: 18,
    brake: 0.82,
    preview: 1.35,
    precision: 0.48,
    passDistance: 28,
    lateral: 2.8,
  },
  normal: {
    label: "ふつう",
    top: 0.985,
    acceleration: 10,
    grip: 28,
    brake: 0.94,
    preview: 1.1,
    precision: 0.23,
    passDistance: 38,
    lateral: 3.7,
  },
  hard: {
    label: "むずかしい",
    top: 1,
    acceleration: 13,
    grip: 38,
    brake: 1,
    preview: 1,
    precision: 0.08,
    passDistance: 46,
    lateral: 4.5,
  },
});
export const aiLevel = (name) => AI_LEVELS[name] || AI_LEVELS.normal;
const PERSONALITIES = [
  { name: "straight", top: 1, acceleration: 0.95, grip: 0.94 },
  { name: "corner", top: 0.975, acceleration: 1, grip: 1.18 },
  { name: "accelerator", top: 0.985, acceleration: 1.2, grip: 1 },
  { name: "steady", top: 0.96, acceleration: 1.05, grip: 1.08 },
];
export function createAI(model = 0, difficulty = "normal", courseId = "C01") {
  return [125, 87, 51, 20].map((z, i) => {
    const r = {
      z,
      model,
      courseId,
      difficulty: AI_LEVELS[difficulty] ? difficulty : "normal",
      personality: i,
      v: 0,
      speed: 0,
      l: [-3.4, 3.1, -4.3, 4.4][i],
      c: [1, 2, 3, 1][i],
      wheelAngle: 0,
      roll: 0,
      pitch: 0,
      motionSteer: 0,
      brake: false,
      boost: 0,
      fallTimer: 0,
      parts: { tyres: 1, body: 0, aero: 1 },
      struck: [],
      overtaking: false,
    };
    initCondition(r);
    return r;
  });
}
export function curveTarget(track, distance, top, grip = 38) {
  const curvature = Math.abs(trackPose(track, distance).curvature);
  return Math.min(top, Math.sqrt(grip / Math.max(0.00001, curvature)));
}
const physicalGap = (a, b, length) =>
  ((b - a + length * 1.5) % length) - length / 2;
export function tickRivals(player, rivals, dt) {
  const track = getTrack(player.courseId),
    snapshot = [
      ...rivals
        .filter((r) => r.finishTime === undefined)
        .map((r) => ({
          z: r.z,
          l: r.l,
          speed: r.speed || 0,
          model: r.model ?? player.model,
          self: r,
        })),
      ...(player.phase === "race"
        ? [
            {
              z: player.z,
              l: player.offset,
              speed: player.v,
              model: player.model,
            },
          ]
        : []),
    ];
  for (const r of rivals) {
    if (r.finishTime !== undefined) {
      r.speed = r.v = 0;
      continue;
    }
    r.model ??= player.model;
    r.courseId = track.id;
    r.parts ??= { tyres: 1, body: 0, aero: 1 };
    if (!r.flatMask) initCondition(r);
    r.struck ??= [];
    r.time = player.time;
    r.pedestrians = player.pedestrians;
    r.boost = 0;
    const spec = vehicle(r.model),
      cfg = aiLevel(r.difficulty || player.aiDifficulty),
      trait = PERSONALITIES[r.personality || 0],
      previous = r.z,
      oldLane = r.l,
      oldSpeed = r.speed || r.v || 0;
    tickCondition(r, dt);
    r.fallTimer = Math.max(0, (r.fallTimer || 0) - dt);
    if (r.stopTimer > 0 || r.repairTimer > 0 || r.fallTimer > 0) {
      r.speed = r.v = 0;
      continue;
    }
    const limit = track.halfWidth - spec.width / 2 - 0.65,
      pose = trackPose(track, r.z),
      look = trackPose(track, r.z + oldSpeed * 1.3 + 18),
      apex = Math.abs(pose.curvature) > Math.abs(look.curvature) ? pose : look;
    let goal =
        -Math.sign(apex.curvature) *
          Math.min(limit * 0.48, Math.abs(apex.curvature) * 180) +
        Math.sin(r.z * 0.015 + (r.personality || 0) * 1.9) * cfg.precision,
      target = spec.top * cfg.top * trait.top;
    // Preview curvature along the braking distance, not just under the car.
    const braking = spec.brake * cfg.brake,
      horizon = Math.max(
        35,
        ((oldSpeed * oldSpeed) / (2 * braking)) * cfg.preview + oldSpeed * 0.5,
      );
    for (let ahead = 0; ahead <= horizon; ahead += 8) {
      const corner = curveTarget(
        track,
        r.z + ahead,
        spec.top,
        cfg.grip * trait.grip,
      );
      target = Math.min(
        target,
        Math.sqrt(corner * corner + 2 * braking * ahead),
      );
    }
    const traffic = snapshot
      .filter((a) => a.self !== r)
      .map((a) => ({
        ...a,
        gap: physicalGap(r.z, a.z, track.length),
        width: (spec.width + vehicle(a.model).width) / 2 + 0.6,
      }));
    const clear = (lane) =>
      traffic.every(
        (a) => a.gap > 28 || a.gap < -12 || Math.abs(a.l - lane) > a.width,
      );
    r.overtaking = false;
    const front = traffic
      .filter(
        (a) =>
          a.gap > 0 &&
          a.gap < cfg.passDistance &&
          Math.abs(a.l - r.l) < a.width,
      )
      .sort((a, b) => a.gap - b.gap)[0];
    if (front && front.speed < target + 0.5) {
      const lanes = [front.l - front.width - 0.45, front.l + front.width + 0.45]
        .filter((l) => Math.abs(l) <= limit && clear(l))
        .sort((a, b) => Math.abs(a - r.l) - Math.abs(b - r.l));
      if (lanes.length) {
        goal = lanes[0];
        r.overtaking = true;
      }
      if (front.gap < Math.max(9, oldSpeed * 0.55) || !lanes.length)
        target = Math.min(
          target,
          Math.sqrt(
            Math.max(
              0,
              front.speed ** 2 +
                2 * braking * Math.max(0, front.gap - spec.length - 3),
            ),
          ),
        );
    }
    for (const o of player.obstacles) {
      const gap = o.distance - r.z;
      if (gap <= 0 || gap > Math.max(36, oldSpeed * 2.5)) continue;
      if (Math.abs(goal - o.offset) < spec.width / 2 + o.radius + 0.6) {
        const lanes = [
          o.offset - spec.width / 2 - o.radius - 1,
          o.offset + spec.width / 2 + o.radius + 1,
        ].filter((l) => Math.abs(l) <= limit && clear(l));
        if (lanes.length)
          goal = lanes.sort((a, b) => Math.abs(a - r.l) - Math.abs(b - r.l))[0];
        else
          target = Math.min(
            target,
            Math.sqrt(2 * braking * Math.max(0, gap - spec.length - 2)),
          );
      }
    }
    // Everyone sees the same active crossing and the same collision/penalty rules.
    for (const p of player.pedestrians) {
      const gap = p.distance - r.z;
      if (
        (p.phase === "warning" || p.phase === "crossing") &&
        gap > -spec.length &&
        gap < horizon + 35
      ) {
        target = Math.min(
          target,
          Math.sqrt(2 * braking * Math.max(0, gap - spec.length / 2 - 4)),
        );
      }
    }
    const pit = repairArea(track, r.z);
    if (hasPuncture(r)) {
      target = Math.min(target, spec.top * 0.6);
      if (pit && pit.delta < 170)
        goal = pit.delta < 40 ? pit.offset : Math.min(limit, pit.offset);
    } else if (r.pitExit) {
      goal = 0;
      if (Math.abs(r.l) < 0.5) r.pitExit = false;
    }
    const maxLane = hasPuncture(r) || r.pitExit ? track.halfWidth + 3 : limit;
    const nextLane = clamp(goal, -maxLane, maxLane);
    r.l += clamp(nextLane - r.l, -cfg.lateral * dt, cfg.lateral * dt);
    r.motionSteer = dt ? (r.l - oldLane) / dt : 0;
    const acceleration =
      cfg.acceleration * trait.acceleration * (hasPuncture(r) ? 0.65 : 1);
    r.speed = clamp(
      oldSpeed + clamp(target - oldSpeed, -braking * dt, acceleration * dt),
      0,
      spec.top,
    );
    r.brake = target < oldSpeed - 0.5;
    r.v = r.speed;
    r.offset = r.l;
    const factor = clamp(1 + pose.curvature * r.l, 0.8, 1.25),
      travel = r.speed * dt;
    r.z = Math.min(track.length * 2, r.z + travel / factor);
    r.wheelAngle = ((r.wheelAngle || 0) + travel / spec.radius) % (Math.PI * 2);
    r.roll = -r.motionSteer * 0.013;
    r.pitch = clamp(
      (-(r.speed - oldSpeed) * 0.0025) / Math.max(dt, 0.001),
      -0.06,
      0.045,
    );
    for (const [index, object] of player.obstacles.entries()) {
      if (r.struck.includes(index)) continue;
      const contact = sweptContact(previous, r.z, r.l, r.model, object);
      if (contact) {
        r.struck.push(index);
        applyImpact(r, object, r.speed * contact.strength * object.severity);
        r.speed = r.v;
      }
    }
    contactPedestrian(r, previous);
    r.speed = r.v;
    if (enterRepair(r, track)) r.speed = 0;
    if (r.z >= track.length * 2) {
      r.finishTime = player.time + r.penaltyTime;
      r.speed = r.v = 0;
    }
  }
}
