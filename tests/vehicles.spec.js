import { test, expect } from "@playwright/test";
test("all eight vehicle models preview with the correct wheels and can start a race", async ({
  page,
}) => {
  test.setTimeout(180000);
  await page.goto("./?quality=low");
  await expect
    .poll(async () =>
      page.evaluate(() => window.raceDiagnostics?.read().runtime.frames || 0),
    )
    .toBeGreaterThan(2);
  await expect(page.locator("[data-model]")).toHaveCount(8);
  for (let model = 0; model < 8; model++) {
    await page.locator(`[data-model="${model}"]`).click();
    const r = await page.evaluate(() => window.raceDiagnostics.read().runtime);
    expect(r.wheelCount).toBe(model === 4 ? 2 : 4);
    expect(r.model).toBe(
      [
        "NOVA R",
        "AERO S",
        "HAULER",
        "CITY LINK",
        "PULSE",
        "GUARD",
        "LIFELINE",
        "BRAVE",
      ][model],
    );
    await expect(page.locator("#unsupported")).not.toBeVisible();
    await page.locator("#start").click();
    await expect
      .poll(async () =>
        page.evaluate(() => window.raceDiagnostics.read().runtime.phase),
      )
      .toBe("race");
    const kind = [null, null, null, null, null, "police", "ambulance", "fire"][
      model
    ];
    await expect
      .poll(async () =>
        page.evaluate(
          () => window.raceDiagnostics.read().runtime.activeRoads.kind,
        ),
      )
      .toBe(kind);
    const roads = await page.evaluate(
      () => window.raceDiagnostics.read().runtime.activeRoads,
    );
    expect(roads.sceneSites.length).toBe(model >= 5 ? 2 : 0);
    const serviceCount = roads.edges.filter(
      (e) => !e.startsWith("main-"),
    ).length;
    if (model === 6) {
      expect(serviceCount).toBeGreaterThanOrEqual(6);
      expect(serviceCount).toBeLessThanOrEqual(9);
    } else expect(serviceCount).toBe(model >= 5 ? 6 : 0);
    if (model !== 6) expect(roads.hospitals).toEqual([]);
    if (model < 5)
      expect(await page.locator("#mini-map-branches").getAttribute("d")).toBe(
        "",
      );
    if (model !== 7) {
      await page.locator("#pause").click();
      await page.locator("#garage-return").click();
    }
  }

  await expect(page.locator("#siren")).toBeVisible();
  await page.locator("#siren").click();
  expect(
    await page.evaluate(() => window.raceDiagnostics.read().runtime.siren),
  ).toBe(true);
  await page
    .locator("#brake")
    .dispatchEvent("pointerdown", { pointerId: 41, pointerType: "touch" });
  await expect
    .poll(async () =>
      page.evaluate(() => window.raceDiagnostics.read().runtime.speed),
    )
    .toBe(0);
  await page
    .locator("#brake")
    .dispatchEvent("pointercancel", { pointerId: 41, pointerType: "touch" });
  await expect
    .poll(async () =>
      page.evaluate(() => window.raceDiagnostics.read().runtime.speed),
    )
    .toBeGreaterThan(0);
  await page.screenshot({ path: test.info().outputPath("fire-engine.png") });
});
