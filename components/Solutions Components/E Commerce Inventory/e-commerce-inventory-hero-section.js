// components/EcomInventoryHero.jsx
"use client";

export default function EcomInventoryHero() {
  const metrics = [
    {
      label: "Products Tracked",
      value: "127,500",
      delta: "+12.5%",
      deltaTone: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      iconBg: "bg-amber-50 text-amber-600 ring-amber-200",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M3 7l9-4 9 4-9 4-9-4Z" />
          <path d="M3 12l9 4 9-4" />
          <path d="M3 17l9 4 9-4" />
        </svg>
      ),
    },
    {
      label: "Price Accuracy",
      value: "342%",
      delta: "+23.1%",
      deltaTone: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      iconBg: "bg-emerald-50 text-emerald-600 ring-emerald-200",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 12l6 6L20 6" />
        </svg>
      ),
    },
    {
      label: "Conversion Boost",
      value: "89.7%",
      delta: "+8.3%",
      deltaTone: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      iconBg: "bg-sky-50 text-sky-600 ring-sky-200",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 3 3 5-7" />
        </svg>
      ),
    },
    {
      label: "Time Saved",
      value: "4.2hrs",
      delta: "+15.2%",
      deltaTone: "bg-orange-50 text-orange-700 ring-orange-200",
      iconBg: "bg-yellow-50 text-yellow-600 ring-yellow-200",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden pb-14 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      {/* background: soft grid + corner wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-[28rem] w-[28rem] rounded-full bg-emerald-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
              Real-Time Inventory Insights
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-5xl">
              Smarter E-Commerce
              <br />
              Decisions with
              <br />
              Web Scraping Data
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Monitor competitor pricing, track stock availability, and get
              real-time insights into your market. Our web scraping technology
              helps you stay ahead, optimize inventory, and maximize profit with
              accurate, up-to-date data.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800">
                Start Free Trial
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-slate-300">
                  ▶
                </span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: metric cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-white/80 p-5 shadow-[0_10px_30px_rgba(2,6,23,0.08)] ring-1 ring-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(2,6,23,0.12)]"
              >
                {/* header */}
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${m.iconBg}`}
                  >
                    {m.icon}
                    <span className="text-slate-700">{m.label}</span>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${m.deltaTone}`}
                  >
                    {m.delta}
                  </span>
                </div>
                {/* value */}
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                  {m.value}
                </div>

                {/* subtle decorative bottom line */}
                <span className="absolute bottom-0 left-0 h-1 w-0 rounded-br-3xl rounded-tl-3xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 transition-all duration-300 hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
