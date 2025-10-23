import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageShell } from "@/components/PageShell";

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
      <body className="min-h-dvh antialiased">
        <PageShell>
          <Nav />
          <div className="pt-20">{children}</div>
          <Footer />
        </PageShell>
      </body>
    </html>
  );
}
