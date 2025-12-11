import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center section-padding">
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-[60%] w-[40%] bg-gradient-to-bl from-sky/20 to-transparent" />
      <div className="absolute bottom-0 left-0 h-[40%] w-[30%] bg-gradient-to-tr from-accent/10 to-transparent" />
      
      <div className="relative z-10 max-w-5xl">
        <p className="mb-4 text-lg font-medium text-accent md:text-xl">
          Student & Creative Strategist
        </p>
        
        <h1 className="mb-6 text-6xl uppercase leading-[0.9] md:text-8xl lg:text-9xl">
          <span className="font-bold">Ben</span>
          <br />
          <span className="font-bold gradient-text">Weinstein</span>
        </h1>
        
        <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
          Crafting bold brand identities that cut through the noise and leave a lasting impression.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-medium text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
