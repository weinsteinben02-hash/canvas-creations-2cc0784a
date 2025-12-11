import { Mail, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-primary/5" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="inline-block px-4 py-1 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase mb-4">
              Let's Connect
            </div>
            <h2 className="mb-8 text-5xl uppercase md:text-6xl lg:text-7xl leading-[0.9]">
              Ready to
              <br />
              <span className="gradient-text">collaborate?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to build something meaningful together.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <a
              href="mailto:ben@weinstein.com"
              className="group flex items-center gap-6 p-6 md:p-8 bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:bg-secondary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                <p className="text-xl font-medium text-foreground">ben@weinstein.com</p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              {["LinkedIn", "Twitter", "Dribbble"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-5 py-2.5 text-sm font-medium border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 Ben Weinstein</p>
          <p className="text-sm text-muted-foreground">Designed with intention</p>
        </div>
      </div>
    </section>
  );
};
