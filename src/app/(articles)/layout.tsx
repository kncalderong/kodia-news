import Navbar from "@/components/navigation/Navbar";

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-dark-blue text-white flex flex-col lg:flex-row min-h-screen">
      <Navbar />
      <div className="grow">{children}</div>
    </div>
  );
}
