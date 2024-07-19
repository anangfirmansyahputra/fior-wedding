import CreateWedding from "@/components/create-wedding";
import ShareButton from "@/components/share-button";
import Template from "@/components/template";
import axios from "axios";
import dayjs from "dayjs";

import ShadowContent from "@/components/shadow-component";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { data } = await axios.get(
    `${process.env.API_URL}/api/articles/${params.slug}`,
  );

  return {
    title: data.data.title,
    description: data.data.meta_description,
    keywords: data.data.keyword,
    openGraph: {
      title: data.data.title,
      description: data.data.meta_description,
      images:
        "https://fiororganizer.com/_next/image?url=%2Flogo.png&w=256&q=75",
      url: `${process.env.API_URL}/api/articles/${params.slug}`,
    },
    icons: {
      icon: "/assets/logo.jpeg",
      shortcut: "/assets/logo.jpeg",
      apple: "/assets/logo.jpeg",
      other: {
        rel: "/assets/logo.jpeg",
        url: "/assets/logo.jpeg",
      },
    },
  };
};

export default async function Page({ params }: Props) {
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/api/articles/${params.slug}`,
    );

    const resetStyles = {
      all: "unset",
      display: "block",
    };

    return (
      <Template>
        <>
          <article className="bg-neutral-background pb-16 pt-8 antialiased dark:bg-gray-900 lg:pb-24 lg:pt-16">
            <div className="container mx-auto flex items-center justify-center px-4">
              <article className="w-full max-w-4xl rounded-xl bg-white p-5 shadow-lg  md:p-10">
                <header className="not-format mb-4 lg:mb-6">
                  <address className="mb-6 flex items-center not-italic">
                    <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                      <Image
                        width={64}
                        height={64}
                        className="mr-4 h-16 w-16 rounded-full"
                        src="/assets/profile.png"
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
                          {dayjs(data.data.created_at).format("MMMM DD, YYYY")}
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
                    src={process.env.API_URL + "/uploads/" + data.data.image}
                  />
                  {/* <figcaption>Admin</figcaption> */}
                </figure>

                <div
                  // className="shadow-dom"
                  className="no-more-tailwind"
                  dangerouslySetInnerHTML={{
                    __html: data.data.content,
                  }}
                ></div>
                {/* <ShadowContent htmlContent={data.data.content} /> */}

                {/* <ArticleGalleries data={data} /> */}

                <hr className="my-5" />
                <div className="flex items-center space-x-5">
                  <div className="font-bold text-rose-tan">Share :</div>
                  <ShareButton title={data.data.title} />
                </div>
              </article>
            </div>
          </article>
        </>
        <CreateWedding />
      </Template>
    );
  } catch (err) {
    return redirect("/portfolio");
  }
}
