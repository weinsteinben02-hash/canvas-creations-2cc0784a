const projects = [
  {
    name: "Vertex Labs",
    type: "Brand Identity",
    year: "2024",
    insight: "Tech startups often look cold and unapproachable.",
    takeaway: "Human warmth can coexist with cutting-edge innovation.",
  },
  {
    name: "Solara Energy",
    type: "Visual System",
    year: "2024",
    insight: "Sustainability brands blend together with generic green aesthetics.",
    takeaway: "Bold colors and sharp design can convey eco-consciousness differently.",
  },
  {
    name: "Neon District",
    type: "Brand Strategy",
    year: "2023",
    insight: "Nightlife venues struggle to stand out in a saturated market.",
    takeaway: "A cohesive narrative beats flashy visuals every time.",
  },
  {
    name: "Arctic Foods",
    type: "Packaging",
    year: "2023",
    insight: "Premium frozen goods need to feel fresh, not cold.",
    takeaway: "Texture and warmth in design can transform perception.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-medium text-primary">Selected Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Projects</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl">{project.name}</h3>
                </div>
                
                <div className="flex flex-col gap-4 md:max-w-md md:text-right">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                      Insight
                    </p>
                    <p className="text-sm text-muted-foreground">{project.insight}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Takeaway
                    </p>
                    <p className="text-sm text-foreground">{project.takeaway}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
