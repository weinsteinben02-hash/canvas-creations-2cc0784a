const strategyElements = [
  {
    label: "Ambition",
    description: "To understand why things matter to people and help brands earn that meaning.",
  },
  {
    label: "Tension",
    description: "There's always a space between what a brand tries to express and what a person actually feels. I work inside that space.",
  },
  {
    label: "Audience",
    description: "Anyone committed to building brands with heart, not hype.",
  },
  {
    label: "Pillars",
    description: "Observation, Empathy, Clarity, Adaptability, Curiosity",
  },
  {
    label: "Personality",
    description: "Enthusiastic, thoughtful, aware, detail-oriented, purpose-driven",
  },
];

export const BrandStrategySection = () => {
  return (
    <section id="strategy" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-medium text-accent">Framework</p>
          <h2 className="text-4xl uppercase md:text-5xl lg:text-6xl">
            My Personal Brand Strategy
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strategyElements.map((item, index) => (
            <div
              key={item.label}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-lg"
            >
              <div className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 text-xl uppercase">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
