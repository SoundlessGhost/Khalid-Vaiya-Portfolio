// components/HRStrategySection.jsx
"use client";
import { useState } from "react";

const tabs = [
  { key: "intelligence", label: "Job Market Intelligence" },
  { key: "workforce", label: "Workforce Planning" },
  { key: "operations", label: "Operational Efficiency" },
];

const content = {
  intelligence: [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      title: "Job Market Trend Analysis",
      desc: "Analyze millions of job postings to identify emerging roles, in-demand skills, and geographical hiring hotspots.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 1v22M7 5h10M5 9h14M4 13h16M5 17h14M7 21h10"></path>
          <path d="M16 7a4 4 0 11-8 0" />
        </svg>
      ),
      title: "Competitive Salary Benchmarking",
      desc: "Extract real-time salary and benefits data from job postings to optimize offers and ensure compensation is competitive.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="4" y="3" width="16" height="18" rx="2"></rect>
          <line x1="8" y1="7" x2="16" y2="7"></line>
          <line x1="8" y1="11" x2="16" y2="11"></line>
          <line x1="8" y1="15" x2="13" y2="15"></line>
        </svg>
      ),
      title: "Job Posting Optimization",
      desc: "Understand which job description elements, keywords, and channels attract the most relevant applicants based on market data.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <polyline points="3 17 9 11 13 15 21 7"></polyline>
          <polyline points="21 7 15 7 15 13"></polyline>
        </svg>
      ),
      title: "Competitor Hiring Insights",
      desc: "Monitor competitor job openings to understand their growth areas, skill focus, and recruitment strategies.",
    },
  ],
  workforce: [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 6v12M6 12h12"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
      ),
      title: "Headcount Planning",
      desc: "Align hiring pipelines with projected demand using job market signals and regional talent availability.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 4h18M3 10h18M3 16h18"></path>
          <circle cx="7" cy="10" r="2"></circle>
        </svg>
      ),
      title: "Skills Gap Mapping",
      desc: "Discover skill adjacencies and training priorities by comparing your roles to live market requirements.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 3v18M3 12h18"></path>
          <rect x="4" y="4" width="7" height="7" rx="1"></rect>
        </svg>
      ),
      title: "Location Strategy",
      desc: "Compare cities by talent depth, salary bands, and hiring velocity to choose optimal locations for roles.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M8 21v-8h8v8"></path>
          <path d="M12 3v10"></path>
          <path d="M3 21h18"></path>
        </svg>
      ),
      title: "Role Architecture",
      desc: "Standardize titles and levels using market-validated benchmarks to improve mobility and transparency.",
    },
  ],
  operations: [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M4 7h16M4 12h16M4 17h10"></path>
        </svg>
      ),
      title: "Pipeline Efficiency",
      desc: "Prioritize requisitions and sourcing channels with data-backed likelihood-to-fill and time-to-hire indicators.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
      title: "Time-to-Hire Reduction",
      desc: "Forecast bottlenecks and automate alerts so teams can act before SLAs slip.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      ),
      title: "Channel ROI",
      desc: "Measure conversion and cost-per-hire by source to reallocate budget efficiently.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="4" width="18" height="14" rx="2"></rect>
          <path d="M7 20h10"></path>
        </svg>
      ),
      title: "Reporting & Compliance",
      desc: "Centralize and audit hiring signals to support governance and leadership reporting.",
    },
  ],
};

export default function HRStrategySection() {
  const [active, setActive] = useState("intelligence");

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-indigo-50" />
      <div className="pointer-events-none absolute -top-28 -right-28 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-200/60 to-sky-100 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Empower Your Entire HR Strategy
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Explore how our job openings data solutions deliver tangible
            benefits across critical HR functions. Select a category to discover
            specific use cases.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-8 flex w-full max-w-3xl flex-wrap items-center justify-center gap-3">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={[
                  "group relative rounded-full px-5 py-2.5 text-sm font-medium transition",
                  isActive
                    ? "bg-slate-900 text-white shadow-[0_8px_30px_rgb(2,6,23,0.25)]"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300",
                ].join(" ")}
              >
                <span className="relative z-10">{t.label}</span>
                {isActive && (
                  <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-cyan-400/20 blur-sm"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {content[active].map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl hover:ring-indigo-100"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 ring-1 ring-inset ring-slate-200">
                <span className="text-slate-700">{item.icon}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>

              {/* Decorative badge */}
              <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                {idx === 0
                  ? "Insights"
                  : idx === 1
                  ? "Benchmarks"
                  : idx === 2
                  ? "Optimization"
                  : "Analytics"}
              </div>

              {/* Bottom glow */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 rounded-b-2xl bg-gradient-to-t from-indigo-50/80 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
