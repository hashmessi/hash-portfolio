"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, RefreshCw, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface AxisScore {
  name: string;
  weight: string;
  value: number; // 0-100
}

export function TrustDial() {
  const [claimState, setClaimState] = useState<"verified" | "disputed" | "updating">("verified");

  const scenarios = {
    verified: {
      score: 87.4,
      status: "VERIFIED",
      statusColor: "text-accent border-accent bg-accent/10",
      axes: [
        { name: "AI Evidence Analysis", weight: "0.35", value: 92 },
        { name: "Google Fact Check API", weight: "0.30", value: 85 },
        { name: "Community Consensus", weight: "0.20", value: 88 },
        { name: "Source Authority", weight: "0.15", value: 84 },
      ],
      log: "POST /api/bayesian-update → Prior: 0.50 → Posterior: 0.874 [CONSENSUS HIGH]",
    },
    disputed: {
      score: 34.2,
      status: "DISPUTED",
      statusColor: "text-block border-block bg-block/10",
      axes: [
        { name: "AI Evidence Analysis", weight: "0.35", value: 38 },
        { name: "Google Fact Check API", weight: "0.30", value: 20 },
        { name: "Community Consensus", weight: "0.20", value: 45 },
        { name: "Source Authority", weight: "0.15", value: 30 },
      ],
      log: "POST /api/bayesian-update → Fact-check contradiction found → Score downgraded",
    },
    updating: {
      score: 64.8,
      status: "EVALUATING",
      statusColor: "text-award border-award bg-award/10",
      axes: [
        { name: "AI Evidence Analysis", weight: "0.35", value: 70 },
        { name: "Google Fact Check API", weight: "0.30", value: 60 },
        { name: "Community Consensus", weight: "0.20", value: 65 },
        { name: "Source Authority", weight: "0.15", value: 62 },
      ],
      log: "STREAM /api/evidence-feed → Ingesting new peer-reviewed claim data...",
    },
  };

  const current = scenarios[claimState];

  // Needle angle: 0% = -90 deg, 100% = +90 deg
  const needleAngle = -90 + (current.score / 100) * 180;

  return (
    <div className="w-full flex flex-col gap-5 p-5 sm:p-6 rounded-2xl border-2 border-line-bold bg-surface shadow-tactile-sm">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
            TrustPulse Live Dial
          </span>
        </div>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-award bg-award/10 text-award font-semibold flex items-center gap-1">
          <Trophy className="w-3 h-3" />
          1st Prize
        </span>
      </div>

      {/* Dial SVG */}
      <div className="relative flex flex-col items-center justify-center pt-2">
        <svg viewBox="0 0 200 115" className="w-48 sm:w-56 overflow-visible">
          {/* Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="var(--line-bold)"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Active colored arc gradient */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * current.score) / 100}
            className="transition-all duration-700 ease-out"
          />

          {/* Gauge Needle */}
          <g
            transform={`translate(100, 100) rotate(${needleAngle})`}
            className="transition-transform duration-700 ease-out"
          >
            <line x1="0" y1="0" x2="0" y2="-68" stroke="var(--text)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="0" cy="0" r="6" fill="var(--text)" />
            <circle cx="0" cy="0" r="2" fill="var(--surface)" />
          </g>

          {/* Scale labels */}
          <text x="18" y="112" fill="var(--text-2)" fontSize="9" fontFamily="var(--font-mono)">0</text>
          <text x="96" y="24" fill="var(--text-2)" fontSize="9" fontFamily="var(--font-mono)">50</text>
          <text x="172" y="112" fill="var(--text-2)" fontSize="9" fontFamily="var(--font-mono)">100</text>
        </svg>

        {/* Score Readout */}
        <div className="flex flex-col items-center -mt-2">
          <div className="flex items-baseline gap-1">
            <span className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-text">
              {current.score}%
            </span>
          </div>
          <span
            className={cn(
              "font-mono text-[10px] font-bold px-2 py-0.5 rounded border mt-1",
              current.statusColor
            )}
          >
            {current.status}
          </span>
        </div>
      </div>

      {/* 4 Bayesian Axes */}
      <div className="flex flex-col gap-2 pt-2 border-t border-line">
        <span className="font-mono text-[10px] uppercase font-bold text-text-2 tracking-wider">
          Four-Axis Bayesian Weights
        </span>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {current.axes.map((axis) => (
            <div
              key={axis.name}
              className="p-2 rounded-lg border border-line bg-surface-subtle flex flex-col gap-1"
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-text-2">
                <span className="truncate max-w-[100px]">{axis.name}</span>
                <span className="font-bold text-text">{axis.value}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-line overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${axis.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telemetry log */}
      <div className="p-2 rounded-lg bg-surface-subtle border border-line text-[10px] font-mono text-text-2 truncate">
        {current.log}
      </div>

      {/* Interactive Scenario Buttons */}
      <div className="flex items-center justify-between gap-1.5 pt-1">
        <span className="font-mono text-[10px] text-text-2">Simulate:</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setClaimState("verified")}
            className={cn(
              "px-2 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              claimState === "verified"
                ? "bg-accent text-white border-line-bold font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Verified Claim
          </button>
          <button
            type="button"
            onClick={() => setClaimState("disputed")}
            className={cn(
              "px-2 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer",
              claimState === "disputed"
                ? "bg-block text-white border-line-bold font-bold shadow-tactile-sm"
                : "bg-surface-subtle border-line text-text-2 hover:text-text"
            )}
          >
            Disputed Claim
          </button>
        </div>
      </div>
    </div>
  );
}
export default TrustDial;

