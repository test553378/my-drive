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

test("an older HTML entry upgrades to the bundled game without resolving bare library imports", async ({
  page,
}) => {
  const { readFile } = await import("node:fs/promises");
  const html = (
    await readFile(new URL("../index.html", import.meta.url), "utf8")
  ).replace("game.bundle.js?v=7.0.0", "game.js?v=6.0.0");
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.route(
    "**/my-drive/?legacy=1*",
    (route) => route.fulfill({ contentType: "text/html", body: html }),
    { times: 1 },
  );
  await page.goto("./?legacy=1&quality=low&adaptive=off");
  await expect
    .poll(async () => (await read(page)).frames, { timeout: 60000 })
    .toBeGreaterThan(2);
  expect(new URL(page.url()).pathname).toBe("/my-drive/index.html");
  expect(new URL(page.url()).searchParams.get("entry_update")).toBe("7");
  expect(errors).toEqual([]);
  await expect(page.locator("#unsupported")).not.toBeVisible();
});

test("a repeatedly stale HTML entry stops after one upgrade and exposes a diagnostic", async ({
  page,
}) => {
  const { readFile } = await import("node:fs/promises");
  const html = (
    await readFile(new URL("../index.html", import.meta.url), "utf8")
  ).replace("game.bundle.js?v=7.0.0", "game.js?v=6.0.0");
  const documents = [];
  await page.route("**/my-drive/*", async (route) => {
    if (route.request().isNavigationRequest()) {
      documents.push(route.request().url());
      return route.fulfill({ contentType: "text/html", body: html });
    }
    return route.continue();
  });
  await page.goto("./?legacy=1");
  await expect(page.locator("#unsupported")).toBeVisible();
  await expect(page.locator("#asset-loading")).not.toBeVisible();
  const d = await page.evaluate(() => window.raceDiagnostics.read());
  expect(d.failure.stage).toBe("legacy-entry-stale");
  expect(documents).toHaveLength(2);
});
