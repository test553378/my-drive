// Parts are cosmetic; vehicle categories have distinct, assisted handling.
import { VEHICLES } from "./vehicle-config.js";
export { VEHICLES } from "./vehicle-config.js";
export const PART_OPTIONS = Object.freeze({
  tyres: ["スポーツ", "スリック"],
  body: ["スタンダード", "ワイド"],
  aero: ["なし", "ストリート", "レーシング"],
});
export function normalizeParts(parts = {}) {
  const choose = (key, fallback) =>
    Number.isInteger(parts[key]) &&
    parts[key] >= 0 &&
    parts[key] < PART_OPTIONS[key].length
      ? parts[key]
      : fallback;
  return {
    tyres: choose("tyres", 0),
    body: choose("body", 0),
    aero: choose("aero", 1),
  };
}
export function defaultSetup(model = 0) {
  return {
    model,
    color: [0, 1, 2, 3, 0, 1, 0, 0][model] || 0,
    parts: normalizeParts(),
  };
}
export function copySetup(setup) {
  return {
    model:
      Number.isInteger(setup.model) && VEHICLES[setup.model] ? setup.model : 0,
    color: Math.max(
      0,
      Math.min(3, Number.isInteger(setup.color) ? setup.color : 0),
    ),
    parts: normalizeParts(setup.parts),
  };
}
export function setupSummary(setup) {
  const s = copySetup(setup);
  return `${VEHICLES[s.model].name} / ${PART_OPTIONS.tyres[s.parts.tyres]} / ${PART_OPTIONS.body[s.parts.body]} / ${PART_OPTIONS.aero[s.parts.aero]}`;
}
