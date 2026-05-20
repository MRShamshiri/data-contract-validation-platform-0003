import { loadRecords } from "../ingestion/load-records.mjs";
import { MemoryStore } from "./memory-store.mjs";

export function createRepository() {
  const store = new MemoryStore();
  store.saveMany(loadRecords());
  return store;
}
