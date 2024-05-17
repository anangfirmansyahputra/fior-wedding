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
    <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <div className="relative aspect-video">
        <Image src={image} fill alt="bg" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h5 className="mb-2 truncate text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <div className="mb-5 flex items-center justify-between font-carmorant">
          <p className="text-sm font-bold text-rose-tan">{author}</p>
          <p className="text-sm text-bold">{formattedDate(created_at)}</p>
        </div>
        <div className="flex flex-1 flex-col ">
          <p
            className="mb-3 flex-1  font-normal text-font"
            dangerouslySetInnerHTML={{
              __html: truncateContent(description, 150),
            }}
          />
          <Link
            href={href}
            className="flex w-fit items-center rounded bg-peach-whip px-10 py-2 text-white transition-all duration-150 hover:bg-rose-tan"
          >
            Read more
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}