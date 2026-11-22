import { test, expect } from "@playwright/test";
test("game gestures suppress double-tap without disabling ordinary selection or pinch globally", async ({
  page,
}) => {
  await page.goto("./?quality=low");
  await expect
    .poll(async () =>
      page.evaluate(() => window.raceDiagnostics?.read().runtime.frames || 0),
    )
    .toBeGreaterThan(2);
  const viewport = await page
    .locator('meta[name="viewport"]')
    .getAttribute("content");
  expect(viewport).not.toMatch(/maximum-scale|user-scalable/);
  await expect(page.locator("#right")).toHaveCSS("touch-action", "none");
  for (const selector of ["html", "body"]) {
    const action = await page
      .locator(selector)
      .first()
      .evaluate((el) => getComputedStyle(el).touchAction);
    expect(action).toMatch(/manipulation|pinch-zoom/);
  }
  for (const selector of [".modal", ".garage-options"])
    await expect(page.locator(selector).first()).toHaveCSS(
      "touch-action",
      "pan-y",
    );
  expect(
    await page.evaluate(
      () => window.raceDiagnostics.read().runtime.menuGestures.active,
    ),
  ).toBe(true);
  const preview = await page.locator("#garage-preview").boundingBox();
  for (let i = 0; i < 2; i++)
    await page.touchscreen.tap(preview.x + 4, preview.y + 4);
  const menuEnds = await page.evaluate(() =>
    window.raceDiagnostics
      .read()
      .runtime.menuGestures.recent.filter((e) =>
        ["touchend", "blank-double-tap", "control-double-tap"].includes(e.type),
      ),
  );
  expect(menuEnds.length).toBeGreaterThanOrEqual(2);
  expect(menuEnds.every((e) => e.prevented)).toBe(true);
  for (let i = 0; i < 3; i++) await page.locator('[data-model="1"]').tap();
  await expect(page.locator('[data-model="1"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  expect(await page.evaluate(() => visualViewport.scale)).toBe(1);
  await page.locator('[data-part="aero"][data-value="2"]').tap();
  await expect(
    page.locator('[data-part="aero"][data-value="2"]'),
  ).toHaveAttribute("aria-pressed", "true");
  await page.locator("#start").tap();
  await expect
    .poll(async () =>
      page.evaluate(() => window.raceDiagnostics.read().runtime.phase),
    )
    .toBe("race");
  await expect(page.locator("#play-surface")).toHaveClass(
    /game-gestures-active/,
  );
  for (const selector of ["#world", ".hud", ".controls", "#pause", "#sound"])
    await expect(page.locator(selector).first()).toHaveCSS(
      "touch-action",
      "none",
    );
  const report = await page.evaluate(() => window.raceDiagnostics.read());
  expect(report.runtime.inputGestures.active).toBe(true);
  expect(report.runtime.parts.aero).toBe(2);
  expect(report.viewport.scale).toBe(1);
  expect(report.runtime.cameraFov).toBeGreaterThan(0);
  // The second physical contact can land on the now-disabled turbo button.
  // Use coordinates rather than Locator.tap(), which waits for it to re-enable.
  const turbo = await page.locator("#boost").boundingBox();
  for (let i = 0; i < 2; i++)
    await page.touchscreen.tap(
      turbo.x + turbo.width / 2,
      turbo.y + turbo.height / 2,
    );
  await expect(page.locator("#boost")).toBeDisabled();
  await expect(page.locator("#toast")).toContainText("ターボ");
  const starts = await page.evaluate(() =>
    window.raceDiagnostics
      .read()
      .runtime.inputGestures.recent.filter((e) => e.type === "touchstart"),
  );
  expect(starts.length).toBeGreaterThanOrEqual(2);
  expect(starts.every((e) => e.prevented)).toBe(true);
  await page.locator("#sound").tap();
  await expect(page.locator("#sound")).toHaveText("🔊");
  await page.locator("#sound").tap();
  await expect(page.locator("#sound")).toHaveText("🔇");
  const right = page.locator("#right");
  for (const id of [31, 32])
    await right.dispatchEvent("pointerdown", {
      pointerId: id,
      pointerType: "touch",
    });
  await right.dispatchEvent("pointerup", {
    pointerId: 31,
    pointerType: "touch",
  });
  expect(
    await page.evaluate(
      () => window.raceDiagnostics.read().runtime.steering[1],
    ),
  ).toBe(true);
  await right.dispatchEvent("pointercancel", {
    pointerId: 32,
    pointerType: "touch",
  });
  expect(
    await page.evaluate(
      () => window.raceDiagnostics.read().runtime.steering[1],
    ),
  ).toBe(false);
  await right.dispatchEvent("pointerdown", {
    pointerId: 41,
    pointerType: "touch",
  });
  await page
    .locator("#brake")
    .dispatchEvent("pointerdown", { pointerId: 42, pointerType: "touch" });
  expect(
    await page.evaluate(
      () => window.raceDiagnostics.read().runtime.steering[1],
    ),
  ).toBe(true);
  expect(
    await page.evaluate(() => window.raceDiagnostics.read().runtime.brake),
  ).toBe(true);
  await expect(page.locator("#boost")).toBeDisabled();
  await right.dispatchEvent("pointercancel", {
    pointerId: 41,
    pointerType: "touch",
  });
  await page
    .locator("#brake")
    .dispatchEvent("pointercancel", { pointerId: 42, pointerType: "touch" });
  expect(
    await page.evaluate(() => window.raceDiagnostics.read().runtime.brake),
  ).toBe(false);
  await expect(right).not.toHaveClass(/is-down/);
  await right.dispatchEvent("pointerdown", {
    pointerId: 51,
    pointerType: "touch",
  });
  await page.evaluate(() =>
    window.dispatchEvent(new Event("orientationchange")),
  );
  expect(
    await page.evaluate(
      () => window.raceDiagnostics.read().runtime.steering[1],
    ),
  ).toBe(false);
  await expect(right).not.toHaveClass(/is-down/);
  await page.locator("#pause").tap();
  await expect(page.locator("#play-surface")).not.toHaveClass(
    /game-gestures-active/,
  );
  await page.locator("#start").tap();
  await expect(page.locator("#play-surface")).toHaveClass(
    /game-gestures-active/,
  );
  await page.locator("#help").tap();
  await expect(page.locator("#diagnostics")).toBeVisible();
  await expect(page.locator("#play-surface")).not.toHaveClass(
    /game-gestures-active/,
  );
  expect(
    await page.locator("#diagnostic-report").evaluate((el) => {
      const css = getComputedStyle(el);
      return css.userSelect || css.webkitUserSelect;
    }),
  ).toBe("text");
});
