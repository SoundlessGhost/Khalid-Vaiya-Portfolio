// app/components/AboutUsStats.jsx
// Icons: npm i lucide-react

"use client";

import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle2,
  Users,
  Workflow,
  HardDriveDownload,
  Globe2,
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
      {/* Background: soft blobs + subtle dotted grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-400/15 to-cyan-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/15 to-blue-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header (restyled) */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* soft halo behind title */}
            <span
              aria-hidden="true"
              className="absolute -inset-x-10 -inset-y-3 rounded-full bg-gradient-to-r from-indigo-400/25 via-sky-400/20 to-emerald-400/25 blur-2xl"
            />
            <h2 className="relative text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
              About Us
            </h2>
          </div>

          {/* thin divider */}
          <div className="mx-auto mt-5 h-px w-40 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/20" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
            At Web Data Crawler, we are web crawling experts specializing in
            real- time web crawling and custom web crawlers tailored to your
            needs. Our scalable data solutions help businesses extract, analyze,
            and utilize valuable web data for actionable insights and informed
            decision-making.
          </p>

          <div className="mt-8">
            <Button className={"cursor-pointer"}>
              Contact Sales for Data Enrichment
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 space-y-6">
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
    <article className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/75 p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-gray-900/60">
      {/* Softer accent glow */}
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-2xl bg-gradient-to-br ${accent} blur-2xl opacity-60`}
        aria-hidden="true"
      />

      <div className="relative flex items-center gap-4">
        <div className="rounded-xl border border-black/5 bg-white/85 p-3 shadow-sm dark:border-white/10 dark:bg-gray-800/70">
          <Icon className="h-6 w-6 opacity-90" />
        </div>
        <div>
          <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {value}
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {label}
          </p>
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-gray-300/70 to-transparent dark:via-white/20" />

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
          Verified
        </span>
        <span className="rounded-full border border-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
          Secure
        </span>
        <span className="rounded-full border border-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
          Scalable
        </span>
      </div>

      {/* subtle shimmer on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-x-12 -bottom-1 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-md dark:via-white/20" />
      </div>
    </article>
  );
}
