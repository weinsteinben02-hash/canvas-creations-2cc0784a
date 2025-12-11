const strategies = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your brand's DNA, values, audience, and market position.",
  },
  {
    number: "02",
    title: "Positioning",
    description: "Crafting a distinctive market position that resonates with your target audience.",
  },
  {
    number: "03",
    title: "Identity",
    description: "Building visual systems that embody your brand's personality and values.",
  },
  {
    number: "04",
    title: "Execution",
    description: "Comprehensive brand guidelines ensuring consistency across all touchpoints.",
  },
];

export const BrandStrategySection = () => {
  return (
    <section id="strategy" className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-medium text-primary">How I Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Brand Strategy
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {strategies.map((item, index) => (
            <div
              key={item.number}
              className="group relative rounded-2xl bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="mb-4 block text-5xl font-bold text-primary/20 transition-colors group-hover:text-primary/40">
                {item.number}
              </span>
              <h3 className="mb-3 text-2xl">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
