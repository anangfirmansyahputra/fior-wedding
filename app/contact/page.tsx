import Contact from "@/components/contact";
import Template from "@/components/template";
import axios from "axios";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/api/metadata`);

    return {
      title: data.contact_title || "About Us - Fior Wedding Organizer",
      description:
        data.contact_desc ||
        "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
      keywords:
        data.contact_keyword ||
        "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
      openGraph: {
        images: `${process.env.API_URL}/uploads/logo_hitam.png`,
      },
    };
  } catch (err) {
    return {
      title: "About Us - Fior Wedding Organizer",
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

export const revalidate = 60;

export default function ContactPage() {
  return (
    <Template>
      <Contact />
    </Template>
  );
}
