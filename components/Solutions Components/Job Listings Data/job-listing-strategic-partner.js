// components/StrategicDataPartner.jsx
"use client";

export default function StrategicDataPartner() {
  const items = [
    {
      title: "Unmatched Quality & Scale",
      desc: "Receive highly accurate, reliable, and clean job openings data, tailored to your needs and delivered at scale.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
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
      title: "Deep Job Market Expertise",
      desc: "Partner with specialists who understand the nuances of job market trends and data privacy.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Seamless Integration",
      desc: "Get job openings data in structured formats (API, JSON, CSV) that plug directly into your ATS, HRIS, or CRM.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="4" width="7" height="16" rx="2" />
          <rect x="14" y="4" width="7" height="16" rx="2" />
          <path d="M10 12h4" />
        </svg>
      ),
    },
    {
      title: "Actionable, Ethical Insights",
      desc: "Transform ethically sourced, contextualized job openings data into strategic action with confidence.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M4 19h16" />
          <path d="M8 19V7" />
          <path d="M12 19V5" />
          <path d="M16 19v-8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-indigo-50" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Your Strategic Data Partner
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            We provide more than just data; we deliver a competitive edge for
            your HR and recruitment strategy.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
          {Array.isArray(items) &&
            items.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {/* Accent bar */}
                <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-indigo-500 to-sky-400" />
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
