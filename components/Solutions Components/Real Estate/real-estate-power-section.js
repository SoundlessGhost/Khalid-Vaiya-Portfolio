// components/RealEstatePowerSection.jsx
"use client";

export default function RealEstatePowerSection() {
  const features = [
    {
      title: "Unified Listings Coverage",
      desc: "We aggregate data from top real-estate portals, broker sites, HOA boards, and public records—normalized into one clean schema. Duplicates and missing fields are auto-handled.",
      iconBg: "from-emerald-400 to-green-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M7 9h10M7 13h6M7 17h4" />
        </svg>
      ),
    },
    {
      title: "Real-Time Price & Inventory Tracking",
      desc: "Run crawls hourly, daily, or weekly to capture price drops, status changes, and new listings in real time. Deliver via Webhooks, CSV, S3, or your database.",
      iconBg: "from-sky-400 to-indigo-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Enterprise-grade QA & Compliance",
      desc: "50+ quality checks, PII sanitization, robots/rate-limit respect, audit-ready logs, and retry-safe infrastructure for rock-solid reliability.",
      iconBg: "from-amber-400 to-orange-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" />
          <path d="M9.5 12.5l1.7 1.7 3.3-3.4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* soft glassy gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_-10%_0%,#d1fae5_10%,transparent_40%),radial-gradient(1000px_600px_at_110%_100%,#bfdbfe_10%,transparent_40%)]" />
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How We Power Your Real Estate Data
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Structured, consistent, and actionable data that integrates smoothly
            into your systems—from collection to validation—fully automated so
            you can focus on decisions, not plumbing.
          </p>
          {/* fancy tiny underline */}
          <span className="mx-auto mt-5 block h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-500" />
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={i}
              className="group relative rounded-3xl bg-white/80 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] ring-1 ring-slate-100 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(2,6,23,0.12)]"
            >
              {/* soft border highlight */}
              <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <div className="flex items-start gap-3">
                <div
                  className={`mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${f.iconBg} text-white shadow-lg shadow-black/5`}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {f.desc}
                  </p>
                </div>
              </div>
              {/* bottom accent on hover */}
              <span className="absolute bottom-0 left-0 h-1 w-0 rounded-br-3xl rounded-tl-3xl bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
