import test from "node:test";
import assert from "node:assert/strict";
import { createInput } from "../input.js";
class Button extends EventTarget {
  down = false;
  classList = {
    toggle: (_, v) => {
      this.down = v;
    },
  };
  setPointerCapture() {}
  send(type, id) {
    const e = new Event(type, { cancelable: true });
    Object.assign(e, { pointerId: id });
    this.dispatchEvent(e);
  }
}
test("separate fingers and the keyboard own their held inputs independently", () => {
  const s = { phase: "race" },
    input = createInput(s),
    left = new Button(),
    brake = new Button();
  input.bind(left, "steerL");
  input.bind(brake, "brake");
  left.send("pointerdown", 1);
  left.send("pointerdown", 2);
  brake.send("pointerdown", 3);
  left.send("pointerup", 1);
  assert.equal(s.steerL, true);
  assert.equal(s.brake, true);
  input.key("steerL", true);
  left.send("pointercancel", 2);
  assert.equal(s.steerL, true);
  input.key("steerL", false);
  assert.equal(s.steerL, false);
  assert.equal(s.brake, true);
  brake.send("lostpointercapture", 3);
  assert.equal(s.brake, false);
});
test("pause clears all held fields and future release events cannot re-stick them", () => {
  const s = { phase: "race" },
    input = createInput(s),
    right = new Button();
  input.bind(right, "steerR");
  right.send("pointerdown", 7);
  input.clear();
  s.phase = "pause";
  right.send("pointerup", 7);
  right.send("pointerdown", 8);
  assert.equal(s.steerR, false);
  assert.equal(right.down, false);
});
