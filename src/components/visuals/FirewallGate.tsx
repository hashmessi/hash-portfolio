"use client";

import { useState } from "react";
import { ShieldCheck, ShieldAlert, Play, AlertOctagon, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolStep {
  id: string;
  command: string;
  status: "allow" | "block" | "pending";
  causalRisk: "low" | "critical";
  rule: string;
}

export function FirewallGate() {
  const [simulation, setSimulation] = useState<"attack" | "safe">("attack");

  const attackSteps: ToolStep[] = [
    {
      id: "01",
      command: "GET /api/v1/user/metadata",
      status: "allow",
      causalRisk: "low",
      rule: "RULE_READ_AUTH_OK",
    },
    {
      id: "02",
      command: "POST /api/v1/extract_summary",
      status: "allow",
      causalRisk: "low",
      rule: "RULE_SAFE_TRANSFORM",
    },
    {
      id: "03",
      command: "DELETE /api/v1/tenants/0x4f/users",
      status: "block",
      causalRisk: "critical",
      rule: "SEC-403: UNGOVERNED_DESTRUCTIVE_CALL",
    },
  ];

  const safeSteps: ToolStep[] = [
    {
      id: "01",
      command: "GET /api/v1/user/metadata",
      status: "allow",
      causalRisk: "low",
      rule: "RULE_READ_AUTH_OK",
    },
    {
      id: "02",
      command: "POST /api/v1/extract_summary",
      status: "allow",
      causalRisk: "low",
      rule: "RULE_SAFE_TRANSFORM",
    },
    {
      id: "03",
      command: "PUT /api/v1/report/save_draft",
      status: "allow",
      causalRisk: "low",
      rule: "RULE_SCOPED_MUTATION_OK",
    },
  ];

  const steps = simulation === "attack" ? attackSteps : safeSteps;
  const isBlocked = simulation === "attack";

  return (
    <div className="w-full flex flex-col gap-5 p-5 sm:p-6 rounded-2xl border-2 border-line-bold bg-surface shadow-tactile-sm">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
            ChainBreak Runtime Firewall
          </span>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-accent bg-accent/10 text-accent font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          TLN Award
        </span>
      </div>

      {/* Visual Pipeline with Firewall Gate */}
      <div className="relative flex flex-col gap-3 py-2">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={cn(
              "p-3 rounded-xl border-2 transition-all flex items-center justify-between gap-3 text-xs font-mono",
              step.status === "allow"
                ? "bg-surface-subtle border-line"
                : "bg-block/10 border-block text-block shadow-[2px_2px_0px_var(--color-block)]"
            )}
          >
            <div className="flex items-center gap-2.5 truncate">
              <span className="w-5 h-5 rounded-md bg-surface border border-line-bold flex items-center justify-center font-bold text-[10px] text-text-2 shrink-0">
                {step.id}
              </span>
              <span className={cn("truncate font-medium", step.status === "block" ? "text-block font-bold" : "text-text")}>
                {step.command}
              </span>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="text-[10px] text-text-2 hidden sm:inline">{step.rule}</span>
              {step.status === "allow" ? (
                <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent text-accent font-bold text-[10px]">
                  ALLOW
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-block text-white font-extrabold text-[10px] animate-bounce">
                  BLOCK
                </span>
              )}
            </div>
          </div>
        ))}

        {/* Mechanical Gate Indicator Banner */}
        <div
          className={cn(
            "p-3.5 rounded-xl border-2 flex items-center justify-between transition-all",
            isBlocked
              ? "bg-block text-white border-line-bold shadow-tactile-sm"
              : "bg-accent/10 text-accent border-accent"
          )}
        >
          <div className="flex items-center gap-2">
            {isBlocked ? (
              <AlertOctagon className="w-4 h-4 shrink-0" />
            ) : (
              <CheckCircle className="w-4 h-4 shrink-0" />
            )}
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              {isBlocked ? "FIREWALL GATE CLOSED — ACTION PREVENTED" : "FIREWALL CLEAR — ZERO VIOLATIONS"}
            </span>
          </div>
          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/30 font-semibold">
            DETERMINISTIC
          </span>
        </div>
      </div>

      {/* Extension callout badge */}
      <div className="p-2.5 rounded-lg border border-dashed border-line-bold bg-surface-subtle flex items-center justify-between text-xs font-mono">
        <span className="text-text-2 text-[11px]">
          Extension active: <strong className="text-text">ChainBreak-Web3</strong>
        </span>
        <span className="text-[10px] text-accent font-semibold">Calldata Verified ✓</span>
      </div>

      {/* Interactive simulation controls */}
      <div className="flex items-center justify-between gap-1.5 pt-1 border-t border-line">
        <span className="font-mono text-[10px] text-text-2">Simulate Action:</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSimulation("attack")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              simulation === "attack"
                ? "bg-block text-white border-line-bold font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Dangerous Tool Call
          </button>
          <button
            type="button"
            onClick={() => setSimulation("safe")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              simulation === "safe"
                ? "bg-accent text-white border-line-bold font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Benign Flow
          </button>
        </div>
      </div>
    </div>
  );
}
export default FirewallGate;

