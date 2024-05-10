import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="bg-neutral-background">
        <div className="container mx-auto space-y-10 py-32">
          <div>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              <div className="space-y-4">
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
              </div>
              <div className="space-y-5 px-3 text-lg tracking-wide md:px-0">
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
      </div>
      <div className="bg-sea-salt py-32">
        <div className="container mx-auto grid gap-x-10 md:grid-cols-2">
          <div className="bg-neutral-background flex flex-col justify-center space-y-4 rounded p-10 shadow">
            <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              BEHIND FIOR
            </h2>
            <p className="tracking-widest">GET TO KNOW US</p>
          </div>
          <div className="bg-neutral-background space-y-10 rounded p-5 shadow md:space-y-5 md:p-10">
            <div className="flex flex-col gap-x-5 sm:flex-row">
              <div className="relative aspect-square sm:h-[120px] sm:w-[120px]">
                <Image fill alt="People" src="/assets/fior/people1.png" />
              </div>
              <div className="mt-5 flex flex-1 flex-col justify-between space-y-5 sm:mt-0 sm:space-y-0">
                <p className="text-xl font-semibold text-bold">
                  VINNIE KOSASIH
                </p>
                <div>
                  <p>PLANNER</p>
                  <p className="text-wrap">{`"i do the Planning, Negotiate, Arrange schedule for meeting, but Neeke will help it though. Kita udah sepaket"`}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-x-5 sm:flex-row">
              <div className="mt-5 flex flex-1 flex-col justify-between space-y-5 sm:mt-0 sm:space-y-0">
                <p className="text-end text-xl font-semibold text-bold">
                  NEEKE SANTOSO
                </p>
                <div>
                  <p className="text-end">EXECUTOR</p>
                  <p className="text-wrap text-end">{`"Kalo di kapal ada 2 nahkoda pasti
oleng" - Raja Lapangan`}</p>
                </div>
              </div>
              <div className="relative mt-5 aspect-square sm:mt-0 sm:h-[120px] sm:w-[120px]">
                <Image fill alt="People" src="/assets/fior/people2.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10">
          <div className="flex justify-between ">
            <p className="w-full bg-peach-whip py-3 text-center font-semplicita text-sm font-light tracking-widest text-background shadow sm:w-fit sm:px-20 sm:tracking-[0.8rem] md:text-base">
              FIOR ORGANIZER
            </p>
            <h3 className="hidden font-semplicita text-3xl font-semibold tracking-[0.5rem] text-background sm:block md:text-4xl">
              FIOR
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
