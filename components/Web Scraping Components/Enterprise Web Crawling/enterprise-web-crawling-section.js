import Link from "next/link";

export default function EnterpriseCrawlingSection() {
  const cards = [
    {
      title: "Web Scraping Services",
      body: "Our web scraping services provide accurate, real-time data extraction tailored to your business needs, empowering you to make informed decisions.",
      href: "/web-scraping-service",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8">
          <path
            d="M4 6h16M4 12h16M4 18h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="19" cy="6" r="1.1" fill="currentColor" />
          <circle cx="19" cy="12" r="1.1" fill="currentColor" />
          <circle cx="19" cy="18" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Web Scraping API",
      body: "Our Web Scraping API enables seamless data extraction from complex websites, ensuring fast, reliable access to valuable information.",
      href: "/web-scraping-api",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M8 10h3M8 14h4M14.5 16V8M14.5 8h2.5M14.5 12h2.5M14.5 16h2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Mobile App Scraping",
      body: "Our Mobile App Scraping service extracts data from iOS and Android apps, providing real-time app insights for businesses.",
      href: "/mobile-app-scraping",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8">
          <rect
            x="7"
            y="2.5"
            width="10"
            height="19"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
          />
          <circle cx="12" cy="18.2" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* background gradient + shapes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-sky-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        {/* Title */}
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Real-Time{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 -z-10 rounded-md bg-gradient-to-r from-indigo-200 to-sky-200" />
              <span className="relative ">Enterprise Web Crawling</span>
            </span>{" "}
            Services for Insights
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-slate-600 md:text-lg">
            Unlock actionable insights with our real-time enterprise web
            crawling services, delivering accurate data to enhance
            decision-making and drive business growth.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="group relative rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-[0_16px_50px_-20px_rgba(2,6,23,0.25)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-24px_rgba(2,6,23,0.35)]"
            >
              {/* top accent */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-indigo-500 to-sky-500 opacity-70" />

              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-600 text-white shadow-sm">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">{c.body}</p>

              <Link
                href={c.href}
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

              {/* index badge */}
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
