import { workItems } from "../fixtures/work-items.mjs";

export function loadRecords() {
  return workItems.map((item) => ({ ...item }));
}
