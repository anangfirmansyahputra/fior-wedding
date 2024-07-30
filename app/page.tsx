import CreateWedding from "@/components/create-wedding";
import Hero from "@/components/hero";
import HowHelp from "@/components/how-help";
import SectionWelcome from "@/components/section-welcome";
import Template from "@/components/template";
import Testimonial from "@/components/testimonial";
import axios from "axios";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  try {
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
  } catch (err) {
    return {
      title: "Home - Fior Wedding Organizer",
      description:
        "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
      keywords:
        "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
      openGraph: {
        images: `${process.env.API_URL}/uploads/logo_hitam.png`,
      },
    };
  }
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
