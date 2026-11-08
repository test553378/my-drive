// Tune gameplay here; collision and repair tests use these same values.
export const DAMAGE = Object.freeze({
  impactThreshold: 16,
  topFactor: 0.6,
  accelFactor: 0.65,
  handlingFactor: 0.68,
  repairSeconds: 3,
  drift: 0.35,
  repairLead: 170,
});
export const SAFETY = Object.freeze({
  penaltySeconds: 10,
  stopSeconds: 3,
  warningSeconds: 1.2,
  minimumReactionSeconds: 2,
  pedestrianSpeed: 3.2,
});
