"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isOther, setIsOther] = useState("bridestory");

  return (
    <div className="bg-white pb-[100px]">
      <section className="relative z-[1] flex h-[80vh] items-center justify-center">
        <div className="absolute top-0 z-[-1] flex h-full w-full flex-col items-center justify-center space-y-10 bg-[rgba(0,0,0,0.69)]"></div>
        <Image
          src="/assets/revision/cd823eb36dadb93283a25c5f8a8f226a.jpeg"
          alt="BG"
          fill
          className="absolute z-[-2] object-cover object-center"
        />
        <div className="relative mb-[10vh]">
          <div className="mx-auto w-fit">
            <p className="cardo-regular text-4xl text-white">CONTACT US</p>
            <div className="mx-auto mb-[30px] mt-[10px] h-[3px] w-[50%] bg-[#DBBEB8]" />
          </div>
          <p className="max-w-[700px] text-center text-[20px] text-white">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
      </section>

      <form
        action="#"
        className="relative z-[1] mx-auto mt-[-25vh] grid w-full max-w-[1145px] grid-cols-2 gap-5 bg-[#DBBEB8] px-[113px] py-[57px] font-semplicita"
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
            <option value="">Seating - Set Menu</option>
            <option value="">Standing Buffet</option>
            <option value="">Seating Buffet</option>
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
                value=""
                name="bordered-checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label className="ms-2 w-full py-4 text-sm font-medium text-white">
                Wedding Holy Matrimony / Akad Only
              </label>
            </div>
            <div className="flex items-center rounded border bg-[#DBBEB8] ps-4">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label className="ms-2 w-full py-4 text-sm font-medium text-white">
                Standing Buffet
              </label>
            </div>
            <div className="flex items-center rounded border bg-[#DBBEB8] ps-4">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label className="ms-2 w-full py-4 text-sm font-medium text-white">
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
              <option value="bridestory">Bridestory</option>
              <option value="instagram">Instagram</option>
              <option value="friends">Friends</option>
              <option value="other">Other</option>
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
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          type="submit"
          className="rounded bg-rose-tan px-10 py-3 text-white"
        >
          Send message
        </motion.button>
      </form>
    </div>
  );
}
