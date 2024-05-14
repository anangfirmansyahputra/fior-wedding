"use client";

type SliderProps = {
  data: {
    id: string;
    filename: string;
  }[];
};

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ImageSuspense from "./image-suspense";

export default function SliderCommponent({ data }: SliderProps) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    // @ts-ignore
    setNav1(sliderRef1);
    // @ts-ignore
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="px-5 lg:px-0">
      {data.length === 1 ? (
        <div className="relative aspect-video">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/api/uploads/${data[0].filename}`}
            // src={item.filename}
            alt="BG"
            fill
            className="absolute rounded-md object-cover"
          />
        </div>
      ) : (
        // @ts-ignore
        <Slider
          slidesToShow={1}
          asNavFor={nav2}
          dots={false}
          // @ts-ignore
          ref={(slider) => (sliderRef1 = slider)}
        >
          {data.map((item) => (
            <div key={item.id} className="relative aspect-video">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/uploads/${item.filename}`}
                alt="BG"
                fill
                className="absolute object-cover"
              />
            </div>
          ))}
        </Slider>
      )}
      {data.length === 1 ? null : (
        <div>
          {/* @ts-ignore */}
          <Slider
            dots={false}
            asNavFor={nav1}
            // @ts-ignore
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={data.length >= 6 ? 6 : data.length}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {data.map((item) => (
              <Image
                // src={`${process.env.NEXT_PUBLIC_API_URL}/upload/${item.filename}`}
                // src={item.filename}
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/uploads/${item.filename}`}
                alt="bg"
                width={400}
                height={400}
                className="aspect-video object-cover"
                key={item.id}
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
