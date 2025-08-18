// components/ScrapingHero.jsx
import Link from "next/link";

export default function ScrapingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50"
      />
      {/* blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        {/* LEFT: copy */}
        <div>
          <h1 className="text-balance text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Get Reliable{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 -z-10 rounded-md bg-gradient-to-r from-indigo-200 to-sky-200" />
              <span className="relative">Web Scraping API</span>
            </span>{" "}
            <span className="">Services</span> from a Top Data Scraping Company
          </h1>

          <div className="mt-6 space-y-5 text-slate-700 md:text-lg">
            <p>
              At Web Data Crawler, we specialize in delivering high-quality data
              through our robust Web Scraper API.
            </p>
            <p>
              In today’s data-driven world, having access to reliable
              information is essential for businesses seeking a competitive
              edge. Our Web Scraping API services provide the perfect solution
              for extracting data efficiently and effectively.
            </p>
            <p>
              Our advanced Web Scraping Tools enable seamless integration,
              allowing you to automate data extraction processes. With our Web
              Crawler API, you can gather data from multiple sources in real
              time, ensuring you stay updated with market trends. Our automated
              web scraping services are designed to be user-friendly, allowing
              you to focus on analysis rather than data collection.
            </p>
            <p>
              Moreover, our Web Scraping API Python support ensures
              compatibility with various programming languages, making it easy
              to implement into your existing systems. Trust us to provide the
              insights you need to drive informed decision-making and enhance
              your business strategies.
            </p>
            <p>
              Partner with us today to harness the power of data through our
              reliable web scraping API services!
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-slate-300/70 px-4 py-2 text-xs font-medium text-slate-600">
              Real-time • Secure • Scalable
            </span>
          </div>
        </div>

        {/* RIGHT: custom illustration card */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.25)]">
            {/* device header dots */}
            <div className="mb-4 flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            </div>

            {/* big API chip */}
            <div className="mx-auto grid w-full max-w-[260px] place-items-center rounded-2xl bg-gradient-to-b from-indigo-600 to-sky-600 p-5 text-white">
              <svg viewBox="0 0 48 48" className="h-12 w-12">
                <rect
                  x="8"
                  y="8"
                  width="32"
                  height="32"
                  rx="6"
                  fill="currentColor"
                  opacity="0.15"
                />
                <path
                  d="M14 30l4-12 4 12m-1.2-3.8h-5.6M25 18v12m0-6h3.5c1.4 0 2.5-1.1 2.5-2.5S29.9 19 28.5 19H25"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-2 text-sm font-bold tracking-wider">API</p>
            </div>

            {/* pipes */}
            <div className="mt-6 space-y-4">
              {["HTML", "JSON", "CSV", "TXT"].map((t) => (
                <div
                  key={t}
                  className="flex items-center justify-between rounded-xl border border-slate-200/80 p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path
                          d="M4 7h16M4 12h16M4 17h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {t}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">export</span>
                </div>
              ))}
            </div>

            {/* dotted flows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 top-10 hidden h-[85%] w-24 md:block"
            >
              <div className="mx-auto h-full w-px border-dotted border-slate-300 [border-right-width:2px]" />
            </div>
          </div>

          {/* glow */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-200/40 to-sky-200/40 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
