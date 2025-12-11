const behaviours = [
  {
    category: "How I Work",
    items: [
      "Start with research and listening",
      "Iterate quickly, refine constantly",
      "Balance creativity with strategy",
      "Document everything for clarity",
    ],
  },
  {
    category: "How I Communicate",
    items: [
      "Direct and transparent",
      "Ask questions before assuming",
      "Share progress early and often",
      "Give and receive feedback openly",
    ],
  },
  {
    category: "How I Show Up",
    items: [
      "Curious and eager to learn",
      "Collaborative, not competitive",
      "Take ownership of outcomes",
      "Bring energy and optimism",
    ],
  },
];

export const BehavioursSection = () => {
  return (
    <section id="behaviors" className="section-padding bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-medium text-accent">Values</p>
          <h2 className="text-4xl uppercase md:text-5xl lg:text-6xl">
            Behaviors
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {behaviours.map((section) => (
            <div key={section.category}>
              <h3 className="mb-6 text-lg font-semibold uppercase tracking-wide text-accent">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-primary-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
