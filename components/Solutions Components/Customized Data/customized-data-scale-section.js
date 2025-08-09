"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Cog, Timer, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <Cog className="h-8 w-8" />,
    title: "Tailored Data Solutions",
    desc: "Data shaped to your exact specs and delivered in formats that snap into your existing stack.",
  },
  {
    icon: <Timer className="h-8 w-8" />,
    title: "Fast Turnaround & Responsiveness",
    desc: "Issues handled quickly and drops shipped on schedule—every single cycle.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Proactive Monitoring & Detail",
    desc: "Automated checks + human QA so what you get is clean, consistent, and immediately usable.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Problem-Solving",
    desc: "We don’t just send data—we detect risks early and fix the root cause.",
  },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export default function DataScaleSection() {
  return (
    <section className="relative overflow-hidden bg-emerald-50/70 dark:bg-slate-900/40 py-16 sm:py-20">
      {/* soft background aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_0%_0%,rgba(16,185,129,0.18),transparent)]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2"
      >
        {/* Left: headline + floating thumbs */}
        <motion.div variants={card} className="relative">
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Million+ <br /> Data Points <br /> Processed Everyday
          </h2>
          <p className="mt-5 max-w-md text-slate-700 dark:text-slate-300">
            We collect and refine millions of purpose-built data points from
            many sources, giving your team the coverage and freshness needed to
            stay ahead.
          </p>

          {/* hero mock/floating images — replace with your assets in /public */}
          <div className="mt-8 relative">
            <div className="relative h-44 w-80 rounded-xl border border-emerald-300/60 bg-white shadow-md overflow-hidden">
              <Image
                src="/Screenshort.png"
                alt="dashboard"
                fill
                className="object-cover"
              />
            </div>

            {/* floating chips */}
            <motion.div
              className="absolute -left-6 -top-6 h-20 w-32 overflow-hidden rounded-xl border bg-white shadow"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <Image
                src="/christin-hume-mfB1B1s4sMc-unsplash.jpg"
                alt="chart"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute -right-5 top-4 h-24 w-36 overflow-hidden rounded-xl border bg-white shadow"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <Image
                src="/christin-hume-mfB1B1s4sMc-unsplash.jpg"
                alt="card"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute left-10 -bottom-10 h-24 w-24 overflow-hidden rounded-xl border bg-white shadow"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              }}
            >
              <Image
                src="/mock/thumb.png"
                alt="thumb"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: feature cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={card}
              whileHover={{
                y: -6,
                boxShadow: "0 14px 30px -12px rgba(16,185,129,0.35)",
              }}
              className="group rounded-2xl border border-emerald-400/60 bg-white p-6 shadow-sm transition dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="text-emerald-600 dark:text-emerald-400">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {f.desc}
                  </p>
                </div>
              </div>

              {/* animated border highlight */}
              <span className="mt-5 block h-px origin-left scale-x-0 bg-emerald-500/70 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
