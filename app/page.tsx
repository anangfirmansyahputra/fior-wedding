import Card from "@/components/card";
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

export default async function Home() {
  const { data } = await axios.get(
    `${process.env.API_URL}/api/articles-fior?page=1`,
  );

  return (
    <Template>
      <Hero />
      <div className="bg-custom-welcome">
        <SectionWelcome />
        <HowHelp />
      </div>

      {data.data.length !== 0 && (
        <div className="gap-[28px] bg-[#DBBEB8] py-[32px]">
          <div className="relative mb-10 mt-2 space-y-5">
            <div className="mx-auto w-fit space-y-3">
              <h1 className="cardo-regular text-3xl text-white">
                {`Today's Insight`}
              </h1>
              <div className="mx-auto h-[3px] w-[100%] bg-[#fff]" />
            </div>

            <p className="text-center font-amiri text-[20px] font-normal leading-[35px] tracking-wide text-[#2B2B2B] text-white">
              Must-Know Information
            </p>
          </div>

          <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.data.slice(0, 3).map((item: any) => (
              <Card
                key={item.id}
                description={item.content}
                href={`/portfolio/${item.slug}`}
                image={
                  process.env.NEXT_PUBLIC_API_URL + "/uploads/" + item.image
                }
                title={item.title}
                author={item.author}
                created_at={item.created_at}
              />
            ))}
          </div>
        </div>
      )}
      <Testimonial />
      <CreateWedding />
    </Template>
  );
}
