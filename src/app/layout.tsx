import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

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
      <body className="w-full bg-dark-blue text-white flex flex-col lg:flex-row min-h-screen">
        <Navbar />
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
