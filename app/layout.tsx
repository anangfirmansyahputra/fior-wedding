import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from "../components/navbar";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import "./no-tailwind.css";
import Script from "next/script";
import axios from "axios";

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await axios.get(`${process.env.API_URL}/api/metadata`);

  return {
    title: data.home_title || "Home - Fior Wedding Organizer",
    description:
      data.home_desc ||
      "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
    keywords:
      data.home_keyword ||
      "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
    openGraph: {
      images: `${process.env.API_URL}/uploads/logo_hitam.png`,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H8J5Z3LW2H"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-H8J5Z3LW2H');
          `}
        </Script>
      </head>
      <body className="relative font-carmorant" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
