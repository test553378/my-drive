/* Runs before the game module, including when a module fails to load. No telemetry. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const report = {
    version: "8.0.0",
    stage: "loading",
    failure: null,
    events: [],
    graphics: {},
    runtime: {},
  };
  let opener;
  let runtime = () => ({});
  function event(stage, detail = "") {
    if (stage === "context-restored") report.failure = null;
    if (!report.failure || stage === report.failure.stage) report.stage = stage;
    report.events.push({ stage, detail: String(detail).slice(0, 1600) });
    report.events = report.events.slice(-20);
  }
  function snapshot() {
    return { ...report, runtime: runtime() };
  }
  function refresh() {
    $("diagnostic-report").value = JSON.stringify(snapshot(), null, 2);
  }
  function open() {
    opener = document.activeElement;
    window.dispatchEvent(new Event("race-support-open"));
    refresh();
    $("diagnostics").classList.remove("hidden");
    $("close-diagnostics").focus();
  }
  function close() {
    $("diagnostics").classList.add("hidden");
    opener?.focus();
  }
  function failure(stage, detail) {
    report.failure = { stage, detail: String(detail).slice(0, 1600) };
    event(stage, detail);
    window.dispatchEvent(new Event("race-fatal"));
    $("unsupported").classList.add("visible");
    $("failure-message").textContent =
      stage === "context-lost"
        ? "3Dを おやすみしています。もどるまで まってね。"
        : "おとなの ひとと いっしょに「動作診断」を かくにんしてね。";
    refresh();
  }
  window.raceDiagnostics = Object.freeze({
    event,
    failure,
    graphics: (values) => Object.assign(report.graphics, values),
    observe: (getter) => {
      runtime = getter;
    },
    read: () => JSON.parse(JSON.stringify(snapshot())),
  });
  $("help").addEventListener("click", open);
  $("error-help").addEventListener("click", open);
  $("close-diagnostics").addEventListener("click", close);
  $("diagnostics").addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      close();
    }
    if (e.key === "Tab") {
      const items = [
        ...$("diagnostics").querySelectorAll("textarea,button,input,a[href]"),
      ];
      const index = items.indexOf(document.activeElement);
      if (e.shiftKey && index <= 0) {
        e.preventDefault();
        items[items.length - 1].focus();
      } else if (!e.shiftKey && index === items.length - 1) {
        e.preventDefault();
        items[0].focus();
      }
    }
  });
  $("copy-report").addEventListener("click", async () => {
    refresh();
    try {
      await navigator.clipboard.writeText($("diagnostic-report").value);
      $("diagnostic-status").textContent =
        "コピーしました。自動送信はしていません。";
    } catch {
      $("diagnostic-report").focus();
      $("diagnostic-report").select();
      $("diagnostic-status").textContent =
        "上のテキストを選択してコピーしてください。";
    }
  });
  $("save-report").addEventListener("click", () => {
    refresh();
    const url = URL.createObjectURL(
      new Blob([$("diagnostic-report").value], { type: "application/json" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "grand-race-diagnostics.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $("retry").addEventListener("click", () => location.reload());
  $("retry-low").addEventListener("click", () => {
    const url = new URL(location.href);
    url.searchParams.set("quality", "low");
    location.replace(url);
  });
  window.addEventListener(
    "error",
    (e) => {
      const target = e.target;
      if (
        target instanceof HTMLScriptElement ||
        target instanceof HTMLLinkElement
      ) {
        failure(
          "asset-load-failed",
          "A local script or stylesheet could not load.",
        );
      } else if (e.message) failure("javascript-error", e.message);
    },
    true,
  );
  window.addEventListener("unhandledrejection", (e) =>
    failure(
      "unhandled-rejection",
      e.reason?.message || "Unknown rejected promise",
    ),
  );
  window.addEventListener("load", () => {
    if (report.stage === "loading")
      failure("module-not-started", "The game module did not start.");
  });
})();
