"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-20">
      <div className="absolute top-0 z-[-1] flex h-full w-full flex-col items-center justify-center space-y-10 bg-[rgba(0,0,0,0.5)]"></div>
      <Image src="/assets/bg2.jpg" alt="BG" fill className="absolute z-[-2]" />
      <div className="mx-auto max-w-screen-md space-y-20 px-4 py-8 lg:py-16">
        <div>
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-widest text-white">
            CONTACT US
          </h2>
          <p className="mb-8 text-center tracking-widest text-white">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
        <form action="#" className="space-y-8">
          <div>
            <label className="text-sea-salt mb-2 block text-sm font-medium">
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
              className="text-sea-salt mb-2 block text-sm font-medium"
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
              className="text-sea-salt mb-2 block text-sm font-medium"
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
            className="bg-peach-whip rounded px-10 py-3 text-white"
          >
            Send message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
