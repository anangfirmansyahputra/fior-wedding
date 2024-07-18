"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [isOther, setIsOther] = useState("bridestory");
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const handleEventChange = (event: any) => {
    const value = event.target.value;
    // @ts-ignore
    setSelectedEvents((prevSelectedEvents) =>
      // @ts-ignore
      prevSelectedEvents.includes(value)
        ? prevSelectedEvents.filter((v) => v !== value)
        : [...prevSelectedEvents, value],
    );
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setisLoading(true);

    const eventsString = selectedEvents.join(", ");

    console.log(eventsString);

    const formData = {
      email: event.target.email.value,
      name: event.target["name-couple"].value,
      whatsapp: event.target.whatsapp.value,
      instagram: event.target.instagram.value,
      date: event.target.date.value,
      weddingVenue: event.target["wedding-venue"].value,
      guests: event.target.guests.value,
      eventType: eventsString,
      hearAbout: isOther === "other" ? event.target.other.value : isOther,
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setisLoading(false);

    if (response.ok) {
      // alert("Email sent successfully");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Send email success",
      });
    } else {
      // alert("Error sending email");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Send email failed",
      });
    }
  };

  return (
    <div className="bg-white pb-[100px]">
      <section className="relative z-[1] flex h-[90vh] items-center justify-center sm:h-[80vh]">
        <div className="absolute top-0 z-[-1] flex h-full w-full flex-col items-center justify-center space-y-10 bg-[rgba(0,0,0,0.69)]"></div>
        <Image
          src="/assets/revision/cd823eb36dadb93283a25c5f8a8f226a.jpeg"
          alt="BG"
          fill
          className="absolute z-[-2] object-cover object-center"
        />
        <div className="relative mb-[20vh] lg:mb-[10vh]">
          <div className="mx-auto w-fit">
            <p className="cardo-regular text-[24px] text-white md:text-4xl">
              CONTACT US
            </p>
            <div className="mx-auto mb-[30px] mt-[10px] h-[3px] w-[50%] bg-[#DBBEB8]" />
          </div>
          <p className="max-w-[700px] text-center text-white md:text-[20px]">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="relative z-[1] mt-[-25vh] w-full grid-cols-1 gap-5 space-y-5 bg-[#DBBEB8] px-5 py-[57px] font-semplicita md:mx-auto md:grid md:max-w-[1145px] md:grid-cols-2 md:space-y-0 md:px-[80] lg:px-[113px]"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
            placeholder="Your Answer"
            required
            name="email"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Your Name & Couple
          </label>
          <input
            type="text"
            id="name-couple"
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
            placeholder="Your Answer"
            required
            name="name-couple"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Your Whatsapp Number
          </label>
          <input
            type="text"
            id="whatsapp"
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
            placeholder="Your Answer"
            required
            name="whatsapp"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Your Instagram Account
          </label>
          <input
            type="text"
            id="instagram"
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
            placeholder="fiorweddingorganizer"
            required
            name="instagram"
          />
        </div>
        <div className="col-span-2">
          <label className="mb-2 block text-sm font-medium text-white">
            Wedding Date
          </label>
          <input
            type="date"
            id="date"
            required
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
            name="date"
          />
        </div>
        <div className="col-span-2">
          <label className="mb-2 block text-sm font-medium text-white">
            Have you decide your Wedding Venue? Let us know : indoor / outdoor,
            jakarta / bali / other cities *
          </label>
          <input
            type="text"
            id="wedding-venue"
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
            placeholder="Your answer"
            required
            name="wedding-venue"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Your number of Guest(s)
          </label>
          <select
            name="guests"
            required
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
          >
            <option value="">Your number of Guest(s)</option>
            <option value="">50-100 Pax</option>
            <option value="">100-200 Pax</option>
            <option value="">200-300 Pax</option>
            <option value="">400-500 Pax</option>
            <option value="">Above 500 Pax</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Your type of Wedding Reception dinner
          </label>
          <select
            name="guests"
            required
            className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
          >
            <option value="">Your type of wedding reception dinner</option>
            <option value="Seating - Set Menu">Seating - Set Menu</option>
            <option value="Standing Buffet">Standing Buffet</option>
            <option value="Seating Buffet">Seating Buffet</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="mb-2 block text-sm font-medium text-white">
            Your Event Type *
          </label>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex items-center rounded border bg-[#DBBEB8] ps-4">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value="Wedding Holy Matrimony / Akad Only"
                name="event-type"
                onChange={handleEventChange}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="bordered-checkbox-1"
                className="ms-2 w-full py-4 text-sm font-medium text-white"
              >
                Wedding Holy Matrimony / Akad Only
              </label>
            </div>
            <div className="flex items-center rounded border bg-[#DBBEB8] ps-4">
              <input
                id="bordered-checkbox-2"
                type="checkbox"
                value="Standing Buffet"
                name="event-type"
                onChange={handleEventChange}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="bordered-checkbox-2"
                className="ms-2 w-full py-4 text-sm font-medium text-white"
              >
                Standing Buffet
              </label>
            </div>
            <div className="flex items-center rounded border bg-[#DBBEB8] ps-4">
              <input
                id="bordered-checkbox-3"
                type="checkbox"
                value="Seating Buffet"
                name="event-type"
                onChange={handleEventChange}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="bordered-checkbox-3"
                className="ms-2 w-full py-4 text-sm font-medium text-white"
              >
                Seating Buffet
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <label className="mb-2 block text-sm font-medium text-white">
            How do you hear about FIOR?
          </label>
          {isOther !== "other" ? (
            <select
              value={isOther}
              onChange={(e) => setIsOther(e.target.value)}
              name="guests"
              required
              className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
            >
              <option value="">How do you hear about FIOR</option>
              <option value="Bridestory">Bridestory</option>
              <option value="Instagram">Instagram</option>
              <option value="Friends">Friends</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <input
              type="text"
              id="instagram"
              className="w-full rounded border border-white bg-[#DBBEB8] px-3 py-4 text-white placeholder:text-white"
              placeholder="Your Answer"
              required
              name="instagram"
            />
          )}
        </div>

        <motion.button
          disabled={isLoading}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          type="submit"
          className={cn(
            "w-fit rounded bg-white px-12 py-5 text-[#DBBEB8]",
            isLoading && "bg-gray-200 text-black",
          )}
        >
          Send message
        </motion.button>
      </form>
    </div>
  );
}
