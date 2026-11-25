// Development diagnostic: measure the same centerlines used by drawing,
// navigation and driving. Run with node scripts/measure-service-junctions.mjs.
import { roadGraph, edgePose, angleDelta } from "../roads.js";
import { TRACKS, trackPose } from "../tracks.js";
const degrees = (a) => (Math.abs(angleDelta(a)) * 180) / Math.PI;
const results = TRACKS.map((track) => {
  const graph = roadGraph(track.id);
  return {
    course: track.id,
    sites: graph.sites.map((site) => {
      const access = graph.edges["access-" + site.index],
        exit = graph.edges["exit-" + site.index],
        loop = graph.edges["loop-" + site.index];
      const profile = (edge) => {
        let maximumAngle = 0;
        for (let d = 0; d <= edge.length; d += 0.25) {
          const p = edgePose(edge, d);
          if (!Number.isFinite(p.mainStation)) continue;
          maximumAngle = Math.max(
            maximumAngle,
            degrees(p.yaw - trackPose(track, p.mainStation).yaw),
          );
        }
        return {
          maximumAngleDegrees: +maximumAngle.toFixed(3),
          transitionStationMetres: edge.transitionRun,
          parallelStationMetres: edge.parallelRun,
          parallelArcMetres: +(
            edge.endMouthWidth
              ? edge.taperStart - edge.parallelStart
              : edge.parallelLength - edge.parallelStart
          ).toFixed(2),
          taperArcMetres: +edge.taperLength.toFixed(2),
          totalArcMetres: +edge.length.toFixed(2),
        };
      };
      return {
        site: site.index,
        gate: site.gate,
        entry: profile(access),
        return: profile(exit),
        entryNodeAngleDegrees: +degrees(
          edgePose(access, 0).yaw - trackPose(track, site.gate).yaw,
        ).toFixed(3),
        mergeNodeAngleDegrees: +degrees(
          edgePose(exit, exit.length).yaw -
            trackPose(track, graph.nodes[site.merge].station).yaw,
        ).toFixed(3),
        loopExitAngleDegrees: +degrees(
          edgePose(loop, loop.length).yaw - edgePose(exit, 0).yaw,
        ).toFixed(3),
      };
    }),
  };
});
console.log(JSON.stringify(results, null, 2));
