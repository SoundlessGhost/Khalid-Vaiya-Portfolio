"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Focused Competitor Targeting",
    blurb:
      "We don’t scrape the web blindly. Together we shortlist the exact rival domains, categories, and product sets that matter for your pricing strategy.",
    extra:
      "By narrowing down the scope, you save bandwidth and cost while getting only the competitive insights that really drive revenue decisions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.95-5.95-2.12 2.12M8.17 15.83l-2.12 2.12m0-10.6 2.12 2.12m7.66 7.66 2.12 2.12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3.25"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise-grade Price Crawler",
    blurb:
      "Our crawler handles pagination, variants, and sitemaps—collecting accurate pricing data with retry logic and smart throttling.",
    extra:
      "This ensures no product or price point is skipped, even across thousands of pages, while maintaining server-friendly crawling.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M3 8h18M6 5h12M4 8v8a3 3 0 003 3h10a3 3 0 003-3V8"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M8 12h8M8 16h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Multi-stage Validation & QA",
    blurb:
      "We apply deduplication, schema checks, and anomaly detection so you can trust every single record we deliver.",
    extra:
      "If data looks inconsistent or out of trend, we flag and fix it before it ever hits your system, keeping dashboards reliable.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M12 3l8 4v6c0 5-8 8-8 8s-8-3-8-8V7l8-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Plug-and-play Integration",
    blurb:
      "CSV, APIs, cloud warehouses—we adapt to your pipelines so data slides into dashboards and pricing tools seamlessly.",
    extra:
      "Whether you use Snowflake, BigQuery, or S3, our payloads fit neatly into your analytics stack without re-engineering.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M7 7h10v10H7zM3 12h4m10 0h4M12 3v4m0 10v4"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Privacy-first & Compliant",
    blurb:
      "We respect robots.txt, apply regional controls, and keep you aligned with evolving data and privacy standards.",
    extra:
      "Compliance isn’t an afterthought: from GDPR to local site policies, we design with legal and ethical standards built in.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9.5 12l1.8 1.8L15 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Proven at Scale",
    blurb:
      "From niche catalogs to massive datasets, we deliver dependable feeds that help protect margins and outpace competitors.",
    extra:
      "Our infrastructure is tested on millions of SKUs daily, so whether you run 1k or 1M products, performance stays consistent.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M4 17V7m6 10V5m6 12V9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M3 18h18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function FastScrapingDifferentiators() {
  const observerRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  const setRootRef = useCallback((node) => {
    if (!node) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries, io) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("inview");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }

    const io = observerRef.current;
    const cards = node.querySelectorAll("[data-card]");
    cards.forEach((el) => io.observe(el));
  }, []);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return (
    <section
      ref={setRootRef}
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
      aria-labelledby="fastscraping-diff-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-400/20 via-lime-300/10 to-teal-400/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-wider text-emerald-300">
            <span className="inline-block h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
            fastscraping advantage
          </span>
          <h2
            id="fastscraping-diff-title"
            className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            What makes{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-lime-200 to-teal-300 bg-clip-text text-transparent">
              FastScraping
            </span>{" "}
            different
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300/90">
            Precision pricing data, delivered at scale—so your team can move
            faster and make confident decisions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const isOpen = expanded[i];
            return (
              <article
                key={it.title}
                data-card
                style={{ transitionDelay: `${i * 70}ms` }}
                className="group relative translate-y-6 opacity-0 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur-md ring-1 ring-transparent transition-all duration-500 ease-out will-change-transform hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
                    {it.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold leading-snug text-white">
                    {it.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
                  {it.blurb}
                </p>

                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
                    {it.extra}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))
                  }
                  className="cursor-pointer mt-5 text-[13px] font-medium text-emerald-300 hover:text-white transition-colors"
                >
                  {isOpen ? "Show less" : "Read more"}
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .inview {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
