import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
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
      {/* Desktop nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 hidden items-center justify-between bg-background/80 px-12 py-6 backdrop-blur-md md:flex">
        <a href="#" className="font-display text-xl font-bold uppercase">
          BW
        </a>
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile nav button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-lg md:hidden"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <nav className="space-y-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-display text-3xl font-bold uppercase transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
