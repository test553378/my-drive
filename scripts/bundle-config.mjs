import { readFile } from "node:fs/promises";
export async function bundleConfig(entry, output) {
  const notices = await Promise.all(
    ["THREE-LICENSE.txt", "MESHOPT-LICENSE.txt"].map((n) =>
      readFile("graphics-lab/" + n, "utf8"),
    ),
  );
  return {
    entryPoints: [entry],
    bundle: true,
    minify: true,
    format: "esm",
    target: ["safari15", "es2020"],
    outfile: output,
    legalComments: "eof",
    footer: { js: "/* Third-party licenses\n" + notices.join("\n\n") + "\n*/" },
  };
}
