"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 16 },
  },
};

export default function ProblemSolutionSection() {
  const data = [
    {
      problem: {
        title: "Restricted Access & Site Blocks",
        description:
          "Accessing data from some sources is often blocked or throttled.",
      },
      solution: {
        title: "Smart Bypass Strategies",
        description:
          "Our system bypasses complex blocks using intelligent routing and stealth scraping.",
      },
    },
    {
      problem: {
        title: "Inconsistent Data Across Sites",
        description:
          "Same data varies on different platforms — causing reliability issues.",
      },
      solution: {
        title: "Standardized, Unified Data",
        description:
          "We normalize incoming data to ensure accuracy and consistency across platforms.",
      },
    },
    {
      problem: {
        title: "Listing Limits on Job Boards",
        description:
          "Many job platforms cap visible listings per page, limiting access to full datasets.",
      },
      solution: {
        title: "Advanced Crawling to Access All Data",
        description:
          "Our bots bypass page limits to gather complete datasets without triggering restrictions.",
      },
    },
  ];

  return (
    <section className="relative py-20">
      {/* soft bg */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40" />
      {/* floating blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl"
        animate={{ x: [0, -20, 15, 0], y: [0, 25, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Real Problems, Real Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mt-3 "
          >
            We tackle common scraping challenges with powerful, automated tools
            tailored for scale.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-10"
        >
          {data.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={rowVariants}
                className={[
                  "grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]",
                  isEven ? "" : "md:[&>*:first-child]:order-3",
                ].join(" ")}
              >
                {/* Problem */}
                <MotionCard
                  label="Problem"
                  tone="rose"
                  title={item.problem.title}
                  description={item.problem.description}
                />

                {/* Arrow */}
                <ArrowOrb />

                {/* Solution */}
                <MotionCard
                  label="Solution"
                  tone="emerald"
                  title={item.solution.title}
                  description={item.solution.description}
                  delayGlow
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function MotionCard({ label, title, description, tone, delayGlow = false }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-40, 40], [6, -6]);
  const rotateY = useTransform(mx, [-40, 40], [-6, 6]);

  return (
    <motion.div
      variants={cardVariants}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - (r.left + r.width / 2));
        my.set(e.clientY - (r.top + r.height / 2));
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group relative overflow-hidden rounded-2xl border bg-white/80 backdrop-blur border-black/5 shadow-md"
    >
      {/* top gradient bar + glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{
          boxShadow: [
            "0 0 0 rgba(0,0,0,0)",
            tone === "rose"
              ? "0 0 24px rgba(244,63,94,0.25)"
              : "0 0 24px rgba(16,185,129,0.25)",
          ],
        }}
        transition={{
          delay: delayGlow ? 0.25 : 0,
          duration: 0.6,
        }}
        className={[
          "absolute inset-x-0 top-0 h-1",
          tone === "rose"
            ? "bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400"
            : "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400",
        ].join(" ")}
      />
      <div className="p-6">
        <span
          className={[
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1",
            tone === "rose"
              ? "bg-rose-100 text-rose-700 ring-rose-200"
              : "bg-emerald-100 text-emerald-700 ring-emerald-200",
          ].join(" ")}
          style={{ transform: "translateZ(30px)" }}
        >
          {label}
          <span className="opacity-60">•</span>
          Web scraping
        </span>

        <h3
          className="mt-4 text-xl font-bold text-gray-900 leading-snug"
          style={{ transform: "translateZ(24px)" }}
        >
          {title}
        </h3>
        <p
          className="mt-2 text-gray-600"
          style={{ transform: "translateZ(16px)" }}
        >
          {description}
        </p>

        <motion.div
          className={
            tone === "rose"
              ? "mt-5 h-px bg-rose-500/60"
              : "mt-5 h-px bg-emerald-500/60"
          }
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  );
}

function ArrowOrb() {
  return (
    <motion.div
      className="relative mx-auto grid h-16 w-16 place-items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
    >
      {/* pulsing ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-emerald-400/25"
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />
      {/* gradient orb */}
      <motion.div
        className="relative z-10 grid place-items-center h-16 w-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-white"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        >
          <path
            d="M7 12h7m0 0-3-3m3 3-3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
