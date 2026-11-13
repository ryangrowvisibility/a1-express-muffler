import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Zilla_Slab({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700"] });
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "A1 Express Muffler | Muffler & Exhaust Shop in Sacramento, CA",
  description:
    "Sacramento's muffler and exhaust shop on Arden Way since 2001. Muffler repair, catalytic converters, custom and performance exhaust, resonator deletes and Borla installs. NAPA Auto Care. Call (916) 484-9900.",
  openGraph: {
    title: "A1 Express Muffler | Sacramento Muffler & Exhaust",
    description: "Muffler, exhaust and catalytic converter work at 1216 Arden Way Ste B, Sacramento. Mon-Fri 9-5. Call (916) 484-9900.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
