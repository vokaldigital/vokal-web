import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New App",
  description: "Fresh Next.js + Tailwind starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <Nav />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
