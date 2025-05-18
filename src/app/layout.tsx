import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Kodia News Portal Challenge",
};

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
