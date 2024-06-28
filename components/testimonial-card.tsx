"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const star = Array(testimonial.star).fill(true);
  const unstar = Array(5 - testimonial.star).fill(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      // @ts-ignore
      setShowButton(textElement.scrollHeight > textElement.clientHeight);
    }
  }, [testimonial.text]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      key={testimonial.id}
      className={`mb-5 flex ${isExpanded ? "h-fit" : "h-[350px]"} flex-col items-center rounded-[12px] bg-[#DBBEB8] px-[18px] py-[18px]`}
    >
      <div className="mb-[38px] flex w-full items-center justify-center gap-2">
        <Image
          src="/assets/revision/surface1.svg"
          alt=""
          width={20}
          height={20}
        />
        <span className="text-[20px] font-semibold text-white">
          Recommended
        </span>
      </div>
      <div className="relative flex w-full flex-1 flex-col rounded-[10px] bg-white px-[12px] pb-[12px]">
        <Image
          src={testimonial.image}
          width={75}
          height={75}
          alt={testimonial.name}
          className="absolute left-1/2 top-[-32.5px] -translate-x-1/2 transform rounded-full"
        />
        <div className="flex flex-col items-center justify-center pt-[60px]">
          <div className="flex">
            {unstar.map((s, i) => (
              <Star key={i} className="fill-white text-slate-300" size={16} />
            ))}
            {star.map((s, i) => (
              <Star
                key={i}
                className="fill-yellow-300 text-yellow-300"
                size={16}
              />
            ))}
          </div>
        </div>

        <div
          ref={textRef}
          className={`pt-[15px] text-center text-sm ${!isExpanded ? "line-clamp-3" : ""}`}
          dangerouslySetInnerHTML={{
            __html: testimonial.text,
          }}
        />
        {showButton && (
          <div className="flex items-center">
            <button onClick={toggleExpand} className="mx-auto mt-2 ">
              <Ellipsis />
            </button>
          </div>
        )}

        <div className="flex flex-1 flex-col items-center justify-end">
          <h5 className="cardo-bold mt-[15px] text-center text-base">
            {testimonial.strong}
          </h5>
          <p className="cardo-regular text-center text-xs text-slate-600">
            {testimonial.as}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
