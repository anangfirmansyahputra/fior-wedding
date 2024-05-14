import Image from "next/image";

export default function CreateWedding() {
  return (
    <div className="relative h-[300px] md:h-[500px]">
      <Image
        src="/assets/Eric Myra Wedding Teaser-135.jpg"
        alt="Create Event"
        fill
        className="absolute object-cover object-top"
      />
      <div className="absolute h-full w-full bg-[#0000008a]" />
      <div className="container relative flex h-full items-end pb-10 md:pb-32">
        <h1 className="text-3xl tracking-wider text-white md:text-5xl">{`Let's Create Your Dream Wedding...`}</h1>
      </div>
    </div>
  );
}
