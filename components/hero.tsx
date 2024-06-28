"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative h-[calc(100vh-120px)] font-carmorant lg:h-[calc(100vh-140px)] xl:h-[calc(100vh-140px)]">
      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center space-y-6 px-5 md:space-y-10 md:px-0">
        <h1 className="text-center text-2xl font-bold uppercase text-[#fff] md:text-3xl xl:text-5xl">
          Memorable Moments Through Genuine Hearts
        </h1>
        <div className="space-y-3 text-center">
          <p className="text-base font-light tracking-[2px] text-white md:text-lg lg:text-xl xl:text-2xl">
            JAKARTA & BALI BASED
          </p>
          <p className="text-base font-light tracking-[2px] text-white md:text-lg lg:text-xl xl:text-2xl">
            EST. 2015
          </p>
        </div>
        <div className="grid w-full gap-5 sm:grid-cols-2 md:w-[600px]">
          <Button
            onClick={() => router.push("/contact")}
            className="py-7 md:text-lg lg:py-10 lg:text-xl"
          >
            CONTACT US
          </Button>
          <Button
            onClick={() => router.push("/services")}
            className="border-2 border-[#D1C7BE] py-7 text-[#D1C7BE] md:text-lg lg:py-[38px] lg:text-xl"
            variant="ghost"
          >
            OUR SERVICES
          </Button>
        </div>
      </div>
      <Image
        src="/assets/revision/Rectangle 3.svg"
        fill
        className="absolute object-cover object-center"
        alt="Hero"
      />
    </div>
  );
}
