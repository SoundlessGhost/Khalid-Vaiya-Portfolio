import React from "react";

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

export default function Pricing() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Web scraping made easy—pick a plan and start crawling in minutes.
          </p>
        </header>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:mt-16 md:grid-cols-3">
          {/* Basic */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm md:p-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <p className="mt-1 text-sm text-gray-500">
                Individuals testing small scrapers
              </p>
            </div>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $9
              </span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                25k requests / month
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />1 concurrent crawler
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Basic IP rotation
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                HTML fetch + Robots respect
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                CSV/JSON export
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Community support
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              Start Crawling
            </button>
          </div>

          {/* Pro (Most Popular) */}
          <div className="relative rounded-2xl border border-gray-900/10 p-6 shadow-lg ring-1 ring-gray-900/10 md:p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white shadow-sm">
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              <p className="mt-1 text-sm text-gray-500">
                For production-grade web crawls
              </p>
            </div>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $29
              </span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                250k requests / month
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />5 concurrent crawlers
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Residential proxy rotation
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Headless browser + JS rendering
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Scheduler & retries
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Priority support & webhook callbacks
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Start Crawling
            </button>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm md:p-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Team</h3>
              <p className="mt-1 text-sm text-gray-500">
                Scale data pipelines across teams
              </p>
            </div>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $79
              </span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                2M+ requests / month
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Unlimited concurrent crawlers
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Dedicated proxy pools & geo-targeting
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Auto-rotate fingerprints & CAPTCHA solving
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                SLA, audit logs, SSO (SAML)
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-600" />
                Custom pipelines & managed onboarding
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-500">
          All plans include a 14-day free trial. No credit card required.{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-gray-700"
          >
            View full pricing details
          </a>
          .
        </p>
      </div>
    </section>
  );
}
