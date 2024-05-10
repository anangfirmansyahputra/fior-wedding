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
import NavbarMobile from "./navbar-mobile";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const path = usePathname();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ketika user mulai scroll, ubah latar belakang menjadi putih
      if (window.scrollY > 0) {
        setScroll(true); // Ubah ke warna putih
      } else {
        setScroll(false); // Kembalikan ke latar belakang transparan
      }
    };

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup: hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-[50]">
      <div className="h-[40px] bg-font font-carmorant">
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
      <header
        className={cn(
          "font-carmorant transition-all duration-500",
          scroll
            ? "border-b border-border/40 bg-background/95 bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : "bg-neutral-background ",
        )}
      >
        <div className=" container mx-auto grid h-[80px] grid-cols-3 items-center justify-center md:flex lg:h-[80px] xl:h-[100px]">
          <div className="flex flex-1 items-center justify-end space-x-10">
            <Link
              href={"/"}
              className={`hidden text-sm text-font transition-all hover:text-rose-tan md:block lg:text-base ${path === "/" && "text-rose-tan"}`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`hidden text-sm text-font transition-all hover:text-rose-tan md:block lg:text-base ${path === "/about" && "text-rose-tan"}`}
            >
              ABOUT
            </Link>
            <Link
              href={"/services"}
              className={`hidden text-sm text-font transition-all hover:text-rose-tan md:block lg:text-base ${path === "/services" && "text-rose-tan"}`}
            >
              SERVICE
            </Link>
          </div>
          <div className="mx-10">
            <h1 className="text-center font-semplicita text-3xl font-semibold tracking-[0.8rem] lg:text-4xl xl:text-5xl">
              FIOR
            </h1>
            <p className="mr-0 text-end font-semplicita text-[5px] font-light leading-[1rem] tracking-[0.2rem] md:mr-2 xl:text-[7px]">
              EVENT SPECIALIST
            </p>
          </div>
          <div className="hidden flex-1 items-center space-x-10 md:flex">
            <Link
              href="/portfolio"
              className={`text-sm text-font transition-all hover:text-rose-tan lg:text-base ${path === "/portfolio" && "text-rose-tan"}`}
            >
              PORTFOLIO
            </Link>
            <Link
              href={"/contact"}
              className={`text-sm text-font transition-all hover:text-rose-tan lg:text-base ${path === "/contact" && "text-rose-tan"}`}
            >
              CONTACT
            </Link>
          </div>
          <div className="flex justify-end md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </header>
    </div>
  );
}
