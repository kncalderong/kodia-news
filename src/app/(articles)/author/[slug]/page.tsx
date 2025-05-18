import { client } from "@/sanity/client";
import { getImageUrl } from "@/sanity/utils/get-image-url";
import Image from "next/image";
import Link from "next/link";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

type WorkElement = {
  title: string;
  _id: string;
};

// TODO: Bring author details
const AUTHOR_QUERY = `*[_type == "author" && _id == $slug][0]{
  ...,
  "work": *[_type=='article' && references(^._id)][0...5]{ title, _id}
}`;

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = await client.fetch(AUTHOR_QUERY, { slug });
  const authorImageURL = author.image
    ? getImageUrl(author.image).height(800).url()
    : null;

  return (
    <main className="container grid grid-cols-1 md:grid-cols-2 p-4 gap-4 md:p-6 lg:p-8 my-8 lg:my-12">
      <div className=" w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{author.name}</h1>
        <div className="text-gray lg:text-lg">{author.bio}</div>
        {author.work?.length > 0 && (
          <>
            <h3 className="text-lg">More by this author:</h3>
            <div className="flex flex-col gap-2">
              {author.work?.map((article: WorkElement) => (
                <div key={article._id} className="text-gray">
                  <Link href={`/article/${article._id}`} className="underline">
                    {article.title}
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="block w-full h-[400px] relative rounded-lg overflow-hidden ">
        <Image
          src={authorImageURL || "https://placehold.co/550x310/png"}
          alt={author.name || author.image?.caption || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </main>
  );
}
