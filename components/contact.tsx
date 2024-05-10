"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-20">
      <div className="absolute top-0 z-[-1] flex h-full w-full flex-col items-center justify-center space-y-10 bg-[rgba(0,0,0,0.5)]"></div>
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
        <form action="#" className="space-y-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-sea-salt">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded px-3 py-4"
              placeholder="name@fior.com"
              required
            />
          </div>
          <div>
            <label
              // for="subject"
              className="mb-2 block text-sm font-medium text-sea-salt"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full rounded px-3 py-4"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              // for="message"
              className="mb-2 block text-sm font-medium text-sea-salt"
            >
              Your message
            </label>
            <textarea
              id="message"
              // rows="6"
              className="w-full rounded px-3 py-4"
              placeholder="Leave a comment..."
            ></textarea>
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
