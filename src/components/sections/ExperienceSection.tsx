import { MondrianBlock } from "@/components/MondrianBlock";

const experiences = [
  {
    role: "Senior Brand Designer",
    company: "Creative Studio X",
    period: "2022 - Present",
    color: "blue" as const,
  },
  {
    role: "Brand Strategist",
    company: "Agency Bold",
    period: "2019 - 2022",
    color: "red" as const,
  },
  {
    role: "Visual Designer",
    company: "Design Collective",
    period: "2017 - 2019",
    color: "yellow" as const,
  },
  {
    role: "Junior Designer",
    company: "Startup Labs",
    period: "2015 - 2017",
    color: "white" as const,
  },
];

export const ExperienceSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-mondrian-yellow p-4 md:p-8">
      <div className="relative mx-auto max-w-7xl py-12">
        {/* Title */}
        <MondrianBlock
          color="white"
          large
          float="slow"
          className="mb-16 inline-block p-6 md:p-10"
        >
          <h2 className="text-5xl text-foreground md:text-7xl lg:text-8xl">
            Experience
          </h2>
        </MondrianBlock>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-[6px] bg-mondrian-black md:left-1/2 md:-ml-[3px] md:w-[10px]" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline dot */}
              <MondrianBlock
                color={exp.color}
                className="absolute left-2 top-4 z-10 h-6 w-6 md:left-1/2 md:-ml-3 md:h-8 md:w-8"
              />

              <MondrianBlock
                color={exp.color}
                float={index % 2 === 0 ? "slow" : "medium"}
                delay={((index % 3) + 1) as 1 | 2 | 3}
                large
                className={`ml-12 w-[calc(100%-3rem)] p-6 md:ml-0 md:w-[45%] md:p-8 ${
                  index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-widest ${
                    exp.color === "white" || exp.color === "yellow"
                      ? "text-muted-foreground"
                      : "text-mondrian-white/70"
                  }`}
                >
                  {exp.period}
                </span>
                <h3
                  className={`my-2 text-2xl md:text-3xl ${
                    exp.color === "white" || exp.color === "yellow"
                      ? "text-foreground"
                      : "text-mondrian-white"
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`text-lg ${
                    exp.color === "white" || exp.color === "yellow"
                      ? "text-muted-foreground"
                      : "text-mondrian-white/80"
                  }`}
                >
                  {exp.company}
                </p>
              </MondrianBlock>
            </div>
          ))}
        </div>

        {/* Decorative blocks */}
        <MondrianBlock
          color="blue"
          float="fast"
          className="absolute right-[10%] top-[20%] h-12 w-12 md:h-20 md:w-20"
        />
        <MondrianBlock
          color="red"
          float="medium"
          delay={2}
          className="absolute bottom-[30%] left-[5%] h-8 w-16 md:h-12 md:w-24"
        />
      </div>
    </section>
  );
};
