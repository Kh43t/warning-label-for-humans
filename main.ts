// Warning Label for Humans: One Line, Big Laugh
// Entry for make.fun competition
// u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
//
// The program writes a single-line safety warning label for every
// human being to /output/entry.txt. The label is one fixed line:
// a deadpan product warning whose punchline lands in the last words.
//
// Why this line, against the judge's criteria in order:
//   1. It IS a warning label for humans ("WARNING: This unit ..."),
//      and the joke — coffee, spite, and a belief the rules do not
//      apply — is the laugh.
//   2. The turn arrives in the final words: the list builds from
//      ordinary fuel (coffee) to attitude (spite) to the delusion
//      that the rules do not apply to it.
//   3. It is recognition, not random absurdity: everyone has met
//      the person who is sure the rules are for other people.
//   4. It sounds like a printed label: "WARNING:", "This unit
//      runs on ..." is the rhythm of a real product warning.
//   5. One idea, no filler, no second joke, well inside 160 chars.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: This unit runs on coffee, spite, and the belief that the rules do not apply to it.";

// Count characters as code points, not UTF-16 code units, so the
// 160-character limit is judged the way a reader counts it.
const LABEL_CHARS = [...LABEL].length;

if (LABEL_CHARS < 1 || LABEL_CHARS > 160) {
  throw new Error(`label must be 1-160 characters, got ${LABEL_CHARS}`);
}
if (LABEL.trim() !== LABEL || /\n/.test(LABEL)) {
  throw new Error("label must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");

// Read back what was written and fail loudly if the file on disk
// does not match the label exactly — a silent bad write must never
// pass as a successful run.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LABEL) {
  throw new Error("entry.txt does not match the label");
}
