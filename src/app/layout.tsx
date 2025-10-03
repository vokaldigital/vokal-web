import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = { title: "Vokal Digital" };

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

export const metadata = {
  title: 'Vokal Digital',
  description: 'AI-driven strategy for growth.',
  metadataBase: new URL('https://vokal.digital'),
  openGraph: { title: 'Vokal Digital', url: 'https://vokal.digital', type: 'website' },
  twitter: { card: 'summary_large_image' }
};