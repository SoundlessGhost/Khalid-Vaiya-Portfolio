// components/CustomizedDataHero.jsx
"use client";

export default function CustomizedDataHero() {
  return (
    <section className="relative overflow-hidden">
      {/* background: soft gradient + faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_0%_0%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(70%_60%_at_100%_100%,rgba(236,72,153,0.12),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left — copy only (no image) */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-rose-600 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              CUSTOMIZED DATA COLLECTION SOLUTION
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Tailored Data Solution that
              <br className="hidden sm:block" />
              Power Your Business Success
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Fully managed web scraping service designed for seamless data
              collection, tailored to your specific requirements, without the
              hassle.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:translate-y-[-1px] hover:bg-slate-800"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right — decorative stat/feature chips (no images) */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* floating rings */}
            <div className="pointer-events-none absolute -top-10 -left-6 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-fuchsia-200/40 blur-2xl" />

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                iconBg="from-emerald-400 to-teal-600"
                title="Advanced Customization"
                desc="Define exactly what to collect, how often, and where from—no engineering lift."
              />
              <FeatureCard
                iconBg="from-violet-400 to-indigo-600"
                title="Schema Mapping"
                desc="Receive data perfectly normalized to your fields and formats."
                delay="150ms"
              />
              <FeatureCard
                iconBg="from-amber-400 to-orange-600"
                title="QA & Monitoring"
                desc="Automated checks, retries, and alerts keep feeds reliable."
                delay="300ms"
              />
              <FeatureCard
                iconBg="from-sky-400 to-cyan-600"
                title="Compliance Ready"
                desc="Ethical collection practices and audit-friendly logs."
                delay="450ms"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small helper card (no images) ---------- */
function FeatureCard({ iconBg, title, desc, delay = "0ms" }) {
  return (
    <div
      className="group relative rounded-2xl bg-white/80 p-5 shadow-[0_10px_30px_rgba(2,6,23,0.08)] ring-1 ring-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(2,6,23,0.12)]"
      style={{ animation: `fadeIn .6s both`, animationDelay: delay }}
    >
      <div
        className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg} text-white`}
      >
        {/* minimalist spark icon */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M18 18l-4-4M18 6l-4 4M6 18l4-4" />
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>

      {/* bottom accent */}
      <span className="absolute bottom-0 left-0 h-1 w-0 rounded-br-2xl rounded-tl-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
