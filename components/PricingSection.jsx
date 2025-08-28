"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ArrowRight,
  Shield,
  Gauge,
  Globe,
  Workflow,
  Sparkles,
  Server,
  Rocket,
  HelpCircle,
  PlugZap,
  LineChart,
  Timer,
  Mail,
} from "lucide-react";

// =========================================
// Pricing Page (single file, drop-in component)
// =========================================
// How to use:
// 1) Place this file in your components/ folder, e.g. components/PricingPage.jsx
// 2) Import and render <PricingPage /> in your route (app/pricing/page.tsx or pages/pricing.tsx)
// 3) Tailwind required. Optional: tweak brand colors in gradients below.
// 4) No external UI libs—pure Tailwind + lucide-react icons.

export default function PricingSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <PricingHero />
        <div className="mt-16 md:mt-24 space-y-20">
          <Tiers />
          <UsageEstimator />
          <FeatureComparison />
          <ComplianceStrip />
          <FAQ />
          <ContactStrip />
        </div>
      </div>
    </div>
  );
}

// =========================================
// Background Effects (subtle blobs + grid)
// =========================================
function BackgroundFX() {
  return (
    <>
      {/* dotted grid */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.800)_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>
      {/* color blobs */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-cyan-500/20 blur-3xl" />
    </>
  );
}

// =========================================
// HERO
// =========================================
function PricingHero() {
  return (
    <header className="text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
        <Sparkles className="h-3.5 w-3.5" /> Pricing tailored for scraping at
        scale
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Flexible pricing for reliable web data
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-white/70">
        Start small, grow unlimited. Choose a plan that matches your crawl
        volume, anti-bot needs, and SLAs. Transparent usage, zero surprises.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4" /> GDPR aware
        </div>
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4" /> Headless + Proxy Pool
        </div>
        <div className="flex items-center gap-2">
          <LineChart className="h-4 w-4" /> SLA & Monitoring
        </div>
      </div>
    </header>
  );
}

// =========================================
// TIERS (Card‑less blocks with glass lines)
// =========================================
const tierData = [
  {
    name: "Starter",
    tagline: "Pay-as-you-go for quick tasks",
    highlight: "Great for POCs & one-off scrapes",
    cta: { label: "Get API Key", href: "/signup" },
    // No fixed prices shown; show guidance
    blurb: "Estimate per-1k requests. No commitment.",
    features: [
      "Up to 50k requests / month",
      "Shared residential proxy pool",
      "Headless browser (Chromium)",
      "Basic bot avoidance",
      "Community support",
    ],
    limits: ["Concurrency: 2", "Retries: 2", "Timeout: 30s"],
  },
  {
    name: "Growth",
    tagline: "Subscription for teams in production",
    highlight: "Priority routing & higher stability",
    cta: { label: "Start Free Trial", href: "/trial" },
    blurb: "Monthly bundle with volume discounts.",
    features: [
      "300k–2M requests / month",
      "Dedicated geo pools + rotation",
      "Custom headers & device profiles",
      "Anti-captcha orchestration",
      "Email & chat support",
    ],
    limits: ["Concurrency: 10", "Retries: 3", "Timeout: 45s"],
  },
  {
    name: "Enterprise",
    tagline: "Custom SLAs, data pipelines & support",
    highlight: "White-glove setup & compliance",
    cta: { label: "Contact for Pricing", href: "/contact" },
    blurb: "We design + operate your full data pipeline.",
    features: [
      "Unlimited scale & dedicated IP ranges",
      "Playwright clusters with session pinning",
      "Schema validation & dedupe (Great Expectations)",
      "Metabase/BigQuery/Redshift delivery",
      "24/7 pager & uptime SLA",
    ],
    limits: ["Concurrency: 50+", "Retries: 5", "Timeout: 60s"],
  },
];

function Tiers() {
  return (
    <section aria-labelledby="tiers" className="relative">
      <h2 id="tiers" className="sr-only">
        Pricing tiers
      </h2>

      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        {tierData.map((t, i) => (
          <Tier key={t.name} tier={t} index={i} />
        ))}
      </div>
    </section>
  );
}

function Tier({ tier, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/5"
      style={{
        boxShadow:
          "0 1px 0 0 rgba(255,255,255,.06) inset, 0 10px 30px -15px rgba(0,0,0,.6)",
      }}
    >
      {/* glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,.12), transparent 40%)",
        }}
      />

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-tight">{tier.name}</h3>
        {index === 1 ? (
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-300/20">
            Popular
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-white/70">{tier.tagline}</p>
      <p className="mt-4 text-[13px] text-white/60">{tier.blurb}</p>

      <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-white/70">
        {tier.limits.map((x) => (
          <span
            key={x}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
          >
            {x}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-2 text-sm">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
            <span className="text-white/90">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.cta.href}
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/20"
      >
        {tier.cta.label} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

// =========================================
// Usage Estimator (no hard pricing, just UX)
// =========================================
function UsageEstimator() {
  const [requests, setRequests] = useState(120000); // monthly
  const [concurrency, setConcurrency] = useState(8);
  const [headless, setHeadless] = useState(true);

  // A simple mock to show an estimate band, not a price
  const band = useMemo(() => {
    let score = requests / 10000 + concurrency * 2 + (headless ? 10 : 0);
    if (score < 35) return "Starter‑level usage";
    if (score < 120) return "Growth‑level usage";
    return "Enterprise‑level usage";
  }, [requests, concurrency, headless]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
        <div className="max-w-xl">
          <h3 className="text-lg font-semibold tracking-tight">
            Usage estimator
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Get a rough sense of where you fit. We’ll finalize pricing on a
            short call based on your sites, bot protection, and success
            criteria.
          </p>
        </div>
        <div className="rounded-2xl bg-black/20 px-3 py-1.5 text-xs text-white/70 ring-1 ring-inset ring-white/10 flex items-center gap-2">
          <Timer className="h-4 w-4" /> Instant estimate
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Slider
          label="Monthly requests"
          value={requests}
          min={1000}
          max={2000000}
          step={1000}
          onChange={setRequests}
          prefix={<Gauge className="h-4 w-4" />}
          format={(v) => Intl.NumberFormat().format(v)}
        />
        <Slider
          label="Concurrency"
          value={concurrency}
          min={1}
          max={64}
          step={1}
          onChange={setConcurrency}
          prefix={<Rocket className="h-4 w-4" />}
        />
        <Toggle
          label="Headless browser sessions"
          checked={headless}
          onChange={setHeadless}
          icon={<Globe className="h-4 w-4" />}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10 p-4">
        <p className="text-sm text-white/80">{band}</p>
        <p className="mt-1 text-xs text-white/60">
          Tip: Complex sites (dynamic content, anti-bot, logins) usually need
          higher resources.
        </p>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step, onChange, prefix, format }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-white/90">
        {prefix} {label}
      </label>
      <div className="mt-2 rounded-2xl border border-white/10 bg-black/20 p-4">
        <input
          type="range"
          className="w-full accent-emerald-400"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className="mt-2 text-right text-xs text-white/70">
          {format ? format(value) : value}
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange, icon }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-white/90">
        {icon} {label}
      </label>
      <button
        onClick={() => onChange(!checked)}
        className={`mt-2 inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm transition ${
          checked
            ? "bg-emerald-400/15 text-white ring-1 ring-emerald-300/20"
            : "bg-black/20 text-white/80"
        }`}
      >
        <PlugZap className="h-4 w-4" /> {checked ? "Enabled" : "Disabled"}
      </button>
    </div>
  );
}

// =========================================
// Feature Comparison (scraping‑specific)
// =========================================
const features = [
  {
    key: "Proxy Pools",
    starter: "Shared",
    growth: "Geo + Rotation",
    enterprise: "Dedicated Ranges",
  },
  {
    key: "Headless Browser",
    starter: "Chromium",
    growth: "Chromium + Device Profiles",
    enterprise: "Playwright Cluster + Session Pinning",
  },
  {
    key: "Anti‑Bot Handling",
    starter: "Basic",
    growth: "Advanced + Captcha",
    enterprise: "Strategy + ML signals",
  },
  {
    key: "Data Delivery",
    starter: "JSON/CSV",
    growth: "S3 + Webhooks",
    enterprise: "Warehouses (BQ/RS)",
  },
  {
    key: "Quality & Dedupe",
    starter: "Basic checks",
    growth: "Schema validation",
    enterprise: "Great Expectations + QA",
  },
  {
    key: "Monitoring",
    starter: "Basic logs",
    growth: "Alerts + Retries",
    enterprise: "24/7 Pager + SLA",
  },
];

function FeatureComparison() {
  return (
    <section>
      <h3 className="text-lg font-semibold tracking-tight">What’s included</h3>
      <p className="mt-2 text-sm text-white/70">
        Capabilities scale with your plan. We ensure ethical, consistent, and
        resilient crawling.
      </p>

      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
        <div className="grid grid-cols-4 bg-white/5 px-4 py-3 text-xs font-medium text-white/80">
          <div className="">Feature</div>
          <div className="text-center">Starter</div>
          <div className="text-center">Growth</div>
          <div className="text-center">Enterprise</div>
        </div>
        {features.map((row, i) => (
          <div
            key={row.key}
            className={`grid grid-cols-4 items-center px-4 py-3 text-sm ${
              i % 2 ? "bg-white/[0.03]" : "bg-transparent"
            }`}
          >
            <div className="text-white/90">{row.key}</div>
            <div className="text-center text-white/70">{row.starter}</div>
            <div className="text-center text-white/80">{row.growth}</div>
            <div className="text-center font-medium text-white">
              {row.enterprise}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =========================================
// Compliance & Trust strip
// =========================================
function ComplianceStrip() {
  const items = [
    { icon: Shield, label: "Policy‑aware scraping (robots.txt)" },
    { icon: Workflow, label: "Schema & dedupe pipeline" },
    { icon: Server, label: "Encrypted storage & transit" },
    { icon: Globe, label: "Geo‑routing / residency options" },
  ];
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-2xl bg-black/20 p-4 ring-1 ring-inset ring-white/10"
          >
            <Icon className="h-5 w-5 text-emerald-300" />
            <p className="text-sm text-white/80">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// =========================================
// FAQ (short)
// =========================================
function FAQ() {
  const qa = [
    {
      q: "Do you show fixed prices?",
      a: "No. Complexity varies per site. We estimate based on volume, bot protection, concurrency, and data guarantees, then finalize on a quick call.",
    },
    {
      q: "Can you scrape JS‑heavy or login‑gated sites?",
      a: "Yes—via Playwright clusters, session management, and headless browsers. We respect terms and do not collect PII.",
    },
    {
      q: "How do you ensure data quality?",
      a: "Schema validation, dedupe, sampling, and monitoring. Enterprise plans include Great Expectations and SLA.",
    },
    {
      q: "Where do you deliver data?",
      a: "JSON/CSV, webhooks, S3, or directly into warehouses like BigQuery or Redshift.",
    },
  ];

  return (
    <section>
      <h3 className="text-lg font-semibold tracking-tight">FAQs</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {qa.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-start gap-3">
              <HelpCircle className="mt-0.5 h-5 w-5 text-cyan-300" />
              <div>
                <p className="font-medium text-white/90">{item.q}</p>
                <p className="mt-1 text-sm text-white/70">{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =========================================
// Contact Strip (no pricing displayed)
// =========================================
function ContactStrip() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-blue-500/10 p-6 md:p-10">
      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight">
            Let’s tailor a plan to your data goals
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Tell us the target sites, volumes, refresh cadence, and data format.
            We’ll propose the most cost‑effective setup.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          <Mail className="h-4 w-4" /> Contact Sales
        </a>
      </div>
    </section>
  );
}
