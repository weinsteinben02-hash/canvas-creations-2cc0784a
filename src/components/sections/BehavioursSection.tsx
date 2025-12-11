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
    <section id="behaviors" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase mb-4">
            Values
          </div>
          <h2 className="text-5xl uppercase md:text-6xl lg:text-7xl">
            Behaviors
          </h2>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {behaviours.map((section, index) => (
            <div 
              key={section.category}
              className={`p-8 md:p-10 ${
                index === 1 
                  ? 'bg-secondary/50 md:-my-8 md:py-16' 
                  : 'bg-card/50'
              } ${index === 0 ? 'md:rounded-l-lg' : ''} ${index === 2 ? 'md:rounded-r-lg' : ''}`}
            >
              <div className="mb-8">
                <span className="text-6xl font-bold text-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-6 text-lg font-semibold uppercase tracking-wide text-foreground">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed">{item}</span>
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
