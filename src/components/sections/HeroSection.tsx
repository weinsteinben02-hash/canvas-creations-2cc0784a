import { MondrianBlock } from "@/components/MondrianBlock";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background p-4 md:p-8">
      {/* Main composition */}
      <div className="relative mx-auto h-[90vh] max-w-7xl">
        {/* Large red block - top left */}
        <MondrianBlock
          color="red"
          float="slow"
          large
          className="absolute left-0 top-0 h-[45%] w-[40%] md:left-[5%] md:w-[35%]"
        />

        {/* Blue block - top right */}
        <MondrianBlock
          color="blue"
          float="medium"
          delay={1}
          large
          className="absolute right-0 top-[10%] h-[30%] w-[35%] md:right-[10%] md:w-[25%]"
        />

        {/* Yellow block - bottom right */}
        <MondrianBlock
          color="yellow"
          float="fast"
          delay={2}
          large
          className="absolute bottom-[15%] right-[5%] h-[25%] w-[30%] md:right-[15%]"
        />

        {/* White block with name - center */}
        <MondrianBlock
          color="white"
          float="slow"
          delay={3}
          large
          className="absolute left-[10%] top-[35%] z-10 flex h-auto w-[80%] flex-col justify-center p-6 md:left-[20%] md:w-[60%] md:p-12"
        >
          <h1 className="text-5xl leading-none text-foreground md:text-8xl lg:text-9xl">
            Creative
            <br />
            <span className="text-mondrian-red">Brand</span>
            <br />
            Designer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:mt-6 md:text-xl">
            Building bold identities that stand out
          </p>
        </MondrianBlock>

        {/* Small decorative blocks */}
        <MondrianBlock
          color="blue"
          float="fast"
          className="absolute bottom-[30%] left-[5%] h-16 w-16 md:h-24 md:w-24"
        />
        <MondrianBlock
          color="red"
          float="medium"
          delay={1}
          className="absolute right-[30%] top-[5%] h-12 w-20 md:h-16 md:w-32"
        />
        <MondrianBlock
          color="yellow"
          float="slow"
          delay={2}
          className="absolute bottom-[5%] left-[30%] h-20 w-12 md:h-28 md:w-16"
        />

        {/* Vertical line */}
        <div className="absolute bottom-0 left-[60%] top-[70%] w-[6px] bg-mondrian-black md:w-[10px]" />
        
        {/* Horizontal line */}
        <div className="absolute left-[40%] right-0 top-[60%] h-[6px] bg-mondrian-black md:h-[10px]" />
      </div>
    </section>
  );
};
