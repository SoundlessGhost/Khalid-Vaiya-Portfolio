import React from "react";
import Link from "next/link";
import PricingComparisonTable from "./PricingComparisonTable";

const Check = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    {...props}
    className={`h-5 w-5 ${props.className ?? ""}`}
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingContactOnly({
  contactHref = "/contact",
  onContact,
}) {
  const ContactBtn = ({ children, className = "" }) =>
    onContact ? (
      <button
        type="button"
        onClick={onContact}
        className={
          "w-full rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition focus:outline-none " +
          className
        }
      >
        {children}
      </button>
    ) : (
      <Link
        href={contactHref}
        className={
          "inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition focus:outline-none " +
          className
        }
      >
        {children}
      </Link>
    );

  return (
    <div className="mb-20">
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            {/* Eyebrow / Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              Custom pricing — let’s discuss
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Flexible, Discussion-Based Pricing
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Tailored web scraping solutions based on your volume, compliance,
              and workflow needs—only what you actually need.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus-visible:ring-2"
              >
                Let’s Talk
              </Link>
              <Link
                href="#sales"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Talk to Sales
              </Link>
            </div>

            {/* Support bullets */}
            <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Quotes based on use case, data volume, and compliance needs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Compliance-friendly pipelines
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Scalable crawling & delivery
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6">
          {/* Cards */}
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:mt-16 grid-cols-1 sm:grid-cols-2 place-content-center">
            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm md:p-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Ideal for MVPs or lightweight crawls
                </p>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Contact us for pricing
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> Basic IP rotation
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> 1–2 concurrent crawlers
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> HTML fetch + Robots.txt
                  compliance
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> CSV/JSON export
                </li>
              </ul>

              <ContactBtn className="mt-8 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-900/10">
                Contact Us
              </ContactBtn>
            </div>

            {/* Pro (Highlighted) */}
            <div className="relative rounded-2xl border border-gray-900/10 p-6 shadow-lg ring-1 ring-gray-900/10 md:p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  Most Popular
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <p className="mt-1 text-sm text-gray-500">
                  For production-grade crawls and scheduling
                </p>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Contact us for pricing
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> Residential proxy
                  rotation
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> Headless browser + JS
                  rendering
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> Scheduler, retries & rate
                  limits
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> Webhook/queue-based
                  delivery
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600" /> Priority support
                </li>
              </ul>

              <ContactBtn className="mt-8 bg-gray-900 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-900/30">
                Let’s Talk
              </ContactBtn>
            </div>
          </div>

          {/* Footnote */}
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-500 mb-10">
            Get a tailored quote based on your use case, data volume, and
            compliance requirements.
          </p>
        </div>
      </section>

      <PricingComparisonTable />
    </div>
  );
}
