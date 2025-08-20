// components/DataExtractionSimple.jsx

export default function DataExtractionSimple() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-emerald-50" />

      <div className="mx-auto max-w-[1400px]  py-16 md:py-24">
        {/* heading + lead */}
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Smarter Web Scraping for Data
            <br className="hidden sm:block" />
            Driven Growth
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our web scraping solution gives you fresh, accurate, and
            ready-to-use information—straight from any website. From every
            industry to market intelligence and beyond, we scrape, clean, and
            deliver highly reliable data that helps you make confident, informed
            business moves, not guesses.
          </p>
        </header>

        {/* features (no cards) */}
        <div className="mt-14 grid gap-y-10 gap-x-8 md:grid-cols-3">
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            }
            title={
              <>
                Proven Quality <br className="hidden sm:block" /> That Delivers
              </>
            }
            text="Backed by multiple layers of rigorous validation, our data extraction pipeline ensures unmatched precision, reliability, and timeliness, empowering your business to operate with clean, trustworthy information that drives long-term success."
          />

          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
            }
            title={
              <>
                Stay One Step
                <br className="hidden sm:block" /> Ahead
              </>
            }
            text="In the fast-changing world of the web, our scraping infrastructure keeps you one step ahead by monitoring websites for changes, adapting automatically, and resolving issues before they break—so your business continues to receive reliable, high-quality data without interruptions."
          />

          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M9 3h6v4a2 2 0 0 0 2 2h4v6h-4a2 2 0 0 0-2 2v4H9v-4a2 2 0 0 0-2-2H3V9h4a2 2 0 0 0 2-2V3z" />
              </svg>
            }
            title={
              <>
                Customized Solutions for
                <br className="hidden sm:block" /> Your Business
              </>
            }
            text="Our web scraping solutions are designed to adapt seamlessly to your business needs, whether you’re a startup looking for market insights or an enterprise managing millions of records. With fully customizable pipelines, scalable infrastructure, and flexible integration options, we ensure you always get data that aligns perfectly with your goals—reliable, accurate, and ready to use."
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
      {/* badge + title */}
      <div className="flex h-12 w-12 mb-4 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 text-white ring-1 ring-white/60 shadow-md">
        {icon}
      </div>
      <h3 className="text-[22px] font-bold leading-snug text-slate-900">
        {title}
      </h3>

      {/* connector line */}
      <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />

      {/* description */}
      <p className="mt-4 text-[19px] leading-relaxed">{text}</p>
    </div>
  );
}
