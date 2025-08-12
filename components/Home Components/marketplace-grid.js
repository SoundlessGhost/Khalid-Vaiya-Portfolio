"use client";
import React from "react";
import {
  Music,
  MapPin,
  Instagram,
  Globe,
  ShoppingCart,
  FlaskConical,
  Users,
  StarIcon,
} from "lucide-react";

export default function MarketplaceGrid() {
  const items = [
    {
      id: "tiktok",
      title: "TikTok Scraper",
      slug: "clockworks/tiktok-scraper",
      description:
        "Extract data from TikTok videos, hashtags, and users. Use URLs or search queries to scrape...",
      author: "Clockworks",
      users: "57K",
      rating: 4.4,
      icon: <Music className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "gmaps",
      title: "Google Maps Scraper",
      slug: "compass/crawler-google-places",
      description:
        "Extract data from thousands of Google Maps locations and businesses, including reviews,...",
      author: "Compass",
      users: "143K",
      rating: 4.2,
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "instagram",
      title: "Instagram Scraper",
      slug: "apify/instagram-scraper",
      description:
        "Scrape and download Instagram posts, profiles, places, hashtags, photos, and comments. Get...",
      author: "Apify",
      users: "120K",
      rating: 4.1,
      icon: <Instagram className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "crawler",
      title: "Website Content Crawler",
      slug: "apify/website-content-crawler",
      description:
        "Crawl websites and extract text content to feed AI models, LLM apps, vector databases, or...",
      author: "Apify",
      users: "67K",
      rating: 4.3,
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "amazon",
      title: "Amazon Scraper",
      slug: "junglee/free-amazon-product-scraper",
      description:
        "Gets you product data from Amazon. Unofficial API. Scrapes and downloads product information...",
      author: "Junglee",
      users: "7.6K",
      rating: 4.3,
      icon: <ShoppingCart className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "build",
      title: "Build your own Actor",
      slug: "you/new-idea",
      description:
        "Apify gives you all the tools and documentation you need to build reliable scrapers. Fast.",
      author: "You?",
      users: "—",
      rating: 5.0,
      icon: <FlaskConical className="h-6 w-6 text-emerald-600" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* dotted background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-emerald-50/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Popular Scrapers
        </h2>
        <p className="mt-2 text-gray-600">
          Explore ready-to-use actors and data tools. Click any card to learn
          more.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.id}
              className="group cursor-pointer relative rounded-xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-gray-300"
            >
              {/* header */}
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gray-100">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {it.title}
                  </h3>
                  <p className="text-xs text-gray-500">{it.slug}</p>
                </div>
              </div>

              {/* description */}
              <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                {it.description}
              </p>

              {/* footer */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {it.author}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-4 w-4" /> {it.users}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <StarIcon className="h-4 w-4" />
                    {it.rating}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
