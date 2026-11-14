"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { THESIS_CONTENT } from "@/data/projects";

const statement = "type-statement text-center";

/** design.md "Thesis": three serif lines, pinned and crossfaded on scroll. Static stack for reduced motion. */
export default function ThesisSection() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  const aOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const aY = useTransform(scrollYProgress, [0.25, 0.33], [0, -24]);
  const bOpacity = useTransform(scrollYProgress, [0.3, 0.38, 0.58, 0.66], [0, 1, 1, 0]);
  const bY = useTransform(scrollYProgress, [0.3, 0.38, 0.58, 0.66], [24, 0, 0, -24]);
  const cOpacity = useTransform(scrollYProgress, [0.63, 0.72], [0, 1]);
  const cY = useTransform(scrollYProgress, [0.63, 0.72], [24, 0]);

  const conclusion = <em className="italic">{THESIS_CONTENT.conclusion}</em>;

  if (reduceMotion) {
    return (
      <section id="thesis" className="page py-s9 flex flex-col items-center gap-s5">
        <p className={`${statement} text-ink-2`}>{THESIS_CONTENT.lineA}</p>
        <p className={statement}>{THESIS_CONTENT.lineB}</p>
        <h2 className={statement}>
          {THESIS_CONTENT.question} {conclusion}
        </h2>
      </section>
    );
  }

  return (
    <section id="thesis" ref={trackRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-[60px]">
        <div className="grid max-w-[1000px] w-full place-items-center">
          {/* All three phases share one grid cell, so the box holds the tallest phase's height. */}
          <motion.p style={{ opacity: aOpacity, y: aY }} className={`[grid-area:1/1] ${statement} text-ink-2`}>
            {THESIS_CONTENT.lineA}
          </motion.p>
          <motion.p style={{ opacity: bOpacity, y: bY }} className={`[grid-area:1/1] ${statement}`}>
            {THESIS_CONTENT.lineB}
          </motion.p>
          <motion.h2 style={{ opacity: cOpacity, y: cY }} className={`[grid-area:1/1] ${statement}`}>
            {THESIS_CONTENT.question}
            <br />
            {conclusion}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
