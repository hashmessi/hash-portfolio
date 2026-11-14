import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FloatingIndex } from "@/components/editorial/FloatingIndex";
import SmoothScroll from "@/components/SmoothScroll";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});
const sans = Instrument_Sans({ subsets: ["latin"], display: "swap", variable: "--font-instrument-sans" });
// Wordmark only (variable wght + wdth; set wdth ~62-75 and wght 900 where used).
const display = Archivo({ subsets: ["latin"], weight: "variable", axes: ["wdth"], display: "swap", variable: "--font-archivo" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Hashvanth M U | Trust Layer for Autonomous AI",
  description:
    "AI agents can now browse, pay, delete data and sign deals. I build the systems that decide what they're allowed to do: runtime guardrails, payment gates and governed data operations.",
  keywords: [
    "AI Systems Engineer",
    "Autonomous AI",
    "AI Security",
    "Runtime Guardrails",
    "Trust Layer",
    "ChainBreak",
    "TrustPulse",
    "PromiseLoop",
    "Warden-MCP",
  ],
  authors: [{ name: "Hashvanth M U", url: "https://github.com/hashmessi" }],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${display.variable} ${jetbrains.variable}`}>
      <body
        className={`
          antialiased font-sans bg-paper text-ink
          relative min-h-screen flex flex-col overflow-x-hidden
        `}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-3 left-3 z-[100] bg-paper text-ink type-small px-s2 py-s1 rounded-media border border-ink"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <FloatingIndex />
        </SmoothScroll>
      </body>
    </html>
  );
}
