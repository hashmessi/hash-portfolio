"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
}

export default function TextReveal({ children, className = "" }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Shadow text for layout */}
      <div className="invisible">{children}</div>
      {/* Revealed text */}
      <motion.div
        style={{ clipPath, opacity }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </div>
  );
}
