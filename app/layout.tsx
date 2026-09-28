import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Levent Kopuz — Experience, Product, Strategy & AI",
  description:
    "Levent Kopuz builds scalable experiences through strategy, product thinking and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
