export default function AnimatedHero({ title, subtitle }) {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-10">
        {/* base bg */}
        <div className="absolute inset-0 -z-20 bg-[#08111a]" />

        {/* animated grid (matches home) */}
        <div
          className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000_40%,transparent_80%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,198,130,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(12,198,130,.12) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
            animation: "gridPan 18s linear infinite",
          }}
        />

        {/* teal + violet glow orbs */}
        <div className="pointer-events-none absolute -left-24 top-32 size-[620px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,.25),transparent_70%)] blur-2xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-24 -top-10 size-[520px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.22),transparent_70%)] blur-2xl animate-float-slower" />

        {/* spotlight sweep */}
        <div className="absolute left-1/2 top-1/2 -z-10 size-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40">
          <div className="size-full rounded-full [background:conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,.25)_60deg,transparent_120deg)] blur-2xl animate-sweep" />
        </div>

        {/* thin bottom border like home */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        {/* content */}
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            {title}
          </h1>
          <p className="mx-auto mt-5 text-sm max-w-3xl leading-relaxed text-white/70">
            {subtitle}
          </p>

          {/* small animated badges (optional) */}
        </div>
      </section>
    </div>
  );
}
