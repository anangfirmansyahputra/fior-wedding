import CreateWedding from "@/components/create-wedding";
import Portfolio from "@/components/portfolio";
import Template from "@/components/template";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio - Fior Wedding Organizer",
  description:
    "Jelajahi portofolio kami untuk melihat beberapa contoh pernikahan yang telah kami rancang dan laksanakan. Biarkan kami menjadi bagian dari momen bahagia Anda.",
  keywords:
    "portofolio, fior wedding organizer, contoh pernikahan, galeri pernikahan, karya wedding planner",
};

export default async function Page() {
  const { data } = await axios.get(`${process.env.API_URL}/api/articles`);

  return (
    <Template>
      <Portfolio data={data.data} />
      <CreateWedding />
    </Template>
  );
}
