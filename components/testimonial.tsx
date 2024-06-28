"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import TestimonialCard from "./testimonial-card";

export default function Testimonial() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const settingsMd = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settingsSm = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  const testimonials = [
    {
      id: 1,
      text: `
        <p>Mau apapun di wedding kalian, Voila, Fior will make it happen! Fior is literally our genie haha. Dari pertama kali ketemu di wedding fair, mreka udah super ramah. Dan mreka bener2 ngikutin budget dan keinginan kita. Kerennya, aku mnta apapun di wedding ku pasti dijawab bisa, dan mreka will make it work no matter how. On the other hand they will also give you their honest opinion. And our energy somehow match, jadi tektok annya pas bgt dan mreka sat set sat set bgt, jd enak bgt lah ga pake lama kalo mau apa2. Untuk aku yang orangnya lumayan merhatiin details dan perintilan, mreka itu kerjanya rapih dan disiplin. Trus super fleksibel kalo mau janjian meeting malem pun dijabanin. Pokoknya dari persiapan sampe hari H smua super smooth. Hari H pun tenang aja percayakan smua ke fior, bride and groom tinggal duduk manis ngikutin acara dan have a lot of fun! Smuanya serba gercep and very thoughtful. Keluarga dan tamu jg bs menilai kalau semua well organized. Thank you fior, you guys are not only our wedding organizer but also our friend now :)) a good one! Sukses terus buat fior woohoo!!</p>
      `,
      name: "Sisca & Mirsha",
      created_at: "23 Agustus 2023",
      as: "Pengantin perempuan di Pernikahan Mirsha & Francisca ",
      strong: "NOT JUST AN ORDINARY WO!",
      image: "/assets/profile.png",
      star: 5,
    },
    {
      id: 2,
      text: `
        <p>Selalu tenang kalau kerja bareng Fior. Ownernya super ramah, detail, dan supel. Tim selalu kompak, rundown rapi. Ga hanya pengantinya, keluarga pengantin pun diperhatikan sedetail detailnya</p>
      `,
      name: "Julee Topper Make-Up Artist",
      created_at: "22 Februari 2023",
      as: "Vendor rekanan di Pernikahan",
      strong: "Recomended\ud83d\udc4d\ud83c\udffb",
      image: "/assets/profile.png",
      star: 5,
    },
    {
      id: 3,
      text: `
      <p>Vendor pertama yang kami book setelah menentukan tanggal pernikahan adalah Fior. Vinnie dan Neeke membantu kami menentukan vendor" lain yang sesuai budget, membantu nego, dan pastinya vendor yang punya track record baik.</p>

      <p>Hasilnya? Luar biasa. Kami dan keluarga betul" terbantu dengan Fior mulai dari planning sampai eksekusinya. Acara berlangsung smooth, seluruh crew sopan dan cekatan. Setelah acara, teman-teman menanyakan soal WO krn mereka benar" amazed.</p>

      <p>Terima kasih Vinnie, Neeke, dan seluruh crew FIOR. Jangan kapok ketemu kami ya karena sekarang untuk keluarga, siapapun yang merit WO nya pasti Fior ❤️</p>
      `,
      name: "Hana Adisti",
      created_at: "23 Maret 2022",
      as: "Pengantin perempuan di Pernikahan Ryan & Hana",
      strong: "Best. WO. Ever",
      image: "/assets/profile.png",
      star: 5,
    },
    {
      id: 4,
      text: `
      <p>Sukses dan bahagia selalu buat tim FIOR,
      </p>

      <p>See ya next time guys. Chersss !</p>
      `,
      name: "Wild Love Stories",
      created_at: "01 Mei 2021",
      as: "Vendor rekanan di Pernikahan ",
      strong: "WILD",
      image: "/assets/profile.png",
      star: 5,
    },
    {
      id: 5,
      text: `
     <p>THANK YOU BUAT FIOR TEAM!!</p>
     <p>Super puas banget sama hasil kerjanya, seluruh timnya yg bener” handal dan super berpengalaman sehingga sangat cepat menyelesaikan semua masalah yg terjadi tiba”, sangat koordinatif dengan para vendor sehingga semua lancar, sangat profesional semua tim standby 2 jam sebelum jam dijanjikan mereka hadir!!</p>
     
     <p>Semua keluarga, teman, dan vendor” sangat puas dengan pelayanan Fior!!</p>
     
     <p>Thank once again FIOR (Vinnie, Neeke, Andi, Powee, Albert, Octa, dan teman” lainnya) ☺️🙏🏻</p>
      `,
      name: "steven setiawijaya",
      created_at: "17 Maret 2021",
      as: "Pengantin pria di Pernikahan Steven & Angelin",
      strong: "01.11.2020",
      image: "/assets/profile.png",
      star: 5,
    },
    {
      id: 6,
      text: `
      <p>Terimakasih Banyak Fior!</p> 
      <p>super love bgt mak sama fior and team</p> 
      <p>dari awal emg uda nyari yg muda muda enerjik dan ga jaim , jd pas pertama ketemu uda sreg bgt</p> 
      <p>apalagi krn sepanjang persiapan ditengah pandemi yg bikin panik bgt mesti pending, cancel sana sini, booking lg nyari nyari lagi</p> 
      <p>tp semua dibantuin sama fior khususnya mak vinnie sama nieke </p>
      <p>padahal kita cm pesan jasa hari h tp dibantuin banget banget jauh dr sebelumnya 🖤</p>
      <p>pas hari h semua teamnya juga baik baik bgt bikin ketawa mulu </p>
      <p>pdhl smua serba tegang krn pernikahan diadain di tengah psbb jakarta</p> 
      <p>tapi dari awal sampai akhir smua berjalan lancar dan super fun bgt </p>
      <p>terimakasih banyak ya fior </p>
      <p>we really love you! </p>
      <p>semoga semua sukses selalu sehat selalu </p>
      <p>Tuhan Memberkati 🖤🖤🖤🖤</p>
      `,
      name: "anasthasya marcellavia",
      created_at: "19 Februari 2021",
      as: "Pengantin perempuan di Pernikahan Anasthasya & Khrisna ",
      strong: "10.10.2020",
      image: "/assets/profile.png",
      star: 5,
    },
    // {
    //   id: 1,
    //   text: `<p>Sukses dan bahagia selalu buat tim FIOR,
    //   See ya next time guys. Chersss !</p>`,
    //   name: "Wild Love Stories",
    //   created_at: "01 Mei 2021",
    //   as: "Vendor rekanan di Pernikahan ",
    //   strong: "WILD",
    //   image: "/assets/profile.png",
    //   star: 5,
    // },
    // {
    //   id: 2,
    //   text: `<p>Vendor pertama yang kami book setelah menentukan tanggal pernikahan adalah Fior. Vinnie dan Neeke membantu kami menentukan vendor" lain yang sesuai budget, membantu nego, dan pastinya vendor yang punya track record baik.</p>

    //   <p>Hasilnya? Luar biasa. Kami dan keluarga betul" terbantu dengan Fior mulai dari planning sampai eksekusinya. Acara berlangsung smooth, seluruh crew sopan dan cekatan. Setelah acara, teman-teman menanyakan soal WO krn mereka benar" amazed.</p>

    //   <p>Terima kasih Vinnie, Neeke, dan seluruh crew FIOR. Jangan kapok ketemu kami ya karena sekarang untuk keluarga, siapapun yang merit WO nya pasti Fior ❤️</p>`,
    //   name: "Hana Adisti",
    //   created_at: "23 Maret 2022",
    //   as: "Pengantin perempuan di Pernikahan Ryan & Hana ",
    //   strong: "Best. WO. Ever",
    //   image: "/assets/profile.png",
    //   star: 4,
    // },
    // {
    //   id: 3,
    //   text: `<p>My husband & I chose Fior as our wedding planner for our wedding in Bali on September 14th, 2019. We couldn't thank them enough for making our wedding amazing!! Everything went smoothly and met my expectation. We had no concerns and were able to enjoy our wedding day while Fior team handled everything! They are professional and they know what they are doing. Big thank you to Fior for helping us making our wedding day memorable. Love, Michael & Angelina</p>`,
    //   name: "Angelino Hartanto",
    //   created_at: "14 September 2019",
    //   as: "Pengantin perempuan di Pernikahan Michael & Angelina",
    //   strong: "The Wedding of Michael & Angelina - Bali, 14 September 2019",
    //   image: "/assets/profile.png",
    //   star: 5,
    // },
    // {
    //   id: 4,
    //   text: `<p>Thanks tuk effort nya sehingga acara berlangsung lancar dan tamu tamu puas. Duet maut FIOR ok banget dari awal diskusi, memberikan pilihan vendor, input sesuai dengan keinginan calon mempelai. Dan pada hari H team nya gercep, setiap afa kebutuhan, saling kòordinasi.
    //   At the end kinerja dari vendor yang di suggest oleh FIOR juga luar biasa, totalitas seperti WO nya :-)
    //   Bintang 4 bukan berarti kurang dari ekspektasi tetapi sebagai mood booster mencari peluang untuk menjadi lebih bagus lagi dari yang sudah bagus. Love you Neeke, Vinnie, Phowee & team</p>`,
    //   name: "Syuli Nursalim",
    //   created_at: "02 Oktober 2019",
    //   as: "Client di Pernikahan Marvin & Elizabeth ",
    //   strong: "Great support in Bali",
    //   image: "/assets/profile.png",
    //   star: 3,
    // },
  ];

  return (
    <div className="bg-testimonial relative">
      <div className="container relative mx-auto space-y-10 pb-10 md:py-48">
        <div className="mx-auto w-fit space-y-3">
          <h2 className="carmorant-garamond-bold text-center text-3xl font-bold tracking-wider text-bold">
            Testimonials
          </h2>
          <div className="mx-auto h-[3px] w-[70%] bg-[#DBBEB8]" />
        </div>

        <p className="font-amiri text-center text-[20px] font-normal leading-[35px] tracking-wide text-[#2B2B2B]">
          What our client says about FIOR Wedding Organizer
        </p>

        <div className="mx-auto hidden lg:block">
          <Slider {...settings} className="mt-20">
            {testimonials.map((testimonial) => {
              return (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              );
            })}
          </Slider>
        </div>

        <div className="mx-auto hidden px-5 md:block lg:hidden">
          <Slider {...settingsMd} className="mt-20">
            {testimonials.map((testimonial) => {
              const star = Array(testimonial.star).fill(true);
              const unstar = Array(5 - testimonial.star).fill(true);

              return (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              );
            })}
          </Slider>
        </div>

        <div className="mx-auto block px-5 md:hidden">
          <Slider {...settingsSm} className="mt-20">
            {testimonials.map((testimonial) => {
              const star = Array(testimonial.star).fill(true);
              const unstar = Array(5 - testimonial.star).fill(true);

              return (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
