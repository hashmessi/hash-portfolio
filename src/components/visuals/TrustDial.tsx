"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Exhibit, ScenarioToggle } from "./Exhibit";

const SCENARIOS = {
  verified: {
    score: 87.4,
    status: "Verified",
    tone: "text-allow",
    bar: "bg-allow",
    stroke: "var(--allow)",
    axes: [
      { name: "AI evidence", value: 92 },
      { name: "Fact-check API", value: 85 },
      { name: "Community", value: 88 },
      { name: "Source authority", value: 84 },
    ],
  },
  disputed: {
    score: 34.2,
    status: "Disputed",
    tone: "text-block",
    bar: "bg-block",
    stroke: "var(--block)",
    axes: [
      { name: "AI evidence", value: 38 },
      { name: "Fact-check API", value: 20 },
      { name: "Community", value: 45 },
      { name: "Source authority", value: 30 },
    ],
  },
};

const ARC = 251.2; // length of the r=80 semicircle

export function TrustDial() {
  const [state, setState] = useState<keyof typeof SCENARIOS>("verified");
  const current = SCENARIOS[state];
  const needleAngle = -90 + (current.score / 100) * 180;

  return (
    <Exhibit
      label="TrustPulse trust dial demo"
      live={`Trust score ${current.score}%, ${current.status.toLowerCase()}.`}
    >
      <p className="type-small text-ink-2-rev">Bayesian trust score</p>

      <div className="flex flex-col items-center">
        <svg aria-hidden="true" viewBox="0 0 200 110" className="w-44 sm:w-52">
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(255,255,255,.14)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={current.stroke}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={ARC}
            strokeDashoffset={ARC - (ARC * current.score) / 100}
            className="transition-all duration-700 ease-out"
          />
          <g
            transform={`translate(100, 100) rotate(${needleAngle})`}
            className="transition-transform duration-700 ease-out"
          >
            <line x1="0" y1="0" x2="0" y2="-64" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <circle r="5" fill="#fff" />
          </g>
        </svg>
        <p className="font-serif text-5xl leading-none mt-s1">{current.score}%</p>
        <p className={cn("font-mono text-[11px] font-bold mt-s1", current.tone)}>
          {current.status.toUpperCase()}
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-x-s3 gap-y-s1">
        {current.axes.map((axis) => (
          <li key={axis.name} className="flex flex-col gap-1">
            <span className="flex justify-between gap-1 font-mono text-[11px] text-ink-2-rev">
              <span className="truncate">{axis.name}</span>
              <span className="text-paper">{axis.value}%</span>
            </span>
            <span className="h-1 rounded-full bg-white/15 overflow-hidden">
              <span
                className={cn("block h-full rounded-full transition-all duration-500", current.bar)}
                style={{ width: `${axis.value}%` }}
              />
            </span>
          </li>
        ))}
      </ul>

      <ScenarioToggle
        label="Simulate"
        value={state}
        onChange={setState}
        options={[
          { value: "verified", label: "Verified claim" },
          { value: "disputed", label: "Disputed claim" },
        ]}
      />
    </Exhibit>
  );
}
export default TrustDial;
