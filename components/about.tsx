import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative">
        <div className="container relative z-[1] mx-auto space-y-10 py-10 md:py-32">
          <div>
            <div className="relative flex h-fit flex-row">
              <div className="absolute top-[50px] h-full w-full max-w-[380px] space-y-[20px] bg-[#DBBEB8]">
                <div className="relative flex h-full flex-col items-center justify-center">
                  <div className="font-carmorant text-[20px] text-[#2B2B2B]">
                    FIOR WEDDING
                  </div>
                  <div className="text-center font-carmorant text-[40px] font-bold leading-[60px] tracking-[5%] text-white">
                    ABOUT
                  </div>
                  <div className="text-center font-carmorant text-[40px] font-bold leading-[60px] tracking-[5%] text-white">
                    THE
                  </div>
                  <div className="text-center font-carmorant text-[40px] font-bold leading-[60px] tracking-[5%] text-white">
                    COMPANY
                  </div>
                  <div className="font-carmorant text-[12px] font-semibold">
                    FIOR STORY
                  </div>
                  <div className="absolute left-[-50px] top-[-45px]">
                    <div className="relative h-[200px] w-[200px]">
                      <Image
                        src={"/assets/revision/Vector (1).svg"}
                        alt=""
                        fill
                        className="absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="space-y-4">
                <div className="bg-sea-salt px-10 pb-5 pt-16">
                  <p className="font-carmorant font-light tracking-[0.5rem] text-thunderstrom">
                    FIOR WEDDING
                  </p>
                </div>
                <div className="space-y-5 bg-peach-whip p-10  font-carmorant text-background">
                  <h2 className="w-[60%] text-4xl font-bold tracking-widest lg:text-5xl">
                    ABOUT THE COMPANY
                  </h2>
                  <p className="tracking-widest">FIOR STORY</p>
                </div>
                <div className="bg-sea-salt px-10 pb-8 pt-12">
                  <p className="text-sm text-thunderstrom">SINCE 2015</p>
                </div>
              </div> */}

              <div className="ml-[300px] h-fit space-y-10 rounded-br-[100px] rounded-tl-[100px] bg-white p-[55px] pl-[150px] font-amiri text-lg tracking-wide text-[#2B2B2B] ">
                <p>
                  Originating from the essence of Irish culture, FIOR epitomizes
                  sincerity, earnestness, and beauty. Its journey began in
                  Jakarta in 2015, marking the inception of its profound
                  narrative.
                </p>
                <p>
                  Expanding its horizons, FIOR gracefully extended its presence
                  to the captivating landscapes of Bali in 2016, enriching its
                  tapestry with new colors and textures.
                </p>
                <p>
                  On the pivotal date of December 31, 2018, FIOR attained
                  official recognition, formalizing its status as a legal entity
                  under PT. Cerita Dua Hati, bearing registration number
                  S-768KT/WPJ.05/KP.1103/2019.
                </p>
                <p>
                  Anchored at Kencana Tower Level Mezzanine, Jl. Meruya Ilir
                  No.88, Kebon Jeruk, West Jakarta, 11610, FIOR continues to
                  weave tales of sincerity, earnestness, and beauty.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/assets/revision/RenaldiGabriellaWedding-185 1.svg"
          alt=""
          fill
          className="z-0"
        />
      </div>

      <div className="bg-custom-about py-20">
        <div className="container mx-auto text-center">
          <div className="mx-auto w-fit">
            <h1 className="mb-5 text-2xl font-bold tracking-widest text-gray-800 md:text-3xl lg:text-4xl">
              GET TO KNOW US
            </h1>
            <div className="mx-auto mb-[30px] mt-[10px] h-[3px] w-[50%] bg-[#DBBEB8]" />
          </div>
          <p className=" mx-auto mb-16 w-full font-amiri text-lg">
            We are a team of passionate professionals dedicated to making your
            events unforgettable. Our expertise in planning and execution
            ensures that every detail is taken care of, allowing you to enjoy
            the moment. Meet the faces behind FIOR, and learn more about our
            story.
          </p>
          <div className="mx-auto grid max-w-[800px] gap-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <img
                src="/assets/owner1.jpeg"
                alt="Vinnie Kosasih"
                className="mb-6 h-64 w-full rounded-lg object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Vinnie Kosasih
              </h3>
              <p className="text-lg text-gray-500">Planner</p>
              <p className="mt-4 text-gray-600">
                {` "I do the planning, negotiate, arrange schedules for meetings,
                but Neeke will help as well. We're a package deal."`}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <img
                src="/assets/owner2.jpeg"
                alt="Neeke Santoso"
                className="mb-6 h-64 w-full rounded-lg object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Neeke Santoso
              </h3>
              <p className="text-lg text-gray-500">Executor</p>
              <p className="mt-4 text-gray-600">
                {` "If a ship has two captains, it will surely sink" - Raja
                Lapangan`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
