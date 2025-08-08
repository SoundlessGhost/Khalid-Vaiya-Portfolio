// app/components/JobDataProblemsAnimated.jsx  (App Router)
// or: src/components/JobDataProblemsAnimated.jsx (Pages Router)

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

/** tiny scroll-reveal hook (no libs) */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const items = [
  {
    problemTitle: "Limited Access & Blocks",
    problemDesc:
      "Large job boards throttle or block scrapers, leaving you with partial coverage and blind spots.",
    solutionTitle: "Block-resilient Crawling",
    solutionDesc:
      "Rotating identities, smart retries and human-like pacing keep collection stable at scale.",
  },
  {
    problemTitle: "Inconsistent Schemas",
    problemDesc:
      "Every site structures titles, locations and salaries differently—merge conflicts everywhere.",
    solutionTitle: "Dynamic Normalization",
    solutionDesc:
      "On-the-fly mapping + validation turns messy inputs into one clean, analysis-ready schema.",
  },
  {
    problemTitle: "Duplicates & Noise",
    problemDesc:
      "Reposts and stale listings pollute your dataset and break downstream analytics.",
    solutionTitle: "Dedup & Freshness Signals",
    solutionDesc:
      "Fingerprinting, source consensus and recency scoring keep only the most relevant jobs.",
  },
];

export default function JobDataProblemsAnimated() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Solving Job Data Problems
          </h2>
          <p className="mt-3 text-slate-600">
            Get clean, structured, accurate job listings—minus the blockers. Our
            tech + expert oversight delivers exactly the data you need, ready to
            use.
          </p>
        </div>

        <div className="relative mt-14">
          {/* center line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -ml-px hidden h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent md:block"
          />
          <ul className="space-y-12">
            {items.map((it, idx) => (
              <TimelineRow key={idx} item={it} reverse={idx % 2 === 1} />
            ))}
          </ul>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/book-demo"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Book a Demo
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ item, reverse = false }) {
  const rowRef = useReveal();

  return (
    <li
      ref={rowRef}
      className={`grid items-stretch gap-6 md:grid-cols-2 opacity-0 translate-y-6 transition duration-700 ease-out
        ${reverse ? "md:[&>*:first-child]:order-2" : ""} 
        [&&.is-visible]:opacity-100 [&&.is-visible]:translate-y-0`}
    >
      <Card
        title="Problem"
        eyebrow={item.problemTitle}
        body={item.problemDesc}
        tone="warn"
        align={reverse ? "right" : "left"}
      />
      <Card
        title="Solution"
        eyebrow={item.solutionTitle}
        body={item.solutionDesc}
        tone="ok"
        align={reverse ? "left" : "right"}
        animate
      />
    </li>
  );
}

function Card({ title, eyebrow, body, tone, align, animate }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl border p-6 sm:p-7 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition
      ${tone === "ok" ? "border-emerald-200" : "border-rose-200"}
      bg-[radial-gradient(80%_120%_at_0%_0%,rgba(16,185,129,0.06),transparent),radial-gradient(80%_120%_at_100%_100%,rgba(244,63,94,0.06),transparent)]
      hover:-translate-y-0.5
      ${
        animate
          ? "opacity-0 translate-y-4 [&&.is-visible]:opacity-100 [&&.is-visible]:translate-y-0 duration-700"
          : "duration-700"
      }`}
    >
      {/* dot on the connector */}
      <span
        className={`absolute top-1/2 hidden -translate-y-1/2 md:block ${
          align === "left" ? "-right-4" : "-left-4"
        }`}
      >
        <span
          className={`block h-3 w-3 rounded-full ring-4 animate-pulse ${
            tone === "ok"
              ? "bg-emerald-500 ring-emerald-100"
              : "bg-rose-500 ring-rose-100"
          }`}
        />
      </span>

      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </div>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{eyebrow}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
    </div>
  );
}
