// One Emoji, One Smile — exactly one emoji, nothing else.
// The program writes the emoji to /output/entry.txt (UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "🫂";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
