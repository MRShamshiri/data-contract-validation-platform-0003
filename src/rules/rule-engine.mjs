export function evaluateRules(records, rules) {
  return records.map((record) => ({
    id: record.id,
    checks: rules.map((rule) => ({
      rule: rule.name,
      severity: rule.severity,
      passed: rule.test(record),
      recommendation: rule.recommendation,
    })),
  }));
}

export const baselineRules = [
  {
    name: "owner-required",
    severity: "high",
    recommendation: "Assign a durable owner before promoting the item.",
    test: (record) => Boolean(record.owner),
  },
  {
    name: "valid-status",
    severity: "medium",
    recommendation: "Use a supported lifecycle status.",
    test: (record) => ["draft", "active", "blocked", "archived"].includes(record.status),
  },
  {
    name: "score-in-range",
    severity: "medium",
    recommendation: "Normalize score into the 0-100 range.",
    test: (record) => Number.isFinite(record.score) && record.score >= 0 && record.score <= 100,
  },
];
