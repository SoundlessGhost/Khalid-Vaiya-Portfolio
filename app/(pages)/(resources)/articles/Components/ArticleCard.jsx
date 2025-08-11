"use client";
import Image from "next/image";
import { useRef } from "react";

export default function ArticleCard({ title, description, image }) {
  const cardRef = useRef(null);

  // cursor spotlight (CSS vars -> radial highlight)
  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      className="
        group relative overflow-hidden rounded-2xl bg-white
        border border-gray-200 shadow-sm transition
        hover:shadow-xl hover:-translate-y-1.5
        will-change-transform
        reveal
      "
    >
      {/* glow border on hover (teal→violet) */}
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-[radial-gradient(300px_300px_at_var(--x,_50%)_var(--y,_50%),rgba(16,185,129,.28),transparent_60%),
              conic-gradient(from_210deg,rgba(16,185,129,.35),rgba(99,102,241,.35))]
          opacity-0 group-hover:opacity-100 blur-[14px]
          transition-opacity duration-300
        "
      />

      {/* hero image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          priority={false}
        />
        {/* sweeping shine */}
        <span
          aria-hidden
          className="
            absolute -inset-y-10 -left-1/3 w-1/4 rotate-12
            bg-white/40 blur-xl opacity-0
            group-hover:opacity-100 animate-shine
          "
        />
      </div>

      {/* content */}
      <div className="relative z-10 p-5">
        <h3 className="text-[17px] font-semibold text-slate-900 leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>

        {/* tiny pulse indicator (optional) */}
        <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-700">
          <span className="relative inline-flex">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Fresh insight
        </div>
      </div>

      {/* subtle floating gradient at bottom */}
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 bottom-0 h-24
          bg-gradient-to-t from-emerald-50/60 to-transparent
        "
      />
    </article>
  );
}
