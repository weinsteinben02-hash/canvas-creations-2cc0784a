import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MondrianBlockProps {
  color?: "red" | "blue" | "yellow" | "white";
  className?: string;
  children?: ReactNode;
  float?: "slow" | "medium" | "fast";
  delay?: 1 | 2 | 3;
  large?: boolean;
}

const colorMap = {
  red: "bg-mondrian-red",
  blue: "bg-mondrian-blue",
  yellow: "bg-mondrian-yellow",
  white: "bg-mondrian-white",
};

const floatMap = {
  slow: "float-slow",
  medium: "float-medium",
  fast: "float-fast",
};

const delayMap = {
  1: "float-delay-1",
  2: "float-delay-2",
  3: "float-delay-3",
};

export const MondrianBlock = ({
  color = "white",
  className,
  children,
  float,
  delay,
  large = false,
}: MondrianBlockProps) => {
  return (
    <div
      className={cn(
        "border-mondrian-black",
        large ? "border-mondrian-lg" : "border-mondrian",
        colorMap[color],
        float && floatMap[float],
        delay && delayMap[delay],
        className
      )}
    >
      {children}
    </div>
  );
};
