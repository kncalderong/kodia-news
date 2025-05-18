import { client } from "@/sanity/client";
import { getImageUrl } from "@/sanity/utils/get-image-url";
import Image from "next/image";
import Link from "next/link";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

// TODO: Bring article details
const ARTICLE_QUERY = `*[_type == "article" && _id == $slug][0]{
...,
author->{
  name,
  _id,
  }
}`;

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await client.fetch(ARTICLE_QUERY, { slug });
  const articleImageURL = article.image
    ? getImageUrl(article.image).url()
    : null;

  return (
    <main className="container flex flex-col justify-center p-4 gap-4 md:p-6 lg:p-8 my-8 lg:my-12">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <div className="text-gray flex items-center justify-between">
        <div>
          <span>By: </span>
          <Link
            href={`/author/${article.author?._id}`}
            className="ml-1 hover:underline"
          >
            {article.author?.name}
          </Link>
        </div>
        <div>
          <span>Pushished on: </span>
          <span>
            {new Date(article._createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="block w-full h-[400px] relative rounded-lg overflow-hidden ">
        <Image
          src={articleImageURL || "https://placehold.co/550x310/png"}
          alt={article.image?.caption || article.name || ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        {article.content?.length > 0 &&
          article.content.map((content: any) => {
            return (
              <p key={content._key} className="lg:text-lg">
                {content.children[0]?.text}
              </p>
            );
          })}
      </div>
    </main>
  );
}
