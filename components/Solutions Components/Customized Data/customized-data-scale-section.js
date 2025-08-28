// components/MillionDataSection.jsx
"use client";

export default function MillionDataSection() {
  const features = [
    {
      title: "Tailored Data Solutions",
      desc: "Data shaped to your exact specs and delivered in formats that snap into your existing stack.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7h10l6 6v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7z" />
          <path d="M14 7v6h6" />
        </svg>
      ),
    },
    {
      title: "Fast Turnaround & Responsiveness",
      desc: "Issues handled quickly and drops shipped on schedule—every single cycle.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Proactive Monitoring & Detail",
      desc: "Automated checks + human QA so what you get is clean, consistent, and immediately usable.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 12l2.2 2.2L16 8.4" />
        </svg>
      ),
    },
    {
      title: "Problem-Solving",
      desc: "We don’t just send data—we detect risks early and fix the root cause.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M13 2l-2 6h6l-6 14 2-8H7l6-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* soft mint backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_0%_0%,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
        {/* LEFT: headline + copy + decorative code tiles */}
        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Million+ <br />
            Data Points <br />
            Processed Everyday
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            We collect and refine millions of purpose-built data points from
            many sources, giving your team the coverage and freshness needed to
            stay ahead.
          </p>

          {/* Decorative tiles (no external images) */}
          <div className="mt-8 flex flex-wrap items-end gap-4">
            {/* terminal card */}
            <div className="w-[340px] max-w-full rounded-2xl border border-slate-800/10 bg-slate-900 text-slate-100 shadow-xl shadow-emerald-900/10">
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 font-medium">crawler.py</span>
              </div>
              <pre className="whitespace-pre-wrap p-4 text-[12px] leading-5 text-emerald-200">
                {`import requests
from bs4 import BeautifulSoup

url = "https://example.com"
resp = requests.get(url)
soup = BeautifulSoup(resp.text, "html.parser")
prices = [p.text for p in soup.select(".price")]`}
              </pre>
            </div>

            {/* small device chip */}
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <span className="text-sm">⌨️</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Parser Status
                  </p>
                  <p className="text-xs text-emerald-600">Healthy</p>
                </div>
              </div>
            </div>

            {/* mini stat tile */}
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
              <p className="text-[11px] text-slate-500">Events/min</p>
              <div className="mt-1 text-lg font-bold text-slate-900">8,560</div>
              <div className="mt-2 h-1.5 w-40 rounded bg-slate-100">
                <div className="h-1.5 w-3/4 rounded bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-emerald-300/60 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(2,6,23,0.10)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {f.desc}
                  </p>
                </div>
              </div>
              <span className="mt-4 block h-[3px] w-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
