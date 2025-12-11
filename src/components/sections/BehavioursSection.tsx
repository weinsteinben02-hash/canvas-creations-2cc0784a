const behaviours = [
  {
    category: "How I Work",
    items: [
      "Balance creativity with strategy",
      "Pay attention to emotion details",
      "Move thoughtfully, not reactively",
      "Understand feeling before analytics",
    ],
  },
  {
    category: "How I Communicate",
    items: [
      "Clarity, intention, and honestly",
      "Translate complexity into meaning",
      "Create conversations, not transactions",
      "Connection over polish",
    ],
  },
  {
    category: "How I Problem Solve",
    items: [
      "Approach with patience and positivity",
      "Combine empathy and insight",
      "Sift through noise to identify true meaning",
      "Adapt quickly",
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
