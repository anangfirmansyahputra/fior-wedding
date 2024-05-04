import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto space-y-10 py-32">
          <div>
            <div className="grid grid-cols-2 gap-x-10">
              <div className="space-y-4">
                <div className="bg-sea-salt px-10 pb-5 pt-16">
                  <p className="font-carmorant text-thunderstrom font-light tracking-[0.5rem]">
                    FIOR WEDDING
                  </p>
                </div>
                <div className="bg-peach-whip font-carmorant space-y-5  p-10 text-background">
                  <h2 className="w-[60%] text-5xl font-bold tracking-widest">
                    ABOUT THE COMPANY
                  </h2>
                  <p className="tracking-widest">FIOR STORY</p>
                </div>
                <div className="bg-sea-salt px-10 pb-8 pt-12">
                  <p className="text-thunderstrom text-sm">SINCE 2015</p>
                </div>
              </div>
              <div className="space-y-5 text-lg tracking-wide">
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
                {/* <p className="text-xl leading-10 tracking-wider">
                FIOR is an Irish word meaning sincerity, earnestness, and
                beauty. Established in Jakarta in 2015, FIOR expanded its wings
                to Bali in 2016. On December 31, 2018, FIOR officially became a
                legal entity under PT. Cerita Dua Hati with registration number
                S-768KT/WPJ.05/KP.1103/2019, domiciled at Kencana Tower Level
                Mezzanine, Jl. Meruya Ilir No.88, Kebon Jeruk, West Jakarta,
                11610.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sea-salt py-32">
        <div className="container mx-auto grid grid-cols-2 gap-x-10">
          <div className="flex flex-col justify-center space-y-4 rounded bg-background p-10 shadow">
            <h2 className="text-6xl font-semibold">BEHIND FIOR</h2>
            <p className="tracking-widest">GET TO KNOW US</p>
          </div>
          <div className="space-y-5 rounded bg-background p-10 shadow">
            <div className="flex gap-x-5">
              <div className="relative h-[120px] w-[120px]">
                <Image fill alt="People" src="/assets/fior/people1.png" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <p className="text-xl font-semibold text-bold">
                  VINNIE KOSASIH
                </p>
                <div>
                  <p>PLANNER</p>
                  <p className="text-wrap">{`"i do the Planning, Negotiate, Arrange schedule for meeting, but Neeke will help it though. Kita udah sepaket"`}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-x-5">
              <div className="flex flex-1 flex-col justify-between">
                <p className="text-end text-xl font-semibold text-bold">
                  NEEKE SANTOSO
                </p>
                <div>
                  <p className="text-end">EXECUTOR</p>
                  <p className="text-wrap text-end">{`"Kalo di kapal ada 2 nahkoda pasti
oleng" - Raja Lapangan`}</p>
                </div>
              </div>
              <div className="relative h-[120px] w-[120px]">
                <Image fill alt="People" src="/assets/fior/people2.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10">
          <div className="flex justify-between ">
            <p className="bg-peach-whip font-semplicita px-20 py-3 font-light tracking-[0.8rem] text-background shadow">
              FIOR ORGANIZER
            </p>
            <h3 className="font-semplicita text-4xl font-semibold tracking-[0.5rem] text-background">
              FIOR
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
