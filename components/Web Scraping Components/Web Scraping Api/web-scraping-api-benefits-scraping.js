import TermsThenFormInDialog from "@/components/TermsGatedForm";

export default function BenefitsCustomizedSection() {
  const benefits = [
    {
      title: "Tailored Solutions",
      desc: "Customized scraping solutions that meet your specific business needs.",
      icon: (
        // settings / puzzle icon
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
            d="M12 3v3m0 12v3m6-9h3M3 12H6M7.5 7.5l2.1 2.1M14.4 14.4l2.1 2.1M16.5 7.5l-2.1 2.1M9.6 14.4L7.5 16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="3.25"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Data",
      desc: "Access updated information instantly to make informed decisions quickly.",
      icon: (
        // clock / lightning
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <circle
            cx="12"
            cy="12"
            r="7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 7v5l3 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M10.5 4.5l2-1.5M4.5 13.5l-1.5 2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ),
    },
    {
      title: "Scalability",
      desc: "Easily scale scraping operations as your business grows and evolves.",
      icon: (
        // upward bars
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
            d="M4 20V10M10 20V6M16 20v-8M20 20V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Enhanced Efficiency",
      desc: "Automate data collection processes to save time and resources.",
      icon: (
        // bolt/gear combo
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
            d="M12 3l-2 5h3l-1 5 4-6h-3l1-4z"
            fill="currentColor"
            opacity=".7"
          />
          <circle
            cx="17.5"
            cy="17.5"
            r="3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M17.5 14.5v6M14.5 17.5h6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* soft band background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-indigo-50 to-white"
      />
      {/* decorative diamonds */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 flex gap-4 opacity-30"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-6 rotate-45 rounded-[4px] bg-sky-200/50"
            style={{ marginLeft: i % 2 ? "1rem" : 0 }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left: Heading + CTA */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Benefits of Our Customized
              <br />
              <span className="relative inline-block ">
                <span className="absolute -inset-1 -z-10 rounded-md bg-gradient-to-r from-indigo-200 to-sky-200" />
                <span className="relative">Customized Web Scraping API</span>
              </span>
              <br />
              Services
            </h2>

            <div className="-ml-14">
              <TermsThenFormInDialog btn_name={"Get Started"} />
            </div>
          </div>

          {/* Right: Benefit cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b, idx) => (
              <div
                key={b.title}
                className="group relative rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_14px_40px_-18px_rgba(2,6,23,0.25)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Accent ring on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-indigo-200" />
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {b.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {b.desc}
                </p>

                {/* index badge */}
                <span className="pointer-events-none absolute right-4 top-4 select-none rounded-full bg-slate-900/5 px-2 py-1 text-xs font-medium text-slate-500">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
