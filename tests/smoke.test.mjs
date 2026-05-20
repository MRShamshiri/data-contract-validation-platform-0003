import assert from "node:assert/strict";
import { route } from "../src/api/router.mjs";

const health = route({ path: "/health" });
assert.equal(health.status, 200);
assert.equal(health.body.ok, true);

const report = route({ path: "/report" });
assert.equal(report.status, 200);
assert.equal(report.body.recordCount, 4);
assert.ok(report.body.failedCheckCount >= 1);

console.log("smoke test passed");
