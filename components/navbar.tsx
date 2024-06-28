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
import Image from "next/image";

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
      <div className="h-[40px] bg-font font-semplicita">
        <Link
          href={
            "https://www.google.com/maps/place/PT.+Cerita+Dua+Hati+(FIOR+ORGANIZER)/@-6.1975741,106.7593279,17z/data=!4m10!1m2!2m1!1sPT+CERITA+DUA+HATI+BUSINESS+PARK+KEBON+JERUK+LEVEL+MEZZANINE+JL.+MERUYA+ILIR+NO.88+KEBON+JERUK+JAKARTA+BARAT+11610!3m6!1s0x2e69f7a66d739989:0xf3fdc8e672212574!8m2!3d-6.1980321!4d106.7620288!15sCnJQVCBDRVJJVEEgRFVBIEhBVEkgQlVTSU5FU1MgUEFSSyBLRUJPTiBKRVJVSyBMRVZFTCBNRVpaQU5JTkUgSkwuIE1FUlVZQSBJTElSIE5PLjg4IEtFQk9OIEpFUlVLIEpBS0FSVEEgQkFSQVQgMTE2MTCSAQ1ldmVudF9wbGFubmVy4AEA!16s%2Fg%2F11h59zc270?entry=ttu"
          }
          target="_blank"
          className="container mx-auto flex h-full items-center justify-end text-white"
        >
          <div className="hidden items-center space-x-2 lg:flex">
            <MapPin size={12} />
            <p className="text-[10px] tracking-widest">
              PT CERITA DUA HATI BUSINESS PARK KEBON JERUK LEVEL MEZZANINE JL.
              MERUYA ILIR NO.88 KEBON JERUK JAKARTA BARAT 11610
            </p>
          </div>
          <div className="flex items-center space-x-2 lg:hidden">
            <MapPin size={12} />
            <p className="text-xs">LOCATION</p>
          </div>
        </Link>
      </div>
      <header
        className={cn(
          "font-carmorant transition-all duration-500",
          scroll
            ? "border-b border-border/40 bg-background/95 bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : "bg-[#F2EEEE] ",
        )}
      >
        <div className=" container mx-auto flex h-[80px] items-center justify-center md:flex md:grid-cols-3 lg:h-[80px] xl:h-[100px]">
          <div className="flex flex-1 items-center justify-end">
            <Link
              href={"/"}
              className={`hidden pr-16 text-sm text-font transition-all hover:text-rose-tan md:block lg:text-base ${path === "/" && "text-rose-tan"}`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`hidden pr-16 text-sm text-font transition-all hover:text-rose-tan md:block lg:text-base ${path === "/about" && "text-rose-tan"}`}
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
          <div className="mx-16">
            <Image src="/logo.png" alt="Logo" width={180} height={180} />
          </div>
          <div className="hidden flex-1 items-center md:flex">
            <Link
              href="/portfolio"
              className={`text-sm text-font transition-all hover:text-rose-tan lg:text-base ${path === "/portfolio" && "pl-16 text-rose-tan"}`}
            >
              PORTFOLIO
            </Link>
            <Link
              href={"/contact"}
              className={`pl-16 text-sm text-font transition-all hover:text-rose-tan lg:text-base ${path === "/contact" && "text-rose-tan"}`}
            >
              CONTACT
            </Link>
          </div>
          <div className="flex flex-1 justify-end md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </header>
    </div>
  );
}
