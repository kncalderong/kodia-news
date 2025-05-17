import Search from "@/components/feed/Search";
import { Suspense } from "react";
import ArticlesGrid, {
  ArticlesGridSkeleton,
} from "@/components/feed/ArticlesGrid";

export default async function Tag(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
  params?: Promise<{
    tag?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const params = await props.params;
  const tag = params?.tag || "";
  console.log("tag", tag);

  return (
    <main className="container flex justify-center p-4  md:p-6 lg:p-8">
      <div className="flex flex-col gap-4 w-full md:gap-6 lg:gap-8">
        <Search placeholder="Search by name or author" />
        <Suspense key={query} fallback={<ArticlesGridSkeleton />}>
          <ArticlesGrid query={query} tag={tag} />
        </Suspense>
      </div>
    </main>
  );
}
