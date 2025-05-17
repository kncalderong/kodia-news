import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Kodia News Portal Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full bg-dark-blue text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
