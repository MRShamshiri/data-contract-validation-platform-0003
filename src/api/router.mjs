import { loadRecords } from "../ingestion/load-records.mjs";
import { buildReport } from "../reporting/build-report.mjs";

export function route(request) {
  if (request.path === "/health") {
    return { status: 200, body: { ok: true } };
  }
  if (request.path === "/report") {
    return { status: 200, body: buildReport(loadRecords()) };
  }
  return { status: 404, body: { error: "not_found" } };
}
