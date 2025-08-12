"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-sky-50 to-white" />
      {/* floating blobs */}
      <motion.div
        className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
        initial={{ y: 0, x: 0 }}
        animate={{ y: [-6, 10, -6], x: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl"
        initial={{ y: 0, x: 0 }}
        animate={{ y: [8, -10, 8], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-9xl px-6 py-20 md:py-28">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Text */}
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-3 font-semibold tracking-wide text-emerald-600"
            >
              About Fastscraping
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
            >
              Delivering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
                Custom Data Solutions
              </span>{" "}
              for 20+ Years
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 leading-relaxed text-slate-600"
            >
              We’re a Toronto-based web scraping & data services team building
              fully managed pipelines for enterprises. Since 2005 we’ve helped
              companies in diverse industries turn messy public data into clean,
              ready-to-use datasets—delivered the way your stack prefers.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="mt-6 grid gap-3 text-slate-700"
            >
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-emerald-600"
                  >
                    <path d="M9.5 17.2 4.8 12.5l1.4-1.4 3.3 3.3 8.3-8.3 1.4 1.4z" />
                  </svg>
                </span>
                <span>
                  <strong>End-to-end scraping:</strong> source discovery,
                  scheduling, QA—handled by our team.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-sky-600">
                    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm1 5v5.59l3.3 3.3-1.4 1.41L11 13V7h2z" />
                  </svg>
                </span>
                <span>
                  <strong>Near real-time delivery:</strong> API, file drops, or
                  your warehouse—your call.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-indigo-600"
                  >
                    <path d="M4 6h16v12H4zM6 8v8h12V8z" />
                  </svg>
                </span>
                <span>
                  <strong>Custom dashboards:</strong> KPIs that speak your
                  language—no noise, just signal.
                </span>
              </li>
            </motion.ul>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
              >
                Explore Solutions
              </a>
            </motion.div>
          </div>

          {/* Image block */}
          <motion.div
            variants={fadeUp}
            className="relative"
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* blob-clipped image (no <svg> wrapper) */}
            <div className="mx-auto w-full max-w-[520px] drop-shadow-xl">
              <div className="relative aspect-square overflow-hidden rounded-[40%_40%_40%_60%/60%_40%_60%_40%]">
                <Image
                  src="/images/Expertise/team-photo.jpg"
                  alt="Team collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* orbiting accent (pure HTML, no svg) */}
            <motion.span
              className="absolute right-6 top-6 h-3 w-3 rounded-full bg-emerald-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "140px 140px" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
