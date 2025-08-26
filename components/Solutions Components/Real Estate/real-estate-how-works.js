"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Clock8, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Unified Listings Coverage",
    desc: "We aggregate data from top real-estate portals, broker sites, HOA boards, and public records—normalized into one clean schema. Duplicates and missing fields are auto-handled.",
    accent: "from-emerald-400 to-green-600",
  },
  {
    icon: Clock8,
    title: "Real-Time Price & Inventory Tracking",
    desc: "Run crawls hourly, daily, or weekly to capture price drops, status changes, and new listings in real time. Deliver via Webhooks, CSV, S3, or your database.",
    accent: "from-sky-400 to-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade QA & Compliance",
    desc: "50+ quality checks, PII sanitization, robots/rate-limit respect, audit-ready logs, and retry-safe infrastructure for rock-solid reliability.",
    accent: "from-amber-400 to-orange-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e8f8ec] via-[#e6f2fb] to-[#dff2f1]" />

      {/* subtle floating blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl -z-10"
        initial={{ x: -60, y: -40 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl -z-10"
        initial={{ x: 50, y: 30 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            How We Power Your Real Estate Data
          </h2>
          <p className="mt-3 text-neutral-700 max-w-3xl mx-auto">
            Structured, consistent, and actionable data that integrates smoothly
            into your systems—from collection to validation—fully automated so
            you can focus on decisions, not plumbing.
          </p>
          <motion.div
            initial={{ scaleX: 0, opacity: 0.5 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-4 h-1 w-32 origin-center rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500"
          />
        </motion.div>

        {/* features */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {features.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl bg-white/80 p-7 shadow-sm border border-gray-200 transition hover:shadow-md"
            >
              {/* icon badge with gradient */}
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>

              {/* hover glow ring */}
              <div
                className={`-mt-[3.25rem] ml-[.35rem] h-16 w-16 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition ring-2 ring-offset-2 ring-offset-white ring-transparent bg-gradient-to-br ${accent}`}
              />

              <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-2 text-neutral-700 leading-relaxed">{desc}</p>

              <span
                className={`mt-5 block h-0.5 w-16 rounded-full bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
