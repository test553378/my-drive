import { test, expect } from "@playwright/test";
const read = (page) =>
  page.evaluate(() => window.raceDiagnostics.read().runtime);
async function start(page, model) {
  await page.goto("./?quality=low&adaptive=off");
  await expect
    .poll(async () => (await read(page)).frames, { timeout: 60000 })
    .toBeGreaterThan(2);
  await page.locator(`[data-model="${model}"]`).click();
  // A repeatable ordinary seed keeps software-WebGL CI bounded; the pure
  // matrix separately completes all 60 vehicle/course/seed combinations.
  await page.locator("#start").evaluate((button) =>
    button.addEventListener(
      "click",
      () => {
        const original = Math.random;
        Math.random = () => {
          Math.random = original;
          return 12345 / 0x7fffffff;
        };
      },
      { capture: true, once: true },
    ),
  );
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).phase).toBe("race");
  expect((await read(page)).seed).toBe(12345);
}
async function drive(page, until, { siren = true } = {}) {
  let held = null,
    r,
    lastStage = "";
  const deadline = Date.now() + 240000;
  while (Date.now() < deadline) {
    r = await read(page);
    if (r.mission?.active?.stage !== lastStage) {
      lastStage = r.mission?.active?.stage;
      console.log(
        "mission",
        lastStage,
        r.elapsed,
        r.road?.edge,
        r.mission?.navigation,
      );
    }
    if (until(r)) break;
    if (r.mission?.active?.kind === "police" && siren && !r.siren)
      await page.locator("#siren").click();
    const n = r.mission?.navigation,
      key =
        n &&
        !n.uTurn &&
        ((r.onMain && n.upcoming?.distance < 140 && !r.road.intent) ||
          (!r.onMain && n.remaining < 28))
          ? (r.onMain ? n.upcoming.turn : n.turn) === "right"
            ? "ArrowRight"
            : (r.onMain ? n.upcoming.turn : n.turn) === "left"
              ? "ArrowLeft"
              : null
          : null;
    if (key !== held) {
      if (held) await page.keyboard.up(held);
      if (key) await page.keyboard.down(key);
      held = key;
    }
    if (
      n?.uTurn &&
      !r.road?.turnTimer &&
      (await page.locator("#uturn").isVisible())
    )
      await page.locator("#uturn").click();
    if (r.phase !== "race")
      throw Error("Unexpected phase " + JSON.stringify(r));
    await page.waitForTimeout(120);
  }
  if (held) await page.keyboard.up(held);
  expect(until(r), JSON.stringify(r.mission)).toBe(true);
  return r;
}
for (const [model, kind, stage] of [
  [7, "fire", "FIRE_ACTION"],
  [6, "ambulance", "PATIENT_WAIT"],
  [5, "police", "SUSPECT_STOPPED"],
]) {
  test(`V8 real ${kind} mission: connected roads, close-up 3D actions and return`, async ({
    page,
  }) => {
    test.setTimeout(480000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await start(page, model);
    const before = await drive(
      page,
      (r) => r.mission?.navigation?.upcoming?.distance < 130,
    );
    expect(before.activeRoads.kind).toBe(kind);
    expect(before.activeRoads.sceneSites.length).toBe(2);
    expect(before.roadGuidance.visible).toBe(true);
    expect(before.roadGuidance.count).toBeGreaterThan(5);
    expect(before.roadGuidance.edges.some((e) => e.startsWith("access-"))).toBe(
      true,
    );
    expect(before.activeRoads.hospitals.length).toBe(
      kind === "ambulance"
        ? new Set(before.mission.plan.map((p) => p.hospital)).size
        : 0,
    );
    await page.screenshot({ path: test.info().outputPath(`${kind}-fork.png`) });
    const graphKey = before.activeRoads.key;
    await drive(page, (r) => r.mission?.active?.stage === stage);
    let r = await read(page);
    expect(r.onMain).toBe(false);
    expect(await page.locator("#mini-map-route").getAttribute("d")).toContain(
      "M",
    );
    expect(r.workCamera).toBe(true);
    expect(r.workTargets.length).toBeGreaterThan(0);
    await expect(page.locator("#left")).not.toBeVisible();
    await expect(page.locator("#right")).not.toBeVisible();
    await expect(page.locator("#uturn")).toBeHidden();
    const time = r.elapsed,
      ai = r.rivals.map((x) => x.distance);
    await page.screenshot({ path: test.info().outputPath(`${kind}-work.png`) });
    if (kind === "fire") {
      expect(r.workTargets.length).toBe(r.mission.active.fires.length);
      for (const t of r.workTargets) expect(t.visible).toBe(true);
      const button = page.locator('[data-target="fire-0"]');
      await button.dispatchEvent("pointerdown", {
        pointerId: 11,
        pointerType: "touch",
        bubbles: true,
      });
      await page.waitForTimeout(900);
      await button.dispatchEvent("pointercancel", {
        pointerId: 11,
        pointerType: "touch",
        bubbles: true,
      });
      const progress = (await read(page)).mission.active.fires[0];
      expect(progress).toBeLessThan(2.5);
      await page.waitForTimeout(400);
      expect((await read(page)).mission.active.fires[0]).toBe(progress);
      await page.locator("#pause").click();
      const paused = await read(page);
      await page.waitForTimeout(300);
      expect((await read(page)).elapsed).toBe(paused.elapsed);
      expect((await read(page)).mission.active.fires).toEqual(
        paused.mission.active.fires,
      );
      const supportsLoss = await page.evaluate(() => {
        window.__missionLoss = document
          .querySelector("canvas")
          .getContext("webgl2")
          .getExtension("WEBGL_lose_context");
        return !!window.__missionLoss;
      });
      if (supportsLoss) {
        await page.evaluate(() => window.__missionLoss.loseContext());
        await expect(page.locator("#unsupported")).toBeVisible();
        await page.evaluate(() => window.__missionLoss.restoreContext());
        await expect(page.locator("#unsupported")).not.toBeVisible();
        expect((await read(page)).mission.active.fires).toEqual(
          paused.mission.active.fires,
        );
        expect((await read(page)).phase).toBe("pause");
      }
      await page.locator("#start").click();
      r = await read(page);
      for (let i = 0; i < r.mission.active.fires.length; i++) {
        const b = page.locator(`[data-target="fire-${i}"]`);
        await expect(b).toBeVisible();
        const box = await b.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await expect
          .poll(async () => (await read(page)).mission.active.fires[i], {
            timeout: 45000,
          })
          .toBe(0);
        await page.mouse.up();
      }
    } else {
      await page
        .locator(
          `[data-target="${kind === "ambulance" ? "patient" : "suspect"}"]`,
        )
        .click();
      r = await read(page);
      expect(r.mission.completed).toBe(0);
      expect(["BOARDING", "POLICE_CHECK"]).toContain(r.mission.active.stage);
      if (kind === "ambulance") {
        await expect
          .poll(async () => (await read(page)).mission.active.patientOnboard, {
            timeout: 45000,
          })
          .toBe(true);
        expect((await read(page)).mission.completed).toBe(0);
        await drive(page, (r) => r.mission?.active?.stage === "HANDOFF");
        await page.screenshot({
          path: test.info().outputPath("hospital-handoff.png"),
        });
        expect((await read(page)).mission.completed).toBe(0);
      }
    }
    await expect
      .poll(async () => (await read(page)).mission.completed, {
        timeout: 45000,
      })
      .toBe(1);
    r = await read(page);
    expect(r.elapsed).toBeGreaterThan(time);
    expect(r.rivals.some((x, i) => x.distance > ai[i])).toBe(true);
    expect(r.siren).toBe(false);
    await drive(page, (r) => !r.mission.active);
    await expect(page.locator("#left")).toBeVisible();
    expect((await read(page)).onMain).toBe(true);
    expect((await read(page)).activeRoads.key).toBe(graphKey);
    expect(errors).toEqual([]);
  });
}
