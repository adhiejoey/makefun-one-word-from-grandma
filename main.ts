import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "contraption";

// Guard the gate before writing: one plain-ASCII word, well inside 30 chars.
if (!/^[A-Za-z]+$/.test(word) || word.length > 27) {
  throw new Error("entry word is not a single plain-ASCII word within the limit");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
console.log(`wrote ${word.length}-character entry to ${join(outDir, "entry.txt")}`);
