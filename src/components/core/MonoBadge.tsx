"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface MonoBadgeProps {
  variant?: "default" | "award" | "block" | "allow" | "neutral";
  dot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function MonoBadge({
  variant = "default",
  dot = false,
  dotColor,
  icon,
  children,
  className,
}: MonoBadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md border transition-colors";

  const variantClasses = {
    default: "bg-surface-subtle border-line-bold text-text-2",
    neutral: "bg-surface border-line text-text-2",
    award: "bg-award/10 border-award text-award font-semibold",
    allow: "bg-accent/10 border-accent text-accent font-semibold",
    block: "bg-block/10 border-block text-block font-semibold",
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0 animate-pulse", dotColor || "bg-accent")}
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
export default MonoBadge;

