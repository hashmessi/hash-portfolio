"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Exhibit, ScenarioToggle, Verdict } from "./Exhibit";

const RECEIPT: [string, string][] = [
  ["SKU", "WH1000XM5-BLK"],
  ["Max", "$349.99"],
  ["Condition", "NEW_RETAIL"],
];
const PAYLOAD: Record<"drift" | "matched", [string, string][]> = {
  drift: [
    ["SKU", "WH1000XM5-REFURB"],
    ["Billed", "$389.99"],
    ["Condition", "OPEN_BOX"],
  ],
  matched: RECEIPT,
};

export function PromiseSeal() {
  const [state, setState] = useState<"drift" | "matched">("drift");
  const isDrift = state === "drift";

  const cards = [
    { title: "Approved receipt", rows: RECEIPT, chip: <Verdict tone="allow">SEALED</Verdict>, drifted: false },
    {
      title: "Merchant payload",
      rows: PAYLOAD[state],
      chip: <Verdict tone={isDrift ? "block" : "allow"}>{isDrift ? "DRIFT" : "MATCH"}</Verdict>,
      drifted: isDrift,
    },
  ];

  return (
    <Exhibit
      label="PromiseLoop reconciliation demo"
      live={
        isDrift
          ? "Fulfillment does not match the sealed receipt. PayPal capture locked."
          : "Fulfillment matches the sealed receipt. Funds released."
      }
    >
      <p className="type-small text-ink-2-rev">Sealed receipt vs. merchant payload</p>

      <div className="grid grid-cols-2 gap-s2 font-mono text-[11px]">
        {cards.map((card) => (
          <div
            key={card.title}
            className={cn(
              "flex flex-col gap-s1 p-s2 rounded-[6px] border min-w-0",
              card.drifted ? "border-block" : "border-white/15"
            )}
          >
            <div className="flex items-center justify-between gap-1">
              <span className="text-ink-2-rev truncate">{card.title}</span>
              {card.chip}
            </div>
            {card.rows.map(([k, v], i) => (
              <div key={k} className="flex justify-between gap-1">
                <span className="text-ink-2-rev">{k}</span>
                <span className={cn("truncate", card.drifted && v !== RECEIPT[i][1] && "text-block")}>{v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className={cn("font-serif text-2xl sm:text-3xl leading-tight", isDrift ? "text-block" : "text-paper")}>
        {isDrift ? "PayPal capture locked. The terms drifted." : "Funds released. Every field matches."}
      </p>

      <ScenarioToggle
        label="Fulfillment"
        value={state}
        onChange={setState}
        options={[
          { value: "drift", label: "Drifted" },
          { value: "matched", label: "Matches" },
        ]}
      />
    </Exhibit>
  );
}
export default PromiseSeal;
