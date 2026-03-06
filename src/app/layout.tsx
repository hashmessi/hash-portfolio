import type { Metadata } from "next";
import { VT323, Press_Start_2P, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const pxFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});
const termFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
  display: "swap",
});
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hashvanth M U | AI Product Developer",
  description:
    "Portfolio of Hashvanth M U — AI-powered products, intelligent systems, and startup engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`
          ${pxFont.variable} ${termFont.variable} ${pacifico.variable}
          antialiased font-terminal
          bg-[#0D0A08] text-[#F5E6C8]
          bg-halftone
          relative min-h-screen flex flex-col
          selection:bg-[#E84545] selection:text-[#F5E6C8]
        `}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 z-[100] bg-[#E84545] text-[#0D0A08] px-4 py-2 rounded font-bold"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-1 mt-[72px] border-t-2 border-dashed border-[#2E2218]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
