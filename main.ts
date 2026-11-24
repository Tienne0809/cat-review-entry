import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: Cat Reviews — make.fun bounty entry.
// The program writes one cat-review line to the output entry file.
const line =
  `One star. Feeds me, but at HIS convenience, and the belly-rub service ends exactly one second before it should.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
