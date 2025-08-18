// app/components/StartPipeline.jsx
// Optional: npm i lucide-react  (only for the arrow icon on the CTA)

"use client";

import { ArrowRight } from "lucide-react";
import TermsThenFormInDialog from "../TermsGatedForm";

export default function StartPipeline() {
  const steps = [
    {
      num: 1,
      title: "Define Your Data",
      desc: "Targets, fields & frequency (daily/weekly/monthly/one-time).",
    },
    {
      num: 2,
      title: "We Set Up & Bypass",
      desc: "Stealth scrapers, proxy rotation, QA sample within 24–72h.",
    },
    {
      num: 3,
      title: "Get Data On-Demand",
      desc: "API/CSV/S3/Webhook—alerts & dashboard included.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,transparent_0,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            Start Your Data Pipeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-300">
            Experience how Fastscraping data collection solutions drive results.
            Start your free trial or book a call today—maximize efficiency and
            results without delay.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* connector line (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-10 hidden h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-500/60 to-emerald-400 md:block"
          />

          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <article
                key={i}
                className="group relative rounded-2xl border border-black/5 bg-white/70 p-7 text-center shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-gray-900/60"
              >
                {/* Number badge */}
                <div className="mx-auto -mt-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_12px_30px_-10px_rgba(16,185,129,0.9)] ring-4 ring-white/80 dark:ring-gray-900">
                  <span className="text-xl font-extrabold">{s.num}</span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 md:text-lg dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {s.desc}
                </p>

                {/* bottom divider + badges */}
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-gray-300/70 to-transparent dark:via-white/20" />
                <div className="mt-3 flex justify-center gap-2 text-[10px] text-gray-500 dark:text-gray-400">
                  <span className="rounded-full border border-gray-200 px-2 py-0.5 dark:border-white/10">
                    Fast
                  </span>
                  <span className="rounded-full border border-gray-200 px-2 py-0.5 dark:border-white/10">
                    Reliable
                  </span>
                  <span className="rounded-full border border-gray-200 px-2 py-0.5 dark:border-white/10">
                    Scalable
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <TermsThenFormInDialog btn_name={"Book a Demo - Get a Free Sample"} />
        </div>
      </div>
    </section>
  );
}
