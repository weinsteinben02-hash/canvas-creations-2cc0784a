export const AboutMeSection = () => {
  return (
    <section id="story" className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 font-medium text-accent">Introduction</p>
            <h2 className="text-4xl uppercase md:text-5xl lg:text-6xl">
              My Story
            </h2>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've always experienced the world differently. When you move through environments that aren't always built for you, you learn to read people differently: tone, tension, and intention. That sensitivity became the foundation of how I understand the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              And eventually, how I understand brands.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I study marketing through a human lens. I'm drawn to how brands make people feel seen, included, and understood. I'm interested in the emotion behind behavior, the feeling before the thought, the memory before the message.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That curiosity guides my work. It shapes how I approach strategy, how I tell stories, and how I create meaning in the things I make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
