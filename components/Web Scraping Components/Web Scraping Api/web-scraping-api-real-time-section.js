// components/RealTimeScrapingSection.jsx
import Link from "next/link";

export default function RealTimeScrapingSection() {
  const items = [
    {
      title: "Web Scraping Services",
      body: "Our web scraping services provide accurate, real-time data extraction tailored to your business needs, empowering you to make informed decisions.",
      href: "/web-scraping-service",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <path
            d="M4 5h16M4 12h16M4 19h10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="19" cy="19" r="1.25" fill="currentColor" />
          <circle cx="19" cy="12" r="1.25" fill="currentColor" />
          <circle cx="19" cy="5" r="1.25" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Enterprise Web Crawling",
      body: "Our Enterprise Web Crawling services deliver large-scale data extraction for businesses seeking real-time insights and competitive intelligence.",
      href: "/enterprise-web-crawling",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <path
            d="M12 3v18M3 12h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4.25" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Mobile App Scraping",
      body: "Our Mobile App Scraping service extracts data from iOS and Android apps, providing real-time app insights for businesses.",
      href: "/mobile-app-scraping",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <rect
            x="7"
            y="2.5"
            width="10"
            height="19"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="18.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* soft gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50"
      />
      {/* floating blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        {/* Eyebrow + Title */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Real-Time{" "}
            <span className="relative whitespace-nowrap">
              <span className="absolute -inset-1 -z-10 rounded-md bg-gradient-to-r from-indigo-200 to-sky-200" />
              <span className="relative">Web Scraping API</span>
            </span>{" "}
            Services for Insights
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-slate-600 md:text-lg">
            Unlock valuable insights with our real-time Web Scraping API
            services, delivering accurate data extraction for informed
            decision-making and competitive advantage.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="group relative rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.15)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(2,6,23,0.25)]"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-indigo-200" />
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.body}
              </p>

              <Link
                href={item.href}
                aria-label={`View more about ${item.title}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300/70 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                View more
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M6 12h12m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </Link>

              {/* subtle index badge for flair */}
              <span className="pointer-events-none absolute right-4 top-4 select-none rounded-full bg-slate-900/5 px-2 py-1 text-xs font-medium text-slate-500">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
