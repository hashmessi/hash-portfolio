import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFD" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0C" },
  ],
};

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored ? stored : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`
          ${inter.variable} ${jetbrainsMono.variable}
          antialiased font-sans
          bg-bg text-text
          relative min-h-screen flex flex-col overflow-x-hidden
          selection:bg-accent selection:text-white
        `}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-3 left-3 z-[100] bg-accent text-white px-4 py-2 rounded-xl font-medium border-2 border-line-bold shadow-tactile"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-1 pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
