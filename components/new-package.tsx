import Image from "next/image";

export default function NewPackage() {
  return (
    <div className="relative">
      <div className="container mx-auto py-20">
        <h1 className="text-center text-3xl font-medium tracking-widest  md:text-3xl lg:text-4xl">
          OUR SERVICES
        </h1>

        <div className="relative z-[1] mt-20 grid gap-5 sm:grid-cols-2">
          <div className="space-y-5">
            <div className="space-y-2 overflow-hidden rounded-lg bg-white shadow-lg">
              <h4 className="bg-sea-salt p-5 text-center font-semplicita font-semibold tracking-wider text-[#555] md:text-2xl">
                WEDDING PLANNER SERVICES
              </h4>
              <div className="px-5">
                <p className="font-semplicita text-sm italic text-[#555] md:text-lg">
                  JAKARTA WEDDING : 10 CREWS ON THE DAY
                </p>
                <p className="font-semplicita text-sm italic text-[#555] md:text-lg">
                  BALI WEDDING : 8 CREWS ON THE DAY
                </p>
              </div>
              <div className="space-y-1 p-5">
                <p className="font-bold tracking-widest">Scope of Work : </p>
                <p className="">Wedding Organizer included</p>
                <p className="">Full Day Assistance up to 18 hours</p>
                <ul className="list-disc pl-5">
                  <li>Venue inspection</li>
                  <li>Fitting schedule arrangement</li>
                  <li>Food Tasting</li>
                  <li>Technical Meeting 1x</li>
                  <li>Budgeting Sheet</li>
                  <li>Wedding Checklist</li>
                  <li>Administration Arrangement</li>
                </ul>
              </div>
            </div>
            <div className="space-y-2 overflow-hidden rounded-lg bg-white shadow-lg">
              <h4 className="bg-sea-salt p-5 text-center font-semplicita font-semibold tracking-wider text-[#555] md:text-2xl">
                WEDDING ORGANIZER SERVICES
              </h4>
              <div className="px-5">
                <p className="font-semplicita text-sm italic text-[#555] md:text-lg">
                  JAKARTA WEDDING : 10 CREWS ON THE DAY
                </p>
                <p className="font-semplicita text-sm italic text-[#555] md:text-lg">
                  NOT APPLICABLE FOR BALI WEDDING
                </p>
              </div>
              <div className="space-y-1 p-5">
                <p className="font-bold tracking-widest">Job Description :</p>
                <p className="">Standby from Makeup Preparation</p>
                <p className="">One time Technical Meeting</p>
                <p className="">Rundown & Wedding Details</p>
                <p className="">Assistance from 3 months before The Day</p>
                <ul className="list-disc pl-5">
                  <li>Bride & Groom Assistant</li>
                  <li>Family Assistant</li>
                  <li>Bridal Parties Assistant</li>
                  <li>Food & Beverage Coordinator</li>
                  <li>Checker, Runner, Vendor Coordinator, etc</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-2 overflow-hidden rounded-lg bg-white shadow-lg">
            <h4 className="bg-sea-salt p-5 text-center font-semplicita font-semibold tracking-wider text-[#555] md:text-2xl">
              ALL IN PACKAGES
            </h4>
            <div>
              <p className="px-5 font-semplicita text-sm italic text-[#555] md:text-lg">
                PACKAGE INCLUSION
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-5 px-5">
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">Decoration :</p>
                  <ul className="list-disc pl-5">
                    <li>Backdrop pelaminan up to to 12M</li>
                    <li>Sofa / Kursi pelaminan</li>
                    <li>Mini garden</li>
                    <li>Standing fresh flower</li>
                    <li>Dance floor or gazebo 3 x 3 melaminto</li>
                    <li>Aisle walkway rose petal</li>
                    <li>Entertainment backdrop</li>
                    <li>Frame screen if needed</li>
                    <li>Photo booth / Photo gallery</li>
                    <li>Welcome signage (Meja angpao, Souvenir)</li>
                    <li>1pcs hand bouquet & corsage for groom & family</li>
                    <li>Backdrop tea pai (bonus)</li>
                    <li>Standard lighting</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">Photo & Viideo :</p>
                  <ul className="list-disc pl-5">
                    <li>2 Photo & 2 Video</li>
                    <li>Edited photos</li>
                    <li>Up to 16 hours coverage</li>
                    <li>Trailer / highlight movie</li>
                    <li>Same day edit</li>
                    <li>Photo albums</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">Makeup & Hairdo :</p>
                  <ul className="list-disc pl-5">
                    <li>For bride</li>
                    <li>Retouch Included</li>
                    <li>Trial</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-5 p-5">
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">
                    Entertainment & MC :
                  </p>
                  <ul className="list-disc pl-5">
                    <li>3 Musicians + 1 singer</li>
                    <li>Sound system</li>
                    <li>Master of ceremony</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">Wedding Gown :</p>
                  <ul className="list-disc pl-5">
                    <li>Veil & hairpiece included</li>
                    <li>Custom bolero for holy matrimony</li>
                    <li>Custom rent</li>
                    <li>Pre-wedding dress</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">Wedding Cake :</p>
                  <ul className="list-disc pl-5">
                    <li>5 Tiers dummy template</li>
                    <li>Mingle & family cake</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">Groom Suit :</p>
                  <ul className="list-disc pl-5">
                    <li>Complete set (Vest & Tie)</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">Fior :</p>
                  <ul className="list-disc pl-5">
                    <li>10 Crew on the day</li>
                    <li>Planning & stylist service</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-bold tracking-widest">
                    Bonus (Choose 2) :
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Online invitation</li>
                    <li>100 pcs Template invitation card</li>
                    <li>Wedding car</li>
                    <li>Souvenir value 1.500.000</li>
                    <li>Live Camera</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/9511656.png"
        alt="Flower"
        fill
        className="absolute z-0 hidden object-cover md:block"
      />
    </div>
  );
}
