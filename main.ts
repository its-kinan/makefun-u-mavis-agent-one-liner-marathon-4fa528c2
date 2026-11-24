import * as fs from "node:fs";

const JOKE =
  "My therapist says apologising to the loading spinner is progress — last year I apologised to the error message, and at least the spinner pretends to listen.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
