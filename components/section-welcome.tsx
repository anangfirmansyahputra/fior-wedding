"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SectionWelcome() {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="container relative mx-auto flex flex-col pb-36 pt-28 md:flex-row lg:pb-72 lg:pt-36">
        {/* Left */}
        <div className="flex w-full flex-col items-start justify-center space-y-5 md:w-[45%]">
          <div className="w-full space-y-2 text-center md:text-start lg:space-y-5">
            <h1 className="w-full font-carmorant text-3xl font-medium leading-[60px] tracking-[0.5rem] text-bold md:max-w-[500px] md:text-5xl">
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
        <div className="mt-10 flex flex-1 flex-row gap-5 md:mt-0">
          <div className="w-[40%] space-y-2">
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
          <div className="relative h-[516px] flex-1 overflow-hidden rounded-br-[100px] rounded-tl-[100px]">
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
