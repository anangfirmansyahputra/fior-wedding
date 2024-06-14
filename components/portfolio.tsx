"use client";

type PropsPortfolio = {
  data: {
    id: string;
    title: string;
    author: string;
    image: string;
    content: string;
    slug: string;
    created_at: string;
  }[];
  next: boolean;
  page: string;
};

import { cn } from "@/lib/utils";
import Card from "./card";
import { useRouter } from "next/navigation";

export default function Portfolio({ data, next, page }: PropsPortfolio) {
  const router = useRouter();

  return (
    <div className="bg-neutral-background py-20">
      <div className="container mx-auto">
        {/* Article */}
        <div>
          <h2
            className={cn(
              "mb-10 text-center text-3xl font-bold text-[#656565] ",
            )}
          >
            ARTICLE
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <Card
                key={item.id}
                description={item.content}
                href={`/portfolio/${item.slug}`}
                image={
                  process.env.NEXT_PUBLIC_API_URL + "/api/uploads/" + item.image
                }
                // image={item.images}
                title={item.title}
                author={item.author}
                created_at={item.created_at}
              />
            ))}
          </div>
        </div>

        {next && (
          <div className="mx-auto mt-20 flex items-center justify-center">
            <button
              onClick={() => {
                const newPage = Number(page) + 1;

                router.replace(`/portfolio?page=${newPage}`, {
                  scroll: false,
                });
                router.refresh();
              }}
              className="rounded bg-peach-whip px-10 py-2 text-white transition-all duration-150 hover:bg-rose-tan"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
