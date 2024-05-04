import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export default function Card({ description, href, image, title }: CardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow">
      <div className="relative aspect-video">
        <Image src={image} fill alt="bg" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">{title}</h5>
        <div className="flex flex-1 flex-col ">
          <p className="mb-3 flex-1  font-normal text-font">{description}</p>
          <Link
            href={href}
            className="bg-peach-whip flex w-fit items-center rounded px-10 py-2 text-white"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
