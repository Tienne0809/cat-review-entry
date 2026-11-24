// Cat Reviews Its Human — make.fun bounty entry.
// The program writes one one-star review line to the output entry file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  `One star. The human feeds me on his schedule, not mine, and calls my 3 a.m. concerts 'noise.' Service: unacceptable. Ambience: a closed door.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
