import HeroSection from "@/components/sections/HeroSection";
import ThesisSection from "@/components/sections/ThesisSection";
import SignatureSection from "@/components/sections/SignatureSection";
import AppliedAISection, { MoreBuildsSection } from "@/components/sections/AppliedAISection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import { ClosingPanel } from "@/components/editorial/ClosingPanel";

export default function Home() {
  // Block, not flex-col: in a flex column, mx-auto sections size to min-content and a nowrap row inflates the page on mobile.
  return (
    <div className="w-full">
      <HeroSection />
      <ThesisSection />
      <SignatureSection />
      <AppliedAISection />
      <MoreBuildsSection />
      <ManifestoSection />
      <ClosingPanel surround="green" />
    </div>
  );
}
