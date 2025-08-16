"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

function useInViewOnce() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("show");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const steps = [
  {
    step: 1,
    title: "Book a Call",
    subtitle: "Connect with our team to understand your data needs.",
  },
  {
    step: 2,
    title: "Try It Free",
    subtitle: "Test our platform with zero cost or commitment.",
  },
  {
    step: 3,
    title: "See Real Results",
    subtitle: "Turn raw data into clear, actionable insights.",
  },
];

export default function DataCollectionCTA() {
  const sectionRef = useInViewOnce();

  return (
    <section
      ref={sectionRef}
      className="reveal relative overflow-hidden py-24 px-4"
    >
      {/* soft background gradient + blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_10%_10%,#e8f5e9_0%,transparent_60%),radial-gradient(70%_60%_at_90%_20%,#fdecea_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-24 -bottom-16 h-80 w-80 rounded-full bg-rose-100 blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="heading text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Ready to <span className="grad">Kickstart Your Data Journey?</span>
        </h2>
        <p className="sub mt-4 text-lg md:text-xl text-gray-700/90">
          Discover how effortless data collection can be. Follow these simple
          steps and start getting valuable insights today.
        </p>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((it, i) => (
            <div
              key={it.step}
              className="card group relative rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md p-7 text-left shadow-sm hover:shadow-xl transition"
              style={{ "--d": `${i * 120}ms` }}
            >
              {/* floating glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-50 to-rose-50" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="step-badge">
                  <span>{it.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{it.subtitle}</p>
                </div>
              </div>
              {/* subtle underline that grows */}
              <div className="relative z-10 mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-rose-400 rounded-full transition-[width] duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            href="/get-started"
            className="cta inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-white transition"
          >
            Get Started
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-3 text-sm text-gray-500">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>

      {/* scoped animations */}
      <style jsx>{`
        .reveal .heading {
          opacity: 0;
          transform: translateY(10px);
        }
        .reveal .sub {
          opacity: 0;
          transform: translateY(8px);
        }
        .reveal .card {
          opacity: 0;
          transform: translateY(14px) scale(0.98);
        }

        .show .heading {
          animation: fadeUp 600ms ease-out forwards;
        }
        .show .sub {
          animation: fadeUp 700ms ease-out 100ms forwards;
        }
        .show .card {
          animation: pop 700ms ease-out forwards;
          animation-delay: var(--d, 0ms);
        }

        .grad {
          background: linear-gradient(90deg, #10b981, #ef4444);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cta {
          background: radial-gradient(
            120% 120% at 0% 0%,
            #10b981 0%,
            #0ea5e9 60%,
            #ef4444 120%
          );
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.25);
        }
        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(16, 185, 129, 0.35);
        }
        .cta:active {
          transform: translateY(0);
        }

        .step-badge {
          height: 44px;
          width: 44px;
          min-width: 44px;
          display: grid;
          place-items: center;
          font-weight: 800;
          color: white;
          border-radius: 12px;
          background: conic-gradient(
            from 210deg,
            #ef4444,
            #10b981,
            #60a5fa,
            #ef4444
          );
          filter: drop-shadow(0 6px 18px rgba(99, 102, 241, 0.25));
          animation: spinHue 6s linear infinite paused;
        }
        .card:hover .step-badge {
          animation-play-state: running;
        }

        @keyframes pop {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spinHue {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
