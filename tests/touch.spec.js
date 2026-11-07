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
  for (let i = 0; i < 3; i++) await page.locator('[data-model="1"]').tap();
  await expect(page.locator('[data-model="1"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  expect(await page.evaluate(() => visualViewport.scale)).toBe(1);
  await page.locator("#start").tap();
  await expect
    .poll(async () =>
      page.evaluate(() => window.raceDiagnostics.read().runtime.phase),
    )
    .toBe("race");
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
});
