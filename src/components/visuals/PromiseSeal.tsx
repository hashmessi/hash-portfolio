"use client";

import { useState } from "react";
import { Lock, Unlock, AlertTriangle, CheckCircle, Hash, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PromiseSeal() {
  const [driftState, setDriftState] = useState<"drift" | "matched">("drift");

  const isDrift = driftState === "drift";

  return (
    <div className="w-full flex flex-col gap-5 p-5 sm:p-6 rounded-2xl border-2 border-line-bold bg-surface shadow-tactile-sm">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
            PromiseLoop Reconciliation Engine
          </span>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-line bg-surface-subtle text-text-2 font-semibold">
          PayPal Layer
        </span>
      </div>

      {/* Split Receipt Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
        {/* Card A: Buyer Approved Promise Receipt */}
        <div className="p-3.5 rounded-xl border-2 border-line-bold bg-surface-subtle flex flex-col gap-2.5">
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="font-bold text-text uppercase text-[10px]">
              01. Approved Promise Receipt
            </span>
            <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent font-bold text-[9px]">
              SEALED
            </span>
          </div>
          <div className="flex flex-col gap-1.5 text-[11px] text-text-2">
            <div className="flex justify-between">
              <span>SKU:</span>
              <span className="font-bold text-text">SONY-WH1000XM5-BLK</span>
            </div>
            <div className="flex justify-between">
              <span>Authorized Max:</span>
              <span className="font-bold text-text">$349.99 USD</span>
            </div>
            <div className="flex justify-between">
              <span>Condition:</span>
              <span className="font-bold text-text">NEW_RETAIL_BOX</span>
            </div>
          </div>
          <div className="p-1.5 rounded bg-surface border border-line text-[9px] text-text-2 truncate">
            SHA-256: 8f2a9c41...b10e39 (Immutably Locked)
          </div>
        </div>

        {/* Card B: Merchant Fulfillment Evidence */}
        <div
          className={cn(
            "p-3.5 rounded-xl border-2 flex flex-col gap-2.5 transition-all",
            isDrift
              ? "bg-block/10 border-block text-block"
              : "bg-accent/10 border-accent text-text"
          )}
        >
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="font-bold uppercase text-[10px]">
              02. Merchant Payload
            </span>
            <span
              className={cn(
                "px-1.5 py-0.5 rounded font-bold text-[9px]",
                isDrift ? "bg-block text-white" : "bg-accent text-white"
              )}
            >
              {isDrift ? "DRIFT DETECTED" : "VERIFIED MATCH"}
            </span>
          </div>
          <div className="flex flex-col gap-1.5 text-[11px]">
            <div className="flex justify-between">
              <span>SKU:</span>
              <span className="font-bold">
                {isDrift ? "SONY-WH1000XM5-REFURB" : "SONY-WH1000XM5-BLK"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Billed Amount:</span>
              <span className={cn("font-bold", isDrift ? "text-block underline" : "text-text")}>
                {isDrift ? "$389.99 USD [+$40]" : "$349.99 USD"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Fulfillment:</span>
              <span className="font-bold">
                {isDrift ? "OPEN_BOX" : "NEW_RETAIL_BOX"}
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded bg-surface border border-line text-[9px] text-text-2 truncate">
            {isDrift ? "Status: Hash mismatch with approved receipt" : "Status: SHA-256 hashes match 100%"}
          </div>
        </div>
      </div>

      {/* Enforcement Status Banner */}
      <div
        className={cn(
          "p-3.5 rounded-xl border-2 flex items-center justify-between transition-all font-mono",
          isDrift
            ? "bg-block text-white border-line-bold shadow-tactile-sm"
            : "bg-accent text-white border-line-bold shadow-tactile-sm"
        )}
      >
        <div className="flex items-center gap-2">
          {isDrift ? <Lock className="w-4 h-4 shrink-0" /> : <Unlock className="w-4 h-4 shrink-0" />}
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider">
              {isDrift ? "PAYPAL FUNDS CAPTURE LOCKED" : "PAYPAL FUNDS CAPTURE APPROVED"}
            </span>
            <span className="text-[10px] opacity-90">
              {isDrift
                ? "Discrepancy blocked by Promise Drift Engine"
                : "Fulfillment matches Promise Receipt terms"}
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/30">
          CODE DECIDES
        </span>
      </div>

      {/* Interactive Controls */}
      <div className="flex items-center justify-between gap-1.5 pt-1 border-t border-line">
        <span className="font-mono text-[10px] text-text-2">Test Engine:</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setDriftState("drift")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              isDrift
                ? "bg-block text-white border-line-bold font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Simulate Merchant Drift
          </button>
          <button
            type="button"
            onClick={() => setDriftState("matched")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              !isDrift
                ? "bg-accent text-white border-line-bold font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Fulfillment Matches Intent
          </button>
        </div>
      </div>
    </div>
  );
}
export default PromiseSeal;

