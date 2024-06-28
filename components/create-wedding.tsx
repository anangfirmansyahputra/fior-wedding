import Image from "next/image";

export default function CreateWedding() {
  return (
    <div className="relative h-[300px] md:h-[600px]">
      <Image
        src="/assets/revision/IMG_9808 (1).jpeg"
        alt="Create Event"
        fill
        className="absolute object-cover object-center"
      />
      <div className="absolute h-full w-full bg-[#0000008a]" />
      <div className="container relative flex h-full items-center justify-center">
        <h1 className="text-3xl tracking-wider text-white md:text-5xl">{`Let's Create Your Dream Wedding...`}</h1>
      </div>
    </div>
  );
}
