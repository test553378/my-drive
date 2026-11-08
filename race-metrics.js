import { getTrack } from "./tracks.js";
export function raceRank(s, rivals) {
  if (s.phase !== "finish") return 1 + rivals.filter((r) => r.z > s.z).length;
  const total = getTrack(s.courseId).length * 2,
    finish = s.time + s.penaltyTime;
  return (
    1 +
    rivals.filter((r) => {
      const time =
        r.finishTime ??
        s.time + Math.max(0, total - r.z) / Math.max(1, r.speed || r.v || 1);
      return time < finish - 0.001;
    }).length
  );
}
