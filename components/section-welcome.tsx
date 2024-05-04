import Image from "next/image";

export default function SectionWelcome() {
  return (
    <div className="">
      <div className="container mx-auto grid pb-36 pt-28 md:grid-cols-2 lg:pb-72 lg:pt-36">
        <div className="flex flex-col items-start justify-center space-y-5">
          <div className="w-full space-y-5 text-center md:text-start lg:space-y-10">
            <h1 className="text-3xl font-medium tracking-wider text-bold md:max-w-[500px] md:text-4xl lg:text-5xl xl:text-6xl">
              Embrace Elegance, Celebrate Love
            </h1>
            <p className="tracking-wide text-light-accent md:text-lg lg:text-xl xl:text-2xl">
              Welcome to FIOR Wedding Event Organizer
            </p>
          </div>
          <button className="mx-auto rounded bg-dark-accent px-5 py-3 text-lg font-medium text-bold shadow-md transition-all duration-200 hover:bg-light-accent md:mx-0 lg:px-10 lg:py-5">
            SEE OUR SERVICES
          </button>
        </div>
        <div className="relative mt-10 md:mt-0">
          <div className="relative aspect-square overflow-hidden rounded">
            <Image
              src="/assets/fior/Snapinsta.app_377912124_213194728427276_7675588262288677813_n_1080.jpg"
              alt="Welcome Image"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="absolute bottom-[-60%] left-[-20%] z-10 hidden h-full w-full md:block">
            <div className="relative h-[60%] w-[60%] overflow-hidden rounded">
              <Image
                src="/assets/fior/Snapinsta.app_435479674_18308444656148018_2255223913511660480_n_1080.jpg"
                alt="Welcome Image"
                fill
                className="absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
