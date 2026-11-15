import { test, expect } from "@playwright/test";
import { build } from "esbuild";
let harness;
test.beforeAll(async () => {
  const result = await build({
    entryPoints: ["tests/fixtures/gesture-harness.js"],
    bundle: true,
    write: false,
    format: "esm",
    target: ["safari15"],
  });
  harness = result.outputFiles[0].text;
});
async function ready(page) {
  await page.route("**/game.bundle.js*", (r) =>
    r.fulfill({ contentType: "text/javascript", body: harness }),
  );
  await page.goto("./");
  await page.waitForFunction(() => window.raceGestureHarness);
}
const read = (page) => page.evaluate(() => window.raceGestureHarness.read());
async function tapEvent(page, selector, type, touches, changed) {
  return page
    .locator(selector)
    .first()
    .evaluate(
      (el, { type, touches, changed }) => {
        const e = new Event(type, { bubbles: true, cancelable: true });
        Object.defineProperties(e, {
          touches: { value: touches },
          changedTouches: { value: changed },
        });
        el.dispatchEvent(e);
        return e.defaultPrevented;
      },
      { type, touches, changed },
    );
}
const p = (x = 20, y = 30, id = 1) => ({
  identifier: id,
  clientX: x,
  clientY: y,
});
async function shortTap(page, selector, x = 20) {
  await tapEvent(page, selector, "touchstart", [p(x)], []);
  return tapEvent(page, selector, "touchend", [], [p(x)]);
}
test("gesture harness: canvas, HUD, gaps and work targets share a scoped lock in both orientations", async ({
  page,
}) => {
  await ready(page);
  for (const size of [
    { width: 1080, height: 810 },
    { width: 810, height: 1080 },
  ]) {
    await page.setViewportSize(size);
    await page.locator("#start").tap();
    await expect(page.locator("#play-surface")).toHaveClass(
      /game-gestures-active/,
    );
    for (const sel of [
      "#play-surface",
      "#world",
      ".hud",
      ".speed-panel",
      ".controls",
      "#right",
      "#pause",
      "#siren",
    ])
      await expect(page.locator(sel).first()).toHaveCSS("touch-action", "none");
    expect(
      await page
        .locator("html")
        .evaluate((el) => getComputedStyle(el).touchAction),
    ).toContain("manipulation");
    expect(
      await page
        .locator("#modal")
        .evaluate((el) => el.closest("#play-surface")),
    ).toBeNull();
    const points = await page.evaluate(() => {
      const a = document.querySelector(".hud").getBoundingClientRect();
      return [
        { x: innerWidth * 0.5, y: innerHeight * 0.5 },
        { x: a.x + 20, y: a.y + 15 },
        { x: innerWidth * 0.4, y: innerHeight * 0.8 },
      ].map(
        (p) => !!document.elementFromPoint(p.x, p.y)?.closest("#play-surface"),
      );
    });
    expect(points.every(Boolean)).toBe(true);
    expect(await shortTap(page, "#world", 100)).toBe(false);
    expect(await shortTap(page, "#world", 100)).toBe(true);
    expect(await shortTap(page, ".hud", 200)).toBe(false);
    expect(await shortTap(page, ".hud", 200)).toBe(true);
    // Real button taps must each produce one click; no synthesized replacements.
    await page.locator("#sound").tap();
    await page.locator("#sound").tap();
    expect((await read(page)).counts.sound).toBe(size.width === 1080 ? 2 : 4);
    expect(await page.evaluate(() => visualViewport.scale)).toBe(1);
    await page.locator("#pause").tap();
    await expect(page.locator("#play-surface")).not.toHaveClass(
      /game-gestures-active/,
    );
    expect(await shortTap(page, "#modal .subtitle", 100)).toBe(false);
    expect(await shortTap(page, "#modal .subtitle", 100)).toBe(false);
  }
});
test("gesture harness: Safari fallback cancellation stays inside play; dialogs keep pan, pinch and selection", async ({
  page,
}) => {
  await ready(page);
  await page.locator("#start").tap();
  const gesture = (selector) =>
    page.locator(selector).evaluate((el) => {
      const e = new Event("gesturestart", { bubbles: true, cancelable: true });
      el.dispatchEvent(e);
      return e.defaultPrevented;
    });
  expect(await gesture("#world")).toBe(true);
  await page.locator("#help").tap();
  await expect(page.locator("#diagnostics")).toBeVisible();
  expect(await gesture("#diagnostics .panel")).toBe(false);
  await expect(page.locator("#diagnostics .panel")).toHaveCSS(
    "touch-action",
    "pan-y pinch-zoom",
  );
  expect(
    await page.locator("#diagnostic-report").evaluate((el) => {
      const css = getComputedStyle(el);
      return css.userSelect || css.webkitUserSelect;
    }),
  ).toBe("text");
  const selection = await page.locator("#diagnostic-report").evaluate((el) => {
    el.focus();
    el.select();
    return el.selectionEnd - el.selectionStart;
  });
  expect(selection).toBeGreaterThan(20);
  const scrolled = await page.locator("#diagnostics .panel").evaluate((el) => {
    el.style.maxHeight = "200px";
    el.scrollTop = 200;
    return el.scrollTop;
  });
  expect(scrolled).toBeGreaterThan(0);
  expect((await read(page)).gestures.active).toBe(false);
  const diagnostics = await page.evaluate(() => window.raceDiagnostics.read());
  expect(diagnostics.viewport.scale).toBe(1);
  expect(diagnostics.viewport.layoutWidth).toBeGreaterThan(0);
});
test("gesture harness: multi-finger input, mission holds and interruption preserve progress", async ({
  page,
  browserName,
}) => {
  await ready(page);
  await page.locator("#start").tap();
  for (const [sel, id] of [
    ["#right", 21],
    ["#brake", 22],
  ])
    await page
      .locator(sel)
      .dispatchEvent("pointerdown", { pointerId: id, pointerType: "touch" });
  let r = await read(page);
  expect(r.steering[1]).toBe(true);
  expect(r.brake).toBe(true);
  await page
    .locator("#right")
    .dispatchEvent("pointercancel", { pointerId: 21, pointerType: "touch" });
  r = await read(page);
  expect(r.steering[1]).toBe(false);
  expect(r.brake).toBe(true);
  await page.evaluate(() =>
    window.dispatchEvent(new Event("orientationchange")),
  );
  r = await read(page);
  expect(r.brake).toBe(false);
  if (browserName === "chromium") {
    const cdp = await page.context().newCDPSession(page),
      a = await page.locator("#right").boundingBox(),
      b = await page.locator("#brake").boundingBox();
    const contacts = [
      { id: 1, x: a.x + a.width / 2, y: a.y + a.height / 2 },
      { id: 2, x: b.x + b.width / 2, y: b.y + b.height / 2 },
    ];
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: contacts,
    });
    r = await read(page);
    expect(r.steering[1]).toBe(true);
    expect(r.brake).toBe(true);
    // Release only the right finger; the brake finger must remain held.
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [contacts[0]],
    });
    r = await read(page);
    expect(r.steering[1]).toBe(false);
    expect(r.brake).toBe(true);
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
    expect((await read(page)).brake).toBe(false);
    await cdp.detach();
  }
  await page.evaluate(() => window.raceGestureHarness.work());
  const target = page.locator('[data-target="fire-0"]');
  await expect(target).toBeVisible();
  await expect(target).toHaveCSS("touch-action", "none");
  const box = await target.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await expect.poll(async () => (await read(page)).fire).toBeLessThan(2.4);
  await page.mouse.up();
  const progress = (await read(page)).fire;
  await page.waitForTimeout(180);
  expect((await read(page)).fire).toBe(progress);
  await target.dispatchEvent("pointerdown", {
    pointerId: 42,
    pointerType: "touch",
  });
  await expect.poll(async () => (await read(page)).pointer).toBe(42);
  await page.evaluate(() => window.dispatchEvent(new Event("resize")));
  r = await read(page);
  expect(r.pointer).toBeNull();
  await expect(target).not.toHaveClass(/holding/);
  const after = r.fire;
  await page.waitForTimeout(180);
  expect((await read(page)).fire).toBe(after);
  await target.dispatchEvent("pointercancel", {
    pointerId: 42,
    pointerType: "touch",
  });
  expect((await read(page)).fire).toBe(after);
});
