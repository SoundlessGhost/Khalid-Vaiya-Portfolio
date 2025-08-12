"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Scale,
  BriefcaseBusiness,
  Workflow,
  CircleOff,
  Rss,
  Package,
  FileText,
  BookOpen,
  LifeBuoy,
  SlidersHorizontal,
  Building2,
  Briefcase,
  BadgeDollarSign,
} from "lucide-react";

function useScrollNav() {
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setElevated(y > 8);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { hidden, elevated };
}

function useOutsideClose(ref, onClose) {
  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose?.();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [ref, onClose]);
}

/* ---------- menu data ---------- */
const webScraping = [
  {
    title: "Web Scraping Service",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
    desc: "Clean, reliable, automated extraction at scale.",
    href: "/web-scraping-service",
  },
  {
    title: "Competitor Price Data",
    icon: <Scale className="h-4 w-4" />,
    desc: "Live pricing feeds to outpace the market.",
    href: "/competitor-price-data",
  },
  {
    title: "Expertise",
    icon: <Workflow className="h-4 w-4" />,
    desc: "Battle-tested playbooks trusted by brands.",
    href: "/expertise",
  },
  {
    title: "Web Data Extraction",
    icon: <CircleOff className="h-4 w-4" />,
    desc: "Customized pipelines, zero clutter.",
    href: "/web-data-extraction",
  },
  {
    title: "How it works",
    icon: <Rss className="h-4 w-4" />,
    desc: "A transparent process from crawl to CSV.",
    href: "/how-it-work",
  },
];

const solutions = [
  {
    title: "Pricing Data",
    icon: <BadgeDollarSign className="h-4 w-4" />,
    desc: "Real-time competitor prices to guide dynamic decisions.",
    href: "/pricing-data",
  },
  {
    title: "Job Listings Data",
    icon: <Briefcase className="h-4 w-4" />,
    desc: "Large-scale hiring signals across roles, skills and pay.",
    href: "/job-listings-data",
  },
  {
    title: "Product Data",
    icon: <Package className="h-4 w-4" />,
    desc: "Structured catalogs, specs and variants—clean and consistent.",
    href: "/product-data-scraping",
  },
  {
    title: "Real Estate Data",
    icon: <Building2 className="h-4 w-4" />,
    desc: "Property, pricing and market movement in one feed.",
    href: "/real-estate-data",
  },
  {
    title: "Customized Data",
    icon: <SlidersHorizontal className="h-4 w-4" />,
    desc: "Exactly the fields you need—on your schedule.",
    href: "/customized-data",
  },
];

const resources = [
  {
    title: "Case Studies",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
    desc: "Outcomes and wins we delivered for clients.",
    href: "/case-study",
  },
  {
    title: "Supports",
    icon: <LifeBuoy className="h-4 w-4" />,
    desc: "Help center, FAQs and hands-on assistance.",
    href: "/supports",
  },
  {
    title: "Ebooks",
    icon: <BookOpen className="h-4 w-4" />,
    desc: "Deep dives and frameworks for data teams.",
    href: "/e-book",
  },
  {
    title: "Articles",
    icon: <FileText className="h-4 w-4" />,
    desc: "Short, practical reads across industries.",
    href: "/articles",
  },
];

/* ---------- components ---------- */
function Flyout({ label, items }) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  useOutsideClose(boxRef, () => setOpen(false));

  return (
    <div
      className="relative p-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="group px-3 py-2 text-sm text-slate-200/90 hover:text-white transition">
        {label}
        <span className="block h-px scale-x-0 bg-emerald-400 transition-all duration-300 group-hover:scale-x-100" />
      </button>

      {open && <div className="absolute left-0 right-0 top-full h-2" />}

      {/* panel */}
      <div
        ref={boxRef}
        className={`absolute left-1/2 top-full z-50 mt-1 w-[420px] -translate-x-1/2
  rounded-xl border border-white/10 bg-slate-900/70 p-3 backdrop-blur-xl
  shadow-2xl ring-1 ring-black/20 transition-all duration-200
  ${
    open
      ? "opacity-100 translate-y-0"
      : "pointer-events-none opacity-0 -translate-y-1"
  }`}
      >
        <ul className="grid grid-cols-1 divide-y divide-white/5">
          {items.map((it) => (
            <li key={it.title}>
              <Link
                href={it.href}
                className="flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-white/5"
              >
                {"icon" in it && (
                  <span className="text-emerald-400">{it.icon}</span>
                )}
                <div>
                  <p className="text-sm font-semibold text-white">{it.title}</p>
                  {"desc" in it && (
                    <p className="text-xs text-slate-300/80">{it.desc}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function NavbarAnimated() {
  const { hidden, elevated } = useScrollNav();
  const [mobile, setMobile] = useState(false);

  return (
    <>
      {/* top nav */}
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div
          className={` px-4 sm:px-6 lg:px-8 border-b
          ${
            elevated
              ? "bg-slate-900/70 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
              : "bg-slate-900/50 backdrop-blur-md border-transparent"
          }`}
        >
          <div className="flex h-16 items-center justify-between">
            {/* brand */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              <span className="text-emerald-400">Fast</span>scraping
            </Link>

            {/* desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Flyout label="Web Scraping" items={webScraping} />
              <Flyout label="Solutions" items={solutions} />
              <Flyout label="Resources" items={resources} />
              <Link
                href="/about"
                className="group relative px-3 text-sm text-slate-200/90 hover:text-white transition"
              >
                About
                <span
                  className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px
               origin-left scale-x-0 bg-emerald-400 transition-transform duration-300
               group-hover:scale-x-100"
                />
              </Link>
            </nav>

            {/* CTA + mobile */}
            <div className="flex items-center gap-3">
              <Link
                href="/book-demo"
                className="hidden sm:inline-flex items-center rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                Book a Demo
              </Link>
              <button
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white ring-1 ring-white/10"
                onClick={() => setMobile((s) => !s)}
                aria-label="Toggle menu"
              >
                {/* hamburger / close */}
                <div className="relative h-3.5 w-4">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-4 bg-white transition ${
                      mobile ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-0.5 w-4 bg-white transition ${
                      mobile ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-0.5 w-4 bg-white transition ${
                      mobile ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* subtle bottom separator glow to match hero */}
        <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top bg-slate-950/90 backdrop-blur-xl transition-transform duration-300 md:hidden
        ${mobile ? "scale-y-100" : "scale-y-0"} border-t border-white/10`}
      >
        <div className="px-6 py-4">
          <MobileGroup
            label="Web Scraping"
            items={webScraping}
            onClick={() => setMobile(false)}
          />
          <MobileGroup
            label="Solutions"
            items={solutions}
            onClick={() => setMobile(false)}
          />
          <MobileGroup
            label="Resources"
            items={resources}
            onClick={() => setMobile(false)}
          />
          <Link
            href="/about"
            onClick={() => setMobile(false)}
            className="flex items-center gap-2 rounded-md py-4 font-bold text-sm text-slate-300 border-b border-white/10"
          >
            About
          </Link>

          <Link
            href="/book-demo"
            onClick={() => setMobile(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </>
  );
}

// mobile function

function MobileGroup({ label, items, onClick }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-3">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between text-left text-slate-200"
      >
        <span className="text-sm font-semibold">{label}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-60"
        }`}
      >
        <ul className="mt-2 min-h-0 space-y-2 pl-1">
          {items.map((it) => (
            <li key={it.title}>
              <Link
                href={it.href}
                onClick={onClick}
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-300 hover:bg-white/5"
              >
                {"icon" in it && (
                  <span className="text-emerald-400">{it.icon}</span>
                )}
                <span>{it.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
