import React from "react";

export default function CustomMobileAppScraping() {
  const items = [
    "Extracting data from a wide range of apps",
    "Collecting business information from online directories",
    "Collecting product listings and customer reviews",
    "Collecting property details and potential lead information",
    "Extracting financial data from relevant sources",
    "Extracting travel data from booking and travel apps",
    "Gathering competitor data for strategic insights",
    "Gathering insights from social media posts",
    "Scraping product details and pricing information",
    "Scraping property listings from real estate apps",
    "Web scraping for medical data collection",
  ];

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* floating diamond pattern (left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-[42%] max-w-xl opacity-60 dark:opacity-40"
      >
        <div className="h-full w-full bg-[radial-gradient(theme(colors.indigo.200)_1.5px,transparent_1.5px)] [background-size:44px_44px] [mask-image:linear-gradient(to_right,black,transparent_70%)]" />
      </div>

      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-400/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/15 via-violet-400/15 to-fuchsia-400/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12">
        {/* spacer for pattern on large screens */}
        {/* <div className="hidden md:col-span-4 md:block" /> */}

        {/* content */}
        <div className="md:col-span-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neutral-500 to-cyan-500" />
            Custom
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-cyan-600">
              Mobile App Scraping Solutions
            </span>{" "}
            Tailored for Different Industries
          </h2>

          <p className="mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-300">
            At Web Data Crawler, we provide mobile app scraping solutions
            tailored for various industries, ensuring you get the data you need
            to thrive. Our mobile app scraping services include comprehensive
            data extraction services, leveraging advanced mobile app scraping
            for seamless integration.
          </p>

          <ul className="mt-8 space-y-3">
            {items.map((text) => (
              <li key={text} className="group flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 rotate-45 items-center justify-center rounded-sm bg-gradient-to-br from-neutral-600 to-cyan-600 text-white ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5">
                  {/* diamond bullet */}
                  <svg
                    viewBox="0 0 12 12"
                    className="-rotate-45 h-3 w-3"
                    fill="currentColor"
                  >
                    <rect x="2" y="2" width="8" height="8" rx="1.5" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
