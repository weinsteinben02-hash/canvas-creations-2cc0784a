import { Mail, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-foreground text-background">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-2 font-medium text-primary">Let's Connect</p>
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
              Ready to build
              <br />
              <span className="gradient-text">something bold?</span>
            </h2>
            <p className="text-lg text-background/70">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <a
              href="mailto:ben@weinstein.com"
              className="group flex items-center gap-4 rounded-2xl border border-background/20 bg-background/5 p-6 transition-all hover:border-primary hover:bg-background/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-background/60">Email me at</p>
                <p className="text-lg font-medium">ben@weinstein.com</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-background/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </a>

            <div className="flex flex-wrap gap-4">
              {["LinkedIn", "Twitter", "Dribbble"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="rounded-full border border-background/20 px-6 py-3 text-sm font-medium transition-all hover:border-primary hover:text-primary"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-sm text-background/50">© 2024 Ben Weinstein</p>
          <p className="text-sm text-background/50">Designed with intention</p>
        </div>
      </div>
    </section>
  );
};
