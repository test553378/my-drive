import { test, expect } from "@playwright/test";
test("four 3D courses preview, start, expose their map and release previous course meshes", async ({
  page,
}) => {
  test.setTimeout(180000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("./?quality=low");
  await expect
    .poll(async () =>
      page.evaluate(() => window.raceDiagnostics?.read().runtime.frames || 0),
    )
    .toBeGreaterThan(2);
  await page.locator('[data-garage-tab="course"]').click();
  await expect(page.locator("[data-course]")).toHaveCount(4);
  for (const id of ["C01", "C02", "C03", "C04"]) {
    await page.locator(`[data-course="${id}"]`).click();
    await expect
      .poll(async () =>
        page.evaluate(() => window.raceDiagnostics.read().runtime.sceneCourse),
      )
      .toBe(id);
    await page.screenshot({
      path: test.info().outputPath(`preview-${id}.png`),
    });
    await page.locator("#start").click();
    await expect
      .poll(async () =>
        page.evaluate(() => window.raceDiagnostics.read().runtime.phase),
      )
      .toBe("race");
    await expect(page.locator("#race-course")).not.toBeEmpty();
    expect(await page.locator("#mini-map-path").getAttribute("d")).toContain(
      "L",
    );
    await expect(page.locator("#unsupported")).not.toBeVisible();
    await page.locator("#pause").click();
    await page.locator("#garage-return").click();
  }
  const before = await page.evaluate(
    () => window.raceDiagnostics.read().runtime.meshBytes,
  );
  for (let i = 0; i < 4; i++) {
    await page.locator('[data-course="C01"]').click();
    await page.locator('[data-course="C04"]').click();
  }
  const after = await page.evaluate(
    () => window.raceDiagnostics.read().runtime.meshBytes,
  );
  expect(after).toBe(before);
  expect(after).toBeLessThan(32000000);
  expect(errors).toEqual([]);
});
