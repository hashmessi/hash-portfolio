"use client";

import { MANIFESTO_CONTENT, RECOGNITION_COUNTERS } from "@/data/projects";
import { TactileCard } from "@/components/core/TactileCard";
import { MonoBadge } from "@/components/core/MonoBadge";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 md:py-32 px-6 lg:px-12 max-w-6xl mx-auto border-t border-line">
      {/* Editorial Headline Statement */}
      <div className="flex flex-col gap-6 mb-16 md:mb-20">
        <MonoBadge variant="allow" dot>
          ENGINEERING PRINCIPLE
        </MonoBadge>
        <div className="text-3xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight text-text leading-tight">
          {MANIFESTO_CONTENT.statementLines.map((line, idx) => (
            <div
              key={idx}
              className={idx === 1 ? "text-accent underline decoration-line-bold decoration-2" : ""}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* 2-column layout: Philosophy text + Focus Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Body Copy */}
        <div className="flex flex-col gap-6 text-base sm:text-lg text-text-2 leading-relaxed">
          {MANIFESTO_CONTENT.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Right Column: 4 Focus Area Cards */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-2 mb-1">
            Focus Areas
          </span>
          {MANIFESTO_CONTENT.focusAreas.map((area, index) => (
            <div
              key={area}
              className="p-4 rounded-xl border-2 border-line-bold bg-surface shadow-tactile-sm flex items-center justify-between group hover:border-accent transition-colors"
            >
              <span className="font-mono text-xs sm:text-sm text-text font-medium">
                {area}
              </span>
              <span className="font-mono text-xs text-accent font-bold">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recognition Counters Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-line">
        {RECOGNITION_COUNTERS.map((counter) => (
          <TactileCard key={counter.label} className="p-6 text-center flex flex-col items-center gap-2">
            <span className="font-sans font-extrabold text-4xl sm:text-5xl text-accent">
              {counter.value}
            </span>
            <span className="font-mono text-xs uppercase font-bold text-text">
              {counter.label}
            </span>
            <span className="text-xs text-text-2">
              {counter.sub}
            </span>
          </TactileCard>
        ))}
      </div>
    </section>
  );
}

