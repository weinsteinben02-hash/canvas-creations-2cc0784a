import { MondrianBlock } from "@/components/MondrianBlock";

export const ContactSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background p-4 md:p-8">
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center py-12">
        {/* Minimal composition */}
        <div className="relative">
          {/* Large blue block - background */}
          <MondrianBlock
            color="blue"
            large
            float="slow"
            className="absolute -right-4 top-0 h-[60%] w-[50%] md:right-[10%] md:h-[70%] md:w-[40%]"
          />

          {/* Main content block */}
          <MondrianBlock
            color="white"
            large
            float="medium"
            delay={1}
            className="relative z-10 max-w-2xl p-8 md:p-12"
          >
            <h2 className="mb-6 text-5xl text-foreground md:text-7xl lg:text-8xl">
              Let's Work
              <br />
              <span className="text-mondrian-red">Together</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Ready to build something bold? Get in touch and let's create
              something unforgettable.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-4 text-xl text-foreground transition-colors hover:text-mondrian-red md:text-2xl"
              >
                <MondrianBlock color="red" className="h-4 w-4 transition-transform group-hover:scale-125" />
                hello@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="group flex items-center gap-4 text-xl text-foreground transition-colors hover:text-mondrian-blue md:text-2xl"
              >
                <MondrianBlock color="blue" className="h-4 w-4 transition-transform group-hover:scale-125" />
                +1 (234) 567-890
              </a>
            </div>

            <div className="mt-12 flex gap-6">
              <a
                href="#"
                className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <MondrianBlock color="yellow" className="h-3 w-3 transition-transform group-hover:scale-125" />
                LinkedIn
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <MondrianBlock color="yellow" className="h-3 w-3 transition-transform group-hover:scale-125" />
                Twitter
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <MondrianBlock color="yellow" className="h-3 w-3 transition-transform group-hover:scale-125" />
                Dribbble
              </a>
            </div>
          </MondrianBlock>

          {/* Decorative elements */}
          <MondrianBlock
            color="yellow"
            float="fast"
            delay={2}
            large
            className="absolute -bottom-8 left-[30%] h-24 w-32 md:bottom-0 md:left-[40%] md:h-32 md:w-48"
          />

          <MondrianBlock
            color="red"
            float="slow"
            delay={3}
            className="absolute -left-4 bottom-[40%] h-16 w-8 md:left-0 md:h-24 md:w-12"
          />

          {/* Lines */}
          <div className="absolute bottom-[20%] left-0 right-[70%] h-[6px] bg-mondrian-black md:h-[10px]" />
          <div className="absolute bottom-0 left-[20%] top-[80%] w-[6px] bg-mondrian-black md:w-[10px]" />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between md:bottom-8 md:left-8 md:right-8">
        <span className="font-display text-sm text-muted-foreground">
          © 2024
        </span>
        <span className="font-display text-sm text-muted-foreground">
          Designed with Mondrian Spirit
        </span>
      </div>
    </section>
  );
};
