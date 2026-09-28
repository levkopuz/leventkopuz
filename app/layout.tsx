import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Levent Kopuz — Experience, Product, Strategy & AI",
  description:
    "Levent Kopuz builds scalable experiences through strategy, product thinking and AI.",
  keywords: [
    "Levent Kopuz",
    "Experience Strategy",
    "Product Strategy",
    "AI",
    "Innovation",
    "Digital Experience",
  ],
  openGraph: {
    title: "Levent Kopuz",
    description:
      "Building scalable experiences through strategy, product thinking and AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levent Kopuz",
    description:
      "Building scalable experiences through strategy, product thinking and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
