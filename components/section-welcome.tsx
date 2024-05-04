import Image from "next/image";

export default function SectionWelcome() {
  return (
    <div className="">
      <div className="container mx-auto grid grid-cols-2 pb-72   pt-36">
        <div className="flex flex-col items-start justify-center space-y-5">
          <div className="space-y-10">
            <h1 className="max-w-[500px] text-6xl font-medium tracking-wider text-bold">
              Embrace Elegance, Celebrate Love
            </h1>
            <p className="text-2xl tracking-wide text-light-accent">
              Welcome to FIOR Wedding Event Organizer
            </p>
          </div>
          <button className="rounded bg-dark-accent px-10 py-5 text-lg font-medium text-bold shadow-md transition-all duration-200 hover:bg-light-accent">
            SEE OUR SERVICES
          </button>
        </div>
        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded">
            <Image
              src="/assets/fior/Snapinsta.app_377912124_213194728427276_7675588262288677813_n_1080.jpg"
              alt="Welcome Image"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="absolute bottom-[-60%] left-[-20%] z-10 h-full w-full">
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
