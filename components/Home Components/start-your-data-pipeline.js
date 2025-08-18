"use client";
import React from "react";
import TermsThenFormInDialog from "../TermsGatedForm";

export default function StartYourDataPipeline() {
  const steps = [
    {
      n: 1,
      title: "Define Your Data",
      body: "Targets, fields & frequency (daily/weekly/monthly/one-time).",
    },
    {
      n: 2,
      title: "We Set Up & Bypass",
      body: "Stealth scrapers, proxy rotation, QA sample within 24–72h.",
    },
    {
      n: 3,
      title: "Get Data On-Demand",
      body: "API/CSV/S3/Webhook—alerts & dashboard included.",
    },
  ];

  return (
    <section className="relative overflow-hidden mt-20">
      {/* bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-rose-50 to-white" />
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl animate-float-delayed" />

      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl animate-reveal">
            Start Your Data Pipeline
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 md:text-lg animate-reveal [animation-delay:120ms]">
            Experience how Fastscraping data collection solutions drive results.
            Start your free trial or book a call today—maximize efficiency and
            results without delay.
          </p>
        </div>
        {/* stepper (no cards) */}
        <div className="mt-16">
          {/* rail */}
          <div className="relative mx-auto max-w-4xl">
            {/* steps */}
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="text-center animate-reveal"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* number circle */}
                  <div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full
                                  bg-gradient-to-br from-emerald-500 to-emerald-700 text-white
                                  ring-4 ring-emerald-100 shadow-lg transition
                                  hover:scale-110 hover:rotate-3"
                  >
                    <span className="text-2xl font-extrabold">{s.n}</span>
                  </div>
                  {/* title + copy */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <TermsThenFormInDialog btn_name={"Book a Demo - Get a Free Sample"} />
        </div>
      </div>
    </section>
  );
}
