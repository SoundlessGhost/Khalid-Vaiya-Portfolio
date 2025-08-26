// components/DataExtractionSimple.jsx
"use client";

export default function DataExtractionSimple() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-emerald-50" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* heading + lead */}
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Smarter Web Scraping for Data
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">Driven Growth</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
            Our web scraping solution gives you fresh, accurate, and
            ready-to-use information—straight from any website. From every
            industry to market intelligence and beyond, we scrape, clean, and
            deliver highly reliable data that helps you make confident, informed
            business moves, not guesses.
          </p>
        </header>

        {/* features (no cards) */}
        <div className="mt-10 grid gap-y-10 gap-x-8 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          <Feature
            icon={<ShieldCheckIcon className="h-6 w-6 sm:h-7 sm:w-7" />}
            title={
              <>
                Proven Quality <br className="hidden sm:block" /> That Delivers
              </>
            }
            text="Backed by multiple layers of rigorous validation, our data extraction pipeline ensures unmatched precision, reliability, and timeliness—so you operate with clean, trustworthy information that drives long-term success."
          />

          <Feature
            icon={<TrendUpIcon className="h-6 w-6 sm:h-7 sm:w-7" />}
            title={
              <>
                Stay One Step
                <br className="hidden sm:block" /> Ahead
              </>
            }
            text="Our infrastructure tracks site changes, adapts automatically, and resolves issues before they break—keeping your feeds reliable and high-quality without interruptions."
          />

          <Feature
            icon={<PuzzleIcon className="h-6 w-6 sm:h-7 sm:w-7" />}
            title={
              <>
                Customized Solutions for
                <br className="hidden sm:block" /> Your Business
              </>
            }
            text="From startup insights to enterprise-scale pipelines, tailor the schema, frequency, and delivery to fit your stack. Scalable, accurate, and ready to plug in."
          />
        </div>
      </div>
    </section>
  );
}

/* --- subcomponent (list item without card) --- */
function Feature({ icon, title, text }) {
  return (
    <div className="relative">
      {/* badge */}
      <div
        aria-hidden="true"
        className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 text-white ring-1 ring-white/60 shadow-md sm:h-12 sm:w-12"
      >
        {icon}
      </div>

      {/* title */}
      <h3 className="text-[18px] font-bold leading-snug text-slate-900 sm:text-[20px] md:text-[22px]">
        {title}
      </h3>

      {/* connector line */}
      <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 sm:w-24" />

      {/* description */}
      <p className="mt-3 text-[15px] leading-7 text-slate-700 sm:text-[16px] md:text-[17px]">
        {text}
      </p>
    </div>
  );
}

/* --- tiny inline icons (no external libs) --- */
function ShieldCheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function TrendUpIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}
function PuzzleIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 3h6v4a2 2 0 0 0 2 2h4v6h-4a2 2 0 0 0-2 2v4H9v-4a2 2 0 0 0-2-2H3V9h4a2 2 0 0 0 2-2V3z" />
    </svg>
  );
}
