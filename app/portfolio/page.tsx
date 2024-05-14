import CreateWedding from "@/components/create-wedding";
import Portfolio from "@/components/portfolio";
import Template from "@/components/template";
import axios from "axios";
import React from "react";

export default async function Page() {
  const { data } = await axios.get(`${process.env.API_URL}/api/articles`);

  // const data = {
  //   data: [
  //     {
  //       id: "1231231",
  //       title: "Tips Memilih Gaun Pernikahan yang Tepat",
  //       content:
  //         "<p>Mencari gaun pernikahan yang sempurna adalah salah satu bagian paling penting dari persiapan pernikahan Anda. Berikut adalah beberapa tips untuk membantu Anda memilih gaun yang tepat:</p><ul><li><strong>Kenali Bentuk Tubuh Anda</strong>: Pilihlah gaun yang sesuai dengan bentuk tubuh Anda untuk memastikan gaun tersebut nyaman dan membuat Anda merasa percaya diri.</li><li><strong>Cari Inspirasi</strong>: Telusuri majalah pernikahan, situs web, dan media sosial untuk mencari inspirasi tentang gaya gaun yang Anda sukai.</li><li><strong>Pilihlah Warna yang Sesuai</strong>: Pertimbangkan warna gaun yang akan cocok dengan warna kulit Anda dan tema pernikahan Anda.</li><li><strong>Jangan Lupakan Aksesori</strong>: Perhatikan aksesori seperti veil, sepatu, dan perhiasan yang akan melengkapi penampilan Anda.</li><li><strong>Cocokkan dengan Tema Pernikahan</strong>: Pastikan gaun Anda sesuai dengan tema pernikahan Anda agar terlihat selaras dengan dekorasi dan suasana acara.</li></ul>",
  //       slug: "tips-memilih-gaun-pernikahan",
  //       author: "Jane Smith",
  //       images: "/assets/bg1.jpg",
  //     },
  //   ],
  // };

  return (
    <Template>
      <Portfolio data={data.data} />
      <CreateWedding />
    </Template>
  );
}
