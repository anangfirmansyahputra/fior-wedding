import Image from "next/image";

export default function Hero() {
  return (
    <div className="font-carmorant relative h-[calc(100vh-120px)] lg:h-[calc(100vh-140px)] xl:h-[calc(100vh-160px)]">
      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center space-y-6 bg-[rgba(0,0,0,0.5)] px-5 md:space-y-10 md:px-0">
        <h1 className="text-center text-xl font-bold uppercase text-[#fff]  md:text-2xl lg:text-3xl xl:text-5xl">
          Memorable Moments Through Genuine Hearts
        </h1>
        <p className="text-center text-base font-light tracking-[0.3rem] text-white md:text-lg lg:text-xl xl:text-2xl">
          Authentic Hearts Create Cherished Moments
        </p>
        <div className="grid w-full grid-cols-2 gap-x-5 md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <button className="rounded bg-dark-accent py-3 text-sm font-medium text-font shadow-2xl transition-all duration-200 hover:bg-light-accent lg:py-5 lg:text-xl">
            SCHEDULE A SHOWING
          </button>
          <button className="hover:border-darkbg-dark-accent rounded border-2 border-white py-3 text-sm font-medium text-white transition-all duration-200 hover:border-dark-accent hover:bg-dark-accent hover:text-font lg:py-5 lg:text-xl">
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
