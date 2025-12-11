const strategyElements = [
  {
    label: "Ambition",
    description: "The big-picture goal driving every decision forward.",
  },
  {
    label: "Tension",
    description: "The challenge or friction that creates opportunity.",
  },
  {
    label: "Audience",
    description: "Understanding who we're speaking to and why they care.",
  },
  {
    label: "Purpose",
    description: "The deeper meaning that gives the brand its soul.",
  },
  {
    label: "Pillars",
    description: "Core principles that guide every brand expression.",
  },
  {
    label: "Personality",
    description: "The distinct voice and character that makes it human.",
  },
];

export const BrandStrategySection = () => {
  return (
    <section id="strategy" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-medium text-accent">Framework</p>
          <h2 className="text-4xl uppercase md:text-5xl lg:text-6xl">
            Brand Strategy
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
