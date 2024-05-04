"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Card from "./card";

const list = [
  {
    id: 1,
    image: "/assets/bg1.jpg",
  },
  {
    id: 2,
    image: "/assets/bg2.jpg",
  },
  {
    id: 3,
    image: "/assets/bg3.jpg",
  },
  {
    id: 4,
    image: "/assets/bg4.jpg",
  },
  {
    id: 5,
    image: "/assets/bg5.jpg",
  },
];

export default function Portfolio() {
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
    <div className="bg-background py-20">
      <div className="container mx-auto">
        {/* @ts-ignore */}
        <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
          {list.map((item) => (
            <div key={item.id} className="relative aspect-video">
              <Image src={item.image} alt="BG" fill className="absolute" />
            </div>
          ))}
        </Slider>
        <div>
          {/* @ts-ignore */}
          <Slider
            dots
            asNavFor={nav1}
            // @ts-ignore
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={6}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {list.map((item) => (
              <Image
                src={item.image}
                alt="bg"
                width={400}
                height={400}
                className="aspect-video"
                key={item.id}
              />
            ))}
          </Slider>
        </div>

        {/* Article */}
        <div>
          <h2 className="py-20 text-center text-4xl font-medium">ARTICLE</h2>
          <div className="grid grid-cols-3 gap-x-5">
            <Card
              description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              href="/"
              image="/assets/bg2.jpg"
              title="Wedding Bali"
            />
            <Card
              description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.lorem2002 123123123123123s 1231231231 2123123123 12312312"
              href="/"
              image="/assets/bg3.jpg"
              title="Wedding Bali"
            />
            <Card
              description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              href="/"
              image="/assets/bg1.jpg"
              title="Wedding Bali"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
