"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Exhibit, ScenarioToggle, Verdict } from "./Exhibit";

const SHARED = [
  { id: "01", command: "GET /api/v1/user/metadata", blocked: false },
  { id: "02", command: "POST /api/v1/extract_summary", blocked: false },
];
const STEPS = {
  attack: [...SHARED, { id: "03", command: "DELETE /api/v1/tenants/0x4f/users", blocked: true }],
  safe: [...SHARED, { id: "03", command: "PUT /api/v1/report/save_draft", blocked: false }],
};

export function FirewallGate() {
  const [simulation, setSimulation] = useState<keyof typeof STEPS>("attack");
  const isBlocked = simulation === "attack";

  return (
    <Exhibit
      label="ChainBreak firewall demo"
      live={
        isBlocked
          ? "Step 03, a DELETE call, was blocked by rule SEC-403. Gate closed."
          : "All three tool calls allowed. Gate open."
      }
    >
      <p className="type-small text-ink-2-rev">Agent tool calls, checked one by one</p>

      <ol className="flex flex-col gap-s1">
        {STEPS[simulation].map((step) => (
          <li
            key={step.id}
            className={cn(
              "flex items-center gap-s2 px-s2 py-[10px] rounded-[6px] border font-mono text-xs transition-colors duration-300",
              step.blocked ? "border-block text-block" : "border-white/15"
            )}
          >
            <span className="text-ink-2-rev">{step.id}</span>
            <span className="truncate mr-auto">{step.command}</span>
            <Verdict tone={step.blocked ? "block" : "allow"}>{step.blocked ? "BLOCK" : "ALLOW"}</Verdict>
          </li>
        ))}
      </ol>

      <p className={cn("font-serif text-2xl sm:text-3xl leading-tight", isBlocked ? "text-block" : "text-paper")}>
        {isBlocked ? "Gate closed. Violation SEC-403, the action never ran." : "Gate open. Zero violations."}
      </p>

      <ScenarioToggle
        label="Simulate"
        value={simulation}
        onChange={setSimulation}
        options={[
          { value: "attack", label: "Dangerous call" },
          { value: "safe", label: "Benign flow" },
        ]}
      />
    </Exhibit>
  );
}
export default FirewallGate;
