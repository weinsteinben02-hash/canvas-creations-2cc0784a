import { Mail, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-2 font-medium text-accent">Let's Connect</p>
            <h2 className="mb-6 text-4xl uppercase md:text-5xl lg:text-6xl">
              Ready to build
              <br />
              <span className="text-accent">something bold?</span>
            </h2>
            <p className="text-lg text-primary-foreground/70">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <a
              href="mailto:ben@weinstein.com"
              className="group flex items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 transition-all hover:border-accent hover:bg-primary-foreground/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-primary-foreground/60">Email me at</p>
                <p className="text-lg font-medium">ben@weinstein.com</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary-foreground/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
            </a>

            <div className="flex flex-wrap gap-4">
              {["LinkedIn", "Twitter", "Dribbble"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium transition-all hover:border-accent hover:text-accent"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/50">© 2024 Ben Weinstein</p>
          <p className="text-sm text-primary-foreground/50">Designed with intention</p>
        </div>
      </div>
    </section>
  );
};
