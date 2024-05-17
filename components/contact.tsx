"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isOther, setIsOther] = useState("bridestory");

  return (
    <section className="relative py-20">
      <div className="absolute top-0 z-[-1] flex h-full w-full flex-col items-center justify-center space-y-10 bg-[rgba(0,0,0,0.69)]"></div>
      <Image
        src="/assets/bg2.jpg"
        alt="BG"
        fill
        className="absolute z-[-2] object-cover"
      />
      <div className="mx-auto max-w-screen-md space-y-10 px-8 py-8 lg:space-y-20 lg:py-16">
        <div className="space-y-5 md:space-y-10">
          <h2 className="text-center text-2xl font-bold tracking-wider text-white md:text-3xl lg:text-4xl">
            CONTACT US
          </h2>
          <p className="mb-8 text-center text-sm tracking-widest text-white md:text-base">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
        <form action="#" className="space-y-8 font-semplicita">
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded px-3 py-4"
              placeholder="Your Answer"
              required
              name="email"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your Name & Couple
            </label>
            <input
              type="text"
              id="name-couple"
              className="w-full rounded px-3 py-4"
              placeholder="Your Answer"
              required
              name="name-couple"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your Whatsapp Number
            </label>
            <input
              type="text"
              id="whatsapp"
              className="w-full rounded px-3 py-4"
              placeholder="Your Answer"
              required
              name="whatsapp"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your Instagram Account
            </label>
            <input
              type="text"
              id="instagram"
              className="w-full rounded px-3 py-4"
              placeholder="fiorweddingorganizer"
              required
              name="instagram"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Wedding Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full rounded px-3 py-4"
              name="date"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Have you decide your Wedding Venue? Let us know : indoor /
              outdoor, jakarta / bali / other cities *
            </label>
            <input
              type="text"
              id="wedding-venue"
              className="w-full rounded px-3 py-4"
              placeholder="Your answer"
              required
              name="wedding-venue"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your number of Guest(s)
            </label>
            <select name="guests" required className="w-full rounded px-3 py-4">
              <option value="">50-100 Pax</option>
              <option value="">100-200 Pax</option>
              <option value="">200-300 Pax</option>
              <option value="">400-500 Pax</option>
              <option value="">Above 500 Pax</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your type of Wedding Reception dinner
            </label>
            <select name="guests" required className="w-full rounded px-3 py-4">
              <option value="">Seating - Set Menu</option>
              <option value="">Standing Buffet</option>
              <option value="">Seating Buffet</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your Event Type *
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex items-center rounded border bg-white ps-4">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Wedding Holy Matrimony / Akad Only
                </label>
              </div>
              <div className="flex items-center rounded border bg-white ps-4">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Standing Buffet
                </label>
              </div>
              <div className="flex items-center rounded border bg-white ps-4">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Seating Buffet
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              How do you hear about FIOR?
            </label>
            {isOther !== "other" ? (
              <select
                value={isOther}
                onChange={(e) => setIsOther(e.target.value)}
                name="guests"
                required
                className="w-full rounded px-3 py-4"
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
                className="w-full rounded px-3 py-4"
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
    </section>
  );
}
