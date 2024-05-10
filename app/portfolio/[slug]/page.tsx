import Template from "@/components/template";
import { Button } from "@/components/ui/button";
import axios from "axios";
import dayjs from "dayjs";
import {
  FacebookIcon,
  Instagram,
  Share,
  Share2Icon,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  // const { data } = await axios.get(
  //   `${process.env.API_URL}/api/articles/${params.slug}`,
  // );

  const data = {
    data: {
      id: "1231231",
      title: "Tips Memilih Gaun Pernikahan yang Tepat",
      content:
        "<p>Mencari gaun pernikahan yang sempurna adalah salah satu bagian paling penting dari persiapan pernikahan Anda. Berikut adalah beberapa tips untuk membantu Anda memilih gaun yang tepat:</p><ul><li><strong>Kenali Bentuk Tubuh Anda</strong>: Pilihlah gaun yang sesuai dengan bentuk tubuh Anda untuk memastikan gaun tersebut nyaman dan membuat Anda merasa percaya diri.</li><li><strong>Cari Inspirasi</strong>: Telusuri majalah pernikahan, situs web, dan media sosial untuk mencari inspirasi tentang gaya gaun yang Anda sukai.</li><li><strong>Pilihlah Warna yang Sesuai</strong>: Pertimbangkan warna gaun yang akan cocok dengan warna kulit Anda dan tema pernikahan Anda.</li><li><strong>Jangan Lupakan Aksesori</strong>: Perhatikan aksesori seperti veil, sepatu, dan perhiasan yang akan melengkapi penampilan Anda.</li><li><strong>Cocokkan dengan Tema Pernikahan</strong>: Pastikan gaun Anda sesuai dengan tema pernikahan Anda agar terlihat selaras dengan dekorasi dan suasana acara.</li></ul>",
      slug: "tips-memilih-gaun-pernikahan",
      author: "Jane Smith",
      images: "/assets/bg1.jpg",
    },
  };

  return (
    <Template>
      <>
        <main className="bg-neutral-background pb-16 pt-8 antialiased dark:bg-gray-900 lg:pb-24 lg:pt-16">
          <div className="container mx-auto flex items-center justify-center px-4">
            <article className="w-full max-w-4xl rounded-xl bg-white p-5 shadow-lg  md:p-10">
              <header className="not-format mb-4 lg:mb-6">
                <address className="mb-6 flex items-center not-italic">
                  <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 h-16 w-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-rose-tan"
                      >
                        {data.data.author}
                      </a>
                      <p className="font-semplicita text-base text-gray-500 dark:text-gray-400">
                        Admin |{" "}
                        {/* {dayjs(data.data.created_at).format("MMMM DD, YYYY")} */}
                        4 Mei, 2024
                      </p>
                      {/* <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p> */}
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
                  {data.data.title}
                </h1>
              </header>
              <figure className="relative aspect-video overflow-hidden rounded-md">
                <Image
                  fill
                  alt="Images"
                  className="absolute object-cover"
                  // src={process.env.API_URL + "/upload/" + data.data.images[0]}
                  src={data.data.images}
                />
                {/* <figcaption>Admin</figcaption> */}
              </figure>

              <div
                className="mt-5 space-y-10"
                dangerouslySetInnerHTML={{
                  __html: data.data.content,
                }}
              ></div>
              <hr className="my-5" />
              <div className="flex items-center space-x-5">
                <div className="font-bold text-rose-tan">Share :</div>
                <div className="space-x-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <FacebookIcon />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <Twitter />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <Instagram />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <Share2Icon />
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </main>
      </>
    </Template>
  );
}
