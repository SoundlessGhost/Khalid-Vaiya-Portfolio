// app/components/ScrapingComponents.jsx
// Icons: npm i lucide-react

"use client";

import {
  Bug,
  FileSearch,
  Database,
  FileSpreadsheet,
  UploadCloud,
  Sparkles,
} from "lucide-react";

export default function ScrapingComponents() {
  const items = [
    {
      title: "Crawl",
      Icon: Bug,
      desc: "Our process begins with a powerful web crawler that navigates through websites, following internal and external links to discover all relevant pages. Much like an advanced researcher scanning the web, it systematically identifies and gathers the sources that match your specific requirements, ensuring no valuable information is overlooked.",
    },
    {
      title: "Scrape",
      Icon: FileSearch,
      desc: "Once the target pages are located, our scraping engine intelligently collects the raw data you care about—whether it’s tables, lists, or very specific fields buried deep within the page structure. This eliminates manual copy-paste work and ensures consistent, large-scale collection of content with maximum accuracy and speed.",
    },
    {
      title: "Extract",
      Icon: Database,
      desc: "From the raw HTML, we carefully extract the most meaningful pieces of information such as product details, prices, phone numbers, media metadata, or job descriptions. Every data point is filtered and structured according to your business logic so you receive only what is truly relevant and actionable.",
    },
    {
      title: "Format",
      Icon: FileSpreadsheet,
      desc: "After extraction, the data goes through a refinement stage where it is cleaned, validated, and transformed into structured formats such as CSV, JSON, or Excel. This ensures that the output can be seamlessly integrated into your analytics dashboards, data warehouses, or machine learning pipelines without additional processing.",
    },
    {
      title: "Export",
      Icon: UploadCloud,
      desc: "Finally, the fully processed dataset is delivered to you in the method that best fits your workflow—whether it’s through an API, scheduled webhooks, cloud storage like Amazon S3, or directly into Google Sheets. With monitoring and automated retries built in, you can trust that your data will always arrive on time and ready for use.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* soft radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)]"
      />
      {/* faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.025)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* tiny eyebrow + new badge */}
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            OUR COMPONENTS
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-semibold text-white">
            <Sparkles className="h-3 w-3" /> NEW
          </span>
        </div>

        {/* title */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
          Web Data Scraping <span className="text-emerald-600">Components</span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-300">
          Automation turns scattered pages into structured, usable data. Here’s
          the flow we use from discovery to delivery.
        </p>

        {/* components grid (3 on top, 2 below) */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, Icon, desc }, i) => (
            <article
              key={i}
              className={`group relative rounded-2xl border border-black/5 bg-white/80 p-6 shadow-[0_12px_35px_-18px_rgba(2,6,23,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_-18px_rgba(2,6,23,0.45)] dark:border-white/10 dark:bg-gray-900/60 ${
                i === 2 && "lg:col-start-3"
              } ${i === 3 && "lg:col-start-1"} ${i === 4 && "lg:col-start-2"}`}
            >
              {/* corner glow */}
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-2xl bg-gradient-to-br from-emerald-300/30 to-sky-400/30 blur-2xl opacity-70"
              />
              {/* icon */}
              <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200/60 bg-emerald-50 text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="relative text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
