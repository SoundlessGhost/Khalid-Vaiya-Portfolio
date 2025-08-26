"use client";

export default function ECommerceInventoryHeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      {/* ✅ Soft radial wash (lighter on mobile) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)] opacity-80 sm:opacity-100"
      />
      {/* ✅ Faint grid (responsive density) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(2,6,23,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.025)_1px,transparent_1px)] [background-size:18px_18px] sm:[background-size:24px_24px] lg:[background-size:28px_28px]"
      />
      {/* ✅ Soft blobs (dim on small) */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl sm:h-80 sm:w-80 md:opacity-100 opacity-70" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl sm:h-96 sm:w-96 md:opacity-100 opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 isolation-auto">
        {/* ✅ Responsive wrapper: 1col -> 2col */}
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

            {/* CTAs */}
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 sm:w-auto">
                Start Free Trial
              </button>
              <button className="w-full rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 sm:w-auto">
                <span className="mr-2 inline-block h-0 w-0 border-y-4 border-l-6 border-y-transparent border-l-slate-900" />
                Watch Demo
              </button>
            </div>

            {/* small perks */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600 lg:justify-start">
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Setup in 5 minutes
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
                No credit card required
              </div>
            </div>
          </div>

          {/* Right metrics grid */}
          <div className="order-first w-full lg:order-none">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {/* Card 1 */}
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-base text-indigo-600">
                      📦
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Products Tracked
                    </span>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-600">
                    +12.5%
                  </span>
                </div>
                <div className="mt-3 text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl">
                  127,500
                </div>
              </div>

              {/* Card 2 */}
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-base text-emerald-600">
                      💰
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Price Accuracy
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                    +23.1%
                  </span>
                </div>
                <div className="mt-3 text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl">
                  342%
                </div>
              </div>

              {/* Card 3 */}
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-base text-violet-600">
                      📊
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Conversion Boost
                    </span>
                  </div>
                  <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-semibold text-violet-600">
                    +8.3%
                  </span>
                </div>
                <div className="mt-3 text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl">
                  89.7%
                </div>
              </div>

              {/* Card 4 */}
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-base text-amber-600">
                      ⏱️
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Time Saved
                    </span>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-600">
                    +15.2%
                  </span>
                </div>
                <div className="mt-3 text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl">
                  4.2hrs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
