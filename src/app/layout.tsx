import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vokal Digital",
  description: "Fresh Next.js + Tailwind starter",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[url('/website-background.jpg?v=1')] bg-[length:clamp(768px,100vw,100vw)_auto] bg-top bg-no-repeat text-gray-900 antialiased">
        <Nav />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
