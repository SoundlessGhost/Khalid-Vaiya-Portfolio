import React from "react";

const features = [
  {
    title: "Stock status",
    desc: "Track inventory health across stores and marketplaces without manual checks.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 3h18v4H3z" />
        <path d="M5 7v14h14V7" />
        <path d="M9 11h6M9 15h6M9 19h6" />
      </svg>
    ),
  },
  {
    title: "SKUs",
    desc: "Normalize SKUs and variants so products line up cleanly across platforms.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Product descriptions",
    desc: "Capture rich details—specs, attributes, USPs—to enrich your catalog.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M7 8h10M7 12h10M7 16h6" />
      </svg>
    ),
  },
  {
    title: "Competitor insights",
    desc: "Compare pricing, availability and listings to spot gaps and win the shelf.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 20V10M10 20V6M16 20V14M22 20H2" />
      </svg>
    ),
  },
];

export default function ProductDataCollection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Heading + copy */}
          <div>
            <p className="text-sm font-semibold text-green-600 tracking-wide uppercase">
              Comprehensive Data Collection
            </p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Gather a Broad Spectrum of Product Data
            </h2>
            <p className="mt-6 max-w-xl text-slate-600">
              Our collection pipeline streamlines product indexing and
              competitive matching, giving you a precise, unified view across
              channels. With dependable cross-referencing and clean structure,
              you’ll unlock the insights needed to optimize your catalog and
              stay ahead.
            </p>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-green-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-50 text-green-600">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
