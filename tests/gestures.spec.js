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
    expect(await shortTap(page, "#world", 100)).toBe(true);
    expect(await shortTap(page, "#world", 100)).toBe(true);
    expect(await shortTap(page, ".hud", 200)).toBe(true);
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
    expect(await shortTap(page, "#modal .subtitle", 100)).toBe(true);
    expect(await shortTap(page, "#modal .subtitle", 100)).toBe(true);
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
  if (browserName === "chromium") {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [
        { id: 1, x: box.x + box.width / 2, y: box.y + box.height / 2 },
      ],
    });
    await expect.poll(async () => (await read(page)).fire).toBeLessThan(2.4);
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
    const stopped = (await read(page)).fire;
    await page.waitForTimeout(180);
    expect((await read(page)).fire).toBe(stopped);
    expect((await read(page)).pointer).toBeNull();
    await cdp.detach();
  }
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

test.describe("home menu touch policy", () => {
  test.use({ isMobile: true });
  test("real taps on home blank areas are guarded in both orientations and menu selections activate once", async ({
    page,
  }) => {
    await ready(page);
    for (const size of [
      { width: 1080, height: 810 },
      { width: 810, height: 1080 },
    ]) {
      await page.setViewportSize(size);
      await page.evaluate(() => window.raceGestureHarness.mode("menu"));
      expect((await read(page)).menuGestures.active).toBe(true);
      expect((await read(page)).gestures.active).toBe(false);
      for (const sel of ["#modal", ".garage-panel", ".garage-options"])
        await expect(page.locator(sel)).toHaveCSS("touch-action", "pan-y");
      // Hit-test real blank padding, including the transparent 3D preview.
      for (const sel of [
        "#garage-preview",
        ".garage-options",
        ".garage-header",
      ]) {
        const point = await page.locator(sel).evaluate((el) => {
          const r = el.getBoundingClientRect(),
            x = r.x + 4,
            y = r.y + 4;
          const hit = document.elementFromPoint(x, y);
          return {
            x,
            y,
            blank:
              !!hit?.closest("#play-surface,#modal") &&
              !hit.closest("button,p,h1,h2,h3,label,legend,span,small,strong"),
          };
        });
        expect(point.blank).toBe(true);
        await page.touchscreen.tap(point.x, point.y);
        await page.touchscreen.tap(point.x, point.y);
        expect(
          (await read(page)).menuGestures.recent.some(
            (e) => e.type === "blank-double-tap" && e.prevented,
          ),
        ).toBe(true);
      }
      await page.locator('[data-model="1"]').evaluate((el) => {
        el.dataset.clicks = "0";
        if (!el.dataset.counting) {
          el.dataset.counting = "true";
          el.addEventListener("click", () => {
            el.dataset.clicks = String(Number(el.dataset.clicks) + 1);
          });
        }
      });
      await page.locator('[data-model="1"]').tap();
      await page.locator('[data-model="1"]').tap();
      await expect(page.locator('[data-model="1"]')).toHaveAttribute(
        "data-clicks",
        "2",
      );
      expect(await shortTap(page, "#subtitle", 300)).toBe(true);
      expect(await shortTap(page, "#subtitle", 300)).toBe(true);
      await page.locator("#start").tap();
      expect((await read(page)).menuGestures.active).toBe(false);
      expect((await read(page)).gestures.active).toBe(true);
      await page.locator("#pause").tap();
      expect((await read(page)).menuGestures.active).toBe(true);
      expect(await shortTap(page, "#world", 400)).toBe(true);
      expect(await shortTap(page, "#world", 400)).toBe(true);
      await page.evaluate(() => window.raceGestureHarness.mode("finish"));
      expect((await read(page)).menuGestures.active).toBe(true);
      expect(await shortTap(page, "#world", 500)).toBe(true);
      expect(await shortTap(page, "#world", 500)).toBe(true);
    }
  });
  test("home keeps vertical pan and selection, blocks pinch, and restores its guard after diagnostics", async ({
    page,
    browserName,
  }) => {
    await ready(page);
    await page.setViewportSize({ width: 810, height: 1080 });
    const gesture = (sel) =>
      page.locator(sel).evaluate((el) => {
        const e = new Event("gesturestart", {
          bubbles: true,
          cancelable: true,
        });
        el.dispatchEvent(e);
        return e.defaultPrevented;
      });
    expect(await gesture(".garage-options")).toBe(true);
    await expect(page.locator("#garage-preview")).toHaveCSS(
      "touch-action",
      "none",
    );
    const pane = page.locator(".garage-options");
    // Force overflow in the lightweight HTML fixture (the product dynamically
    // adds more vehicles), so both engines actually exercise a scroll container.
    await pane.evaluate((el) => {
      el.style.maxHeight = "240px";
    });
    if (browserName === "chromium") {
      const cdp = await page.context().newCDPSession(page),
        r = await pane.boundingBox();
      const start = {
        id: 1,
        x: r.x + r.width / 2,
        y: r.y + Math.min(r.height - 30, 250),
      };
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [start],
      });
      for (const distance of [40, 80, 120, 160]) {
        await cdp.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [{ ...start, y: start.y - distance }],
        });
        await page.waitForTimeout(30);
      }
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await cdp.detach();
    } else {
      // Playwright mobile WebKit exposes tap, not touch-drag or mouse wheel.
      // Verify its scroll container plus uncancelled single-finger DOM events;
      // Chromium above exercises a real browser-generated touch swipe.
      expect(
        await tapEvent(page, ".garage-options", "touchstart", [p()], []),
      ).toBe(false);
      expect(
        await tapEvent(page, ".garage-options", "touchmove", [p(20, 140)], []),
      ).toBe(false);
      expect(
        await tapEvent(page, ".garage-options", "touchend", [], [p(20, 140)]),
      ).toBe(false);
      await pane.evaluate((el) => {
        el.scrollTop = 300;
      });
    }
    await expect
      .poll(() => pane.evaluate((el) => el.scrollTop))
      .toBeGreaterThan(0);
    await pane.evaluate((el) => {
      el.scrollTop = 0;
    });
    const selected = await page.locator("#instructions").evaluate((el) => {
      const range = document.createRange();
      range.selectNodeContents(el);
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(range);
      return s.toString();
    });
    expect(selected.trim().length).toBeGreaterThan(0);
    await page.locator("#garage-help").tap();
    await expect(page.locator("#diagnostics")).toBeVisible();
    expect((await read(page)).menuGestures.active).toBe(false);
    const saved = await page.evaluate(() =>
      JSON.parse(document.querySelector("#diagnostic-report").value),
    );
    expect(saved.runtime.menuGestures.active).toBe(false);
    expect(await gesture("#diagnostics .panel")).toBe(false);
    expect(await shortTap(page, "#diagnostics .panel", 200)).toBe(false);
    expect(await shortTap(page, "#diagnostics .panel", 200)).toBe(false);
    await page.locator("#close-diagnostics").tap();
    // No animation-frame delay may leave the first home double-tap unguarded.
    expect((await read(page)).menuGestures.active).toBe(true);
    expect(await shortTap(page, "#world", 200)).toBe(true);
    expect(await shortTap(page, "#world", 200)).toBe(true);
    if (browserName === "chromium") {
      const cdp = await page.context().newCDPSession(page),
        r = await pane.boundingBox();
      const center = {
        x: r.x + r.width / 2,
        y: r.y + Math.min(r.height / 2, 150),
      };
      const points = (distance) => [
        { id: 1, x: center.x - distance, y: center.y },
        { id: 2, x: center.x + distance, y: center.y },
      ];
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: points(35),
      });
      for (const distance of [45, 65, 90, 120])
        await cdp.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: points(distance),
        });
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await expect
        .poll(() => page.evaluate(() => visualViewport.scale))
        .toBeLessThanOrEqual(1.01);
      expect((await read(page)).menuGestures.zoomObservedDuringPlay).toBe(
        false,
      );
      await cdp.detach();
    }
  });
});

test("rapid race taps activate turbo on pointerdown and click controls once per release", async ({
  page,
}) => {
  await ready(page);
  await page.locator("#start").tap();
  for (let i = 0; i < 3; i++) await page.locator("#boost").tap();
  let r = await read(page);
  expect(r.counts.boost).toBe(3);
  expect(r.counts.boostClick || 0).toBe(0);
  expect(
    r.gestures.recent
      .filter((e) => e.type === "touchstart")
      .every((e) => e.prevented),
  ).toBe(true);
  for (const id of ["sound", "siren"]) {
    await page.locator("#" + id).tap();
    expect((await read(page)).counts[id]).toBe(1);
    await page.locator("#" + id).tap();
    expect((await read(page)).counts[id]).toBe(2);
  }
  await page.locator("#pause").tap();
  expect((await read(page)).phase).toBe("pause");
  await page.locator("#start").tap();
  expect((await read(page)).phase).toBe("race");
  await page.locator("#sound").click();
  expect((await read(page)).counts.sound).toBe(3);
  await page.locator("#sound").focus();
  await page.keyboard.press("Enter");
  expect((await read(page)).counts.sound).toBe(4);
});
