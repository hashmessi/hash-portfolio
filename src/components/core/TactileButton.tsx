"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface TactileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function TactileButton({
  variant = "secondary",
  size = "md",
  href,
  external = false,
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: TactileButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium font-sans rounded-xl border-2 transition-all duration-100 ease-out select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-accent text-white border-line-bold shadow-tactile hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--line-bold)] active:translate-x-1 active:translate-y-1 active:shadow-none",
    secondary:
      "bg-surface text-text border-line-bold shadow-tactile hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--line-bold)] active:translate-x-1 active:translate-y-1 active:shadow-none",
    danger:
      "bg-block text-white border-line-bold shadow-tactile hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--line-bold)] active:translate-x-1 active:translate-y-1 active:shadow-none",
    ghost:
      "bg-transparent text-text border-transparent hover:bg-surface-subtle hover:border-line active:translate-y-0.5",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5 rounded-lg",
    md: "text-sm px-5 py-2.5 gap-2 rounded-xl",
    lg: "text-base px-6 py-3.5 gap-2.5 rounded-xl font-semibold",
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
export default TactileButton;

