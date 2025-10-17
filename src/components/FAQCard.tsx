"use client";

import clsx from "clsx";
import { useEffect, useState, type KeyboardEvent } from "react";

type FAQCardProps = {
  question: string;
  answer: string;
};

export function FAQCard({ question, answer }: FAQCardProps) {
  const [hoverInteraction, setHoverInteraction] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateInteraction = () => {
      setHoverInteraction(mediaQuery.matches);
      setOpen(false);
    };

    updateInteraction();
    mediaQuery.addEventListener("change", updateInteraction);

    return () => mediaQuery.removeEventListener("change", updateInteraction);
  }, []);

  const handleClick = () => {
    if (!hoverInteraction) {
      setOpen((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (hoverInteraction) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverInteraction) {
      setOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "group rounded-[28px] border border-white/10 bg-black/30 p-6 text-white backdrop-blur-[14px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60",
        hoverInteraction ? "cursor-default" : "cursor-pointer",
        open ? "border-white/40" : "hover:border-white/30"
      )}
    >
      <div className="flex items-center justify-between text-lg font-medium text-white">
        <span>{question}</span>
        <span
          className={clsx(
            "ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300",
            open ? "rotate-180 border-white/40 bg-white/10 text-white" : "",
            !open && hoverInteraction ? "group-hover:rotate-180 group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white" : ""
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>
      <div
        className={clsx(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="mt-3 text-sm text-white/75">{answer}</p>
        </div>
      </div>
    </div>
  );
}
