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

export const revalidate = 60;

export default async function Page({ searchParams }: { searchParams: any }) {
  const { page } = searchParams;
  const { data } = await axios.get(
    `${process.env.API_URL}/api/articles-fior${page ? "?page=" + page : ""}`,
  );

  return (
    <Template>
      <Portfolio page={page} data={data.data} next={data.page_info.next} />
      <CreateWedding />
    </Template>
  );
}
