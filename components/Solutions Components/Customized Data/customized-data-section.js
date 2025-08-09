"use client";

import {
  Layers,
  Clock,
  ClipboardCheck,
  FileSpreadsheet,
  Server,
  ShieldCheck,
} from "lucide-react";
import React from "react";

const items = [
  {
    title: "Multi-Source Data Aggregation",
    desc: "We pull from diverse, high-signal sources and reconcile duplicates so you get one clean, consistent view.",
    icon: <Layers className="h-8 w-8" />,
  },
  {
    title: "Real-Time Monitoring & Automated Crawls",
    desc: "Schedules tuned to your needs—hourly, daily, or weekly—with smart retries when sites change.",
    icon: <Clock className="h-8 w-8" />,
  },
  {
    title: "Advanced QA & Validation",
    desc: "Schema checks, anomaly flags, and sample approvals ensure you trust every field you receive.",
    icon: <ClipboardCheck className="h-8 w-8" />,
  },
  {
    title: "Custom Output Formats",
    desc: "CSV, Parquet, JSON Lines, or direct to your warehouse—shaped to match your downstream models.",
    icon: <FileSpreadsheet className="h-8 w-8" />,
  },
  {
    title: "Elastic, Production-Grade Scale",
    desc: "Autoscaling crawlers and queueing keep throughput high while being gentle on target sites.",
    icon: <Server className="h-8 w-8" />,
  },
  {
    title: "Secure Delivery & Compliance",
    desc: "Encrypted transport, access controls, and compliant collection practices baked into the pipeline.",
    icon: <ShieldCheck className="h-8 w-8" />,
  },
];

export default function CustomizedDataSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* top nav spacing helper if you use fixed navbar */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-emerald-600">
            Web Scraping
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How We Deliver Customized Data
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-300">
            Our tailored approach plugs neatly into your stack—prioritizing
            accuracy, consistency, and insights you can act on from day one.
          </p>
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-emerald-400/60 p-6 sm:p-8 bg-white dark:bg-slate-900
                         shadow-[0_1px_0_0_rgba(16,185,129,0.15)] hover:shadow-lg transition
                         hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="text-emerald-600 dark:text-emerald-400">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {it.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
