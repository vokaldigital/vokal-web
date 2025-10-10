"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

type ScrollNeonTextProps = {
  text: string;
  className?: string;
  delayIncrementMs?: number;
};

export function ScrollNeonText({
  text,
  className,
  delayIncrementMs = 35,
}: ScrollNeonTextProps) {
  const [progress, setProgress] = useState(0);
  const characters = Array.from(text);

  useEffect(() => {
    const handleScroll = () => {
      const max = 50; // animate over ~50px of hero scroll
      const startOffset = 0; // start immediately
      const activeScroll = Math.max(window.scrollY - startOffset, 0);
      const ratio = Math.min(activeScroll / max, 1);
      setProgress(ratio);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <span aria-hidden className={clsx("inline-flex", className)}>
      {characters.map((char, index) => {
        const threshold = (index + 1) / characters.length;
        const isNeon = progress >= threshold;
        return (
          <span
            key={`${char}-${index}`}
            className="transition-colors duration-300"
            style={{
              transitionDelay: `${index * delayIncrementMs}ms`,
              color: isNeon ? "#B4FF00" : "inherit",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}
