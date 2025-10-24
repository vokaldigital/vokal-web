"use client";

import { usePathname } from "next/navigation";
import { useMemo, type ReactNode } from "react";

const defaultBackground =
  "bg-[url('/mobile-background.jpg?v=1')] md:bg-[url('/website-background.jpg?v=1')] bg-[length:clamp(768px,100vw,100vw)_auto] bg-top bg-no-repeat";

const aboutBackground = "bg-[url('/about-background.jpg?v=1')] bg-[length:100%_auto] bg-top bg-no-repeat";

const backgroundByPath: Record<string, string> = {
  "/about": aboutBackground,
  "/services": aboutBackground,
  "/approach": aboutBackground,
  "/get-started": aboutBackground,
};

function resolveBackground(pathname: string) {
  if (backgroundByPath[pathname]) {
    return backgroundByPath[pathname];
  }
  return defaultBackground;
}

export function PageShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const backgroundClass = useMemo(() => resolveBackground(pathname), [pathname]);

  return (
    <div className={`min-h-dvh text-gray-900 ${backgroundClass}`}>
      {children}
    </div>
  );
}
