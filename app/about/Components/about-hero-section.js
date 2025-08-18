"use client";

import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle2,
  Users,
  Workflow,
  HardDriveDownload,
  Globe2,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsStats() {
  const statsTop = [
    {
      value: "+4",
      label: "Years of Experience",
      Icon: Award,
      // lighter, softer wash
      accent: "from-emerald-400/12 to-emerald-600/16 text-emerald-600",
    },
    {
      value: "+1600",
      label: "Successful Projects",
      Icon: CheckCircle2,
      accent: "from-violet-400/12 to-violet-600/16 text-violet-600",
    },
    {
      value: "+100",
      label: "Engineers In-House",
      Icon: Users,
      accent: "from-sky-400/12 to-sky-600/16 text-sky-600",
    },
  ];

  const statsBottom = [
    {
      value: "8.5M",
      label: "web workflows automated weekly",
      Icon: Workflow,
      accent: "from-orange-400/12 to-orange-600/16 text-orange-600",
    },
    {
      value: "250.2 TB",
      label: "Web data transferred weekly",
      Icon: HardDriveDownload,
      accent: "from-rose-400/12 to-rose-600/16 text-rose-600",
    },
    {
      value: "340.9M",
      label: "web pages crawled weekly",
      Icon: Globe2,
      accent: "from-fuchsia-400/12 to-fuchsia-600/16 text-fuchsia-600",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-20">
        {/* Header (restyled) */}
        <section className="relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                About Us
              </h1>
              <p className="mx-auto mt-5 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-gray-300">
                We’re a web-scraping and data-extraction team focused on
                accurate, compliant, and scalable data pipelines. From stealth
                crawlers and proxy rotation to rigorous QA, we turn the public
                web into business-ready datasets you can trust.
              </p>

              {/* trust badges */}
              <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
                <Badge icon={ShieldCheck} text="Compliance-first" />
                <Badge icon={Activity} text="Monitored 24/7" />
                <Badge icon={Sparkles} text="50+ QA checks" />
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(16,185,129,0.9)] transition hover:scale-[1.02] hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800"
                >
                  Talk to a Data Expert
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="opacity-90"
                    fill="none"
                  >
                    <path
                      d="M5 12h14m0 0-6-6m6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statsTop.map(({ value, label, Icon, accent }, idx) => (
              <StatCard
                key={idx}
                value={value}
                label={label}
                Icon={Icon}
                accent={accent}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statsBottom.map(({ value, label, Icon, accent }, idx) => (
              <StatCard
                key={idx}
                value={value}
                label={label}
                Icon={Icon}
                accent={accent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, Icon, accent }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/70">
      {/* Vibrant accent glow */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-70`}
        aria-hidden="true"
      />

      <div className="relative flex items-center gap-4">
        {/* Colorful Icon wrapper */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${accent} shadow-md`}
        >
          <Icon className="h-6 w-6 text-black drop-shadow" />
        </div>

        <div>
          <div className="text-2xl font-extrabold tracking-tight sm:text-3xl text-gray-900 dark:text-white">
            {value}
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {label}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-white/20" />

      {/* Micro badges */}
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300">
          Verified
        </span>
        <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300">
          Secure
        </span>
        <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300">
          Scalable
        </span>
      </div>

      {/* Shimmer hover effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-x-12 -bottom-1 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-lg dark:via-white/20" />
      </div>
    </article>
  );
}

function Badge({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/60 dark:text-gray-200">
      <Icon className="h-4 w-4" />
      {text}
    </span>
  );
}
