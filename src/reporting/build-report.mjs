import { baselineRules, evaluateRules } from "../rules/rule-engine.mjs";
import { projectProfile } from "../domain/project-profile.mjs";

export function buildReport(records) {
  const evaluations = evaluateRules(records, baselineRules);
  const failedChecks = evaluations.flatMap((evaluation) =>
    evaluation.checks
      .filter((check) => !check.passed)
      .map((check) => ({ id: evaluation.id, ...check })),
  );

  return {
    project: projectProfile,
    recordCount: records.length,
    failedCheckCount: failedChecks.length,
    criticalCount: failedChecks.filter((check) => check.severity === "high").length,
    failedChecks,
    generatedAt: new Date().toISOString(),
  };
}
