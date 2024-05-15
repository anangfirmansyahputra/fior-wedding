import Contact from "@/components/contact";
import CreateWedding from "@/components/create-wedding";
import Template from "@/components/template";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - Fior Wedding Organizer",
  description:
    "Hubungi Fior Wedding Organizer untuk mendapatkan informasi lebih lanjut tentang layanan kami atau untuk memesan konsultasi gratis. Kami siap membantu mewujudkan impian pernikahan Anda.",
  keywords:
    "hubungi kami, fior wedding organizer, kontak, konsultasi pernikahan, informasi kontak",
};

export default function ContactPage() {
  return (
    <Template>
      <Contact />
    </Template>
  );
}
