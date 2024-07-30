import About from "@/components/about";
import CreateWedding from "@/components/create-wedding";
import Template from "@/components/template";
import axios from "axios";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await axios.get(`${process.env.API_URL}/api/metadata`);

  return {
    title: data.about_title || "About Us - Fior Wedding Organizer",
    description:
      data.about_desc ||
      "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
    keywords:
      data.about_keyword ||
      "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
    openGraph: {
      images: `${process.env.API_URL}/uploads/logo_hitam.png`,
    },
  };
};

export default function AboutPage() {
  return (
    <Template>
      <About />
      <CreateWedding />
    </Template>
  );
}
