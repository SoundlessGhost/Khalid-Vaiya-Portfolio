import Image from "next/image";
import React from "react";

export default function HeroProductScraping() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:py-24">
        {/* Left: copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
            Product Data Tailored to Your Enterprise
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl">
            Overcome E commerce Challenges with
            <span className="block">Effortless Web Scraping</span>
            <span className="block">for Product Data</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Managing product data across channels is messy and time-hungry. We
            remove the grind—collecting accurate details, mapping variants, and
            resolving mismatches—so your team can focus on growth instead of
            fixing spreadsheets. With our scraping workflow, you get consistent,
            high-quality data ready for precise product matching.
          </p>
        </div>

        {/* Right: blob image */}
        <div className="relative">
            <div className="relative w-full h-[400px] rounded-[40%_40%_40%_60%/60%_40%_60%_40%] overflow-hidden shadow-md">
              <Image
                src="/images/Expertise/team-photo.jpg"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
