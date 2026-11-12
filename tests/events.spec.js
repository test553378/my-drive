import { test, expect } from "@playwright/test";
const read = (page) =>
  page.evaluate(() => window.raceDiagnostics.read().runtime);
async function start(page, course = "C01") {
  // Fix only the browser random source; exercise the normal race and event code.
  await page.addInitScript(() => {
    Math.random = () => 0.5;
  });
  await page.goto("./?quality=low");
  await expect.poll(async () => (await read(page)).frames).toBeGreaterThan(2);
  if (course !== "C01") {
    await page.locator('[data-garage-tab="course"]').click();
    await page.locator(`[data-course="${course}"]`).click();
  }
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).phase).toBe("race");
}
test("real controls hit an obstacle, show a flattened tyre and automatically repair it", async ({
  page,
}) => {
  test.setTimeout(150000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await start(page);
  const target = (await read(page)).obstaclePreview[0];
  let held = null,
    r;
  const deadline = Date.now() + 65000;
  while (Date.now() < deadline) {
    r = await read(page);
    if (r.flatMask.some(Boolean)) break;
    const delta = target.offset - r.offset,
      key = delta > 0.16 ? "ArrowRight" : delta < -0.16 ? "ArrowLeft" : null;
    if (key !== held) {
      if (held) await page.keyboard.up(held);
      if (key) await page.keyboard.down(key);
      held = key;
    }
    if (r.distance > target.distance + 12)
      throw new Error(`Missed real obstacle: ${JSON.stringify(r)}`);
    await page.waitForTimeout(80);
  }
  if (held) await page.keyboard.up(held);
  expect(r.flatMask.some(Boolean)).toBe(true);
  await expect(page.locator("#condition")).toBeVisible();
  await expect(page.locator("#boost")).toBeDisabled();
  await expect
    .poll(async () => Math.max(...(await read(page)).flatVisual))
    .toBeGreaterThan(0.6);
  await page.screenshot({ path: test.info().outputPath("puncture.png") });
  // Observe every rendered repair frame; post-repair polling may already see
  // the normal automatic acceleration, especially on faster WebKit runners.
  await page.evaluate(() => {
    window.__repairObservation = { samples: [], complete: false };
    const observe = () => {
      const r = window.raceDiagnostics.read().runtime,
        o = window.__repairObservation;
      if (r.repairTimer > 0)
        o.samples.push({
          distance: r.distance,
          speed: r.speed,
          timer: r.repairTimer,
        });
      else if (o.samples.length) {
        o.complete = true;
        return;
      }
      requestAnimationFrame(observe);
    };
    requestAnimationFrame(observe);
  });
  await expect
    .poll(async () => (await read(page)).repairTimer, { timeout: 65000 })
    .toBeGreaterThan(0);
  await page.screenshot({ path: test.info().outputPath("repair.png") });
  await expect
    .poll(
      async () => page.evaluate(() => window.__repairObservation.complete),
      { timeout: 10000 },
    )
    .toBe(true);
  const samples = await page.evaluate(() => window.__repairObservation.samples);
  expect(samples.length).toBeGreaterThan(3);
  expect(samples.every((s) => s.speed === 0)).toBe(true);
  expect(new Set(samples.map((s) => s.distance)).size).toBe(1);
  expect((await read(page)).flatMask.some(Boolean)).toBe(false);
  await expect(page.locator("#condition")).not.toBeVisible();
  expect(errors).toEqual([]);
});
test("city crossing warns early and real braking yields without a penalty", async ({
  page,
}) => {
  test.setTimeout(140000);
  await start(page, "C03");
  await expect(page.locator("#pedestrian-warning")).toBeVisible({
    timeout: 45000,
  });
  await page.keyboard.down("ArrowDown");
  await expect.poll(async () => (await read(page)).speed).toBe(0);
  const stopped = (await read(page)).distance;
  await expect
    .poll(
      async () =>
        (await read(page)).pedestrians.some((p) => p.phase === "safe"),
      { timeout: 45000 },
    )
    .toBe(true);
  const r = await read(page);
  expect(r.penaltyTime).toBe(0);
  expect(r.stopTimer).toBe(0);
  expect(r.distance).toBeLessThan(stopped + 2);
  await page.screenshot({ path: test.info().outputPath("safe-crossing.png") });
  await page.keyboard.up("ArrowDown");
});
