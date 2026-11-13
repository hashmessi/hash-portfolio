"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = stored || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div className={cn("h-9 w-20 rounded-xl bg-surface-subtle border-2 border-line-bold", className)} />
    );
  }

  return (
    <div
      role="group"
      aria-label="Theme selection"
      className={cn(
        "inline-flex items-center p-1 rounded-xl bg-surface border-2 border-line-bold shadow-tactile-sm transition-all",
        className
      )}
    >
      <button
        type="button"
        onClick={() => toggleTheme("dark")}
        aria-pressed={theme === "dark"}
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all select-none cursor-pointer",
          theme === "dark"
            ? "bg-text text-bg shadow-sm font-semibold"
            : "text-text-2 hover:text-text"
        )}
      >
        <Moon className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Dark</span>
      </button>

      <button
        type="button"
        onClick={() => toggleTheme("light")}
        aria-pressed={theme === "light"}
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all select-none cursor-pointer",
          theme === "light"
            ? "bg-text text-bg shadow-sm font-semibold"
            : "text-text-2 hover:text-text"
        )}
      >
        <Sun className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Light</span>
      </button>
    </div>
  );
}
export default ThemeToggle;

