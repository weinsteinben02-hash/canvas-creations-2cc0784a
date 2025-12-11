import { MondrianBlock } from "@/components/MondrianBlock";

const projects = [
  { name: "Vertex Labs", type: "Brand Identity", year: "2024" },
  { name: "Solara Energy", type: "Visual System", year: "2024" },
  { name: "Neon District", type: "Brand Strategy", year: "2023" },
  { name: "Arctic Foods", type: "Packaging", year: "2023" },
  { name: "Metro Arts", type: "Campaign", year: "2023" },
  { name: "Pulse Health", type: "Digital Brand", year: "2022" },
];

export const ProjectsSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background p-4 md:p-8">
      <div className="relative mx-auto max-w-7xl py-12">
        {/* Title - offset grid style */}
        <div className="mb-12 flex items-start gap-4">
          <MondrianBlock
            color="red"
            large
            className="h-4 w-24 md:h-6 md:w-40"
          />
          <h2 className="text-5xl text-foreground md:text-7xl lg:text-8xl">
            Projects
          </h2>
        </div>

        {/* Grid-like but offset project cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {projects.map((project, index) => {
            const colors: Array<"red" | "blue" | "yellow" | "white"> = ["white", "blue", "yellow", "red", "white", "blue"];
            const floats: Array<"slow" | "medium" | "fast"> = ["slow", "medium", "fast"];
            const delays: Array<1 | 2 | 3> = [1, 2, 3];
            
            return (
              <MondrianBlock
                key={project.name}
                color={colors[index % colors.length]}
                float={floats[index % floats.length]}
                delay={delays[index % delays.length]}
                large
                className={`group cursor-pointer p-6 transition-transform hover:scale-105 md:p-8 ${
                  index % 2 === 1 ? "md:mt-12" : ""
                }`}
              >
                <span className={`text-xs uppercase tracking-widest ${
                  colors[index % colors.length] === "white" 
                    ? "text-muted-foreground" 
                    : colors[index % colors.length] === "yellow"
                    ? "text-foreground/70"
                    : "text-mondrian-white/70"
                }`}>
                  {project.type}
                </span>
                <h3 className={`my-2 text-2xl md:text-3xl ${
                  colors[index % colors.length] === "white" || colors[index % colors.length] === "yellow"
                    ? "text-foreground" 
                    : "text-mondrian-white"
                }`}>
                  {project.name}
                </h3>
                <span className={`text-sm ${
                  colors[index % colors.length] === "white" 
                    ? "text-muted-foreground" 
                    : colors[index % colors.length] === "yellow"
                    ? "text-foreground/60"
                    : "text-mondrian-white/60"
                }`}>
                  {project.year}
                </span>
              </MondrianBlock>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-4 top-[30%] h-[40%] w-[6px] bg-mondrian-black md:right-0 md:w-[10px]" />
        <MondrianBlock
          color="yellow"
          float="fast"
          className="absolute -left-8 bottom-[20%] h-20 w-8 md:left-0 md:h-32 md:w-12"
        />
      </div>
    </section>
  );
};
