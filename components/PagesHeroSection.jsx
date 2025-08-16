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
  cta,
  img_url,
}) {
  return (
    <div className="relative">
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        {/* base bg */}
        <div className="absolute inset-0 -z-20 bg-[#08111a]" />

        {/* animated grid */}
        <div
          className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000_40%,transparent_80%)] animate-grid-pan"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,198,130,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(12,198,130,.12) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />

        {/* teal + violet glow orbs */}
        <div
          className="pointer-events-none absolute -left-24 top-32 size-[480px] md:size-[620px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,.25),transparent_70%)] blur-2xl animate-float-slow"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 -top-10 size-[400px] md:size-[520px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.22),transparent_70%)] blur-2xl animate-float-slower"
          aria-hidden
        />

        {/* spotlight sweep */}
        <div
          className="absolute left-1/2 top-1/2 -z-10 size-[900px] md:size-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40"
          aria-hidden
        >
          <div className="size-full rounded-full [background:conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,.25)_60deg,transparent_120deg)] blur-2xl animate-sweep" />
        </div>

        {/* thin bottom border */}
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
          aria-hidden
        />

        {/* content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
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
                className="text-emerald-400 font-semibold text-xs sm:text-sm uppercase mb-3 tracking-wide"
              >
                {heading}
              </motion.p>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight text-white"
              >
                {title}
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-prose"
              >
                {subtitle}
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                  aria-label={cta}
                >
                  {cta}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Illustration Image */}
            <motion.div
              custom={1.5}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[520px]">
                <Image
                  src={img_url}
                  alt="Illustration web scraping Image"
                  width={520}
                  height={420}
                  priority
                  className="h-auto w-full max-w-full drop-shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
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
