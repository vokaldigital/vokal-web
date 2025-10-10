"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

export function GearLottie({ className = "h-6 w-6" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let animation: AnimationItem | undefined;
    (async () => {
      const response = await fetch("/animations/gear.json");
      const data = await response.json();
      animation = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: data,
      });
    })();

    return () => {
      animation?.destroy();
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden />;
}
