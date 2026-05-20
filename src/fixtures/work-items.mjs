import { WorkItem } from "../domain/entities.mjs";

export const workItems = [
  new WorkItem({ id: "ITEM-001", owner: "platform", status: "active", priority: "critical", score: 94, tags: ["core", "slo"] }),
  new WorkItem({ id: "ITEM-002", owner: "data", status: "draft", priority: "medium", score: 72, tags: ["pipeline"] }),
  new WorkItem({ id: "ITEM-003", owner: "", status: "blocked", priority: "high", score: 21, tags: ["risk"] }),
  new WorkItem({ id: "ITEM-004", owner: "security", status: "unknown", priority: "low", score: 65, tags: ["audit"] }),
];
