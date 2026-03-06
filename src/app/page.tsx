import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import FitBridgeSection from "@/components/sections/FitBridgeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StorySection />
      <FitBridgeSection />
      <SkillsSection />
      <ProjectsSection />
      <PhilosophySection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
