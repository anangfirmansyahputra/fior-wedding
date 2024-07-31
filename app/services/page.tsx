import CreateWedding from "@/components/create-wedding";
import Services from "@/components/services";
import Template from "@/components/template";
import axios from "axios";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/api/metadata`);

    return {
      title: data.service_title || "Services - Fior Wedding Organizer",
      description:
        data.service_desc ||
        "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
      keywords:
        data.service_keyword ||
        "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
      openGraph: {
        images: `${process.env.API_URL}/uploads/logo_hitam.png`,
      },
    };
  } catch (err) {
    return {
      title: "Services - Fior Wedding Organizer",
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

export default function ServicesPage() {
  return (
    <Template>
      <Services />
      <CreateWedding />
    </Template>
  );
}
