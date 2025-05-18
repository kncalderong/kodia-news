import { getImageUrl } from "@/sanity/utils/get-image-url";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function ArticleElement({
  article,
}: {
  article: SanityDocument;
}) {
  const articleImageURL = article.image
    ? getImageUrl(article.image).height(400).url()
    : null;

  return (
    <article className="text-gray flex flex-col gap-1">
      <Link
        href={`/article/${article?._id}`}
        className="block w-full h-[200px] md:h-[224px] lg:h-[250px] relative rounded-lg overflow-hidden"
      >
        <Image
          src={articleImageURL || "https://placehold.co/550x310/png"}
          alt={article.name || article.image?.caption || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="text-sm">
        <span>By: </span>
        <Link
          href={`/author/${article.author?._id}`}
          className="ml-1 hover:underline"
        >
          {article.author?.name}
        </Link>
      </div>
      <Link
        href={`/article/${article?._id}`}
        className="text-white hover:underline text-lg"
      >
        {article.title}
      </Link>
    </article>
  );
}

export function ArticleSkeleton() {
  return (
    <article className="text-gray flex flex-col gap-1">
      <div className="block w-full h-[200px] md:h-[224px] lg:h-[250px] relative rounded-lg overflow-hidden bg-semi-dark-blue animate-pulse"></div>
      <div className="text-sm h-4 bg-semi-dark-blue animate-pulse rounded-lg"></div>
      <div className="text-white h-4 w-full rounded-lg animate-pulse bg-semi-dark-blue"></div>
    </article>
  );
}
