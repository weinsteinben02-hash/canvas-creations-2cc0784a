import { useState } from "react";
import { MondrianBlock } from "@/components/MondrianBlock";

const navItems = [
  { label: "Strategy", href: "#strategy" },
  { label: "Behaviours", href: "#behaviours" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed nav button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 md:right-8 md:top-8"
        aria-label="Toggle navigation"
      >
        <MondrianBlock
          color={isOpen ? "red" : "white"}
          large
          className="flex h-14 w-14 items-center justify-center transition-colors hover:bg-mondrian-yellow md:h-16 md:w-16"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-[3px] w-6 bg-mondrian-black transition-transform ${
                isOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-6 bg-mondrian-black transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-6 bg-mondrian-black transition-transform ${
                isOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </div>
        </MondrianBlock>
      </button>

      {/* Full screen nav overlay */}
      <div
        className={`fixed inset-0 z-40 bg-mondrian-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex h-full items-center justify-center">
          {/* Decorative blocks */}
          <MondrianBlock
            color="blue"
            large
            className="absolute left-0 top-0 h-[30%] w-[25%]"
          />
          <MondrianBlock
            color="yellow"
            large
            className="absolute bottom-0 right-0 h-[40%] w-[30%]"
          />
          <MondrianBlock
            color="red"
            large
            className="absolute bottom-[20%] left-[10%] h-[15%] w-[20%]"
          />

          {/* Nav items */}
          <nav className="relative z-10">
            <ul className="space-y-4 text-center md:space-y-6">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center gap-4 text-4xl text-foreground transition-colors hover:text-mondrian-red md:text-6xl lg:text-7xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <MondrianBlock
                      color={["red", "blue", "yellow", "red", "blue"][index] as "red" | "blue" | "yellow"}
                      className="h-4 w-4 transition-transform group-hover:scale-150 md:h-6 md:w-6"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Lines */}
          <div className="absolute left-[30%] top-0 h-full w-[6px] bg-mondrian-black md:w-[10px]" />
          <div className="absolute bottom-[30%] left-0 right-0 h-[6px] bg-mondrian-black md:h-[10px]" />
        </div>
      </div>
    </>
  );
};
