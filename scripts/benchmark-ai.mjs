import { writeFile } from "node:fs/promises";
import { createAI, tickRivals, AI_LEVELS } from "../rival-ai.js";
import { createRace } from "../driving.js";
import { TRACKS } from "../tracks.js";
const results = [];
for (const track of TRACKS)
  for (const level of Object.keys(AI_LEVELS)) {
    const player = createRace(0, 0, {}, track.id),
      rivals = createAI(0, level, track.id);
    player.obstacles = [];
    player.pedestrians = [];
    for (
      let step = 0;
      step < 6000 && rivals.some((r) => r.finishTime === undefined);
      step++
    ) {
      player.time += 0.05;
      tickRivals(player, rivals, 0.05);
    }
    if (rivals.some((r) => r.finishTime === undefined))
      throw Error(`${track.id}/${level}: unfinished AI`);
    results.push({
      course: track.id,
      difficulty: level,
      model: "V01",
      laps: 2,
      stepSeconds: 0.05,
      obstacles: false,
      pedestrians: false,
      averageLapSeconds: rivals.map((r) =>
        Number((r.finishTime / 2).toFixed(2)),
      ),
    });
  }
await writeFile(
  new URL("../docs/AI-BASELINES.json", import.meta.url),
  JSON.stringify(
    {
      description:
        "Deterministic AI-only baseline; no player or hazards. Real races include obstacles, crossing stops and penalties.",
      results,
    },
    null,
    2,
  ) + "\n",
);
console.log("Recorded 12 course/difficulty runs (48 cars, two laps each).");
