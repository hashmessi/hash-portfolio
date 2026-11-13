"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TactileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "interactive";
  children: React.ReactNode;
}

export function TactileCard({
  variant = "default",
  className,
  children,
  ...props
}: TactileCardProps) {
  const baseClasses =
    "border-2 border-line-bold rounded-2xl p-6 md:p-8 transition-all duration-200";

  const variantClasses = {
    default: "bg-surface shadow-tactile",
    subtle: "bg-surface-subtle border-line",
    interactive:
      "bg-surface shadow-tactile hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--line-bold)] cursor-pointer",
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}
export default TactileCard;

