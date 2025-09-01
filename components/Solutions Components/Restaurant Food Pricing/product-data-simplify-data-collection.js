import React from "react";

export default function SimplifyDataCollection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* kicker */}
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-green-600">
          Hassle-Free Web Scraping Solution
        </p>

        {/* heading */}
        <h1 className="mt-3 text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Simplify E-commerce Data Collection
        </h1>

        {/* sub */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          Choose a partner that turns complex product data into clean, trusted
          information. We deliver reliable quality, sharp product matching, and
          smooth workflows so your e-commerce engine runs faster.
        </p>

        {/* cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* UX card */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-green-50 via-sky-50 to-emerald-50 p-8 shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              {/* lightbulb */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M9 18h6M10 21h4" />
                <path d="M12 2a7 7 0 0 0-4 12c.5.6 1 1.6 1 2.5V17h6v-.5c0-.9.5-1.9 1-2.5A7 7 0 0 0 12 2z" />
              </svg>
            </div>
            <h3 className="mt-5 text-center text-lg font-semibold text-slate-900">
              User Experience
            </h3>
            <p className="mt-2 text-center text-sm leading-6 text-slate-700">
              Clear dashboards, simple exports, and no busywork—your team gets
              ready-to-use data without wrestling with spreadsheets.
            </p>
          </div>

          {/* Tech card */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-rose-50 via-orange-50 to-red-50 p-8 shadow-sm">
            <h3 className="text-center text-lg font-semibold text-slate-900">
              Technology
            </h3>
            <ul className="mx-auto mt-4 max-w-sm list-disc space-y-2 pl-6 text-sm text-slate-700">
              <li>Advanced QA & anomaly checks</li>
              <li>Dynamic validation across sources</li>
              <li>Block-resilient crawling framework</li>
              <li>Configurable, schema-safe outputs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
