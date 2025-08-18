"use client";

import Image from "next/image";

import { useState } from "react";
import { BadgeCheck, Shield, Handshake } from "lucide-react";

export default function CoreValues({ imageSrc = "/core-values.jpg" }) {
  const tabs = [
    {
      key: "quality",
      label: "Quality",
      Icon: BadgeCheck,
      points: [
        "We maintain rigorous standards to ensure the highest level of service.",
        "Our solutions are designed to deliver precise and reliable data.",
        "We constantly refine our processes to enhance performance and efficiency.",
        "Client satisfaction is at the core of our commitment to quality.",
      ],
    },
    {
      key: "privacy",
      label: "Privacy",
      Icon: Shield,
      points: [
        "We protect sensitive information with strict access controls and encryption.",
        "Compliance-first mindset across collection, processing, and storage.",
        "Only the minimum required data is handled to achieve project goals.",
        "We never sell or misuse client data—ever.",
      ],
    },
    {
      key: "respect",
      label: "Mutual Respect",
      Icon: Handshake,
      points: [
        "We value transparent communication and clear expectations.",
        "We treat client challenges as shared challenges and collaborate openly.",
        "Feedback loops are welcomed and acted upon quickly.",
        "Long-term partnerships over short-term wins.",
      ],
    },
  ];

  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active);
  return (
    <section className="relative overflow-hidden">
      {/* Soft background dots + blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-400/15 to-emerald-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-400/15 to-indigo-400/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            CORE VALUES
          </h2>
          <p className="mx-auto mt-4 text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-300">
            As a leading web scraping company, we prioritize strict adherence to
            business ethics. Our core values drive us to achieve our mission
            consistently with professionalism and transparency.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr_420px]">
          {/* Tabs */}
          <div className="flex items-start justify-center lg:justify-start">
            <div className="flex w-full max-w-xs flex-row gap-3 lg:flex-col">
              {tabs.map(({ key, label, Icon }) => {
                const isActive = key === active;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={[
                      "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                      "border shadow-sm",
                      isActive
                        ? "border-emerald-200 bg-emerald-600 text-white shadow-[0_10px_25px_-12px_rgba(16,185,129,0.8)]"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-gray-900 dark:text-gray-200",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Text body */}
          <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md dark:border-white/10 dark:bg-gray-900/60">
            <div className="mb-4 flex items-center gap-2">
              {(() => {
                const Icon = current.Icon;
                return (
                  <div className="rounded-lg border border-black/5 bg-white/80 p-2 dark:border-white/10 dark:bg-gray-800/70">
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                );
              })()}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {current.label}
              </h3>
            </div>

            <ul className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {current.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500/80"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual panel */}
          <div className="relative">
            {/* Geometric accent */}
            <div
              aria-hidden="true"
              className="absolute -left-10 top-10 grid grid-cols-3 gap-2 opacity-70"
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className="h-3 w-3 rotate-45 rounded-[2px] bg-gradient-to-br from-sky-400/40 to-indigo-400/30"
                  style={{ opacity: 0.25 + (i % 5) * 0.12 }}
                />
              ))}
            </div>

            {/* Image frame */}
            <div className="relative ml-6 rounded-[28px] border border-white/60 bg-white p-2 shadow-[0_25px_70px_-30px_rgba(2,6,23,0.35)] backdrop-blur">
              <div className="rounded-[22px] bg-gradient-to-br from-emerald-50 via-sky-50 to-fuchsia-50 p-1">
                {/* If the image path doesn't exist yet, it will just show empty space gracefully */}
                <div className="relative h-64 w-full overflow-hidden rounded-[18px]">
                  <Image
                    src={"/blake-connally-IKUYGCFmfw4-unsplash.jpg"}
                    alt="Core values visual"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, 100vw"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* bottom-right glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-tr from-emerald-400/30 to-sky-400/30 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
