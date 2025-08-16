"use client";
import {
  Bug,
  Database,
  FileSearch,
  FileSpreadsheet,
  Upload,
} from "lucide-react";
import { useEffect, useRef } from "react";

const items = [
  {
    title: "Crawl",
    text: "Our process begins with a powerful web crawler that navigates through websites, following internal and external links to discover all relevant pages. Much like an advanced researcher scanning the web, it systematically identifies and gathers the sources that match your specific requirements, ensuring no valuable information is overlooked.",
    icon: <Bug size={64} strokeWidth={1.5} className="text-emerald-600" />,
  },
  {
    title: "Scrape",
    text: "Once the target pages are located, our scraping engine intelligently collects the raw data you care about—whether it’s tables, lists, or very specific fields buried deep within the page structure. This eliminates manual copy-paste work and ensures consistent, large-scale collection of content with maximum accuracy and speed.",
    icon: (
      <FileSearch size={64} strokeWidth={1.5} className="text-emerald-600" />
    ),
  },
  {
    title: "Extract",
    text: "From the raw HTML, we carefully extract the most meaningful pieces of information such as product details, prices, phone numbers, media metadata, or job descriptions. Every data point is filtered and structured according to your business logic so you receive only what is truly relevant and actionable.",
    icon: <Database size={64} strokeWidth={1.5} className="text-emerald-600" />,
  },
  {
    title: "Format",
    text: "After extraction, the data goes through a refinement stage where it is cleaned, validated, and transformed into structured formats such as CSV, JSON, or Excel. This ensures that the output can be seamlessly integrated into your analytics dashboards, data warehouses, or machine learning pipelines without additional processing.",
    icon: (
      <FileSpreadsheet
        size={64}
        strokeWidth={1.5}
        className="text-emerald-600"
      />
    ),
  },
  {
    title: "Export",
    text: "Finally, the fully processed dataset is delivered to you in the method that best fits your workflow—whether it’s through an API, scheduled webhooks, cloud storage like Amazon S3, or directly into Google Sheets. With monitoring and automated retries built in, you can trust that your data will always arrive on time and ready for use.",
    icon: <Upload size={64} strokeWidth={1.5} className="text-emerald-600" />,
  },
];

export default function ScrapingComponents() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const rows = el.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    rows.forEach((c, i) => {
      c.style.transitionDelay = `${i * 90}ms`;
      io.observe(c);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-emerald-600/20 blur-3xl"
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2  px-3 py-1 text-xs font-medium uppercase tracking-wide backdrop-blur">
            Our Components
            <span className="animate-pulse rounded-full bg-emerald-600/80 px-2 py-0.5 text-white">
              New
            </span>
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Web Data Scraping{" "}
            <span className="text-emerald-600">Components</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Automation turns scattered pages into structured, usable data.
            Here’s the flow we use from discovery to delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, text, icon }) => (
            <div
              key={title}
              data-reveal
              className="opacity-0 translate-y-6 transition duration-700 ease-out"
            >
              {icon}
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
