import Search from "@/components/feed/Search";
import { Suspense } from "react";
import ArticlesGrid from "@/components/feed/ArticlesGrid";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <main className="container flex justify-center p-4  md:p-6 lg:p-8">
      <div className="flex flex-col gap-4 w-full md:gap-6 lg:gap-8">
        <Search placeholder="Search by name or author" />
        <Suspense key={query} fallback={"Loading..."}>
          <ArticlesGrid query={query} />
        </Suspense>
      </div>
    </main>
  );
}
