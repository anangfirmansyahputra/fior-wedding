export default function Package() {
  const list = [
    {
      title: "DECORATION",
      items: [
        "BACKDROP PELAMINAN UP TO 12 M",
        "SOFA / KURSI PELAMINAN",
        "MINI GARDEN",
        "STANDING FRESH FLOWER",
        "DANCE FLOOR OR GAZEBO 3x3 MELAMINTO",
        "AISLE WALKWAY ROSE PETAL",
        "ENTERTAINMENT BACKDROP",
        "FRAME SCREEN IF NEEDED",
        "PHOTO BOOTH / PHOTO GALLERY",
        "WELCOME SIGNAGE (MEJA ANGPAO, SOUVENIR)",
        "1 PCS HAND BOUQUET & CORSAGE FOR GROOM & FAMILY",
        "BACKDROP TEA PAI (BONUS)",
        "STANDARD LIGHTING",
      ],
    },
    {
      title: "PHOTO & VIDEO",
      items: [
        "2 PHOTO & 2 VIDEO",
        "EDITED PHOTOS",
        "UP TO 16 HOURS COVERAGE",
        "TRAILER / HIGHLIGHT MOVIE",
        "SAME DAY EDIT",
        "PHOTO ALBUMS",
      ],
    },
    {
      title: "MAKEUP & HAIRDO",
      items: ["FOR BRIDE", "RETOUCH INCLUDED", "TRIAL"],
    },
    {
      title: "WEDDING GOWN",
      items: [
        "VEIL & HAIRPIECE INCLUDED",
        "CUSTOM BOLERO FOR HOLY MATRIMONY",
        "CUSTOM RENT",
        "PRE-WEDDING DRESS",
      ],
    },
    {
      title: "GROOM SUIT",
      items: ["COMPLETE SET (VEST & TIE)"],
    },
    {
      title: "FIOR",
      items: ["10 CREWS ON THE DAY", "PLANNING & STYLIST SERVICE"],
    },
    {
      title: "ENTERTAINMENT & MC",
      items: ["3 MUSICIANS + 1 SINGER", "SOUND SYSTEM", "MASTER OF CEREMONY"],
    },
    {
      title: "WEDDING CAKE",
      items: ["5 TIERS DUMMY TEMPLATE", "MINGLE & FAMILY CAKE"],
    },
    {
      title: "BONUS (CHOOSE 2)",
      items: ["ONLINE INVITATION"],
    },
  ];

  return (
    <div className="bg-sea-salt">
      <div className="container mx-auto space-y-20 py-48">
        <h2 className="text-center text-5xl font-medium tracking-wider text-bold">
          PACKAGE INCLUSION
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="space-y-5 rounded-md bg-background p-10 shadow-md">
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[0].title}
              </h4>
              <ul className="space-y-1">
                {list[0].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[7].title}
              </h4>
              <ul className="space-y-1">
                {list[7].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5 rounded-md bg-background p-10 shadow-md">
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[1].title}
              </h4>
              <ul className="space-y-1">
                {list[1].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[2].title}
              </h4>
              <ul className="space-y-1">
                {list[2].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[4].title}
              </h4>
              <ul className="space-y-1">
                {list[4].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5 rounded-md bg-background p-10 shadow-md">
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[3].title}
              </h4>
              <ul className="space-y-1">
                {list[3].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[5].title}
              </h4>
              <ul className="space-y-1">
                {list[5].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[6].title}
              </h4>
              <ul className="space-y-1">
                {list[6].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-rose-tan text-2xl font-medium">
                {list[8].title}
              </h4>
              <ul className="space-y-1">
                {list[8].items.map((it, i) => (
                  <li
                    key={i}
                    className="text-thunderstrom text-base font-light"
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
