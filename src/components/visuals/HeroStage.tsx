"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import me from "@/assets/hashvanth-pixel.webp";
import { Verdict } from "./Exhibit";

type V = "ALLOW" | "HOLD" | "BLOCK";

// What an agent asks to do, and what the gate says. Illustrative, not live data.
const FEED: { act: string; v: V }[] = [
  { act: 'agent.browse("vendor-catalog")', v: "ALLOW" },
  { act: "agent.pay(₹4,999 → new payee)", v: "HOLD" },
  { act: "db.delete(users, tenant=0x4f)", v: "BLOCK" },
  { act: 'fetch("/api/v1/metadata")', v: "ALLOW" },
  { act: 'agent.sign("lease_v3.pdf")', v: "HOLD" },
  { act: "paypal.capture(order_8812)", v: "BLOCK" },
];
const WINDOW = 4;
const TONE = { ALLOW: "allow", HOLD: "award", BLOCK: "block" } as const;
const REACTION = { ALLOW: "ok.", HOLD: "hmm…", BLOCK: "nope." };

/** Hero illustration: me, from behind, reviewing what an agent wants to do next. */
export function HeroStage() {
  // `tick` counts every request ever shown; the newest one is FEED[tick % FEED.length].
  const [tick, setTick] = useState(WINDOW - 1 + 2); // open on a BLOCK, the most telling state
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  const rows = Array.from({ length: WINDOW }, (_, i) => {
    const n = tick - (WINDOW - 1) + i;
    return { n, ...FEED[n % FEED.length] };
  });
  const latest = rows[rows.length - 1];

  return (
    <figure className="flex flex-col items-center w-full max-w-[440px] mx-auto md:mx-0 md:ml-auto">
      {/* The gate's screen: the thing he's looking at. */}
      <div className="on-ink pixel-screen relative w-full rounded-media bg-ink text-paper px-s3 pt-s2 pb-[100px]">
        <div className="flex items-center justify-between font-mono text-[11px] text-ink-2-rev pb-s2 mb-s1 border-b border-white/15">
          <span>agent-gate</span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="pixel-blink inline-block size-1.5 bg-allow" />
            live
          </span>
        </div>
        <ol aria-hidden="true" className="flex flex-col">
          {rows.map((r, i) => (
            <li
              key={r.n}
              className={`flex items-center justify-between gap-s2 py-1 font-mono text-[11px] sm:text-[12px] ${
                i === rows.length - 1 ? "pixel-row-in text-paper" : "text-ink-2-rev"
              }`}
            >
              <span className="truncate">
                <span className="text-white/30">{String(r.n).padStart(3, "0")} </span>
                {r.act}
              </span>
              <Verdict tone={TONE[r.v]}>{r.v}</Verdict>
            </li>
          ))}
        </ol>
      </div>

      {/* Me, standing in front of the screen, overlapping its lower edge. */}
      <div className="relative -mt-[84px] z-10 translate-x-[14%]">
        <p
          key={latest.n}
          aria-hidden="true"
          className="pixel-bubble pixel-row-in absolute left-[96%] -top-[6%] whitespace-nowrap font-mono text-[12px] font-bold bg-paper text-ink px-2 py-1"
        >
          {REACTION[latest.v]}
        </p>
        <Image
          src={me}
          alt="Pixel-art Hashvanth seen from behind, hand on his head, reviewing an agent's requests"
          priority
          className="pixel-bob h-[230px] sm:h-[260px] w-auto [image-rendering:pixelated]"
        />
        <span aria-hidden="true" className="block mx-auto -mt-2 h-2 w-[70%] bg-ink/15 rounded-[50%]" />
      </div>

      <figcaption className="mt-s3 flex flex-col items-center gap-1 text-center">
        <span className="type-name">Understand the problem. Then build the fix.</span>
        <span className="font-mono text-[11px] text-ink-2">↑ that&apos;s me, thinking it through before it ships</span>
      </figcaption>
    </figure>
  );
}
export default HeroStage;
