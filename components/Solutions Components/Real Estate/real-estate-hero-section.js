"use client";

import Image from "next/image";

export default function RealEstateHeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      {/* ✅ Soft radial wash (lighter on mobile) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)] opacity-80 sm:opacity-100"
      />
      {/* ✅ Faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(2,6,23,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.025)_1px,transparent_1px)] [background-size:18px_18px] sm:[background-size:24px_24px] lg:[background-size:28px_28px]"
      />
      {/* ✅ Soft blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl sm:h-80 sm:w-80 md:opacity-100 opacity-70" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl sm:h-96 sm:w-96 md:opacity-100 opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 isolation-auto">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <div className="order-1 text-center lg:order-none lg:text-left">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur lg:mx-0">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
              Real-Time Inventory Insights
            </div>

            <h1 className="text-balance text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Smarter E-Commerce Decisions with Web Scraping Data
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              Monitor competitor pricing, track stock availability, and get
              real-time insights into your market. Our web scraping technology
              helps you stay ahead, optimize inventory, and maximize profit with
              accurate, up-to-date data.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 sm:w-auto">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right image instead of metrics grid */}
          <div className="order-first w-full lg:order-none flex justify-center">
            <Image
              src="/ChatGPT Image Aug 26, 2025, 05_30_55 PM.png" // 🔹 Replace with your actual image path
              alt="E-Commerce Inventory Insights"
              width={600}
              height={450}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
