"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SectionWelcome() {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="container relative mx-auto flex flex-col gap-10 pb-36 pt-28 lg:flex-row lg:gap-0 lg:pb-8 lg:pt-36">
        {/* Left */}
        <div className="mx-auto flex w-full flex-col items-center justify-center space-y-10 lg:w-[45%] lg:items-start lg:space-y-5">
          <div className="w-full space-y-5 text-center lg:text-start">
            <h1 className="w-full font-carmorant text-3xl font-medium leading-[50px] tracking-wider text-bold md:text-4xl md:leading-[60px] md:tracking-[0.5rem] lg:max-w-[500px] lg:text-5xl">
              Embrace Elegance, Celebrate Love
            </h1>
            <p className=" font-light text-[#2B2B2B] md:text-lg lg:text-xl xl:text-xl">
              Welcome to FIOR Wedding Event Organizer
            </p>
          </div>
          <Button
            onClick={() => router.push("/about")}
            className="spectral-regular mx-auto bg-[#DBBEB8] px-[57px] py-[30px] text-white md:mx-0 md:text-lg lg:text-xl"
          >
            ABOUT US
          </Button>
        </div>

        {/* Right */}
        <div className="mt-0 flex flex-1 flex-col  gap-5 md:mt-20 md:flex-row">
          <div className="hidden aspect-square space-y-2 md:block md:w-[40%]">
            <div className="relative h-[50%] overflow-hidden rounded-bl-[50px] rounded-tr-[50px]">
              <Image
                src={"/assets/revision/2619f16706ef10041903482f56901611.jpeg"}
                alt=""
                fill
                className="absolute"
              />
            </div>
            <div className="relative h-[50%] overflow-hidden rounded-br-[50px] rounded-tl-[50px]">
              <Image
                src={"/assets/revision/2140d29a1761ba857af54c7632483dcc.png"}
                alt=""
                fill
                className="absolute"
              />
            </div>
          </div>
          <div className="relative aspect-square flex-1 overflow-hidden rounded-br-[100px] rounded-tl-[100px] md:h-[400px] lg:h-[516px]">
            <Image
              src="/assets/fior/Snapinsta.app_377912124_213194728427276_7675588262288677813_n_1080.jpg"
              alt="Welcome Image"
              fill
              className="absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
