export class WorkItem {
  constructor({ id, owner, status, priority, score, tags = [] }) {
    this.id = id;
    this.owner = owner;
    this.status = status;
    this.priority = priority;
    this.score = score;
    this.tags = tags;
  }

  isActive() {
    return this.status === "active";
  }
}

export const statuses = ["draft", "active", "blocked", "archived"];
export const priorities = ["low", "medium", "high", "critical"];
