import CreateWedding from "@/components/create-wedding";
import Hero from "@/components/hero";
import HowHelp from "@/components/how-help";
import SectionWelcome from "@/components/section-welcome";
import Template from "@/components/template";
import Testimonial from "@/components/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anang - Fior Wedding Organizer",
  description:
    "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
  keywords:
    "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
  openGraph: {
    title: "Anang - Fior Wedding Organizer",
    description:
      "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
    images: [
      {
        url: "https://fiororganizer.com/_next/image?url=%2Flogo.png&w=256&q=75",
        width: 800,
        height: 600,
        alt: "Fior Wedding Organizer",
      },
    ],
  },
  icons: "https://fiororganizer.com/_next/image?url=%2Flogo.png&w=256&q=75",
};

export default function Home() {
  return (
    <Template>
      <Hero />
      <div className="bg-custom-welcome">
        <SectionWelcome />
        <HowHelp />
      </div>
      <Testimonial />
      <CreateWedding />
    </Template>
  );
}
