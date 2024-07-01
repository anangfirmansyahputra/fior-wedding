"use client";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
  author: string;
  created_at: string;
};

export default function Card({
  description,
  href,
  image,
  title,
  author,
  created_at,
}: CardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const truncateContent = (content: string, maxLength: number) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  const formattedDate = (date: string) => {
    return dayjs(date).format("DD MMM, YYYY");
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <article className="flex flex-col space-y-[16px] overflow-hidden rounded-lg border border-gray-200 bg-white p-[16px] shadow">
      <div className="relative aspect-video">
        <Image src={image} fill alt="bg" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col">
        <h5 className="alata-regular mb-2 text-[20px] text-[#2B2B2B]">
          {title}
        </h5>
        <div className="flex flex-1 flex-col ">
          <p
            className="my-2 font-amiri"
            dangerouslySetInnerHTML={{
              __html: truncateContent(description, 150),
            }}
          />
          <Link
            href={href}
            className="alata-regular flex w-fit items-center rounded-lg border border-[#D19C98] px-4 py-2 text-[#D19C98] transition-all duration-150 hover:border-[#fff] hover:bg-[#D19C98] hover:text-white"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
