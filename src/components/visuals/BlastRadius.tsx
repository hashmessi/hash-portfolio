"use client";

import { useState } from "react";
import { Database, UserCheck, History, Undo2, CheckCircle2, ShieldCheck, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function BlastRadius() {
  const [executionState, setExecutionState] = useState<"pending" | "executed">("pending");

  const isApproved = executionState === "executed";

  return (
    <div className="w-full flex flex-col gap-5 p-5 sm:p-6 rounded-2xl border-2 border-line-bold bg-surface shadow-tactile-sm">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
            Warden MCP Blast-Radius Engine
          </span>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-line bg-surface-subtle text-text-2 font-semibold">
          MCP Server
        </span>
      </div>

      {/* Multi-Database Topology Graph */}
      <div className="p-3.5 rounded-xl border-2 border-line-bold bg-surface-subtle flex flex-col gap-3 font-mono text-xs">
        <div className="flex items-center justify-between text-[10px] text-text-2 uppercase font-bold">
          <span>Cross-System Data Discovery</span>
          <span className="text-accent">14 Records Identified</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Node 1: PostgreSQL */}
          <div className="p-3 rounded-lg border border-line bg-surface flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-text text-[11px]">
                <Database className="w-3.5 h-3.5 text-accent" />
                <span>PostgreSQL DB</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-surface-subtle border border-line text-text-2">
                Structured
              </span>
            </div>
            <div className="flex flex-col gap-1 text-[10px] text-text-2">
              <div className="flex justify-between">
                <span>users_table:</span>
                <span className="text-block font-semibold">1 record [Marked]</span>
              </div>
              <div className="flex justify-between">
                <span>billing_profiles:</span>
                <span className="text-block font-semibold">3 records [Marked]</span>
              </div>
            </div>
          </div>

          {/* Node 2: MongoDB */}
          <div className="p-3 rounded-lg border border-line bg-surface flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-text text-[11px]">
                <Database className="w-3.5 h-3.5 text-award" />
                <span>MongoDB Cluster</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-surface-subtle border border-line text-text-2">
                Document Store
              </span>
            </div>
            <div className="flex flex-col gap-1 text-[10px] text-text-2">
              <div className="flex justify-between">
                <span>chat_sessions:</span>
                <span className="text-block font-semibold">8 docs [Marked]</span>
              </div>
              <div className="flex justify-between">
                <span>audit_telemetry:</span>
                <span className="text-block font-semibold">2 docs [Marked]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human Approval Gate & Pre-Execution Snapshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
        <div className="p-3 rounded-xl border border-line bg-surface-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-accent" />
            <div className="flex flex-col">
              <span className="font-bold text-[11px] text-text">Human Gate</span>
              <span className="text-[9px] text-text-2">
                {isApproved ? "Approved by Admin" : "Awaiting Authorization"}
              </span>
            </div>
          </div>
          <span
            className={cn(
              "px-2 py-0.5 rounded text-[10px] font-bold border",
              isApproved
                ? "bg-accent/10 border-accent text-accent"
                : "bg-award/10 border-award text-award"
            )}
          >
            {isApproved ? "APPROVED" : "HOLD PENDING"}
          </span>
        </div>

        <div className="p-3 rounded-xl border border-line bg-surface-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Undo2 className="w-4 h-4 text-accent" />
            <div className="flex flex-col">
              <span className="font-bold text-[11px] text-text">Pre-Snapshot</span>
              <span className="text-[9px] text-text-2">Taken before mutation</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold border border-line-bold bg-surface text-text">
            100% REVERSIBLE
          </span>
        </div>
      </div>

      {/* Hash-Chained Audit Log */}
      <div className="p-3 rounded-xl border-2 border-line-bold bg-surface flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 truncate">
          <Link2 className="w-4 h-4 text-accent shrink-0" />
          <div className="flex flex-col truncate">
            <span className="text-[10px] font-bold text-text uppercase">
              SHA-256 Hash-Chained Ledger
            </span>
            <span className="text-[9px] text-text-2 truncate">
              {isApproved
                ? "Block #403: Hash 0x9f18a2... linked to Block #402"
                : "Block #402: Pending sign-off for impact perimeter"}
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold text-accent shrink-0">
          AUDITABLE ✓
        </span>
      </div>

      {/* Interactive Controls */}
      <div className="flex items-center justify-between gap-1.5 pt-1 border-t border-line">
        <span className="font-mono text-[10px] text-text-2">Simulate Flow:</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setExecutionState("pending")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              !isApproved
                ? "bg-award/20 border-award text-award font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Blast-Radius Preview
          </button>
          <button
            type="button"
            onClick={() => setExecutionState("executed")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              isApproved
                ? "bg-accent text-white border-line-bold font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Human Approve &amp; Execute
          </button>
        </div>
      </div>
    </div>
  );
}
export default BlastRadius;

