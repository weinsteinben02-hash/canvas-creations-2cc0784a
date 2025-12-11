import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { BrandStrategySection } from "@/components/sections/BrandStrategySection";
import { BehavioursSection } from "@/components/sections/BehavioursSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutMeSection />
      <BrandStrategySection />
      <BehavioursSection />
      <ContactSection />
    </main>
  );
};

export default Index;
