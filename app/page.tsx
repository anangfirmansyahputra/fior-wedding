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
