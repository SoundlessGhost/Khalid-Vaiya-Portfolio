"use client";

import { ClipboardList, Rocket, BarChart3 } from "lucide-react";

export default function DataExtractionSection() {
  const features = [
    {
      title: "Exceptional Quality You Can Count On",
      desc: "With over 50 quality checks, we ensure you get accurate, reliable, and up-to-date data every single time.",
      Icon: ClipboardList,
      accent: "from-amber-300/50 to-orange-500/40",
      color: "text-amber-500",
    },
    {
      title: "Stay Ahead of Problems",
      desc: "Our proactive approach tackles potential issues before they even happen, guaranteeing smooth, consistent results you can rely on.",
      Icon: Rocket,
      accent: "from-violet-300/50 to-indigo-500/40",
      color: "text-indigo-500",
    },
    {
      title: "Tailored to Fit Your Needs",
      desc: "Our data extraction solution is fully customizable and grows with your business, providing the flexibility you need to succeed.",
      Icon: BarChart3,
      accent: "from-sky-300/50 to-cyan-500/40",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* background grid + blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.6))] dark:[background:linear-gradient(180deg,rgba(17,24,39,0.6),rgba(17,24,39,0.7))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,transparent_0,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm md:text-4xl dark:text-white">
            The Most Reliable Data Extraction Services in the Market
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
            Tired of wasting time on unreliable data? Our data extraction
            services are designed to give you accurate, double-verified results
            you can trust. With secure backups and thorough quality checks, we
            take care of the hard work so you can focus on making smarter
            decisions with confidence.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon, accent, color }, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] dark:border-white/5 dark:bg-gray-900/60"
            >
              {/* corner gradient ribbon */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 rounded-2xl bg-gradient-to-br ${accent} blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />

              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-black/5 bg-white/70 p-3 shadow-sm dark:border-white/10 dark:bg-gray-800/60">
                  <Icon className={`h-6 w-6 ${color}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {desc}
                  </p>
                </div>
              </div>

              {/* bottom accent line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-300/70 to-transparent dark:via-white/20" />
              {/* micro detail */}
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center rounded-full border border-gray-200 px-2 py-0.5 dark:border-white/10">
                  Verified
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 px-2 py-0.5 dark:border-white/10">
                  Secure
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 px-2 py-0.5 dark:border-white/10">
                  Scalable
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
