import { MondrianBlock } from "@/components/MondrianBlock";

export const BrandStrategySection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background p-4 md:p-8">
      <div className="relative mx-auto h-auto min-h-[90vh] max-w-7xl">
        {/* Vertical composition - stacked blocks */}
        
        {/* Title block */}
        <MondrianBlock
          color="blue"
          large
          float="slow"
          className="relative z-10 mb-8 ml-auto w-[70%] p-6 md:w-[50%] md:p-10"
        >
          <h2 className="text-4xl text-mondrian-white md:text-6xl lg:text-7xl">
            Brand Strategy
          </h2>
        </MondrianBlock>

        {/* Content blocks - vertical stack */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <MondrianBlock
              color="yellow"
              float="medium"
              delay={1}
              className="p-6 md:p-8"
            >
              <h3 className="mb-3 text-2xl text-foreground md:text-3xl">Discovery</h3>
              <p className="text-sm text-foreground/80 md:text-base">
                Deep dive into your brand's DNA. Understanding your values, audience, and market position.
              </p>
            </MondrianBlock>

            <MondrianBlock
              color="white"
              float="fast"
              delay={2}
              className="p-6 md:p-8"
            >
              <h3 className="mb-3 text-2xl text-foreground md:text-3xl">Research</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Competitive analysis and market research to find your unique space in the industry.
              </p>
            </MondrianBlock>
          </div>

          {/* Middle column */}
          <div className="flex flex-col gap-6 md:w-1/3 md:mt-16">
            <MondrianBlock
              color="red"
              float="slow"
              className="p-6 md:p-8"
            >
              <h3 className="mb-3 text-2xl text-mondrian-white md:text-3xl">Positioning</h3>
              <p className="text-sm text-mondrian-white/90 md:text-base">
                Crafting a distinctive market position that resonates with your target audience.
              </p>
            </MondrianBlock>

            <MondrianBlock
              color="white"
              float="medium"
              delay={3}
              className="p-6 md:p-8"
            >
              <h3 className="mb-3 text-2xl text-foreground md:text-3xl">Messaging</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Developing a voice and tone that speaks directly to your customers' needs.
              </p>
            </MondrianBlock>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 md:w-1/3 md:mt-32">
            <MondrianBlock
              color="blue"
              float="fast"
              delay={1}
              className="p-6 md:p-8"
            >
              <h3 className="mb-3 text-2xl text-mondrian-white md:text-3xl">Identity</h3>
              <p className="text-sm text-mondrian-white/90 md:text-base">
                Building visual systems that embody your brand's personality and values.
              </p>
            </MondrianBlock>

            <MondrianBlock
              color="yellow"
              float="slow"
              delay={2}
              className="p-6 md:p-8"
            >
              <h3 className="mb-3 text-2xl text-foreground md:text-3xl">Guidelines</h3>
              <p className="text-sm text-foreground/80 md:text-base">
                Comprehensive brand guidelines ensuring consistency across all touchpoints.
              </p>
            </MondrianBlock>
          </div>
        </div>

        {/* Decorative lines */}
        <div className="absolute left-[20%] top-0 h-[40%] w-[6px] bg-mondrian-black md:w-[10px]" />
        <div className="absolute bottom-[20%] left-0 right-[60%] h-[6px] bg-mondrian-black md:h-[10px]" />
      </div>
    </section>
  );
};
