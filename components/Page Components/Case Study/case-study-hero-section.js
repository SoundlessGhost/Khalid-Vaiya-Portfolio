import { Button } from "@/components/ui/button";

// components/CaseStudyHeroV2.jsx
export default function CaseStudyHero() {
  return (
    <section className="relative overflow-hidden pt-10">
      {/* soft radial bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7FAFF] to-white" />
        <div className="absolute left-1/2 top-[-20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-100/60 via-indigo-100/40 to-emerald-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Case Study · Fastscraping
        </div>

        {/* heading */}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Real-Time Price Insights That Keep You Ahead
        </h1>

        {/* subtitle */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Playwright-based crawling, rotating proxies, and automated QA raised
          coverage 6.5× and cut latency to just 1 hour.
        </p>

        {/* CTA row */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button className={"cursor-pointer"}> Book a Consultation</Button>
          <Button className={"cursor-pointer"} variant={"outline"}>
            {" "}
            See results ↓
          </Button>
        </div>

        {/* stats: slim chips */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Refresh Latency", value: "24h → 1h" },
            { label: "Coverage (stores)", value: "120 → 780" },
            { label: "Schema Pass", value: "97.8%" },
            { label: "ROI", value: "6.2×" },
          ].map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur"
            >
              <span className="text-sm text-slate-600">{m.label}</span>
              <span className="text-lg font-semibold text-slate-900">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
