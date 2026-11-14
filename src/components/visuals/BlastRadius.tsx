"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Exhibit, ScenarioToggle, Verdict } from "./Exhibit";

const NODES: { db: string; rows: [string, number][] }[] = [
  { db: "PostgreSQL", rows: [["users", 1], ["billing_profiles", 3]] },
  { db: "MongoDB", rows: [["chat_sessions", 8], ["audit_telemetry", 2]] },
];

export function BlastRadius() {
  const [state, setState] = useState<"pending" | "executed">("pending");
  const approved = state === "executed";

  return (
    <Exhibit
      label="Warden-MCP blast radius demo"
      live={
        approved
          ? "Human approved. Snapshot taken, 14 records deleted, audit entry hash-chained."
          : "14 records identified. Waiting for human approval."
      }
    >
      <p className="type-small text-ink-2-rev">Deletion request: 14 records found</p>

      <div className="grid grid-cols-2 gap-s2 font-mono text-[11px]">
        {NODES.map((node) => (
          <div key={node.db} className="flex flex-col gap-s1 p-s2 rounded-[6px] border border-white/15 min-w-0">
            <span className="text-paper">{node.db}</span>
            {node.rows.map(([table, n]) => (
              <span key={table} className="flex justify-between gap-1">
                <span className="text-ink-2-rev truncate">{table}</span>
                <span className={approved ? "text-ink-2-rev line-through" : "text-block"}>{n}</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <ul className="flex flex-col gap-s1 font-mono text-[11px]">
        <li className="flex items-center justify-between gap-s2">
          <span>Human approval</span>
          <Verdict tone={approved ? "allow" : "award"}>{approved ? "APPROVED" : "HOLD"}</Verdict>
        </li>
        <li className="flex items-center justify-between gap-s2">
          <span>Snapshot before delete</span>
          <Verdict tone="allow">REVERSIBLE</Verdict>
        </li>
        <li className="truncate text-ink-2-rev">
          {approved ? "Block #403 linked to #402 (SHA-256)" : "Block #402 waiting for sign-off"}
        </li>
      </ul>

      <p className={cn("font-serif text-2xl sm:text-3xl leading-tight", approved ? "text-paper" : "text-award")}>
        {approved ? "Deleted, logged and still undoable." : "Nothing runs until a person approves."}
      </p>

      <ScenarioToggle
        label="Flow"
        value={state}
        onChange={setState}
        options={[
          { value: "pending", label: "Preview" },
          { value: "executed", label: "Approve" },
        ]}
      />
    </Exhibit>
  );
}
export default BlastRadius;
