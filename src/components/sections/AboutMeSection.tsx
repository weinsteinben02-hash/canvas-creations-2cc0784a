import benChildhood1 from "@/assets/ben-childhood-1.jpg";
import benChildhood2 from "@/assets/ben-childhood-2.jpg";

export const AboutMeSection = () => {
  return (
    <section id="story" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Header - spans left side */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <div className="inline-block px-4 py-1 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase mb-4">
              Introduction
            </div>
            <h2 className="text-5xl uppercase md:text-6xl lg:text-7xl leading-[0.9]">
              My
              <br />
              <span className="gradient-text">Story</span>
            </h2>
          </div>

          {/* Content - flows on the right */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              I've always experienced the world differently. When you move through environments that aren't always built for you, you learn to read people differently: tone, tension, and intention.
            </p>
            
            {/* Childhood photos */}
            <div className="relative my-12 grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={benChildhood1}
                  alt="Ben as a child"
                  className="w-full h-64 object-cover rounded-lg border border-border/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
              </div>
              <div className="relative">
                <img 
                  src={benChildhood2}
                  alt="Ben playing baseball as a child"
                  className="w-full h-64 object-cover rounded-lg border border-border/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
              </div>
            </div>
            
            <div className="w-16 h-px bg-primary/50" />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              That sensitivity became the foundation of how I understand the world. And eventually, how I understand brands.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I study marketing through a human lens. I'm drawn to how brands make people feel seen, included, and understood. I'm interested in the emotion behind behavior, the feeling before the thought, the memory before the message.
            </p>
            
            <div className="pt-4 pl-8 border-l-2 border-primary/30">
              <p className="text-lg text-foreground leading-relaxed italic">
                That curiosity guides my work. It shapes how I approach strategy, how I tell stories, and how I create meaning in the things I make.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
