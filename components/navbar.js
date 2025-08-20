"use client";

import Link from "next/link";
import TermsThenFormInDialog from "./TermsGatedForm";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Scale,
  BriefcaseBusiness,
  FileText,
  BookOpen,
  LifeBuoy,
  Briefcase,
  Smartphone,
  Code2,
  Server,
  Utensils,
  ShoppingCart,
  Home,
  Settings,
  Ticket,
} from "lucide-react";

// NavLink Function
function NavLink({ href, children, isDark }) {
  const base = "group relative font-bold px-3 text-[16px] transition";
  const tone = isDark
    ? "text-slate-200/90 hover:text-white"
    : "text-slate-700 hover:text-slate-900";
  return (
    <Link href={href} className={`${base} ${tone}`}>
      {children}
      <span
        className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300
                        ${
                          isDark ? "bg-emerald-400" : "bg-slate-900/40"
                        } group-hover:scale-x-100`}
      />
    </Link>
  );
}

// Scroll Navbar
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

// Out side Close
function useOutsideClose(ref, onClose) {
  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose?.();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [ref, onClose]);
}

// Flyout Components
function Flyout({ label, items, isDark = true }) {
  const [open, setOpen] = useState(false);

  const boxRef = useRef(null);
  useOutsideClose(boxRef, () => setOpen(false));

  return (
    <div
      className="relative p-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`group py-2 font-bold px-3 text-[16px] transition
                          ${
                            isDark
                              ? "text-slate-200/90 hover:text-white"
                              : "text-slate-700 hover:text-slate-900"
                          }`}
      >
        {label}
        <span
          className={`block h-px scale-x-0 transition-all duration-300 group-hover:scale-x-100
                          ${isDark ? "bg-emerald-400" : "bg-slate-900/40"}`}
        />
      </button>

      {open && <div className="absolute left-0 right-0 top-full h-2" />}

      <div
        ref={boxRef}
        className={`absolute left-1/2 top-full z-50 mt-1 w-[420px] -translate-x-1/2 rounded-xl p-3 shadow-2xl ring-1 transition-all duration-200
                   ${
                     open
                       ? "opacity-100 translate-y-0"
                       : "pointer-events-none opacity-0 -translate-y-1"
                   }
                   ${
                     isDark
                       ? "border-white/10 bg-slate-900/70 backdrop-blur-xl ring-black/20"
                       : "border-slate-200 bg-white/90 backdrop-blur-xl ring-slate-900/5"
                   }`}
      >
        <ul
          className={`grid grid-cols-1 divide-y ${
            isDark ? "divide-white/5" : "divide-slate-200"
          }`}
        >
          {items.map((it) => (
            <li key={it.title}>
              <Link
                href={it.href}
                className={`flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-white/5
                            ${
                              isDark
                                ? "text-white"
                                : "text-slate-900 hover:bg-slate-50"
                            }`}
              >
                {"icon" in it && (
                  <span
                    className={`${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {it.icon}
                  </span>
                )}
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {it.title}
                  </p>
                  {"desc" in it && (
                    <p
                      className={`text-xs ${
                        isDark ? "text-slate-300/80" : "text-slate-600"
                      }`}
                    >
                      {it.desc}
                    </p>
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

// Web Scraping Menu Data
const webScraping = [
  {
    title: "Web Scraping Service",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
    desc: "Clean, reliable, automated extraction at scale.",
    href: "/web-scraping-service",
  },
  {
    title: "Competitor Price Monitoring",
    icon: <Scale className="h-4 w-4" />,
    desc: "Live pricing feeds to outpace the market.",
    href: "/competitor-price-monitoring",
  },
  {
    title: "Mobile App Scraping",
    icon: <Smartphone className="h-4 w-4" />,
    desc: "Battle-tested playbooks trusted by brands.",
    href: "/mobile-app-scraping",
  },
  {
    title: "Web Scraping API",
    icon: <Code2 className="h-4 w-4" />,
    desc: "Customized pipelines, zero clutter.",
    href: "/web-scraping-api",
  },
  {
    title: "Enterprise Web Crawling",
    icon: <Server className="h-4 w-4" />,
    desc: "A transparent process from crawl to CSV.",
    href: "/enterprise-web-crawling",
  },
];

// Solutions Menu Data
const solutions = [
  {
    title: "Ticketing Website Pricing",
    icon: <Ticket className="h-4 w-4" />,
    desc: "Stay ahead with live ticket prices and competitor comparisons.",
    href: "/ticketing-website-pricing",
  },
  {
    title: "Restaurant & Food Pricing",
    icon: <Utensils className="h-4 w-4" />,
    desc: "Menus, dishes, and pricing organized into structured catalogs.",
    href: "/restaurant-food-pricing",
  },
  {
    title: "E-Commerce & Inventory Pricing",
    icon: <ShoppingCart className="h-4 w-4" />,
    desc: "Product listings, variants, and stock data—clean and reliable.",
    href: "/e-commerce-inventory-pricing",
  },
  {
    title: "Job Listing Data",
    icon: <Briefcase className="h-4 w-4" />,
    desc: "Hiring insights with roles, skills, salaries, and demand trends.",
    href: "/job-listings-data",
  },
  {
    title: "Real Estate Listing Data",
    icon: <Home className="h-4 w-4" />,
    desc: "Property details, pricing shifts, and market movement analysis.",
    href: "/real-estate-data",
  },
  {
    title: "Customized Data Solution",
    icon: <Settings className="h-4 w-4" />,
    desc: "Tailored data feeds with the exact fields you need, on demand.",
    href: "/customized-data",
  },
];

// Resources Menu Data
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

// Main Components
export default function NavbarAnimated() {
  const { hidden, elevated } = useScrollNav();
  const [mobile, setMobile] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const isDark = isHome && !elevated;
  const surface = isDark
    ? "bg-slate-900/50 backdrop-blur-md border-transparent text-white"
    : "bg-white/80 backdrop-blur-xl border-slate-200 text-slate-900";

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className={`px-4 sm:px-6 lg:px-8 border-b ${surface}`}>
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link
              href="/"
              className={`text-xl font-bold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              <span className="text-emerald-500">Fast</span>scraping
            </Link>

            <div className="flex h-16 items-center justify-between">
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                <NavLink href="/" isDark={isDark}>
                  Home
                </NavLink>
                <Flyout
                  label="Web scraping"
                  items={webScraping}
                  isDark={isDark}
                />
                <Flyout label="Solutions" items={solutions} isDark={isDark} />
                <NavLink href="/pricing" isDark={isDark}>
                  Pricing
                </NavLink>
                <Flyout label="Resources" items={resources} isDark={isDark} />
                <NavLink href="/about" isDark={isDark}>
                  About
                </NavLink>
              </nav>

              {/* CTA  Mobile */}
              <div className="flex items-center gap-3">
                <TermsThenFormInDialog btn_name="Book a Demo" />
                <button
                  className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-1
                              ${
                                isDark
                                  ? "bg-white/5 text-white ring-white/10"
                                  : "bg-slate-100 text-slate-900 ring-slate-300"
                              }`}
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
        </div>

        {/* Subtle bottom separator glow to match hero */}
        <div
          className={`pointer-events-none h-px w-full ${
            isDark
              ? "bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
              : "bg-slate-200"
          }`}
        />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top bg-slate-950/90 backdrop-blur-xl transition-transform duration-300 md:hidden
        ${mobile ? "scale-y-100" : "scale-y-0"} border-t border-white/10`}
      >
        <div className="px-6 py-4">
          <Link
            href="/"
            onClick={() => setMobile(false)}
            className="flex items-center gap-2 rounded-md py-4 font-bold text-sm text-slate-300 border-b border-white/10"
          >
            Home
          </Link>
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
          <Link
            href="/pricing"
            onClick={() => setMobile(false)}
            className="flex items-center gap-2 rounded-md py-4 font-bold text-sm text-slate-300 border-b border-white/10"
          >
            Pricing
          </Link>
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

          <TermsThenFormInDialog
            beforeOpen={() => setMobile(false)}
            buttonClassName="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
            btn_name="Book a Demo"
          />
        </div>
      </div>
    </>
  );
}

// Mobile Function
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
