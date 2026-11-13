import HeroSection from "@/components/sections/HeroSection";
import ThesisSection from "@/components/sections/ThesisSection";
import SignatureSection from "@/components/sections/SignatureSection";
import AppliedAISection from "@/components/sections/AppliedAISection";
import MoreBuildsSection from "@/components/sections/MoreBuildsSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ThesisSection />
      <SignatureSection />
      <AppliedAISection />
      <MoreBuildsSection />
      <ManifestoSection />
      <ContactSection />
    </div>
  );
}
