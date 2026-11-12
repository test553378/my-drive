import { test, expect } from "@playwright/test";
const read = (p) => p.evaluate(() => window.raceDiagnostics.read().runtime);
async function ready(p) {
  await p.goto("./?quality=low&adaptive=off");
  await expect
    .poll(async () => (await read(p)).frames, { timeout: 60000 })
    .toBeGreaterThan(2);
}
test("all AI levels can be chosen before a race and the selected level reaches the running simulation", async ({
  page,
}) => {
  await ready(page);
  await page.locator('[data-garage-tab="course"]').click();
  await expect(page.locator('[data-ai="normal"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  for (const level of ["easy", "normal", "hard"]) {
    await page.locator(`[data-ai="${level}"]`).click();
    expect((await read(page)).aiDifficulty).toBe(level);
  }
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).phase).toBe("race");
  expect((await read(page)).aiDifficulty).toBe("hard");
  await expect
    .poll(async () => (await read(page)).rivals.some((r) => r.speed > 0))
    .toBe(true);
});
test("main-game high/standard/low switch real GLBs and pixel budgets while retaining the chosen parts", async ({
  page,
}) => {
  test.setTimeout(180000);
  await ready(page);
  await page.locator('[data-part="aero"][data-value="2"]').click();
  await page.locator("#garage-help").click();
  for (const [level, file, budget] of [
    ["high", "concept-high.glb", 1450000],
    ["standard", "concept-mobile.glb", 950000],
    ["low", "concept-mobile.glb", 480000],
  ]) {
    const before = (await read(page)).frames;
    await page.locator(`[data-quality="${level}"]`).click();
    await expect(page.locator("#asset-loading")).not.toBeVisible({
      timeout: 120000,
    });
    await expect.poll(async () => (await read(page)).quality).toBe(level);
    await expect
      .poll(async () => (await read(page)).frames)
      .toBeGreaterThan(before + 1);
    await expect(page.locator("#unsupported")).not.toBeVisible();
    const r = await read(page);
    expect(r.assetModel).toBe(file);
    expect(r.parts.aero).toBe(2);
    expect(r.bufferSize[0] * r.bufferSize[1]).toBeLessThanOrEqual(budget);
  }
  await page.locator("#close-diagnostics").click();
  await expect(page.locator("#start")).toBeEnabled();
});
test("a failed real GLB request is visible and identifies the failing local file without replacing the car", async ({
  page,
}) => {
  await page.route("**/graphics-lab/assets/concept-mobile.glb", (route) =>
    route.fulfill({ status: 503, body: "Unavailable" }),
  );
  await page.goto("./?quality=low");
  await expect(page.locator("#unsupported")).toBeVisible({ timeout: 60000 });
  const report = await page.evaluate(() => window.raceDiagnostics.read());
  expect(report.failure.stage).toBe("asset-or-scene-failed");
  expect(
    report.events.some((e) =>
      e.detail.includes("concept-mobile.glb: HTTP 503"),
    ),
  ).toBe(true);
  expect(report.runtime.frames).toBe(0);
});
