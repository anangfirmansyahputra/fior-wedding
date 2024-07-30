import CreateWedding from "@/components/create-wedding";
import Portfolio from "@/components/portfolio";
import Template from "@/components/template";
import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await axios.get(`${process.env.API_URL}/api/metadata`);

  return {
    title: data.portfolio_title || "About Us - Fior Wedding Organizer",
    description:
      data.portfolio_desc ||
      "Fior Wedding Organizer adalah perusahaan perencana pernikahan profesional yang menyediakan layanan lengkap untuk membuat hari istimewa Anda menjadi momen yang tak terlupakan.",
    keywords:
      data.portfolio_keyword ||
      "Fior Wedding Organizer,perencana pernikahan,organizer pernikahan,wedding planner,paket pernikahan,layanan pernikahan",
    openGraph: {
      images: `${process.env.API_URL}/uploads/logo_hitam.png`,
    },
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: { searchParams: any }) {
  const { page } = searchParams;
  const { data } = await axios.get(
    `${process.env.API_URL}/api/articles-fior${page ? "?page=" + page : ""}`,
  );

  return (
    <Template>
      <div className="h-[80vh] items-center justify-center overflow-hidden">
        <div className="relative h-1/2 w-full">
          <Image
            src={"/assets/revision/6f03f1767ae1efe5d9a2cd267667eec7.jpeg"}
            alt=""
            fill
            className="absolute object-cover object-center"
          />
          <div className="relative z-[1] flex h-full flex-col items-center justify-center px-5 md:px-0">
            <div className="mx-auto w-fit">
              <p className="cardo-regular text-[24px] text-white md:text-4xl">
                PORTFOLIO GALLERY
              </p>
              <div className="mx-auto mb-[30px] mt-[10px] h-[3px] w-[50%] bg-[#DBBEB8]" />
            </div>
            <p className="mx-auto max-w-[750px] text-center  text-white md:text-[20px]">
              Welcome to our portfolio gallery! Here, you will be treated to a
              collection of our best projects that we have worked on with great
              dedication. Explore this gallery to see firsthand our expertise
              and experience
            </p>
          </div>
          <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center space-y-10 bg-[rgba(0,0,0,0.69)]" />
        </div>

        <div className="relative mx-[-100px] grid h-1/2 grid-cols-2 gap-[30px] bg-[#D1C7BE] py-[24px] md:grid-cols-4">
          <div className="relative">
            <Image
              src={"/assets/revision/b48da6437f6454a1e27b8ec1430baaf3.jpeg"}
              alt=""
              fill
              className="absolute bg-white object-cover p-2"
            />
          </div>
          <div className="relative">
            <Image
              src={"/assets/revision/86cfe36415226abb28cf41e1faabfe57.jpeg"}
              alt=""
              fill
              className="absolute bg-white object-cover p-2"
            />
          </div>
          <div className="relative hidden md:block">
            <Image
              src={"/assets/revision/0f12cec8550f9cdeb981917abab15d6f.jpeg"}
              alt=""
              fill
              className="absolute bg-white object-cover p-2"
            />
          </div>
          <div className="relative hidden md:block">
            <Image
              src={"/assets/revision/67f38ff8c7a8c230644f61c512a352bb.jpeg"}
              alt=""
              fill
              className="absolute bg-white object-cover p-2"
            />
          </div>
        </div>
      </div>
      <Portfolio page={page} data={data.data} next={data.page_info.next} />
      <CreateWedding />
    </Template>
  );
}
