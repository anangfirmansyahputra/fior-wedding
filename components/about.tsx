import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="bg-neutral-background">
        <div className="container mx-auto space-y-10 py-10 md:py-32">
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

      {/* <div className="bg-sea-salt py-32">
        <div className="container mx-auto grid gap-x-10 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 rounded bg-neutral-background p-10 shadow">
            <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              BEHIND FIOR
            </h2>
            <p className="tracking-widest">GET TO KNOW US</p>
          </div>
          <div className="space-y-10 rounded bg-neutral-background p-5 shadow md:space-y-5 md:p-10">
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
      </div> */}

      {/* <div className="bg-sea-salt">
        <div className="container mx-auto grid grid-cols-1 gap-5 bg-sea-salt py-10 md:grid-cols-2 md:py-20">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/assets/owner1.jpeg"
              layout="fill"
              alt="Inneke"
              className="object-cover"
            />
          </div>
          <div className="space-y-5 self-center md:self-end">
            <div className="space-y-3 rounded bg-neutral-background p-5 shadow-md">
              <h2 className="text-3xl font-bold">VINNIE KOSASIH</h2>
              <p className="text-lg">PLANNER</p>
              <p className="max-w-[400px] tracking-wide text-gray-800">{`"I do the planning, negotiate, arrange schedules for meetings, but Neeke will help as well. We're a package deal."`}</p>
            </div>
            <div className="space-y-5">
              <div className="flex flex-col items-center space-y-4 rounded bg-neutral-background p-10 text-center shadow-md">
                <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                  BEHIND FIOR
                </h2>
                <p className="tracking-widest">GET TO KNOW US</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="w-full bg-peach-whip py-3 text-center font-semplicita text-sm font-light tracking-widest text-background shadow-md sm:w-fit sm:px-20 sm:tracking-[0.8rem] md:text-base">
                  FIOR ORGANIZER
                </p>
                <h3 className="hidden font-semplicita text-3xl font-semibold tracking-[0.5rem] text-background sm:block md:text-4xl">
                  FIOR
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-5 bg-sea-salt pb-20 md:grid-cols-2">
          <div className="relative order-2 h-[400px] max-h-[400px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/assets/owner2.jpeg"
              layout="fill"
              alt="NEEKE SANTOSO"
              className="object-cover"
            />
          </div>
          <div className="order-1 space-y-5 self-end">
            <div className="space-y-3 rounded bg-neutral-background p-5 shadow-md">
              <h2 className="text-3xl font-bold">NEEKE SANTOSO</h2>
              <p className="text-lg">EXECUTOR</p>
              <p className="max-w-[400px] tracking-wide text-gray-800">{`"If a ship has two captains, it will surely sink" - Raja Lapangan`}</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-sea-salt py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-10 text-5xl font-bold text-gray-800">
            Get to Know Us
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-lg text-gray-600">
            We are a team of passionate professionals dedicated to making your
            events unforgettable. Our expertise in planning and execution
            ensures that every detail is taken care of, allowing you to enjoy
            the moment. Meet the faces behind FIOR, and learn more about our
            story.
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <img
                src="/assets/owner3.jpeg"
                alt="Vinnie Kosasih and Neeke Santoso"
                className="mb-6 h-64 w-full rounded-lg object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Vinnie & Neeke
              </h3>
              <p className="text-lg text-gray-500">Planner & Executor</p>
              <p className="mt-4 text-gray-600">
                Together, Vinnie and Neeke ensure every aspect of your event is
                meticulously planned and flawlessly executed. Their synergy and
                dedication make FIOR stand out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
