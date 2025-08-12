"use client";
import React from "react";
import {
  ShoppingCart,
  Users,
  StarIcon,
  Ticket,
  Hamburger,
  BriefcaseBusiness,
  HousePlus,
  Cog,
} from "lucide-react";

export default function MarketplaceGrid() {
  const items = [
    {
      id: "1",
      title: "Ticketing Website Pricing Data",

      slug: "clockworks/tiktok-scraper",
      description:
        "Access real-time event and ticketing insights from StubHub, SeatGeek, and Vivid Seats. Includes event details, live pricing updates, daily stock changes, and demand tracking for resellers and analysts.",
      author: "Clockworks",
      users: "57K",
      rating: 4.4,
      icon: <Ticket className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "2",
      title: "Restaurant & Food Menu Pricing Data",
      slug: "compass/crawler-google-places",
      description:
        "Track weekly menu and pricing changes from Starbucks, McDonald's, Subway, and Wendy's. Get product details, sub-menu structures, combo pricing, and historical price trends.",
      author: "Compass",
      users: "143K",
      rating: 4.2,
      icon: <Hamburger className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "3",
      title: "E-Commerce Pricing & Inventory Data",
      slug: "apify/instagram-scraper",
      description:
        "Extract product information, prices, discounts, reviews, and stock levels from top e-commerce platforms. Ideal for price monitoring, competitor tracking, and inventory optimization.",
      author: "Apify",
      users: "120K",
      rating: 4.1,
      icon: <ShoppingCart className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "4",
      title: "Job Listing Data",
      slug: "apify/website-content-crawler",
      description:
        "Collect weekly job postings from LinkedIn, Indeed, and Glassdoor. Includes job title, location, salary range, required skills, posting dates, and employer details for recruitment intelligence.",
      author: "Apify",
      users: "67K",
      rating: 4.3,
      icon: <BriefcaseBusiness className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "5",
      title: "Real Estate Listing Data",
      slug: "junglee/free-amazon-product-scraper",
      description:
        "Monitor property listings, price changes, new listings, and agent contact details. Perfect for property investors, brokers, and real estate analytics.",
      author: "Junglee",
      users: "7.6K",
      rating: 4.3,
      icon: <HousePlus className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "6",
      title: "Custom Data Solutions",
      slug: "you/new-idea",
      description:
        "Need something unique? We scrape any public website for price monitoring, inventory checks, and large-scale repetitive task automation. Fully managed and protected against all major anti-bot systems.",
      author: "You?",
      users: "—",
      rating: 5.0,
      icon: <Cog className="h-6 w-6 text-emerald-600" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* dotted background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-emerald-50/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Popular Scrapers
          </h2>
          <p className="mt-2 text-gray-600">
            Explore ready-to-use actors and data tools. Click any card to learn
            more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.id}
              className="group cursor-pointer relative rounded-xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-gray-300"
            >
              {/* header */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gray-100">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {it.title}
                  </h3>
                  {/* <p className="text-xs text-gray-500">{it.slug}</p> */}
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
