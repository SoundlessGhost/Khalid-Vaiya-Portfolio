"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function DataExtractionService() {
  return (
    <section className="relative overflow-hidden">
      {/* animated gradient blobs (background) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          initial={{ x: -120, y: -60, scale: 0.9 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl"
        />
        <motion.div
          initial={{ x: 80, y: 40, scale: 1 }}
          animate={{ x: 0, y: 0, scale: 1.05 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
        />
      </motion.div>

      <div className="relative bg-gradient-to-b from-[#d9f1fb] to-[#e6f7ed] py-20 px-8 md:px-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* heading */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight"
          >
            The Most Reliable Data Extraction Services in the Market
          </motion.h2>

          {/* animated underline */}
          <motion.div
            variants={item}
            initial={{ scaleX: 0, opacity: 0.4 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 h-1 w-32 origin-center rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500"
          />

          <motion.p
            variants={item}
            className="text-gray-700 text-lg md:text-xl mb-16 leading-relaxed"
          >
            Tired of wasting time on unreliable data? Our data extraction
            services are designed to give you accurate, double-verified results
            you can trust. With secure backups and thorough quality checks, we
            take care of the hard work so you can focus on making smarter
            decisions with confidence.
          </motion.p>

          {/* features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* card 1 */}
            <motion.div
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-xl bg-white/80 p-6 shadow-sm hover:shadow-md border border-gray-200 transition"
            >
              <motion.div
                whileHover={{ rotate: -6, scale: 1.08 }}
                className="text-5xl mb-4 inline-flex"
              >
                📋
              </motion.div>
              <h3 className="font-bold text-xl mb-2">
                Exceptional Quality You Can Count On
              </h3>
              <p className="text-gray-700">
                With over 50 quality checks, we ensure you get accurate,
                reliable, and up-to-date data every single time.
              </p>
              <span className="mt-4 block h-0.5 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>

            {/* card 2 */}
            <motion.div
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-xl bg-white/80 p-6 shadow-sm hover:shadow-md border border-gray-200 transition"
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="text-5xl mb-4 inline-flex"
              >
                🏃
              </motion.div>
              <h3 className="font-bold text-xl mb-2">Stay Ahead of Problems</h3>
              <p className="text-gray-700">
                Our proactive approach tackles potential issues before they even
                happen, guaranteeing smooth, consistent results you can rely on.
              </p>
              <span className="mt-4 block h-0.5 w-14 rounded-full bg-gradient-to-r from-sky-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>

            {/* card 3 */}
            <motion.div
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-xl bg-white/80 p-6 shadow-sm hover:shadow-md border border-gray-200 transition"
            >
              <motion.div
                whileHover={{ rotate: -4, scale: 1.08 }}
                className="text-5xl mb-4 inline-flex"
              >
                📈
              </motion.div>
              <h3 className="font-bold text-xl mb-2">
                Tailored to Fit Your Needs
              </h3>
              <p className="text-gray-700">
                Our{" "}
                <a
                  className="text-blue-600 underline underline-offset-4"
                  href="#"
                >
                  data extraction solution
                </a>{" "}
                is fully customizable and grows with your business, providing
                the flexibility you need to succeed.
              </p>
              <span className="mt-4 block h-0.5 w-14 rounded-full bg-gradient-to-r from-pink-400 to-orange-500 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
