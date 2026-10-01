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
  metadataBase: new URL("https://leventkopuz.vercel.app"),
  title: "Levent Kopuz — Product Innovation & Experience",
  description:
    "Levent Kopuz works across product innovation, experience, mentorship, program management and community building.",
  openGraph: {
    title: "Levent Kopuz — Product Innovation & Experience",
    description:
      "Building products, enabling founders and connecting communities.",
    url: "https://leventkopuz.vercel.app",
    siteName: "Levent Kopuz",
    type: "website",
    images: [
      {
        url: "/social-preview-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Levent Kopuz — Product Innovation & Experience",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levent Kopuz — Product Innovation & Experience",
    description:
      "Building products, enabling founders and connecting communities.",
    images: ["/social-preview-v2.jpg"],
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
