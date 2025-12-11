import { MondrianBlock } from "@/components/MondrianBlock";

const behaviours = [
  { title: "Bold", desc: "Taking risks that make brands memorable" },
  { title: "Curious", desc: "Always learning, always evolving" },
  { title: "Collaborative", desc: "Working together to achieve greatness" },
  { title: "Precise", desc: "Attention to every single detail" },
  { title: "Authentic", desc: "Staying true to core values" },
  { title: "Innovative", desc: "Pushing boundaries constantly" },
];

export const BehavioursSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-mondrian-black p-4 md:p-8">
      <div className="relative mx-auto min-h-[90vh] max-w-7xl py-12">
        {/* Title - scattered position */}
        <MondrianBlock
          color="yellow"
          large
          float="slow"
          className="relative z-10 mb-12 w-[60%] p-6 md:ml-[30%] md:w-[40%] md:p-10"
        >
          <h2 className="text-4xl text-foreground md:text-6xl lg:text-7xl">
            Behaviours
          </h2>
        </MondrianBlock>

        {/* Scattered behaviour blocks */}
        <div className="relative min-h-[60vh]">
          {/* Block 1 - top left */}
          <MondrianBlock
            color="red"
            float="medium"
            className="absolute left-0 top-0 w-[45%] p-5 md:left-[5%] md:w-[25%] md:p-6"
          >
            <h3 className="mb-2 text-xl text-mondrian-white md:text-2xl">{behaviours[0].title}</h3>
            <p className="text-xs text-mondrian-white/80 md:text-sm">{behaviours[0].desc}</p>
          </MondrianBlock>

          {/* Block 2 - top right */}
          <MondrianBlock
            color="white"
            float="fast"
            delay={1}
            className="absolute right-0 top-[5%] w-[40%] p-5 md:right-[10%] md:top-[10%] md:w-[22%] md:p-6"
          >
            <h3 className="mb-2 text-xl text-foreground md:text-2xl">{behaviours[1].title}</h3>
            <p className="text-xs text-muted-foreground md:text-sm">{behaviours[1].desc}</p>
          </MondrianBlock>

          {/* Block 3 - middle left */}
          <MondrianBlock
            color="blue"
            float="slow"
            delay={2}
            className="absolute left-[10%] top-[25%] w-[35%] p-5 md:left-[25%] md:top-[30%] md:w-[20%] md:p-6"
          >
            <h3 className="mb-2 text-xl text-mondrian-white md:text-2xl">{behaviours[2].title}</h3>
            <p className="text-xs text-mondrian-white/80 md:text-sm">{behaviours[2].desc}</p>
          </MondrianBlock>

          {/* Block 4 - middle right */}
          <MondrianBlock
            color="yellow"
            float="medium"
            delay={3}
            className="absolute right-[5%] top-[35%] w-[40%] p-5 md:right-[5%] md:top-[25%] md:w-[28%] md:p-6"
          >
            <h3 className="mb-2 text-xl text-foreground md:text-2xl">{behaviours[3].title}</h3>
            <p className="text-xs text-foreground/80 md:text-sm">{behaviours[3].desc}</p>
          </MondrianBlock>

          {/* Block 5 - bottom left */}
          <MondrianBlock
            color="white"
            float="fast"
            className="absolute bottom-[15%] left-[5%] w-[38%] p-5 md:bottom-[10%] md:left-[10%] md:w-[24%] md:p-6"
          >
            <h3 className="mb-2 text-xl text-foreground md:text-2xl">{behaviours[4].title}</h3>
            <p className="text-xs text-muted-foreground md:text-sm">{behaviours[4].desc}</p>
          </MondrianBlock>

          {/* Block 6 - bottom right */}
          <MondrianBlock
            color="red"
            float="slow"
            delay={1}
            className="absolute bottom-[5%] right-[15%] w-[35%] p-5 md:bottom-0 md:right-[25%] md:w-[20%] md:p-6"
          >
            <h3 className="mb-2 text-xl text-mondrian-white md:text-2xl">{behaviours[5].title}</h3>
            <p className="text-xs text-mondrian-white/80 md:text-sm">{behaviours[5].desc}</p>
          </MondrianBlock>

          {/* Decorative small blocks */}
          <MondrianBlock
            color="blue"
            float="medium"
            delay={2}
            className="absolute left-[50%] top-[5%] h-8 w-8 md:h-12 md:w-12"
          />
          <MondrianBlock
            color="yellow"
            float="fast"
            delay={3}
            className="absolute bottom-[40%] left-[60%] h-10 w-6 md:h-16 md:w-10"
          />
        </div>
      </div>
    </section>
  );
};
