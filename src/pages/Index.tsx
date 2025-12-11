import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStrategySection } from "@/components/sections/BrandStrategySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BrandStrategySection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
