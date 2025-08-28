// components/RealEstateHeroSection.jsx
"use client";

export default function RealEstateHeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      {/* Background washes & grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)] opacity-80 sm:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(2,6,23,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.025)_1px,transparent_1px)] [background-size:18px_18px] sm:[background-size:24px_24px] lg:[background-size:28px_28px]"
      />
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl sm:h-96 sm:w-96" />

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

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 sm:w-auto">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right: Replaced image with a live-looking dashboard card */}
          <div className="order-first w-full lg:order-none">
            <div className="mx-auto max-w-xl rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(2,6,23,0.12)]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Data Snapshot
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    REAL ESTATE DATA
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600 ring-1 ring-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live
                </div>
              </div>

              {/* Grid of small visual modules */}
              <div className="mt-5 grid grid-cols-2 gap-4">
                {/* Line Chart Card */}
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="text-[11px] font-semibold text-slate-700">
                    MEDIAN SALE PRICE
                  </p>
                  <div className="mt-2 h-24 rounded-md bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:12px_12px]">
                    {/* simple line made of dots */}
                    <div className="relative h-full w-full">
                      <div className="absolute bottom-3 left-2 h-2 w-2 rounded-full bg-sky-600" />
                      <div className="absolute bottom-6 left-10 h-2 w-2 rounded-full bg-sky-600" />
                      <div className="absolute bottom-10 left-20 h-2 w-2 rounded-full bg-sky-600" />
                      <div className="absolute bottom-12 left-32 h-2 w-2 rounded-full bg-sky-600" />
                      <div className="absolute bottom-16 left-44 h-2 w-2 rounded-full bg-sky-600" />
                      <div className="absolute bottom-[76px] left-56 h-2 w-2 rounded-full bg-sky-600" />
                      {/* connecting line */}
                      <svg viewBox="0 0 240 100" className="absolute inset-0">
                        <polyline
                          points="10,70 50,55 90,40 130,28 170,16 210,8"
                          fill="none"
                          stroke="rgb(2,132,199)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bar Chart Card */}
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="text-[11px] font-semibold text-slate-700">
                    HOMES FOR SALE
                  </p>
                  <div className="mt-2 grid h-24 grid-cols-10 items-end gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        // randomish heights for visual interest
                        key={i}
                        className={`mx-auto w-2 rounded-sm ${
                          i % 2 === 0 ? "bg-teal-500" : "bg-orange-400"
                        }`}
                        style={{ height: `${20 + (i % 5) * 12}px` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Pie Chart Card (fake with conic gradient) */}
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="text-[11px] font-semibold text-slate-700">
                    PROPERTY TYPE
                  </p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="relative h-20 w-20 rounded-full bg-[conic-gradient(#2563eb_0_55%,#10b981_55%_75%,#f59e0b_75%_90%,#94a3b8_90%_100%)]">
                      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                    </div>
                    <ul className="space-y-1 text-[11px]">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-sm bg-blue-600" />{" "}
                        Single-Family 55%
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-sm bg-emerald-500" />{" "}
                        Townhouse 20%
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-sm bg-amber-500" />{" "}
                        Condo 15%
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-sm bg-slate-400" />{" "}
                        Other 10%
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Horizontal bars / KPI Card */}
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="text-[11px] font-semibold text-slate-700">
                    SALES BY PRICE
                  </p>
                  <div className="mt-2 space-y-2">
                    {[
                      { label: "Townhouse", v: 20, c: "bg-sky-500" },
                      { label: "Condo", v: 15, c: "bg-slate-400" },
                      { label: "Single-Family", v: 55, c: "bg-emerald-500" },
                      { label: "Luxury", v: 5, c: "bg-indigo-500" },
                    ].map((b, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>{b.label}</span>
                          <span>{b.v}%</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded bg-slate-100">
                          <div
                            className={`h-2 rounded ${b.c}`}
                            style={{ width: `${b.v}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <p className="text-[11px] text-slate-500">
                  Updated{" "}
                  <span className="font-medium text-slate-700">just now</span>
                </p>
                <div className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[10px] text-slate-600 ring-1 ring-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Healthy market activity
                </div>
              </div>
            </div>
          </div>
          {/* End dashboard card */}
        </div>
      </div>
    </section>
  );
}
