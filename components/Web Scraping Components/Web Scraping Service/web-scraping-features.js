"use client";

import React, { useEffect, useRef } from "react";
import { FaClock, FaCheckCircle, FaHandHolding } from "react-icons/fa";

function useInViewOnce() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal-show");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const items = [
  {
    icon: <FaClock className="text-red-500 text-4xl mx-auto mb-4" />,
    title: "No More Delays",
    desc: "Get web data faster with a reliable system that works quietly behind the scenes—so you never miss a beat.",
  },
  {
    icon: <FaCheckCircle className="text-red-500 text-4xl mx-auto mb-4" />,
    title: "Accurate Every Time",
    desc: "Our service delivers precise, tailored data—built to meet your requirements with zero guesswork.",
  },
  {
    icon: <FaHandHolding className="text-red-500 text-4xl mx-auto mb-4" />,
    title: "Effortless Operations",
    desc: "Focus on strategy while we manage the technical work—saving you time, cost, and complexity.",
  },
];

export default function ScrapingFeaturesV2() {
  const sectionRef = useInViewOnce();

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-6 md:px-16 text-center reveal"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 relative inline-block">
        <span className="heading-wipe">Smooth & Smart</span> Web Scraping
        Solutions
      </h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="card bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            style={{ "--d": `${i * 120}ms` }}
          >
            <div className="icon-pop">{it.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
            <p className="text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
          Start Free Trial
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Animations (scoped) */}
      <style jsx>{`
        /* initial state */
        .reveal .card {
          opacity: 0;
          transform: translateY(14px) scale(0.98);
        }
        .reveal h2 {
          opacity: 0;
          transform: translateY(10px);
        }

        /* in-view */
        .reveal-show .card {
          animation: pop 700ms ease-out forwards;
          animation-delay: var(--d, 0ms);
        }
        .reveal-show h2 {
          animation: fadeUp 600ms ease-out forwards;
        }
        .reveal-show .heading-wipe::after {
          width: 100%;
        }
        .reveal-show .icon-pop {
          animation: iconIn 500ms ease-out both;
        }

        /* keyframes */
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
        @keyframes iconIn {
          0% {
            transform: scale(0.8);
          }
          70% {
            transform: scale(1.06);
          }
          100% {
            transform: scale(1);
          }
        }

        /* heading highlight wipe */
        .heading-wipe {
          position: relative;
          padding: 0 4px;
        }
        .heading-wipe::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0.1em;
          height: 0.45em;
          width: 0;
          background: rgba(59, 130, 246, 0.15); /* blue-500/15 */
          border-radius: 6px;
          transition: width 700ms ease;
          z-index: -1;
        }
      `}</style>
    </section>
  );
}
