"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PagesHeroSection({
  heading,
  title,
  subtitle,
  img_url,
}) {
  return (
    <div className="relative ">
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

        {/* Soft blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-gradient-to-tr from-violet-400/20 to-rose-400/20 blur-3xl" />

        {/* content */}
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
            {/* Left: content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.p
                custom={0}
                variants={fadeUp}
                className="text-emerald-400 pt-20 font-semibold text-xs sm:text-sm uppercase mb-3 tracking-wide"
              >
                {heading}
              </motion.p>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight "
              >
                {title}
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className=" text-base sm:text-lg leading-relaxed mb-8 max-w-prose"
              >
                {subtitle}
              </motion.p>
            </motion.div>

            {/* Right: Illustration Image */}
            <motion.div
              custom={1.5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[520px]">
                <Image
                  src={"/images/Web Extraction/Data extraction-pana.png"}
                  alt="Illustration web scraping Image"
                  width={520}
                  height={420}
                  priority
                  className="h-auto w-full rounded-2xl max-w-full drop-shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

<style jsx global>{`
  @keyframes gridPan {
    to {
      background-position: 40px 0, 0 40px;
    }
  }
  @keyframes sweep {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes floatSlow {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes floatSlower {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .animate-grid-pan {
    animation: gridPan 18s linear infinite;
  }
  .animate-sweep {
    animation: sweep 12s linear infinite;
  }
  .animate-float-slow {
    animation: floatSlow 8s ease-in-out infinite;
  }
  .animate-float-slower {
    animation: floatSlower 11s ease-in-out infinite;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .animate-grid-pan,
    .animate-sweep,
    .animate-float-slow,
    .animate-float-slower {
      animation: none !important;
    }
  }
`}</style>;
