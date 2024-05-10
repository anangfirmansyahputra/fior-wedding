import Image from "next/image";

export default function Package() {
  const list = [
    {
      title: "DECORATION",
      items: [
        "Backdrop Pelaminan Up to 12 M",
        "Sofa / Kursi Pelaminan",
        "Mini Garden",
        "Standing Fresh Flower",
        "Dance Floor or Gazebo 3x3 Melaminto",
        "Aisle Walkway Rose Petal",
        "Entertainment Backdrop",
        "Frame Screen if Needed",
        "Photo Booth / Photo Gallery",
        "Welcome Signage (Meja Angpao, Souvenir)",
        "1 Pcs Hand Bouquet & Corsage for Groom & Family",
        "Backdrop Tea Pai (Bonus)",
        "Standard Lighting",
      ],
    },
    {
      title: "Photo & Video",
      items: [
        "2 Photo & 2 Video",
        "Edited Photos",
        "Up to 16 Hours Coverage",
        "Trailer / Highlight Movie",
        "Same Day Edit",
        "Photo Albums",
      ],
    },
    {
      title: "Makeup & Hairdo",
      items: ["For Bride", "Retouch Included", "Trial"],
    },
    {
      title: "Wedding Gown",
      items: [
        "Veil & Hairpiece Included",
        "Custom Bolero for Holy Matrimony",
        "Custom Rent",
        "Pre-Wedding Dress",
      ],
    },
    {
      title: "Groom Suit",
      items: ["Complete Set (Vest & Tie)"],
    },
    {
      title: "Fior",
      items: ["10 Crews on the Day", "Planning & Stylist Service"],
    },
    {
      title: "Entertainment & MC",
      items: ["3 Musicians + 1 Singer", "Sound System", "Master of Ceremony"],
    },
    {
      title: "Wedding Cake",
      items: ["5 Tiers Dummy Template", "Mingle & Family Cake"],
    },
    {
      title: "Bonus (Choose 2)",
      items: ["Online Invitation"],
    },
  ];

  return (
    <div className="relative bg-sea-salt">
      <Image
        src={"/assets/border1.png"}
        fill
        className="absolute z-0 hidden object-cover md:block lg:object-fill"
        alt="Test"
      />
      <div className="container relative mx-auto space-y-10 py-20 lg:space-y-20 lg:py-48">
        <h2 className="text-center text-2xl font-bold tracking-wider text-bold md:text-3xl lg:text-4xl">
          PACKAGE INCLUSION
        </h2>
        <div className="grid gap-5 font-semplicita tracking-wider md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <div className="space-y-5 rounded-md bg-neutral-background p-5 shadow-md lg:p-10">
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[0].title}
              </h4>
              <ul className="space-y-1">
                {list[0].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[7].title}
              </h4>
              <ul className="space-y-1">
                {list[7].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5 rounded-md bg-neutral-background p-5 shadow-md lg:p-10">
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[1].title}
              </h4>
              <ul className="space-y-1">
                {list[1].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[2].title}
              </h4>
              <ul className="space-y-1">
                {list[2].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[4].title}
              </h4>
              <ul className="space-y-1">
                {list[4].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5 rounded-md bg-neutral-background p-5 shadow-md lg:p-10">
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[3].title}
              </h4>
              <ul className="space-y-1">
                {list[3].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[5].title}
              </h4>
              <ul className="space-y-1">
                {list[5].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[6].title}
              </h4>
              <ul className="space-y-1">
                {list[6].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-lg font-medium text-rose-tan lg:text-2xl">
                {list[8].title}
              </h4>
              <ul className="space-y-1">
                {list[8].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-thunderstrom md:text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
