import { Star } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      text: "<p>Mau apapun di wedding kalian, Voila, Fior will make it happen! Fior is literally our genie haha. Dari pertama kali ketemu di wedding fair, mreka udah super ramah. Dan mreka bener2 ngikutin budget dan keinginan kita. Kerennya, aku mnta apapun di wedding ku pasti dijawab bisa, dan mreka will make it work no matter how. On the other hand they will also give you their honest opinion. And our energy somehow match, jadi tektok annya pas bgt dan mreka sat set sat set bgt, jd enak bgt lah ga pake lama kalo mau apa2. Untuk aku yang orangnya lumayan merhatiin details dan perintilan, mreka itu kerjanya rapih dan disiplin. Trus super fleksibel kalo mau janjian meeting malem pun dijabanin. Pokoknya dari persiapan sampe hari H smua super smooth. Hari H pun tenang aja percayakan smua ke fior, bride and groom tinggal duduk manis ngikutin acara dan have a lot of fun! Smuanya serba gercep and very thoughtful. Keluarga dan tamu jg bs menilai kalau semua well organized. Thank you fior, you guys are not only our wedding organizer but also our friend now :)) a good one! Sukses terus buat fior woohoo!!</p>",
      name: "Sisca & Mirsha",
      created_at: "23 Agustus 2023",
      as: "Pengantin perempuan di Pernikahan Mirsha & Francisca",
      strong: "NOT JUST AN ORDINARY WO!",
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
    <div className="bg-neutral-background">
      <div className="container mx-auto space-y-10 py-20 md:py-48">
        <h2 className="text-center text-2xl font-bold tracking-wider text-bold md:text-3xl lg:text-4xl">
          TESTIMONIALS
        </h2>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const star = Array(testimonial.star).fill(true);
            const unstar = Array(5 - testimonial.star).fill(true);

            return (
              <div
                key={testimonial.id}
                className="h-fit rounded-sm bg-white p-5 shadow-lg"
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
                      <p className="text-xs text-slate-600">{testimonial.as}</p>
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
        </div>
      </div>
    </div>
  );
}
