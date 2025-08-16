"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  SiAmazon,
  SiWalmart,
  SiZillow,
  SiGlassdoor,
  SiLinkedin,
} from "react-icons/si";
import { FiAtSign } from "react-icons/fi";

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
    icon: <SiAmazon className="text-4xl mx-auto mb-4 text-[#FF9900]" />, // Amazon orange
    title: "Amazon Product Reviews and Ratings Scraping API",
    desc: "Our Amazon Product Reviews and Ratings efficiently extracts structured data from websites, providing accurate and real-time insights.",
    link: "/amazon-scraping",
  },
  {
    icon: <SiWalmart className="text-4xl mx-auto mb-4 text-[#0071CE]" />, // Walmart blue
    title: "Walmart Search Results Data Scraping API",
    desc: "Our Walmart Search Results Data Scraper efficiently extracts structured data from websites, providing accurate and real-time insights.",
    link: "/walmart-scraping",
  },
  {
    icon: <SiZillow className="text-4xl mx-auto mb-4 text-[#0074E4]" />, // Zillow blue
    title: "Zillow Scraping API",
    desc: "Our Zillow Scraper efficiently extracts structured data from websites, providing accurate and real-time insights.",
    link: "/zillow-scraping",
  },
  {
    icon: <FiAtSign className="text-4xl mx-auto mb-4 text-[#287cca]" />, // Email purple-ish
    title: "Scrape Emails and Contact Scraping API",
    desc: "Our Scrape Emails and Contact Details efficiently extracts structured data from websites, providing accurate and real-time insights.",
    link: "/email-scraping",
  },
  {
    icon: <SiGlassdoor className="text-4xl mx-auto mb-4 text-[#0CAA41]" />, // Glassdoor green
    title: "Glassdoor Job Listings Scraping API",
    desc: "Our Glassdoor Job Listings Scraper efficiently extracts structured data from websites, providing accurate and real-time insights.",
    link: "/glassdoor-scraping",
  },
  {
    icon: <SiLinkedin className="text-4xl mx-auto mb-4 text-[#0A66C2]" />, // LinkedIn blue
    title: "LinkedIn Scraping API",
    desc: "Our LinkedIn Scraper efficiently extracts structured data from websites, providing accurate and real-time insights.",
    link: "/linkedin-scraping",
  },
];

export default function ScrapingFeaturesV2() {
  const sectionRef = useInViewOnce();

  return (
    <section
      ref={sectionRef}
      className="reveal py-20 px-6  md:px-16  bg-gradient-to-b from-white via-white to-slate-50"
    >
      <div className="mx-auto max-w-3xl text-center mb-20">
        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How Businesses Are Using Data with Web Scraping Services?
        </h2>
        <p className="mt-3 text-slate-600">
          Web scraping allows businesses to get unstructured data from the World
          Wide Web and convert it into well-structured data, so that you can
          consume it using their applications, offering important business
          value.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 md:opacity-30">
        <svg
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dot"
              x="0"
              y="0"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#e5e7eb" />
            </pattern>
            <clipPath id="worldClip">
              <path d="M100 360c0-180 210-280 460-300s580 50 720 210-70 320-360 360-580-10-750-120-70-120-70-150z" />
            </clipPath>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dot)"
            clipPath="url(#worldClip)"
          />
        </svg>
      </div>

      <div className="grid gap-20 md:grid-cols-3 max-w-7xl mx-auto">
        {items.map((it, i) => (
          <Link
            key={i}
            href={it.link}
            className="card bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition block"
            style={{ "--d": `${i * 120}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="icon-pop text-slate-800">{it.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
            </div>
            <p className="text-gray-600">{it.desc}</p>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .reveal .card {
          opacity: 0;
          transform: translateY(14px) scale(0.98);
        }
        .reveal h2 {
          opacity: 0;
          transform: translateY(10px);
        }
        .reveal-show .card {
          animation: pop 700ms ease-out forwards;
          animation-delay: var(--d, 0ms);
        }
        .reveal-show h2 {
          animation: fadeUp 600ms ease-out forwards;
        }
        .reveal-show .icon-pop {
          animation: iconIn 500ms ease-out both;
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
      `}</style>
    </section>
  );
}
