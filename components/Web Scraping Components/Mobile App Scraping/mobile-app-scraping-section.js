import Link from "next/link";
import React from "react";

export default function MobileAppScrapingSection() {
  const cards = [
    {
      title: "Web Scraping Services",
      desc: "Our web scraping services provide accurate, real-time data extraction tailored to your business needs, empowering you to make informed decisions.",
      href: "/web-scraping-service",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <path
            d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
            className="fill-current opacity-20"
          />
          <path
            d="M12 7a5 5 0 015 5v2a5 5 0 11-10 0v-2a5 5 0 015-5zm0 3a2 2 0 00-2 2v2a2 2 0 104 0v-2a2 2 0 00-2-2z"
            className="fill-current"
          />
        </svg>
      ),
    },
    {
      title: "Enterprise Web Crawling",
      desc: "Our Enterprise Web Crawling services deliver large-scale data extraction for businesses seeking real-time insights and competitive intelligence.",
      href: "/enterprise-web-crawling",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <path
            d="M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            className="fill-current opacity-20"
          />
          <path
            d="M7 3h10v4H7zM6 10h4v4H6zM14 10h4v4h-4zM10 16h4v4h-4z"
            className="fill-current"
          />
        </svg>
      ),
    },
    {
      title: "Web Scraping API",
      desc: "Our Web Scraping API enables seamless data extraction from complex websites, ensuring fast, reliable access to valuable information.",
      href: "/web-scraping-api",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <path d="M4 6h16v12H4z" className="fill-current opacity-20" />
          <path
            d="M7 9h5v2H7V9zm0 4h7v2H7v-2zm10-8v2M7 5v2M17 5v2"
            className="stroke-current"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="18" cy="18" r="3" className="fill-current" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

      {/* Soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-gradient-to-tr from-violet-400/20 to-rose-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
          Real-Time
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl dark:text-white">
          <span className="relative">
            <span>Mobile App Scraping</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500/20 via-cyan-400/20 to-emerald-400/20 blur-sm" />
          </span>{" "}
          Services for Insights
        </h2>

        <p className="mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-300">
          Discover real-time mobile app scraping services that provide
          actionable insights to enhance your business strategies and drive
          success.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, desc, icon, href }, i) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm ring-1 ring-transparent backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-indigo-200 dark:border-slate-800/70 dark:bg-slate-900/60 dark:hover:ring-indigo-600/30"
            >
              {/* Accent gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 text-indigo-600 dark:text-indigo-400">
                {icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {desc}
              </p>

              <Link
                href={href}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View More
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M6 12h12m0 0-4-4m4 4-4 4" strokeLinecap="round" />
                </svg>
              </Link>

              {/* Subtle corner glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-2 h-10 w-10 rounded-full bg-cyan-400/20 blur-xl"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
