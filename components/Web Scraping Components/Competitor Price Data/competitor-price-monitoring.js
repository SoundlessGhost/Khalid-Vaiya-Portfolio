"use client";
import { useEffect } from "react";

export default function CompetitorPriceMonitoring() {
  useEffect(() => {
    const root = document.getElementById("root");

    // Reveal on Scroll (same as before)
    const items = Array.from(root.querySelectorAll("[data-animate]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div
      id="root"
      className="relative isolate min-h-[90vh] overflow-hidden bg-[#0b1220] text-slate-100"
    >
      {/* background একই রাখা হলো */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_110%,#0e2530_0%,transparent_60%),radial-gradient(900px_700px_at_95%_-10%,#2a1552_0%,transparent_55%),linear-gradient(180deg,#0b1220_0%,#0a101a_30%,#0b1220_100%)]" />
        <div className="absolute inset-0 mix-blend-screen opacity-[0.25]">
          <div className="absolute -bottom-24 -left-10 h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-[110px]" />
          <div className="absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-fuchsia-400/15 blur-[120px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
              <filter id='n'>
                <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
                <feColorMatrix type='saturate' values='0'/>
                <feComponentTransfer><feFuncA type='table' tableValues='0 0.25'/></feComponentTransfer>
              </filter>
              <rect width='100%' height='100%' filter='url(%23n)'/>
            </svg>`)}")`,
          }}
        />
        <div className="absolute inset-0 [background:linear-gradient(transparent,transparent),linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:100%_100%,36px_36px,36px_36px] opacity-[0.04]" />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* Eyebrow */}
        <p
          data-animate
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs tracking-wide text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Real-time competitor pricing, ready to act
        </p>

        {/* Title */}
        <h1
          data-animate
          className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Data solutions tailored for every role
        </h1>

        {/* Sub */}
        <p data-animate className="mt-4 max-w-2xl text-pretty text-slate-300">
          Whether you adjust pricing, track trends, or lead the overall
          strategy, our insights combine speed and clarity so you can decide
          with confidence.
        </p>

        {/* Items: শুধু টেক্সট, কোনো বক্স/শ্যাডো/রিং নেই */}
        <div
          data-animate
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureItem
            title="Pricing Strategists"
            desc="Use live competitor pricing to adjust quickly, fine-tune strategies in minutes, and capture every margin opportunity."
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M4 16l4-4 3 3 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="5" cy="17" r="1.5" />
                <circle cx="11" cy="11" r="1.5" />
                <circle cx="19" cy="5" r="1.5" />
              </svg>
            }
          />
          <FeatureItem
            title="Market Analysts"
            desc="Blend internal metrics with external signals to detect shifts, anticipate moves, and explain the story behind every trend."
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M3 12h18M12 3v18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="6" />
              </svg>
            }
          />
          <FeatureItem
            title="Business Leaders"
            desc="Make decisions backed by data: strategies that strengthen margins, accelerate turnover, and keep you competitive at scale."
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 7h16M4 12h10M4 17h6" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </section>

      {/* reveal effect */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
function FeatureItem({ title, desc, icon }) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-300">{desc}</p>
    </div>
  );
}
