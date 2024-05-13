"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const settingsMd = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const settingsSm = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const testimonials = [
    {
      id: 1,
      text: `<p>Sukses dan bahagia selalu buat tim FIOR,
      See ya next time guys. Chersss !</p>`,
      name: "Wild Love Stories",
      created_at: "01 Mei 2021",
      as: "Vendor rekanan di Pernikahan ",
      strong: "WILD",
      image: "/assets/profile.png",
      star: 5,
    },
    {
      id: 2,
      text: `<p>Vendor pertama yang kami book setelah menentukan tanggal pernikahan adalah Fior. Vinnie dan Neeke membantu kami menentukan vendor" lain yang sesuai budget, membantu nego, dan pastinya vendor yang punya track record baik.</p>

      <p>Hasilnya? Luar biasa. Kami dan keluarga betul" terbantu dengan Fior mulai dari planning sampai eksekusinya. Acara berlangsung smooth, seluruh crew sopan dan cekatan. Setelah acara, teman-teman menanyakan soal WO krn mereka benar" amazed.</p>
      
      <p>Terima kasih Vinnie, Neeke, dan seluruh crew FIOR. Jangan kapok ketemu kami ya karena sekarang untuk keluarga, siapapun yang merit WO nya pasti Fior ❤️</p>`,
      name: "Hana Adisti",
      created_at: "23 Maret 2022",
      as: "Pengantin perempuan di Pernikahan Ryan & Hana ",
      strong: "Best. WO. Ever",
      image: "/assets/profile.png",
      star: 4,
    },
    {
      id: 3,
      text: `<p>My husband & I chose Fior as our wedding planner for our wedding in Bali on September 14th, 2019. We couldn't thank them enough for making our wedding amazing!! Everything went smoothly and met my expectation. We had no concerns and were able to enjoy our wedding day while Fior team handled everything! They are professional and they know what they are doing. Big thank you to Fior for helping us making our wedding day memorable. Love, Michael & Angelina</p>`,
      name: "Angelino Hartanto",
      created_at: "14 September 2019",
      as: "Pengantin perempuan di Pernikahan Michael & Angelina",
      strong: "The Wedding of Michael & Angelina - Bali, 14 September 2019",
      image: "/assets/profile.png",
      star: 5,
    },
    {
      id: 4,
      text: `<p>Thanks tuk effort nya sehingga acara berlangsung lancar dan tamu tamu puas. Duet maut FIOR ok banget dari awal diskusi, memberikan pilihan vendor, input sesuai dengan keinginan calon mempelai. Dan pada hari H team nya gercep, setiap afa kebutuhan, saling kòordinasi.
      At the end kinerja dari vendor yang di suggest oleh FIOR juga luar biasa, totalitas seperti WO nya :-)
      Bintang 4 bukan berarti kurang dari ekspektasi tetapi sebagai mood booster mencari peluang untuk menjadi lebih bagus lagi dari yang sudah bagus. Love you Neeke, Vinnie, Phowee & team</p>`,
      name: "Syuli Nursalim",
      created_at: "02 Oktober 2019",
      as: "Client di Pernikahan Marvin & Elizabeth ",
      strong: "Great support in Bali",
      image: "/assets/profile.png",
      star: 3,
    },
  ];

  return (
    <div className="relative bg-neutral-background">
      <div className="container relative mx-auto space-y-10 py-20 md:py-48">
        <h2 className="text-center text-2xl font-bold tracking-wider text-bold md:text-3xl lg:text-4xl">
          TESTIMONIALS
        </h2>

        <div className="mx-auto hidden h-fit lg:block">
          <Slider {...settings} className="mt-20">
            {testimonials.map((testimonial) => {
              const star = Array(testimonial.star).fill(true);
              const unstar = Array(5 - testimonial.star).fill(true);

              return (
                <div
                  key={testimonial.id}
                  className="mb-5 h-fit rounded-sm bg-white p-5 shadow"
                >
                  <h5 className="font-semplicita font-semibold">
                    {testimonial.strong}
                  </h5>
                  <div
                    className="mt-5 space-y-3 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.text,
                    }}
                  />
                  <div className="mt-3 flex items-center space-x-5">
                    <Image
                      src={testimonial.image}
                      width={30}
                      height={30}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <div>
                        <p className="font-medium text-rose-tan">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {testimonial.as}
                        </p>
                      </div>
                      <p className="mt-1 text-xs">{testimonial.created_at}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full justify-end">
                    {unstar.map((s, i) => (
                      <Star
                        key={i}
                        className="fill-white text-slate-300"
                        size={20}
                      />
                    ))}
                    {star.map((s, i) => (
                      <Star
                        key={i}
                        className="fill-yellow-300 text-yellow-300"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="mx-auto hidden h-fit px-5 md:block lg:hidden">
          <Slider {...settingsMd} className="mt-20">
            {testimonials.map((testimonial) => {
              const star = Array(testimonial.star).fill(true);
              const unstar = Array(5 - testimonial.star).fill(true);

              return (
                <div
                  key={testimonial.id}
                  className="mb-5 h-fit rounded-sm bg-white p-5 shadow"
                >
                  <h5 className="font-semplicita font-semibold">
                    {testimonial.strong}
                  </h5>
                  <div
                    className="mt-5 space-y-3 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.text,
                    }}
                  />
                  <div className="mt-3 flex items-center space-x-5">
                    <Image
                      src={testimonial.image}
                      width={30}
                      height={30}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <div>
                        <p className="font-medium text-rose-tan">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {testimonial.as}
                        </p>
                      </div>
                      <p className="mt-1 text-xs">{testimonial.created_at}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full justify-end">
                    {unstar.map((s, i) => (
                      <Star
                        key={i}
                        className="fill-white text-slate-300"
                        size={20}
                      />
                    ))}
                    {star.map((s, i) => (
                      <Star
                        key={i}
                        className="fill-yellow-300 text-yellow-300"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="mx-auto block h-fit px-5 md:hidden">
          <Slider {...settingsSm} className="mt-20">
            {testimonials.map((testimonial) => {
              const star = Array(testimonial.star).fill(true);
              const unstar = Array(5 - testimonial.star).fill(true);

              return (
                <div
                  key={testimonial.id}
                  className="mb-5 h-fit rounded-sm bg-white p-5 shadow"
                >
                  <h5 className="font-semplicita font-semibold">
                    {testimonial.strong}
                  </h5>
                  <div
                    className="mt-5 space-y-3 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.text,
                    }}
                  />
                  <div className="mt-3 flex items-center space-x-5">
                    <Image
                      src={testimonial.image}
                      width={30}
                      height={30}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <div>
                        <p className="font-medium text-rose-tan">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {testimonial.as}
                        </p>
                      </div>
                      <p className="mt-1 text-xs">{testimonial.created_at}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full justify-end">
                    {unstar.map((s, i) => (
                      <Star
                        key={i}
                        className="fill-white text-slate-300"
                        size={20}
                      />
                    ))}
                    {star.map((s, i) => (
                      <Star
                        key={i}
                        className="fill-yellow-300 text-yellow-300"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
