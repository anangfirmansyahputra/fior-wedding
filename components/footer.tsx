"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-background font-semplicita">
      <div className="container mx-auto p-4 px-10 py-6 md:px-10 md:py-20 2xl:px-0">
        <div
          // className="md:flex md:justify-between"
          className="grid gap-5 lg:grid-cols-3"
        >
          <div className="mb-6 hidden md:mb-0 lg:block">
            <a href="https://flowbite.com/" className="flex items-center">
              {/* <img
                src="/assets/logo.jpg"
                className="me-3 h-8"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center whitespace-nowrap font-semplicita text-2xl font-semibold tracking-widest text-font">
                {/* FIOR FOUNDER & TEAM PHOTO */}
                FIOR
              </span>
            </a>
          </div>

          <div className="space-y-10 lg:mr-20">
            <p className="whitespace-nowrap text-center font-semplicita text-2xl font-semibold tracking-widest text-font">
              FIOR FOUNDER
            </p>
            <div className="flex items-center  justify-center gap-5">
              <div className="flex flex-col items-center space-y-5 ">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full md:h-[150px] md:w-[150px]">
                  <Image
                    className="absolute"
                    src="/assets/fior/people1.png"
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
                    className="absolute"
                    src="/assets/fior/people2.png"
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
