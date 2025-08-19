"use client";

import React from "react";
import Link from "next/link";

import {
  ShoppingCart,
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
      title: "Ticketing Website Pricing",
      description:
        "Access real-time event and ticketing insights from StubHub, SeatGeek, and Vivid Seats. Includes event details, live pricing updates, daily stock changes, and demand tracking for resellers and analysts.",
      icon: <Ticket className="h-6 w-6 text-emerald-600" />,
      href: "/ticketing-website-pricing",
    },
    {
      id: "2",
      title: "Restaurant & Food Menu Pricing",
      description:
        "Track weekly menu and pricing changes from Starbucks, McDonald's, Subway, and Wendy's. Get product details, sub-menu structures, combo pricing, and historical price trends.",
      icon: <Hamburger className="h-6 w-6 text-emerald-600" />,
      href: "/restaurant-food-pricing",
    },
    {
      id: "3",
      title: "E-Commerce Pricing & Inventory Data",
      description:
        "Extract product information, prices, discounts, reviews, and stock levels from top e-commerce platforms. Ideal for price monitoring, competitor tracking, and inventory optimization.",
      icon: <ShoppingCart className="h-6 w-6 text-emerald-600" />,
      href: "/e-commerce-inventory-pricing",
    },
    {
      id: "4",
      title: "Job Listing Data",
      description:
        "Collect weekly job postings from LinkedIn, Indeed, and Glassdoor. Includes job title, location, salary range, required skills, posting dates, and employer details for recruitment intelligence.",
      icon: <BriefcaseBusiness className="h-6 w-6 text-emerald-600" />,
      href: "/job-listings-data",
    },
    {
      id: "5",
      title: "Real Estate Listing Data",
      description:
        "Monitor property listings, price changes, new listings, and agent contact details. Perfect for property investors, brokers, and real estate analytics.",
      icon: <HousePlus className="h-6 w-6 text-emerald-600" />,
      href: "/real-estate-data",
    },
    {
      id: "6",
      title: "Custom Data Solutions",
      description:
        "Need something unique? We scrape any public website for price monitoring, inventory checks, and large-scale repetitive task automation. Fully managed and protected against all major anti-bot systems.",
      icon: <Cog className="h-6 w-6 text-emerald-600" />,
      href: "/customized-data",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* dotted background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-emerald-50/60 to-transparent" />

      {/* WIDER CONTAINER FOR LARGE/XL SCREENS */}
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 md:py-16">
        <div className="text-center my-8 md:my-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 lg:whitespace-nowrap">
            Popular Scrapers
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Explore ready-to-use actors and data tools. Click any card to learn
            more.
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {items.map((it) => (
            <Link
              href={it.href}
              key={it.id}
              className="group cursor-pointer relative rounded-2xl border border-gray-200 bg-white/80 p-5 md:p-6 lg:p-7 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-gray-300"
            >
              {/* header */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gray-100">
                  {it.icon}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 leading-snug">
                  {it.title}
                </h3>
              </div>

              {/* description */}
              <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                {it.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
