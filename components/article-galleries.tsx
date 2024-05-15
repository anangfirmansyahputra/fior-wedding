"use client";

import Image from "next/image";
import Slider, { Settings } from "react-slick";

type Props = {
  data: any;
};

export default function ArticleGalleries({ data }: Props) {
  const settings: Settings = {
    slidesToShow: 2,
  };

  const settingsSm: Settings = {
    slidesToShow: 1,
  };

  return (
    <>
      <div className="hidden px-5 sm:block lg:px-0">
        <Slider {...settings} className="mt-10 ">
          {data.data.galleries.map((gallery: any, i: number) => (
            <div key={i} className="relative aspect-video">
              <Image
                fill
                className="absolute h-auto max-w-full rounded-lg object-cover"
                // src="/assets/bg1.jpg"
                src={
                  process.env.NEXT_PUBLIC_API_URL + "/api/uploads/" + gallery
                }
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="block px-5 sm:hidden">
        <Slider {...settingsSm} className="mt-10">
          {data.data.galleries.map((gallery: any, i: number) => (
            <div key={i} className="relative aspect-video">
              <Image
                fill
                className="absolute h-auto max-w-full rounded-lg object-cover"
                // src="/assets/bg1.jpg"
                src={
                  process.env.NEXT_PUBLIC_API_URL + "/api/uploads/" + gallery
                }
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
