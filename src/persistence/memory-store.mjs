export class MemoryStore {
  #records = new Map();

  saveMany(records) {
    for (const record of records) {
      this.#records.set(record.id, record);
    }
  }

  findAll() {
    return [...this.#records.values()];
  }

  findById(id) {
    return this.#records.get(id) ?? null;
  }
}
