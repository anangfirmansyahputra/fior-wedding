import CreateWedding from "@/components/create-wedding";
import Services from "@/components/services";
import Template from "@/components/template";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Service - Fior Wedding Organizer",
  description:
    "Fior Wedding Organizer menyediakan beragam layanan pernikahan yang lengkap dan profesional, mulai dari perencanaan hingga pelaksanaan, untuk menciptakan pernikahan yang sempurna sesuai impian Anda.",
  keywords:
    "layanan pernikahan, fior wedding organizer, jasa pernikahan, paket pernikahan, layanan wedding planner",
};

export default function ServicesPage() {
  return (
    <Template>
      <Services />
      <CreateWedding />
    </Template>
  );
}
