import { access } from "node:fs/promises";

const required = [
  "README.md",
  "manifest.json",
  "src/app.mjs",
  "src/api/router.mjs",
  "src/domain/entities.mjs",
  "src/ingestion/load-records.mjs",
  "src/persistence/repository.mjs",
  "src/reporting/build-report.mjs",
  "src/rules/rule-engine.mjs",
  "tests/smoke.test.mjs",
  "docs/architecture.md",
  "docs/runbook.md",
];

for (const file of required) {
  await access(file);
}

console.log("structure ok");
