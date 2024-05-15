"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Share2Icon, Twitter } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  function shareOnTwitter() {
    const currentURL = window.location.href;
    const tweetText = encodeURIComponent(title + ", Link : " + currentURL);
    const twitterURL = "https://twitter.com/intent/tweet?text=" + tweetText;
    window.open(twitterURL);
  }

  function shareOnWhatsApp() {
    const currentURL = window.location.href;
    const message = encodeURIComponent("Check out this link: " + currentURL);
    const whatsappURL = "https://wa.me/?text=" + message;
    window.open(whatsappURL);
  }

  function shareOnFacebook() {
    const currentURL = encodeURIComponent(window.location.href);
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
    window.open(facebookURL);
  }

  return (
    <div className="space-x-2">
      <Button
        onClick={shareOnTwitter}
        variant="secondary"
        size="icon"
        className="rounded-full"
      >
        <Twitter />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full"
        onClick={() => {
          const currentURL = window.location.href;
          navigator.clipboard.writeText(currentURL);

          toast({
            title: "Success",
            description: "Link coppied",
          });
        }}
      >
        <Share2Icon />
      </Button>
    </div>
  );
}
