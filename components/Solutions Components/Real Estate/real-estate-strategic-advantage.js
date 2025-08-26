"use client";

import { useState } from "react";
import { BarChart3, Search, User, Package, AlertTriangle } from "lucide-react";

const tabs = [
  {
    id: "dynamic",
    title: "Dynamic Pricing & Valuation",
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Real-time comps, demand signals & seasonal trends
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Adjust list or rent prices with confidence. We aggregate comparable
          sales, rental comps, days-on-market, price reductions, and
          neighborhood demand signals to recommend the optimal price for each
          property.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700">
          <li>
            Automated CMA from public portals, MLS-like feeds & assessor data
          </li>
          <li>Rental index + seasonality curves per ZIP/neighborhood</li>
          <li>Alerts for competing listings undercutting your price</li>
          <li>What-if pricing to hit target absorption/occupancy</li>
        </ul>
      </>
    ),
  },
  {
    id: "research",
    title: "Market Research",
    icon: <Search className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Neighborhood intelligence for smarter acquisitions
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Track supply, absorption, and pipeline projects to spot undervalued
          sub-markets and time your buys or launches.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700">
          <li>Inventory heatmaps: new listings, pending, sold, withdrawn</li>
          <li>
            Cap rate & GRM trends by asset type (SFH, Condo, MF, Mixed-Use)
          </li>
          <li>Permits & new-build pipeline monitoring</li>
          <li>Demographics: schools, commute, walkability, crime indices</li>
        </ul>
      </>
    ),
  },
  {
    id: "personalization",
    title: "Lead Personalization",
    icon: <User className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Match the right buyer or renter to the right property
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Enrich leads with budget, preferred neighborhoods, schools, and
          amenities to deliver tailored recommendations and higher conversion.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700">
          <li>
            Similarity search on features: beds/baths, lot size, HOA, parking
          </li>
          <li>Automated alerts when a matching property hits the market</li>
          <li>Smart follow-ups based on engagement & viewing history</li>
          <li>Fair-housing safe copy suggestions out of the box</li>
        </ul>
      </>
    ),
  },
  {
    id: "inventory",
    title: "Portfolio & Ops",
    icon: <Package className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Operate your portfolio with live listing & occupancy data
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Keep every unit current across portals, reduce vacancy days, and
          streamline turn-over decisions with fresh market context.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700">
          <li>
            Cross-portal sync: detect stale photos, missing amenities, bad links
          </li>
          <li>Unit-level KPIs: inquiries, showings, DOM, concession impact</li>
          <li>Renovation ROI: comp uplift from finishes & amenities</li>
          <li>Lease-up pacing vs. target absorption with early warnings</li>
        </ul>
      </>
    ),
  },
  {
    id: "map",
    title: "Compliance & Listing Quality",
    icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          MLS rules, brand standards & accuracy—automatically monitored
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Protect your brand and avoid takedowns. We continuously check listings
          for compliance, accuracy, and policy violations.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700">
          <li>
            Detect mispriced units, duplicate listings, or bait-and-switch
          </li>
          <li>
            Policy checks: fair-housing language, watermarking, disclosure items
          </li>
          <li>Photo & floor-plan quality scoring with missing-field alerts</li>
          <li>Change-logs: who edited what & when across channels</li>
        </ul>
      </>
    ),
  },
];

export default function RealEstateStrategicDataAdvantage() {
  const [active, setActive] = useState("dynamic");
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <section className="pb-20 pt-10 bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Strategic Real Estate Data Advantage
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Turn market noise into decisions. Our web-scraped & verified real
            estate datasets power pricing, acquisitions, leasing, and operations
            across your portfolio—updated continuously and ready to use.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
                border
                ${
                  active === tab.id
                    ? "bg-white text-blue-700 border-blue-600 shadow"
                    : "bg-white/70 backdrop-blur border-slate-200 hover:border-blue-300 hover:text-blue-700"
                }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="rounded-2xl border border-slate-200 p-8 bg-white">
          {activeTab?.content}
        </div>
      </div>
    </section>
  );
}
