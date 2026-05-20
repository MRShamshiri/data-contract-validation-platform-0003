import { loadRecords } from "../src/ingestion/load-records.mjs";
import { buildReport } from "../src/reporting/build-report.mjs";

const report = buildReport(loadRecords());
console.log(JSON.stringify(report, null, 2));
