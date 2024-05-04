import Image from "next/image";

export default function Hero() {
  return (
    <div className="font-carmorant relative h-[calc(100vh-160px)] ">
      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center space-y-10 bg-[rgba(0,0,0,0.5)]">
        <h1 className="text-5xl font-bold uppercase text-[#fff]">
          Memorable Moments Through Genuine Hearts
        </h1>
        <p className="text-2xl font-light tracking-[0.3rem] text-white">
          Authentic Hearts Create Cherished Moments
        </p>
        <div className="grid w-[600px] grid-cols-2 gap-x-5">
          <button className="rounded bg-dark-accent py-5 text-xl font-medium text-font shadow-2xl transition-all duration-200 hover:bg-light-accent">
            SCHEDULE A SHOWING
          </button>
          <button className="hover:border-darkbg-dark-accent rounded border-2 border-white py-5 text-xl font-medium text-white transition-all duration-200 hover:border-dark-accent hover:bg-dark-accent hover:text-font">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <Image
        src="/assets/bg2.jpg"
        fill
        className="absolute object-cover object-center"
        alt="Hero"
      />
    </div>
  );
}
