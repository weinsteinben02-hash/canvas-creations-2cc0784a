const experiences = [
  {
    role: "Brand Strategy Intern",
    company: "Creative Agency",
    period: "2024",
    description: "Supported brand positioning and campaign development for tech clients.",
  },
  {
    role: "Marketing Lead",
    company: "University Club",
    period: "2023 - Present",
    description: "Led rebranding initiative and grew social engagement by 150%.",
  },
  {
    role: "Freelance Designer",
    company: "Various Clients",
    period: "2022 - Present",
    description: "Visual identity and brand collateral for startups and small businesses.",
  },
];

const skills = [
  "Brand Strategy",
  "Visual Identity",
  "Creative Direction",
  "Market Research",
  "Storytelling",
  "Figma",
  "Adobe Suite",
  "Presentation Design",
];

export const ExperienceSkillsSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <p className="mb-2 font-medium text-accent">Background</p>
            <h2 className="mb-10 text-4xl uppercase md:text-5xl">Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.role}
                  className="relative border-l-2 border-border pl-6 transition-colors hover:border-accent"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="mb-2 font-medium text-accent">Capabilities</p>
            <h2 className="mb-10 text-4xl uppercase md:text-5xl">Skills</h2>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-all hover:border-accent hover:bg-accent/5"
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
