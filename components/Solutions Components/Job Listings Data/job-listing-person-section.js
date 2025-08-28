// components/HrPersonasSection.jsx
"use client";
import { useState } from "react";

const personas = [
  {
    key: "ta",
    label: "Talent Acquisition Leaders",
    introStrong: "Talent Acquisition Leaders",
    intro:
      "For leaders focused on attracting and hiring top talent, job market intelligence provides the strategic edge needed to outmaneuver competitors and secure the best candidates, leveraging job market analytics to refine workforce strategy.",
    pain: "Struggling to identify emerging skills and roles, leading to outdated job descriptions and missed talent opportunities in a rapidly evolving labor market.",
    bullets: [
      {
        title: "Strategic Sourcing",
        text: "Identify optimal channels and locations for talent by analyzing job posting distribution and labor market supply/demand.",
      },
      {
        title: "Competitive Offers",
        text: "Benchmark salaries, benefits, and perks from real-time job openings data across industries and geographies to make irresistible offers.",
      },
      {
        title: "Job Posting Optimization",
        text: "Analyze successful job descriptions, keywords, and channels that attract relevant applicants based on job market analytics.",
      },
      {
        title: "Competitor Hiring Insights",
        text: "Understand competitor hiring trends, target roles, and expansion plans by monitoring their job openings data and overall labor market strategy.",
      },
    ],
  },
  {
    key: "wf",
    label: "Workforce Planners & HR Strategists",
    introStrong: "Workforce Planners & HR Strategists",
    intro:
      "Use market signals to forecast demand, align requisitions with budgets, and plan talent pipelines across regions and business units.",
    pain: "Limited visibility into future talent availability and hiring velocity causes reactive planning and higher costs.",
    bullets: [
      {
        title: "Headcount Forecasting",
        text: "Model req volumes with time-to-hire benchmarks by function and location.",
      },
      {
        title: "Location Strategy",
        text: "Compare cities by talent depth, salary bands, and competition intensity.",
      },
      {
        title: "Skills Gap Mapping",
        text: "Spot emerging skill clusters and craft upskilling pathways.",
      },
      {
        title: "Scenario Planning",
        text: "Test best/worst-case hiring scenarios to inform budget decisions.",
      },
    ],
  },
  {
    key: "comp",
    label: "Compensation & Benefits Managers",
    introStrong: "Compensation & Benefits Managers",
    intro:
      "Leverage fresh market data to keep pay ranges competitive, equitable, and aligned to business priorities.",
    pain: "Stale surveys and sparse data make it hard to price roles accurately across levels and geographies.",
    bullets: [
      {
        title: "Live Pay Benchmarks",
        text: "Derive salary bands from continuously updated postings, filtered by industry and region.",
      },
      {
        title: "Benefits Intelligence",
        text: "Track perks and incentives competitors use to win offers.",
      },
      {
        title: "Offer Optimization",
        text: "Balance base, bonus, and equity using market response signals.",
      },
      {
        title: "Pay Transparency Readiness",
        text: "Surface public ranges to maintain compliance and trust.",
      },
    ],
  },
  {
    key: "ops",
    label: "HR Operations & HRIS Managers",
    introStrong: "HR Operations & HRIS Managers",
    intro:
      "Operationalize job market intelligence in your HR stack to improve funnel health, compliance, and reporting.",
    pain: "Fragmented data and manual workflows lead to poor pipeline visibility and SLA slippage.",
    bullets: [
      {
        title: "Pipeline Health",
        text: "Monitor fill-rate and bottlenecks with likelihood-to-hire scores.",
      },
      {
        title: "Channel ROI",
        text: "Attribute conversions to sources and reallocate spend efficiently.",
      },
      {
        title: "Compliance & Audit",
        text: "Maintain consistent titles and ranges for clean analytics.",
      },
      {
        title: "System Integrations",
        text: "Sync insights to ATS/HRIS for automated alerts and dashboards.",
      },
    ],
  },
];

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 flex-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function JobListingPersonasSection() {
  const [active, setActive] = useState(personas[0].key);
  const current = personas.find((p) => p.key === active) || personas[0];

  return (
    <section className="relative overflow-hidden">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-indigo-50" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20">
        {/* Title */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Empowering Key HR Personas with Job Market Intelligence
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Different HR roles leverage job market data in unique ways. Select a
            persona below to understand how PromptCloud’s insights empower their
            strategic decisions and daily operations, focusing on workforce
            strategy, labor market insights, and job market analytics.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-8 flex w-full max-w-5xl flex-wrap items-center justify-center gap-3">
          {personas.map((p) => {
            const isActive = p.key === active;
            return (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={[
                  "relative rounded-xl px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "bg-white text-slate-900 shadow-sm ring-2 ring-indigo-500"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                ].join(" ")}
              >
                {p.label}
                {isActive && (
                  <span className="absolute -bottom-[6px] left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-indigo-500"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Card */}
        <div className="mt-8 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm ring-1 ring-slate-100 backdrop-blur">
          {/* Persona header */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 ring-1 ring-slate-200">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {current.introStrong}
              </h3>
              <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600">
                {current.intro}
              </p>
            </div>
          </div>

          {/* Pain point */}
          <div className="mt-5 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 p-4 ring-1 ring-rose-100">
            <p className="text-sm font-semibold text-slate-900">Pain Point:</p>
            <p className="mt-1 text-sm italic text-rose-700">{current.pain}</p>
          </div>

          {/* Solutions grid */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {current.bullets.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-200">
                  <Check />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {b.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
