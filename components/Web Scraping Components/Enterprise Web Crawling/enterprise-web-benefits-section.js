// components/EnterpriseBenefitsSection.jsx
import TermsThenFormInDialog from "@/components/TermsGatedForm";
import Link from "next/link";

export default function EnterpriseBenefitsSection() {
  const items = [
    {
      title: "Decision Making",
      desc: "Provides valuable insights for informed business strategies and decisions.",
      icon: (
        // brain/circuit
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
            d="M8 7a4 4 0 0 1 8 0v1h1a3 3 0 1 1 0 6h-1v1a4 4 0 0 1-8 0V7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M8 9h3m2 0h3M8 12h8M8 15h4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Competitive Analysis",
      desc: "Tracks competitors’ pricing, products, and strategies to stay ahead.",
      icon: (
        // binoculars
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
            d="M7 7h3l1 3m3-3h3l-1 3M4 16a3 3 0 0 0 6 0v-2H4v2Zm10 0a3 3 0 0 0 6 0v-2h-6v2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Market Trends",
      desc: "Uncovers emerging trends, consumer preferences, and industry shifts rapidly.",
      icon: (
        // upward chart
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M5 14l4-4 3 3 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M14 7h4v4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Cost Efficiency",
      desc: "Automates data collection, reducing time and resources spent manually.",
      icon: (
        // coin/gear
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <circle
            cx="8"
            cy="12"
            r="3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M8 10.5v3M6.5 12h3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M17 7l1.2.7 1.3-.5.5 1.3L21 9l-.7 1.2.5 1.3-1.3.5L19 13l-1.2-.7-1.3.5-.5-1.3L14 10l.7-1.2-.5-1.3 1.3-.5L17 7Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* soft band background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-indigo-50 to-white"
      />
      {/* floating diamonds for subtle decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-6 flex gap-6 opacity-30"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="h-6 w-6 rotate-45 rounded-[4px] bg-sky-200/60"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left: heading + CTA */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Benefits of Our{" "}
              <span className="relative inline-block ">
                <span className="absolute -inset-1 -z-10 rounded-md bg-gradient-to-r from-indigo-200 to-sky-200" />
                <span className="relative">Enterprise Web</span>
              </span>{" "}
              <span className="">Crawling</span> Services
            </h2>

            <div className="-ml-14">
              <TermsThenFormInDialog btn_name={"Get Started"} />
            </div>
          </div>

          {/* Right: grid of benefit cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((b, i) => (
              <article
                key={b.title}
                className="group relative rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_14px_40px_-18px_rgba(2,6,23,0.25)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
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

                {/* subtle index tag */}
                <span className="pointer-events-none absolute right-3 top-3 select-none rounded-full bg-slate-900/5 px-2 py-1 text-xs font-medium text-slate-500">
                  0{i + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
