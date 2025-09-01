import React from "react";

export default function CompareScrapingExperience() {
  const bad = [
    "Messy, inconsistent data",
    "Missed deadlines",
    "Slow or unclear updates",
    "Little to no support",
    "Inexperienced execution",
  ];

  const good = [
    "Accurate product matching",
    "Hands-off for your team",
    "On-time delivery",
    "Fast, transparent communication",
    "Built for enterprise needs",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* kicker */}
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-green-600">
          Let us handle the heavy lifting
        </p>

        {/* heading */}
        <h2 className="mt-3 text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          Transform your e-commerce with a reliable web scraping partner
        </h2>

        {/* subheading */}
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Don’t let complex product data slow you down—get clean, trusted data
          ready for growth.
        </p>

        {/* cards */}
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Left: usual experience */}
          <div className="rounded-2xl border border-green-300 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              {/* broken chain icon */}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M7.5 7.5 6 6a4 4 0 0 1 5.7-5.7l1.5 1.5" />
                  <path d="M16.5 16.5 18 18a4 4 0 0 1-5.7 5.7L10.8 22" />
                  <path d="M8 16l8-8" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Usual Web Scraping Experience
              </h3>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {bad.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: enterprise experience */}
          <div className="rounded-2xl border border-green-300 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              {/* thumbs up icon */}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M14 9V4a2 2 0 0 0-2-2l-2 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8.5a3.5 3.5 0 0 0 3.4-2.6l1.1-4.1A3 3 0 0 0 16 9h-2z" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Enterprise Web Scraping with Fastscraping
              </h3>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {good.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
