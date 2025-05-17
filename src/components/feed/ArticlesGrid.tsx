import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import ArticleElement, { ArticleSkeleton } from "./ArticleElement";

const searchQuery = (term: string) => {
  const query = `*[_type == "article" ${
    term
      ? `&&
  (
    title match $term ||
    description match $term ||
    author->name match $term ||
    tags[]->title match $term
  )`
      : ""
  }]{
  ...,
  author->{
    name
  },
}`;
  return query;
};

export default async function ArticlesGrid({ query }: { query: string }) {
  const SEARCH_QUERY = searchQuery(query);
  const articles = await client.fetch<SanityDocument[]>(SEARCH_QUERY, {
    term: `${query}*`,
  });

  return (
    <div>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {articles.map((article) => (
            <ArticleElement article={article} key={article._id} />
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl">No articles found</div>
      )}
    </div>
  );
}

export function ArticlesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {Array.from({ length: 6 }).map((_, index: number) => (
        <ArticleSkeleton key={index} />
      ))}
    </div>
  );
}
