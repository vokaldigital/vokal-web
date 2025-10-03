// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Vokal Digital",
  description: "AI-driven strategy for growth.",
  metadataBase: new URL("https://vokal.digital"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}