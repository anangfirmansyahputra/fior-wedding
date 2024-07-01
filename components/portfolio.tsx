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

import { useRouter } from "next/navigation";
import Card from "./card";

export default function Portfolio({ data, next, page }: PropsPortfolio) {
  const router = useRouter();

  return (
    <div className="bg-[#fff] py-20">
      <div className="">
        {/* Article */}
        <div>
          <div className="relative mb-20">
            <div className="mx-auto w-fit">
              <h1 className="cardo-regular text-4xl text-[#2B2B2B]">
                Wedding Blog
              </h1>
              <div className="mx-auto mb-[30px] mt-[10px] h-[3px] w-[50%] bg-[#DBBEB8]" />
            </div>
            <p className="mx-auto text-center font-amiri text-[20px] text-[#5A5859]">
              FIOR Knowledge, Tips, Ideas & Inspiration
            </p>
          </div>
          <div className="gap-[28px] bg-[#DBBEB8] py-[32px]">
            <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item) => (
                <Card
                  key={item.id}
                  description={item.content}
                  href={`/portfolio/${item.slug}`}
                  image={
                    process.env.NEXT_PUBLIC_API_URL +
                    "/api/uploads/" +
                    item.image
                  }
                  title={item.title}
                  author={item.author}
                  created_at={item.created_at}
                />
              ))}
            </div>
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
