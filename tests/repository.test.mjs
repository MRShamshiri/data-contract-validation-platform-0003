import assert from "node:assert/strict";
import { createRepository } from "../src/persistence/repository.mjs";

const repository = createRepository();
assert.equal(repository.findAll().length, 4);
assert.equal(repository.findById("ITEM-001").owner, "platform");

console.log("repository test passed");
