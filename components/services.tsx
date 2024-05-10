"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Package from "./package";
import Testimonial from "./testimonial";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "WEDDING PLANNER",
      description:
        "Include On The Day Organizer. From A to Z details and stuff. Stress-Free!",
    },
    {
      id: 2,
      title: "WEDDING ORGANIZER",
      description: "Full Day or Half Day Assistance",
    },
    {
      id: 3,
      title: "ONE STOP PACKAGE / CUSTOM PACKAGE",
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
    <>
      <div className="bg-[url('/assets/pattern.png')]">
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
      </div>
      <Package />
      <Testimonial />
    </>
  );
}
