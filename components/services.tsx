"use client";

import Image from "next/image";
import Slider from "react-slick";
import NewPackage from "./new-package";
import Package from "./package";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "WEDDING PLANNER",
      description:
        "Wedding Organizer included, Full Day Assistance up to 18 hours",
    },
    {
      id: 2,
      title: "WEDDING ORGANIZER",
      description: "Full Day or Half Day Assistance",
    },
    {
      id: 3,
      title: "ALL IN PACKAGE / CUSTOM PACKAGE",
      description: "All In Package with venue and all the vendors included",
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  return (
    <div className="bg-white">
      {/* <section className="bg-[url('/assets/pattern.png')]">
        <div className="container mx-auto space-y-10 py-20 lg:py-48">
          <div className="space-y-5">
            <h1 className="text-center text-2xl font-medium tracking-widest text-white md:text-3xl lg:text-4xl">
              OUR SERVICES
            </h1>
            <p className="mx-auto max-w-[900px] text-center tracking-wide text-white">
              {`Our Services Welcome to our comprehensive
            suite of services designed to turn your special occasion into an
            unforgettable experience. At [Your Company Name], we pride ourselves
            on offering a range of expertly crafted services tailored to meet
            your every need`}
            </p>
          </div>
          <div className="grid overflow-hidden rounded lg:grid-cols-2">
            <div className="flex h-[calc(100%-7.5px)] flex-col justify-center space-y-5 bg-font p-5 md:p-10 xl:space-y-10 xl:p-16">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="space-y-3 border-b-2 border-dark-accent pb-5 text-dark-accent lg:space-y-5"
                >
                  <h3 className="text-xl font-medium xl:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-sm tracking-wider xl:text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <Slider {...settings}>
                <div className="relative aspect-square">
                  <Image
                    fill
                    alt="BG"
                    src="/assets/fior/Snapinsta.app_393229873_18286185490148018_2706991991568404417_n_1080.jpg"
                    className="absolute object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    fill
                    alt="BG"
                    src="/assets/fior/Snapinsta.app_31754729_438452316599342_5693099186593988608_n_1080.jpg"
                    className="absolute object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    fill
                    alt="BG"
                    src="/assets/fior/Snapinsta.app_126924523_659412038074452_5764577106197071831_n_1080.jpg"
                    className="absolute object-cover"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Package /> */}
      {/* <NewPackage /> */}
      <div className="relative">
        <div className="container relative z-[2] flex aspect-video flex-col items-center justify-center">
          <div className="mx-auto w-fit">
            <h1 className="cardo-regular text-[36px] leading-[48px] text-white">
              OUR SERVICES
            </h1>
            <div className="mx-auto mb-[30px] mt-[10px] h-[3px] w-[50%] bg-[#DBBEB8]" />
          </div>
          <p className="cardo-regular w-full max-w-[1000px] text-center text-[20px] text-white">
            Our Services Welcome to our comprehensive suite of services designed
            to turn your special occasion into an unforgettable experience. At
            [Your Company Name], we pride ourselves on offering a range of
            expertly crafted services tailored to meet your every need
          </p>
        </div>
        <div className="absolute top-0 z-[1] h-full w-full bg-[#000000a1]" />
        <Image
          src={"/assets/revision/e9bfa6143ad179a3dfc0634e72e54138.jpeg"}
          alt=""
          fill
          className="absolute z-0 object-cover object-top"
        />
      </div>

      <div className="relative flex w-full flex-col space-y-[100px] bg-white pt-[100px]">
        <div className="relative flex w-[80%] gap-[100px] self-end rounded-tl-[50px] bg-[#F2EEEE]">
          <div className="relative z-[1] aspect-square w-[430px] overflow-hidden rounded-br-[50px] rounded-tl-[50px]">
            <Image
              src={"/assets/revision/9b0d293c2dbdb02462a3c1881b8ec529.jpeg"}
              alt=""
              fill
              className="absolute object-cover"
            />
            <div className="absolute bottom-0 flex h-1/2 w-full flex-col items-center justify-center space-y-[30px] bg-[#DBBEB8] px-[28px]">
              <div className="cardo-regular text-center text-[24px] uppercase text-white">
                Wedding Planner SERVICES
              </div>
              <p className="cardo-regular text-center text-[20px] text-white">
                Wedding Organizer included, Full Day Assistance up to 18 hours
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-[10px] py-[63px]">
            <h5 className="cardo-regular text-[20px] text-[#2b2b2b]">
              JAKARTA WEDDING : 10 CREWS ON THE DAY
            </h5>
            <h5 className="cardo-regular text-[20px] text-[#2b2b2b]">
              BALI WEDDING : 8 CREWS ON THE DAY
            </h5>
            <p className="cardo-bold w-fit bg-[#D1C7BE]">Scope of work :</p>
            <p className="cardo-regular text-[#2b2b2b]">
              Wedding Organizer included
            </p>
            <p className="cardo-regular text-[#2b2b2b]">
              Full Day Assistance up to 18 hours
            </p>
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
          <div className="absolute bottom-0 left-[-45%] z-[0] h-[80%] w-[80%]">
            <div className="relative h-full w-full">
              <Image
                src={"/assets/revision/Vector (2).svg"}
                alt=""
                fill
                className="absolute"
              />
            </div>
          </div>
        </div>

        <div className="relative flex w-[80%] gap-[100px] rounded-tr-[50px] bg-[#F2EEEE]">
          <div className="relative z-[1] order-2 aspect-square w-[430px] overflow-hidden rounded-bl-[50px] rounded-tr-[50px]">
            <Image
              src={"/assets/revision/9b0d293c2dbdb02462a3c1881b8ec529.jpeg"}
              alt=""
              fill
              className="absolute object-cover"
            />
            <div className="absolute bottom-0 flex h-1/2 w-full flex-col items-center justify-center space-y-[30px] bg-[#DBBEB8] px-[28px]">
              <div className="cardo-regular text-center text-[24px] uppercase text-white">
                Wedding Planner SERVICES
              </div>
              <p className="cardo-regular text-center text-[20px] text-white">
                Wedding Organizer included, Full Day Assistance up to 18 hours
              </p>
            </div>
          </div>
          <div className="order-1 flex-1 space-y-[10px] py-[63px] pl-[100px]">
            <h5 className="cardo-regular text-[20px] text-[#2b2b2b]">
              JAKARTA WEDDING : 10 CREWS ON THE DAY
            </h5>
            <h5 className="cardo-regular text-[20px] text-[#2b2b2b]">
              NOT APPLICABLE FOR BALI WEDDING
            </h5>
            <p className="cardo-bold w-fit bg-[#D1C7BE]">Job Description :</p>
            <p className="cardo-regular text-[#2b2b2b]">
              Standby from Makeup Preparation
            </p>
            <p className="cardo-regular text-[#2b2b2b]">
              One time Technical Meeting
            </p>
            <p className="cardo-regular text-[#2b2b2b]">
              Rundown & Wedding Details
            </p>
            <p className="cardo-regular text-[#2b2b2b]">
              Assistance from 3 months before The Day
            </p>
            <ul className="list-disc pl-5">
              <li>Bride & Groom Assistant</li>
              <li>Family Assistant</li>
              <li>
                Bridal Parties Assistant Food & Beverage Coordinator Checker,
              </li>
              <li>Runner, Vendor Coordinator, etc</li>
            </ul>
          </div>
          <div className="absolute bottom-0 right-[-45%] z-[0] h-[80%] w-[80%]">
            <div className="relative h-full w-full">
              <Image
                src={"/assets/revision/Vector (3).svg"}
                alt=""
                fill
                className="absolute"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="relative aspect-square w-[430px]">
            <Image
              src={"/assets/revision/9b0d293c2dbdb02462a3c1881b8ec529.jpeg"}
              alt=""
              fill
              className="absolute object-cover"
            />
            <div className="absolute bottom-0 flex h-1/2 w-full flex-col items-center justify-center space-y-[30px] bg-[#DBBEB8] px-[28px]">
              <div className="cardo-regular text-center text-[24px] uppercase text-white">
                ALL IN PACKAGE / CUSTOM PACKAGE
              </div>
              <p className="cardo-regular text-center text-[20px] text-white">
                All In Package with venue and all the vendors included
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#F2EEEE] p-[50px]">
            <div className="w-full">
              <div className="space-y-[22px]">
                <p className="font-carmorant text-sm text-[#555] md:text-lg">
                  PACKAGE INCLUSION
                </p>
                <div className="grid gap-5 md:grid-cols-3">
                  <div className="space-y-3">
                    <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                      Decoration :
                    </p>
                    <ul className="cardo-regular list-disc space-y-3 pl-5">
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
                  <div className="space-y-5">
                    <div className="space-y-1">
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                        Photo & Video :
                      </p>
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
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                        Wedding Cake :
                      </p>
                      <ul className="list-disc pl-5">
                        <li>5 Tiers dummy template</li>
                        <li>Mingle & family cake</li>
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                        Fior :
                      </p>
                      <ul className="list-disc pl-5">
                        <li>10 Crew on the day</li>
                        <li>Planning & stylist service</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                        Makeup & Hairdo :
                      </p>
                      <ul className="list-disc pl-5">
                        <li>For bride</li>
                        <li>Retouch Included</li>
                        <li>Trial</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-5 p-5">
                    <div className="space-y-1">
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                        Wedding Gown :
                      </p>
                      <ul className="list-disc pl-5">
                        <li>Veil & hairpiece included</li>
                        <li>Custom bolero for holy matrimony</li>
                        <li>Custom rent</li>
                        <li>Pre-wedding dress</li>
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                        Groom Suit :
                      </p>
                      <ul className="list-disc pl-5">
                        <li>Complete set (Vest & Tie)</li>
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
                        Entertainment & MC :
                      </p>
                      <ul className="list-disc pl-5">
                        <li>3 Musicians + 1 singer</li>
                        <li>Sound system</li>
                        <li>Master of ceremony</li>
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <p className="w-fit bg-[#D1C7BE] font-bold tracking-widest">
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
        </div>
      </div>
    </div>
  );
}
