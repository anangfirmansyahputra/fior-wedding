"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-custom-footer font-semplicita">
      <div className="container mx-auto p-4 px-10 py-6 md:px-10 md:py-20 2xl:px-0">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="mb-6 hidden space-y-[27px] md:mb-0 lg:block">
            <div className="relative h-[71px] w-[120px]">
              <Image
                src={"/assets/revision/Group 23.svg"}
                alt=""
                fill
                className="absolute w-full"
              />
            </div>
            <p className="font-amiri w-full max-w-[280px] leading-[35px] text-[#2B2B2B] xl:max-w-[370px]">
              Every wedding is unique. We offer personalized planning tailored
              to your vision and preferences to ensure your day is exactly as
              you imagined.
            </p>
            <div className="text-[#2B2B2B]">
              <div
                className="flex cursor-pointer gap-[5px] transition-all hover:underline"
                onClick={() => router.push("/contact")}
              >
                <Image
                  src="/assets/revision/ic_baseline-whatsapp.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="font-amiri">Inquiry Form</span>
              </div>
              <div
                className="mt-[10px] flex cursor-pointer gap-[5px] transition-all hover:underline"
                onClick={() =>
                  router.push(
                    "https://api.whatsapp.com/send/?phone=6287876996092&text&type=phone_number&app_absent=0",
                  )
                }
              >
                <Image
                  src="/assets/revision/ic_baseline-whatsapp (1).svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <div className="font-amiri">Call Us</div>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:mr-20">
            <p className="whitespace-nowrap text-center font-semplicita text-2xl font-semibold tracking-widest text-font">
              FIOR
            </p>
            <p className="font-amiri mx-auto block w-full max-w-[370px] text-center leading-[35px] text-[#2B2B2B] lg:hidden">
              Every wedding is unique. We offer personalized planning tailored
              to your vision and preferences to ensure your day is exactly as
              you imagined.
            </p>
            <div className="flex items-center  justify-center gap-5">
              <div className="flex flex-col items-center space-y-5 ">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full md:h-[150px] md:w-[150px]">
                  <Image
                    className="absolute object-cover"
                    // src="/assets/fior/people1.png"
                    src="/assets/owner1.jpeg"
                    alt="Finnie"
                    fill
                  />
                </div>
                <p className="text-center font-semibold text-[#555]">
                  VINNIE KOSASIH
                </p>
              </div>
              <div className="flex flex-col items-center space-y-5 ">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full md:h-[150px] md:w-[150px]">
                  <Image
                    className="absolute object-cover"
                    // src="/assets/fior/people2.png"
                    src="/assets/owner2.jpeg"
                    alt="Finnie"
                    fill
                  />
                </div>
                <p className="text-center font-semibold text-[#555]">
                  NEEKE SANTOSO
                </p>
              </div>
            </div>
          </div>

          <div className="hidden grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 lg:grid">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-font">
                QUICK LINK
              </h2>
              <div className="font-medium text-gray-500 dark:text-gray-400">
                <Link href={"/"} className="mb-4 block hover:underline">
                  Home
                </Link>
                <Link href={"/about"} className="mb-4 block hover:underline">
                  About
                </Link>
                <Link href={"/service"} className="mb-4 block hover:underline">
                  Service
                </Link>
                <Link
                  href={"/portfolio"}
                  className="mb-4 block hover:underline"
                >
                  Portfolio
                </Link>
                <Link href={"/contact"} className="mb-4 block hover:underline">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-font">
                Follow us
              </h2>
              <div className="font-medium text-gray-500 dark:text-gray-400">
                <Link
                  href={"https://www.instagram.com/fiororganizer/"}
                  className="mb-4 block transition-all hover:underline"
                >
                  Instagram
                </Link>
                <Link
                  href={"https://www.bridestory.com/id/fior"}
                  className="mb-4 block transition-all hover:underline"
                >
                  Bridestory
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-font">
                CONCTACT
              </h2>
              <div className="font-medium text-gray-500 dark:text-gray-400">
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=6287876996092&text&type=phone_number&app_absent=0"
                  }
                  className="mb-4 block transition-all hover:underline"
                >
                  Whatsapp
                </Link>
                <Link
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSdwoKI-JeCr06I2anIVF1Z8mymF_SBKncOQkdmiIRlR4nLLxg/viewform"
                  }
                  className="mb-4 block transition-all hover:underline"
                >
                  Inquiry Form
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-font">
              QUICK LINK
            </h2>
            <div className="font-medium text-gray-500 dark:text-gray-400">
              <Link href={"/"} className="mb-4 block hover:underline">
                Home
              </Link>
              <Link href={"/about"} className="mb-4 block hover:underline">
                About
              </Link>
              <Link href={"/service"} className="mb-4 block hover:underline">
                Service
              </Link>
              <Link href={"/portfolio"} className="mb-4 block hover:underline">
                Portfolio
              </Link>
              <Link href={"/contact"} className="mb-4 block hover:underline">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-font">
              Follow us
            </h2>
            <div className="font-medium text-gray-500 dark:text-gray-400">
              <Link
                href={"https://www.instagram.com/fiororganizer/"}
                className="mb-4 block transition-all hover:underline"
              >
                Instagram
              </Link>
              <Link
                href={"https://www.bridestory.com/id/fior"}
                className="mb-4 block transition-all hover:underline"
              >
                Bridestory
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-font">
              CONCTACT
            </h2>
            <div className="font-medium text-gray-500 dark:text-gray-400">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=6287876996092&text&type=phone_number&app_absent=0"
                }
                className="mb-4 block transition-all hover:underline"
              >
                Whatsapp
              </Link>
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSdwoKI-JeCr06I2anIVF1Z8mymF_SBKncOQkdmiIRlR4nLLxg/viewform"
                }
                className="mb-4 block transition-all hover:underline"
              >
                Inquiry Form
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <Link href="/" className="font-semplicita hover:underline">
              FIOR WEDDING™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
