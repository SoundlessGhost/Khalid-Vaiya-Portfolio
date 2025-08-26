// app/components/PricingComparisonTable.jsx
import React from "react";

const Check = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    {...props}
    className={`h-5 w-5 ${props.className ?? ""}`}
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Dash = ({ className = "" }) => (
  <span
    aria-hidden="true"
    className={`inline-block h-0.5 w-4 rounded bg-slate-300 ${className}`}
  />
);

// শুধু Starter আর Pro প্ল্যান রাখলাম
const plans = ["Starter", "Pro"];

const sections = [
  {
    title: "Core Features",
    rows: [
      { label: "Basic IP rotation", availability: [true, false] },
      { label: "Residential proxy rotation", availability: [false, true] },
      { label: "1–2 concurrent crawlers", availability: [true, false] },
      { label: "Headless browser + JS rendering", availability: [false, true] },
      {
        label: "HTML fetch + Robots.txt compliance",
        availability: [true, false],
      },
      {
        label: "Scheduler, retries & rate limits",
        availability: [false, true],
      },
      { label: "CSV/JSON export", availability: [true, false] },
      { label: "Webhook/queue-based delivery", availability: [false, true] },
      { label: "Priority support", availability: [false, true] },
    ],
  },
];

export default function PricingComparisonTable() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Compare plans
          </h2>
        </div>

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th scope="col" className="w-2/5 px-6 py-4 font-semibold">
                  Features
                </th>
                {plans.map((p) => (
                  <th
                    key={p}
                    scope="col"
                    className="px-6 py-4 text-center font-semibold"
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {sections.map((section) => (
                <React.Fragment key={section.title}>
                  <tr className="bg-slate-100/60">
                    <td
                      colSpan={plans.length + 1}
                      className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      {section.title}
                    </td>
                  </tr>

                  {section.rows.map((row) => (
                    <tr key={row.label} className="hover:bg-slate-50/60">
                      <th
                        scope="row"
                        className="px-6 py-4 text-slate-700 font-medium"
                      >
                        {row.label}
                      </th>
                      {row.availability.map((has, idx) => (
                        <td
                          key={`${row.label}-${plans[idx]}`}
                          className="px-6 py-4"
                        >
                          <div className="flex items-center justify-center">
                            {has ? (
                              <Check className="text-emerald-600" />
                            ) : (
                              <Dash />
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked list */}
        <div className="mt-8 grid gap-4 md:hidden">
          {plans.map((plan, planIdx) => (
            <div
              key={plan}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">{plan}</h3>

              {sections.map((section) => (
                <div key={section.title} className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {section.title}
                  </div>
                  <ul className="mt-2 divide-y divide-slate-100">
                    {section.rows.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between py-3 text-sm"
                      >
                        <span className="text-slate-700">{row.label}</span>
                        {row.availability[planIdx] ? (
                          <Check className="shrink-0 text-emerald-600" />
                        ) : (
                          <Dash />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
