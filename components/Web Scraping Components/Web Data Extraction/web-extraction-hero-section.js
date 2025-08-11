"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const WebExtractionHeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 -mt-12">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />
      <motion.div
        aria-hidden
        className="absolute top-[-5rem] left-[-5rem] h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-6rem] right-[-6rem] h-96 w-96 rounded-full bg-rose-300/20 blur-3xl"
        animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-9xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-red-500 font-semibold text-sm uppercase mb-3 tracking-wide"
          >
            End-to-end URL extraction designed for speed, precision, and scale
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Unlock High-Value Insights with Advanced complexity and Web Data
            Extraction
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-gray-700 text-lg mb-8"
          >
            Web data extraction can look simple—until you need to do it at
            scale. With ever-changing site structures, maintaining accuracy
            demands intelligent parsing, continuous updates, and tailored
            solutions. Our platform simplifies this complexity, giving you the
            clean, structured data you need—fast.
          </motion.p>

          <motion.div custom={3} variants={fadeUp}>
            <button className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-emerald-700 focus:outline-none">
              Get Started
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Illustration Image */}
        <motion.div
          custom={1.5}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src="/images/Web Extraction/Data extraction-pana.png"
              alt="Web scraping illustration"
              width={420}
              height={320}
              className="w-full max-w-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebExtractionHeroSection;
