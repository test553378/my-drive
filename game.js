// Compatibility entry for an older cached HTML document. Current HTML loads
// game.bundle.js; keep this public URL free of bare library imports.
const previous = new URL(window.location.href);
if (previous.searchParams.get("entry_update") === "7") {
  const loading = document.getElementById("asset-loading");
  if (loading) loading.hidden = true;
  window.raceDiagnostics?.failure(
    "legacy-entry-stale",
    "古いページが残っているため更新を停止しました。オンラインでこのタブを閉じ、公開ページを開き直してください。",
  );
} else {
  const destination = new URL("./index.html", import.meta.url);
  destination.search = previous.search;
  destination.searchParams.set("entry_update", "7");
  destination.hash = previous.hash;
  window.location.replace(destination.href);
}
