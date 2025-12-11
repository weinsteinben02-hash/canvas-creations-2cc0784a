import { ArrowDown } from "lucide-react";
import benProfile from "@/assets/ben-profile.png";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main content */}
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Student & Creative Strategist
            </p>
            
            <h1 className="mb-8 text-7xl uppercase leading-[0.85] md:text-8xl lg:text-[10rem] tracking-tight">
              <span className="block font-bold text-foreground">Ben</span>
              <span className="block font-bold gradient-text">Weinstein</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
              Exploring the space between brand intention and human emotion
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                My Story
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Profile image placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl rounded-full" />
              <img 
                src={benProfile}
                alt="Ben Weinstein"
                className="relative w-64 h-80 md:w-80 md:h-96 object-cover rounded-lg border border-border/50 shadow-2xl"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
