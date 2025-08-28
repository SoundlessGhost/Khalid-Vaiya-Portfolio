// components/JobHeroSection.jsx
"use client";

export default function JobListingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-sky-50">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-200/40 to-sky-100 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-200/30 to-indigo-100 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:flex lg:items-center lg:justify-between lg:gap-16">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Unlock Strategic HR with Job Market Intelligence
          </h1>
          <p className="mt-6 text-lg leading-7 text-slate-600">
            Transform raw web data into actionable intelligence. Empower your
            team to understand job market trends, optimize job postings, and
            make evidence-based decisions that drive growth.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02] hover:shadow-xl"
            >
              Talk to a Data Expert
            </a>
            <a
              href="#"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:text-slate-900"
            >
              See Sample Data
            </a>
          </div>

          {/* Ratings */}
          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-1">
              <span className="text-red-500 font-semibold">G2</span>
              <span className="ml-1 text-yellow-500">★★★★★</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-600 font-semibold">Capterra</span>
              <span className="ml-1 text-yellow-500">★★★★☆</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green-600 font-semibold">Trustpilot</span>
              <span className="ml-1 text-green-500">★★★★☆</span>
            </div>
          </div>
        </div>

        {/* Right Decorative Illustration (Optional) */}
        <div className="mt-12 hidden flex-1 items-center justify-center lg:mt-0 lg:flex">
          <div className="relative">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200/40 to-sky-100 blur-2xl"></div>
            <div className="relative rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                Real-time Insights
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Get instant access to job market data that helps you stay ahead
                in talent acquisition.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                  AI
                </span>
                <span className="text-sm text-slate-700">
                  Powered by Data Intelligence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
