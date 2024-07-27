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

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Fior Wedding Organizer",
  description:
    "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
  keywords:
    "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
  openGraph: {
    images: "https://fiororganizer.com/_next/image?url=%2Flogo.png&w=256&q=75",
  },
  icons: {
    icon: "/assets/logo.jpeg",
    shortcut: "/assets/logo.jpeg",
    apple: "/assets/logo.jpeg",
    other: {
      rel: "/assets/logo.jpeg",
      url: "/assets/logo.jpeg",
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
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
