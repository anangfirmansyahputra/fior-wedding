"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SectionWelcome() {
  const router = useRouter();

  return (
    <div className="">
      <div className="container mx-auto grid pb-36 pt-28 md:grid-cols-2 lg:pb-72 lg:pt-36">
        <div className="flex flex-col items-start justify-center space-y-5">
          <div className="w-full space-y-5 text-center md:text-start lg:space-y-10">
            <h1 className="text-3xl font-medium tracking-wider text-bold md:max-w-[500px] md:text-4xl lg:text-5xl xl:text-6xl">
              Embrace Elegance, Celebrate Love
            </h1>
            <p className="tracking-wide text-light-accent md:text-lg lg:text-xl xl:text-2xl">
              Welcome to FIOR Wedding Event Organizer
            </p>
          </div>
          <Button
            onClick={() => router.push("/about")}
            className="mx-auto py-7 md:mx-0 md:text-lg lg:py-10 lg:text-xl"
          >
            ABOUT US
          </Button>
        </div>
        <div className="relative mt-10 md:mt-0">
          <div className="relative aspect-square overflow-hidden rounded">
            <Image
              src="/assets/fior/Snapinsta.app_377912124_213194728427276_7675588262288677813_n_1080.jpg"
              alt="Welcome Image"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="absolute bottom-[-60%] left-[-20%] z-10 hidden h-full w-full md:block">
            <div className="relative h-[60%] w-[60%] overflow-hidden rounded">
              <Image
                src="/assets/fior/Snapinsta.app_435479674_18308444656148018_2255223913511660480_n_1080.jpg"
                alt="Welcome Image"
                fill
                className="absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
