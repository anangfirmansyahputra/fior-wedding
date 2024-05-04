"use client";

import { MapPin, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const path = usePathname();

  return (
    <>
      <div className="font-carmorant h-[40px] bg-font">
        <div className="container mx-auto flex h-full items-center justify-between text-white">
          <p className="hidden text-xs md:block">
            QUANTITY OUR STANDING
            <span className="font-medium">FOR OVER 40 YEARS</span>
          </p>
          <div className="hidden items-center space-x-2 md:flex">
            <MapPin size={12} />
            <p className="text-xs">
              PT CERITA DUA HATI BUSINESS PARK KEBON JERUK LEVEL MEZZANINE JL.
              MERUYA ILIR NO.88 KEBON JERUK JAKARTA BARAT 11610
            </p>
          </div>
          <div className="flex items-center space-x-2 md:hidden">
            <MapPin size={12} />
            <p className="text-xs">Location</p>
          </div>
        </div>
      </div>
      <header className="font-carmorant bg-background">
        <div className=" container mx-auto grid h-[80px] grid-cols-3 items-center justify-center md:flex lg:h-[100px] xl:h-[120px]">
          <div className="flex flex-1 items-center justify-end space-x-10">
            <Link
              href={"/"}
              className={`hover:text-rose-tan hidden text-sm text-font transition-all md:block lg:text-base ${path === "/" && "text-rose-tan"}`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`hover:text-rose-tan hidden text-sm text-font transition-all md:block lg:text-base ${path === "/about" && "text-rose-tan"}`}
            >
              ABOUT
            </Link>
            <Link
              href={"/services"}
              className={`hover:text-rose-tan hidden text-sm text-font transition-all md:block lg:text-base ${path === "/services" && "text-rose-tan"}`}
            >
              SERVICE
            </Link>
          </div>
          <div className="mx-10">
            <h1 className="font-semplicita text-center text-3xl font-semibold tracking-[0.8rem] lg:text-4xl xl:text-5xl">
              FIOR
            </h1>
            <p className="font-semplicita mr-0 text-end text-[5px] font-light leading-[1rem] tracking-[0.2rem] md:mr-2 xl:text-[7px]">
              EVENT SPECIALIST
            </p>
          </div>
          <div className="hidden flex-1 items-center space-x-10 md:flex">
            <Link
              href="/portfolio"
              className={`hover:text-rose-tan text-sm text-font transition-all lg:text-base ${path === "/portfolio" && "text-rose-tan"}`}
            >
              PORTFOLIO
            </Link>
            <Link
              href={"/contact"}
              className={`hover:text-rose-tan text-sm text-font transition-all lg:text-base ${path === "/contact" && "text-rose-tan"}`}
            >
              CONTACT
            </Link>
          </div>
          <div className="flex justify-end md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle className="font-semplicita font-semibold">
                    FIOR WEDDING
                  </SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
