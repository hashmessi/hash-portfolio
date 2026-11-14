"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Exhibit, ScenarioToggle } from "./Exhibit";

// Figures from Guardian's bundled simulator, Scenario 6 (compound drift). Simulated, not factory data.
const RESULTS = {
  off: { defects: 76, quarantined: 85, loss: "₹18,511", flag: 84, status: "Threshold alarm · cycle 84" },
  on: { defects: 9, quarantined: 21, loss: "₹1,128", flag: 72, status: "Drift flagged · cycle 72" },
};

const CYCLES = 120;
const LIMIT = 3; // alarm limit, in sigma
const X = (c: number) => 12 + (c / CYCLES) * 220;
const Y = (v: number) => 100 - (v + 1.5) * 9.5; // v in [-1.5, 8] sigma → y in [100, 10]

/** Deterministic process signal: noise, drift from cycle 60, and (with Guardian) recovery after intervention. */
function signal(c: number, guarded: boolean) {
  const noise = 0.35 * Math.sin(c * 1.7) + 0.15 * Math.sin(c * 0.6);
  let drift = c < 60 ? 0 : (c - 60) * 0.125;
  if (guarded && c > 76) drift = 2 * Math.exp(-(c - 76) / 8);
  return Math.min(8, drift + noise);
}

const path = (guarded: boolean) =>
  Array.from({ length: CYCLES / 2 + 1 }, (_, i) => i * 2)
    .map((c, i) => `${i ? "L" : "M"} ${X(c).toFixed(1)} ${Y(signal(c, guarded)).toFixed(1)}`)
    .join(" ");

const PATHS = { off: path(false), on: path(true) };

export function DriftGuard() {
  const [state, setState] = useState<keyof typeof RESULTS>("on");
  const r = RESULTS[state];
  const guarded = state === "on";

  return (
    <Exhibit
      label="Guardian process drift demo"
      live={`${guarded ? "With" : "Without"} Guardian: ${r.status}, ${r.defects} defective parts, ${r.loss} modeled loss.`}
    >
      <div className="flex items-baseline justify-between gap-s2">
        <p className="type-small text-ink-2-rev">Barrel-pressure drift · machine cycles</p>
        <p className="font-mono text-[11px] text-ink-2-rev">SIMULATED · SCENARIO 6</p>
      </div>

      <svg aria-hidden="true" viewBox="0 0 244 112" className="w-full">
        {/* center line and alarm limit */}
        <line x1={X(0)} x2={X(CYCLES)} y1={Y(0)} y2={Y(0)} stroke="rgba(255,255,255,.18)" strokeWidth="0.6" />
        <line
          x1={X(0)} x2={X(CYCLES)} y1={Y(LIMIT)} y2={Y(LIMIT)}
          stroke="rgba(255,255,255,.4)" strokeWidth="0.6" strokeDasharray="3 2"
        />
        <text x={X(0)} y={Y(LIMIT) - 2} fill="rgba(255,255,255,.55)" fontSize="5" fontFamily="monospace">
          ALARM LIMIT 3σ
        </text>

        {/* drift onset */}
        <line x1={X(60)} x2={X(60)} y1={Y(-1.5)} y2={Y(8)} stroke="rgba(255,255,255,.1)" strokeWidth="0.6" />
        <text x={X(60) + 2} y={Y(-1.2)} fill="rgba(255,255,255,.4)" fontSize="5" fontFamily="monospace">
          DRIFT BEGINS
        </text>

        <path
          d={PATHS[state]}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          className={cn("transition-colors duration-500", guarded ? "text-allow" : "text-block")}
        />

        {/* where the problem was caught */}
        <g className={guarded ? "text-allow" : "text-block"}>
          <line
            x1={X(r.flag)} x2={X(r.flag)} y1={Y(-1.5)} y2={Y(8)}
            stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1.5"
          />
          <circle cx={X(r.flag)} cy={Y(signal(r.flag, guarded))} r="2.4" fill="currentColor" />
          <text
            x={X(r.flag) + 3} y={Y(7.4)} fill="currentColor" fontSize="5.5" fontFamily="monospace" fontWeight="bold"
          >
            {guarded ? "GUARDIAN FLAG · C72" : "ALARM · C84"}
          </text>
        </g>
      </svg>

      <div className="grid grid-cols-3 gap-s2">
        {[
          { name: "Defective parts", value: r.defects },
          { name: "Quarantined", value: r.quarantined },
          { name: "Modeled loss", value: r.loss },
        ].map((m) => (
          <div key={m.name} className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-ink-2-rev">{m.name}</span>
            <span className="font-serif text-3xl sm:text-4xl leading-none">{m.value}</span>
          </div>
        ))}
      </div>
      <p className={cn("font-mono text-[11px] font-bold", guarded ? "text-allow" : "text-block")}>
        {r.status.toUpperCase()}
        {guarded && <span className="text-paper font-normal"> · 93.9% lower modeled loss</span>}
      </p>

      <ScenarioToggle
        label="Replay"
        value={state}
        onChange={setState}
        options={[
          { value: "off", label: "Without Guardian" },
          { value: "on", label: "With Guardian" },
        ]}
      />
    </Exhibit>
  );
}
export default DriftGuard;
