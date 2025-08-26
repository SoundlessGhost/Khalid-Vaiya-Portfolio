"use client";

// components/ChallengesSolved.jsx
export function ChallengesSolved({
  title = "Challenges & How We Solved",
  note = "Real-world blockers we hit and the concrete fixes we shipped.",
  items = [
    {
      issue: "Strict rate limits from multiple hosts",
      fix: "Queue bucketing per-host + exponential backoff with jitter",
      impact: "Error rate ↓ 78%, stable hourly refresh",
      details:
        "Requests are grouped by hostname; each bucket has its own token bucket limiter. Retries follow 2^n+random(ms).",
    },
    {
      issue: "CAPTCHA walls on product pages",
      fix: "Token-based challenge solving (where permitted) + human-like navigation",
      impact: "Block rate ↓ 63%, consistent crawl windows",
      details:
        "We prefetch challenge tokens via server-to-server and use deterministic waits, scrolling and input cadence to reduce flags.",
    },
    {
      issue: "Frequent layout / DOM changes",
      fix: "Semantic locators + CSS/XPath fallback + DOM-hash change alerts",
      impact: "Parser breaks ↓ 70%, faster hotfix turnaround",
      details:
        "Primary selectors use data-* and ARIA roles; fallback chain tries CSS→XPath. A nightly diff alerts us when DOM hash changes.",
    },
  ],
}) {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Learnings
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{note}</p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((c, i) => (
            <li key={`${c.issue}-${i}`} className="group relative">
              {/* gradient edge */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-emerald-200/60 via-blue-200/60 to-indigo-200/60 opacity-80 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-200">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    Issue
                  </span>
                </div>
                <p className="text-slate-800">{c.issue}</p>

                <div className="mt-4 inline-flex max-w-max items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Fix
                </div>
                <p className="mt-2 text-slate-800">{c.fix}</p>

                {c.impact && (
                  <div className="mt-3 inline-flex max-w-max items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700">
                    Impact · {c.impact}
                  </div>
                )}

                {/* collapsible details (pure CSS) */}
                {c.details && (
                  <details className="mt-4 group/open">
                    <summary className="cursor-pointer select-none text-sm text-slate-600 hover:text-slate-800">
                      Technical details
                      <span className="ml-1 transition group-open:rotate-180 inline-block">
                        ▾
                      </span>
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {c.details}
                    </p>
                  </details>
                )}

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Resolved & monitored
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
