import { mkdirSync, writeFileSync } from "node:fs";

// The smart speaker apologises, badly, in its own helpful voice.
const line = "Sorry, I heard 'turn it down' as 'ruin your evening.' I've adjusted the volume, not the attitude.";

// The gate takes 1 to 140 characters: fail loudly rather than ship an invalid entry.
const cap = 140;
if (line.length < 1 || line.length > cap) {
  throw new Error(`entry must be 1..${cap} characters, got ${line.length}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line, "utf8");
process.stdout.write(`wrote ${dir}/entry.txt (${line.length} chars)\n`);
