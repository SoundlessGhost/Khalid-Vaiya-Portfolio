// components/HowWeDeliverCustomized.jsx
"use client";

export default function HowWeDeliverCustomized() {
  const features = [
    {
      title: "Multi-Source Data Aggregation",
      desc: "We pull from diverse, high-signal sources and reconcile duplicates so you get one clean, consistent view.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 3l8 4-8 4-8-4 8-4z" />
          <path d="M4 11l8 4 8-4" />
          <path d="M4 17l8 4 8-4" />
        </svg>
      ),
    },
    {
      title: "Real-Time Monitoring & Automated Crawls",
      desc: "Schedules tuned to your needs—hourly, daily, or weekly—with smart retries when sites change.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
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
      title: "Advanced QA & Validation",
      desc: "Schema checks, anomaly flags, and sample approvals ensure you trust every field you receive.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 12l2.2 2.2L16 8.4" />
        </svg>
      ),
    },
    {
      title: "Custom Output Formats",
      desc: "CSV, Parquet, JSON Lines, or direct to your warehouse—shaped to match your downstream models.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M4 7h10l6 6v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7z" />
          <path d="M14 7v6h6" />
        </svg>
      ),
    },
    {
      title: "Elastic, Production-Grade Scale",
      desc: "Autoscaling crawlers and queueing keep throughput high while being gentle on target sites.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="5" width="18" height="6" rx="2" />
          <rect x="3" y="13" width="18" height="6" rx="2" />
          <path d="M7 8h10M7 16h6" />
        </svg>
      ),
    },
    {
      title: "Secure Delivery & Compliance",
      desc: "Encrypted transport, access controls, and compliant collection practices baked into the pipeline.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M6 11V8a6 6 0 1 1 12 0v3" />
          <rect x="4" y="11" width="16" height="9" rx="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* soft backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-emerald-50/40 to-white" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Eyebrow + Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Web Scraping
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How We Deliver Customized Data
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Our tailored approach plugs neatly into your stack—prioritizing
            accuracy, consistency, and insights you can act on from day one.
          </p>
        </div>

        {/* Grid of feature cards */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] ring-1 ring-emerald-200/50 transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.1)]"
            >
              {/* rounded green outline */}
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-emerald-300/50" />
              {/* icon + text */}
              <div className="flex items-start gap-4">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {f.desc}
                  </p>
                </div>
              </div>

              {/* subtle hover accent */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
