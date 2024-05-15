import About from "@/components/about";
import CreateWedding from "@/components/create-wedding";
import Template from "@/components/template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Fior Wedding Organizer",
  description:
    "Temukan lebih lanjut tentang Fior Wedding Organizer, perusahaan perencana pernikahan profesional yang siap membantu mewujudkan impian pernikahan Anda.",
  keywords:
    "tentang kami, fior wedding organizer, perencana pernikahan, wedding planner, profil perusahaan",
};

export default function AboutPage() {
  return (
    <Template>
      <About />
      <CreateWedding />
    </Template>
  );
}
