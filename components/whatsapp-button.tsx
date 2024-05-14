import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-10 z-50 flex items-center gap-x-2">
      <Link
        href="https://api.whatsapp.com/send/?phone=6287876996092&text&type=phone_number&app_absent=0"
        target="_blank"
        className="cursor-pointer rounded-xl bg-white px-5 py-2 font-semplicita font-semibold shadow-xl transition-all duration-200 hover:bg-[#f1f1f1]"
      >
        Need a help?
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=6287876996092&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <Button className=" rounded-full" size="icon" variant="secondary">
          <Image
            src="/assets/WhatsApp.svg.webp"
            width={100}
            height={100}
            alt="Whatsapp"
          />
        </Button>
      </Link>
    </div>
  );
}
