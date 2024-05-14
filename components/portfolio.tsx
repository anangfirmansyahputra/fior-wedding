type PropsPortfolio = {
  data: {
    id: string;
    title: string;
    author: string;
    images: string;
    content: string;
    slug: string;
    created_at: string;
  }[];
};

import { cn } from "@/lib/utils";
import axios from "axios";
import Card from "./card";
import SliderCommponent from "./slider";

export default async function Portfolio({ data }: PropsPortfolio) {
  const { data: portfolios } = await axios.get(
    `${process.env.API_URL}/api/galleries`,
  );

  return (
    <div className="bg-neutral-background py-20">
      <div className="container mx-auto">
        {portfolios.data.length === 0 ? null : (
          <SliderCommponent data={portfolios.data} />
        )}

        {/* Article */}
        <div>
          <h2
            className={cn(
              "mb-10 text-center text-3xl font-bold text-[#656565] ",
              portfolios.data.length > 0 && "mt-10",
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
                image={process.env.API_URL + "/api/uploads/" + item.images}
                // image={item.images}
                title={item.title}
                author={item.author}
                created_at={item.created_at}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
