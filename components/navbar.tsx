"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <>
      <div className="font-carmorant h-[40px] bg-font">
        <div className="container mx-auto flex h-full items-center justify-between text-white">
          <p className="text-xs">
            QUANTITY OUR STANDING
            <span className="font-medium">FOR OVER 40 YEARS</span>
          </p>
          <div className="flex items-center space-x-2">
            <MapPin size={12} />
            <p className="text-xs">
              PT CERITA DUA HATI BUSINESS PARK KEBON JERUK LEVEL MEZZANINE JL.
              MERUYA ILIR NO.88 KEBON JERUK JAKARTA BARAT 11610
            </p>
          </div>
        </div>
      </div>
      <header className="font-carmorant bg-background">
        <div className=" container mx-auto  flex h-[120px] items-center justify-center">
          <div className="flex flex-1 items-center justify-end space-x-10">
            <Link
              href={"/"}
              className={`hover:text-rose-tan text-font transition-all ${path === "/" && "text-rose-tan"}`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`hover:text-rose-tan text-font transition-all ${path === "/about" && "text-rose-tan"}`}
            >
              ABOUT
            </Link>
            <Link
              href={"/services"}
              className={`hover:text-rose-tan text-font transition-all ${path === "/services" && "text-rose-tan"}`}
            >
              SERVICE
            </Link>
          </div>
          <div className="mx-10">
            <h1 className="font-semplicita text-center text-5xl font-semibold tracking-[0.8rem]">
              FIOR
            </h1>
            <p className="font-semplicita mr-2 text-end text-[7px] font-light tracking-[0.2rem]">
              EVENT SPECIALIST
            </p>
          </div>
          <div className="flex flex-1 items-center space-x-10">
            <Link
              href="/portfolio"
              className={`hover:text-rose-tan text-font transition-all ${path === "/portfolio" && "text-rose-tan"}`}
            >
              PORTFOLIO
            </Link>
            <Link
              href={"/contact"}
              className={`hover:text-rose-tan text-font transition-all ${path === "/contact" && "text-rose-tan"}`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
