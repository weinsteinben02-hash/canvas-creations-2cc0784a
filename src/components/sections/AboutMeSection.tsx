export const AboutMeSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 font-medium text-accent">Introduction</p>
            <h2 className="text-4xl uppercase md:text-5xl lg:text-6xl">
              About Me
            </h2>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a student and creative strategist passionate about building brands that resonate. 
              I believe in the power of strategic thinking combined with bold creative execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach blends analytical rigor with creative intuition—understanding the 
              "why" behind every decision while pushing boundaries on the "how."
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Strategy", "Branding", "Design Thinking", "Storytelling"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-sky/20 px-4 py-2 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
