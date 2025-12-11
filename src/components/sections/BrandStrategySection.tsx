const strategyElements = [
  {
    label: "Ambition",
    description: "To understand why things matter to people and help brands earn that meaning.",
    size: "large",
  },
  {
    label: "Purpose",
    description: "To bring sensitivity, clarity, and empathy into branding, making people feel seen and understood.",
    size: "large",
  },
  {
    label: "Tension",
    description: "There's always a space between what a brand tries to express and what a person actually feels. I work inside that space.",
    size: "large",
  },
  {
    label: "Audience",
    description: "Anyone committed to building brands with heart, not hype.",
    size: "small",
  },
  {
    label: "Pillars",
    description: "Observation, Empathy, Clarity, Adaptability, Curiosity.",
    size: "small",
  },
  {
    label: "Personality",
    description: "Enthusiastic, thoughtful, aware, detail-oriented, purpose-driven.",
    size: "small",
  },
];

export const BrandStrategySection = () => {
  return (
    <section id="strategy" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="inline-block px-4 py-1 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase mb-4">
              Framework
            </div>
            <h2 className="text-4xl uppercase md:text-5xl lg:text-6xl leading-[0.9]">
              My Personal
              <br />
              <span className="gradient-text">Brand Strategy</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-lg text-muted-foreground max-w-xl">
              A framework for understanding who I am, what I do, and why it matters.
            </p>
          </div>
        </div>

        {/* Bento-style grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large cards for Ambition, Purpose, and Tension */}
          {strategyElements.slice(0, 3).map((item, index) => (
            <div
              key={item.label}
              className={`group relative p-8 md:p-10 bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:bg-secondary/30 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="absolute top-6 right-6 text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-4 text-2xl uppercase font-semibold text-primary">{item.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
          
          {/* Smaller cards for the rest */}
          {strategyElements.slice(3).map((item, index) => (
            <div
              key={item.label}
              className="group relative p-6 md:p-8 bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:bg-secondary/30"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {String(index + 4).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-lg uppercase font-semibold text-primary">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
