"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavbarMobile() {
  const router = useRouter();
  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="">
        <SheetHeader>
          <SheetTitle className="font-semplicita text-3xl font-semibold tracking-[0.8rem] text-bold">
            FIOR
          </SheetTitle>
          <SheetDescription>
            <div className="space-y-5 py-5 font-semibold text-bold">
              <SheetClose asChild>
                <div
                  className={cn(
                    "transition-all",
                    path === "/" ? "text-rose-tan " : "text-bold ",
                  )}
                  onClick={() => router.push("/")}
                >
                  HOME
                </div>
              </SheetClose>
              <SheetClose asChild>
                <div
                  className={cn(
                    "transition-all",
                    path === "/about" ? "text-rose-tan " : "text-bold ",
                  )}
                  onClick={() => router.push("/about")}
                >
                  ABOUT
                </div>
              </SheetClose>
              <SheetClose asChild>
                <div
                  className={cn(
                    "transition-all",
                    path === "/services" ? "text-rose-tan " : "text-bold ",
                  )}
                  onClick={() => router.push("/services")}
                >
                  SERVICE
                </div>
              </SheetClose>
              <SheetClose asChild>
                <div
                  className={cn(
                    "transition-all",
                    path === "/portfolio" ? "text-rose-tan " : "text-bold ",
                  )}
                  onClick={() => router.push("/portfolio")}
                >
                  PORTFOLIO
                </div>
              </SheetClose>
              <SheetClose asChild>
                <div
                  className={cn(
                    "transition-all",
                    path === "/contact" ? "text-rose-tan " : "text-bold ",
                  )}
                  onClick={() => router.push("/contact")}
                >
                  CONTACT
                </div>
              </SheetClose>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
