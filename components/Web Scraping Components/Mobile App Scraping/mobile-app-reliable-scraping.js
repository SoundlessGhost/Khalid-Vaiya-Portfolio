import React from "react";

export default function HeroReliableMobileScraping() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + subtle grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-sky-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background:radial-gradient(circle_at_1px_1px,#000_1px,transparent_1.2px)] [background-size:22px_22px]"
      />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/25 via-cyan-400/25 to-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-violet-400/20 to-sky-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-12">
        {/* LEFT: Text */}
        <div className="md:col-span-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            Get Reliable
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neutral-500 to-cyan-500" />
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl dark:text-white">
            <span className="block">Reliable Mobile App</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-cyan-600">
              Scraping Services
            </span>
          </h1>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              Whether you require iOS app scraping or Android app scraping, we
              have tailored solutions to meet your specific needs.
            </p>
            <p>
              In the ever-evolving landscape of mobile applications, staying
              ahead of the competition is crucial. Our Mobile App Scraping
              Services provide you with the tools you need to scrape mobile app
              data effectively and efficiently.
            </p>
            <p>
              Using advanced scraping techniques, we enable businesses to
              extract valuable insights from mobile applications, empowering
              data-driven decision-making. With our Mobile App Data Extraction
              capabilities, you can gather essential information about user
              behavior, pricing strategies, and market trends. Additionally, our
              Mobile App Scraping API facilitates seamless data integration into
              your existing systems, making data collection easier than ever.
            </p>
            <p>
              Our team of experts ensures that your data is collected in
              real-time, allowing you to react swiftly to changes in the market.
              Trust our top data scraping company to provide reliable mobile app
              scraping services that enhance your competitive edge and drive
              growth.
            </p>
            <p>
              Contact us today to learn how we can help you scrape mobile app
              data using APIs!
            </p>
          </div>
        </div>

        {/* RIGHT: Illustration */}
        <div className="md:col-span-6">
          <div className="relative mx-auto max-w-xl rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60">
            {/* gradient header */}
            <div className="h-16 rounded-2xl bg-gradient-to-r from-sky-100 to-indigo-100 dark:from-slate-800 dark:to-slate-700" />
            {/* phone + shield illustration */}
            <div className="-mt-12 flex items-end justify-center">
              <svg
                viewBox="0 0 420 280"
                className="h-[260px] w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* bars */}
                <g opacity="0.5">
                  <rect
                    x="10"
                    y="150"
                    width="22"
                    height="50"
                    rx="4"
                    fill="#60A5FA"
                  />
                  <rect
                    x="38"
                    y="135"
                    width="22"
                    height="65"
                    rx="4"
                    fill="#22D3EE"
                  />
                  <rect
                    x="66"
                    y="120"
                    width="22"
                    height="80"
                    rx="4"
                    fill="#34D399"
                  />
                </g>

                {/* phone body */}
                <rect
                  x="160"
                  y="30"
                  width="100"
                  height="190"
                  rx="18"
                  fill="#1D4ED8"
                />
                <rect
                  x="166"
                  y="36"
                  width="88"
                  height="178"
                  rx="14"
                  fill="#0EA5E9"
                />
                {/* login elements */}
                <circle cx="210" cy="68" r="16" fill="#E0F2FE" />
                <rect
                  x="182"
                  y="92"
                  width="56"
                  height="10"
                  rx="5"
                  fill="#E0F2FE"
                />
                <rect
                  x="176"
                  y="112"
                  width="68"
                  height="10"
                  rx="5"
                  fill="#BAE6FD"
                />
                {/* lock */}
                <rect
                  x="190"
                  y="140"
                  width="40"
                  height="38"
                  rx="6"
                  fill="#1E3A8A"
                />
                <rect
                  x="200"
                  y="128"
                  width="20"
                  height="16"
                  rx="8"
                  fill="#1E3A8A"
                />
                <rect
                  x="205"
                  y="150"
                  width="10"
                  height="14"
                  rx="3"
                  fill="#93C5FD"
                />

                {/* shield with check */}
                <path
                  d="M255 95c18 8 35 9 52 0 1 37-10 60-52 78-42-18-53-41-52-78 17 9 34 8 52 0z"
                  fill="#60A5FA"
                />
                <path
                  d="M244 121l12 12 23-23"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* dotted “extract to files” lines */}
                <g
                  stroke="#0EA5E9"
                  strokeWidth="4"
                  strokeDasharray="6 8"
                  opacity="0.7"
                >
                  <line x1="210" y1="220" x2="210" y2="250" />
                  <line x1="260" y1="220" x2="260" y2="250" />
                </g>

                {/* file icons */}
                <g transform="translate(135,248)">
                  <rect width="60" height="28" rx="6" fill="#FDE68A" />
                  <text
                    x="12"
                    y="19"
                    fontFamily="ui-sans-serif,system-ui"
                    fontSize="14"
                    fill="#111827"
                  >
                    TXT
                  </text>
                </g>
                <g transform="translate(210,248)">
                  <rect width="70" height="28" rx="6" fill="#FCA5A5" />
                  <text
                    x="12"
                    y="19"
                    fontFamily="ui-sans-serif,system-ui"
                    fontSize="14"
                    fill="#111827"
                  >
                    CSV
                  </text>
                </g>
                <g transform="translate(295,248)">
                  <rect width="55" height="28" rx="6" fill="#C7D2FE" />
                </g>
              </svg>
            </div>

            {/* bottom accent */}
            <div className="mx-auto mt-3 h-2 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
