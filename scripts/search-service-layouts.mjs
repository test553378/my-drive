// Offline only: keep the combinatorial clearance search out of game startup.
import { writeFile } from "node:fs/promises";
import { searchServiceSites } from "../roads.js";
import { TRACKS } from "../tracks.js";
const layouts = {};
for (const track of TRACKS)
  layouts[track.id] = searchServiceSites(track).map((s) => ({
    gate: s.gate,
    side: s.side,
    access: s.paths.access.controls,
    exit: s.paths.exit.controls,
  }));
await writeFile(
  "service-layouts.js",
  "// Deterministic, clearance-checked layout controls. Regenerate with scripts/search-service-layouts.mjs.\nexport const SERVICE_LAYOUTS = " +
    JSON.stringify(layouts, null, 2) +
    ";\n",
);
