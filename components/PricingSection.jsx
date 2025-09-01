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

// -----------------------------------------
// Background (unchanged)
// -----------------------------------------
function BackgroundFX() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.800)_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>
      <div className="pointer-events-none absolute -top-24 -right-16 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-cyan-500/20 blur-3xl" />
    </>
  );
}

// -----------------------------------------
// HERO
// -----------------------------------------
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

// -----------------------------------------
// TIERS
// -----------------------------------------
const tierData = [
  {
    name: "One-time Scraping (Project Based)",
    tagline: "Perfect for one-off datasets and PoCs.",
    cta: { label: "Get a Quote", href: "/contact" }, // ★ copy tweak
    features: [
      "One-time data collection from specific websites",
      "Delivery in CSV, Excel, JSON",
      "Data cleaning & deduplication",
      "Customized selectors (title, price, reviews, contacts, etc.)",
      "Guaranteed delivery time (24–72 hours typical)",
      "Email/Chat support during the project",
    ],
  },
  {
    name: "Recurring Scraping",
    tagline: "For teams that need reliable, ongoing updates.",
    cta: { label: "Contact for Pricing", href: "/contact" },
    features: [
      "Daily / Weekly / Monthly automation",
      "Continuous monitoring (price changes, new listings, sold-out, etc.)",
      "Scheduled delivery via Email, Drive, Dropbox, or API",
      "Data refresh & version history",
      "Large-scale scraping (millions of rows / month)",
      "Priority support (Slack / WhatsApp / Email)",
      "Dedicated proxy pool for anti-bot protection",
    ],
  },
];

function Tiers() {
  return (
    <section aria-labelledby="tiers" className="relative">
      <h2 id="tiers" className="sr-only">
        Pricing tiers
      </h2>

      {/* ★ 2-up centered grid with tighter gaps */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 place-content-center gap-4 sm:gap-6 md:gap-8">
        {tierData.map((t, i) => (
          <Tier key={t.name} tier={t} index={i} />
        ))}
      </div>
    </section>
  );
}

function Tier({ tier, index }) {
  // ★ cursor-follow glow
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--x", `50%`);
        e.currentTarget.style.setProperty("--y", `50%`);
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur supports-[backdrop-filter]:bg-white/5"
      style={{
        boxShadow:
          "0 1px 0 0 rgba(255,255,255,.06) inset, 0 10px 30px -15px rgba(0,0,0,.6)",
      }}
    >
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
        className={`mt-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition
          ${
            index === 1
              ? "border-emerald-300/30 bg-emerald-400/15 text-white hover:bg-emerald-400/25"
              : "border-white/10 bg-white/10 text-white/90 hover:bg-white/20"
          }`}
      >
        {tier.cta.label} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

// -----------------------------------------
// Usage Estimator
// -----------------------------------------
function UsageEstimator() {
  const [requests, setRequests] = useState(120000);
  const [concurrency, setConcurrency] = useState(8);
  const [headless, setHeadless] = useState(true);

  const band = useMemo(() => {
    let score = requests / 10000 + concurrency * 2 + (headless ? 10 : 0);
    if (score < 35) return "Starter-level usage";
    if (score < 120) return "Growth-level usage";
    return "Enterprise-level usage";
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

// -----------------------------------------
// Feature Comparison (scraping-specific)
// -----------------------------------------
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
    key: "Anti-Bot Handling",
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

      {/* ★ fixed header: 4 columns now include Growth */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
        <div className="grid grid-cols-4 bg-white/5 px-4 py-3 text-xs font-medium text-white/80">
          <div>Feature</div>
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

// -----------------------------------------
// Compliance Strip
// -----------------------------------------
function ComplianceStrip() {
  const items = [
    { icon: Shield, label: "Policy-aware scraping (robots.txt)" },
    { icon: Workflow, label: "Schema & dedupe pipeline" },
    { icon: Server, label: "Encrypted storage & transit" },
    { icon: Globe, label: "Geo-routing / residency options" },
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

// -----------------------------------------
// FAQ
// -----------------------------------------
function FAQ() {
  const qa = [
    {
      q: "Do you show fixed prices?",
      a: "No. Complexity varies per site. We estimate based on volume, bot protection, concurrency, and data guarantees, then finalize on a quick call.",
    },
    {
      q: "Can you scrape JS-heavy or login-gated sites?",
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

// -----------------------------------------
// Contact Strip
// -----------------------------------------
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
            We’ll propose the most cost-effective setup.
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
