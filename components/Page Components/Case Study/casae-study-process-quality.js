"use client";

export function ProcessQuality({
  title = "Process & Quality",
  process = [
    {
      title: "Discovery & PoC",
      description:
        "Scope the sources, define the schema, and deliver a working sample with selectors and success metrics.",
      duration: "Week 1",
    },
    {
      title: "Hardening",
      description:
        "Add retries, human-like delays, CAPTCHA strategy, and change-detection to handle layout shifts.",
      duration: "Weeks 2–3",
    },
    {
      title: "Scale-up",
      description:
        "Schedule jobs, add monitoring/alerts, and hand over dashboards with documentation.",
      duration: "Ongoing",
    },
  ],
  quality = [
    "Schema validation & null handling",
    "Dedupe & normalization rules",
    "Rate-limit aware crawling + backoff",
    "Robots.txt & TOS respected",
    "No PII collected or stored",
    "Data retention policy (e.g., 90 days)",
    "Source change detection (DOM hash/diff)",
    "Signed data-sharing agreement",
  ],
}) {
  return (
    <section className="relative overflow-hidden">
      {/* soft backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/60 to-white" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* header */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Execution
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Process timeline (left, spans 2 cols) */}
          <div className="md:col-span-2">
            <ol className="relative space-y-5 before:absolute before:left-[18px] before:top-3 before:h-[calc(100%-12px)] before:w-px before:bg-gradient-to-b before:from-blue-200 before:via-emerald-200 before:to-indigo-200">
              {process.map((s, i) => (
                <li key={`${s.title}-${i}`} className="relative pl-16">
                  {/* step number with gradient ring */}
                  <span
                    className="absolute left-0 top-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900 shadow-sm ring-2 ring-transparent"
                    style={{
                      background:
                        "radial-gradient(closest-side, #ffffff 70%, transparent 71%), conic-gradient(#60a5fa33, #22c55e33, #818cf833, #60a5fa33)",
                    }}
                  >
                    {i + 1}
                  </span>

                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-slate-900">
                        {s.title}
                      </h3>
                      {s.duration && (
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                          {s.duration}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-slate-700">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Quality & Compliance checklist (right) */}
          <aside className="group relative">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-indigo-200/60 opacity-80 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Quality &amp; Compliance
              </h3>

              <ul className="grid gap-2 sm:grid-cols-2">
                {quality.map((q, i) => (
                  <li key={`${q}-${i}`} className="flex items-start gap-2">
                    {/* tiny check icon (no extra deps) */}
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-1 h-4 w-4 flex-none text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                We respect robots.txt & site TOS. We do not collect PII.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
