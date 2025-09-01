"use client";

import { useState } from "react";
import { BarChart3, Search, User, Package, AlertTriangle } from "lucide-react";

const tabs = [
  {
    id: "dynamic",
    title: "Dynamic Pricing",
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Dynamic Pricing & Competitive Intelligence
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Automatically monitor and react to competitor price changes in near
          real-time. Our data feeds your pricing engine to optimize margins,
          maximize revenue, and win sales without manual effort. Stay ahead of
          market shifts and pricing wars.
        </p>
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
          Market Research & Trend Detection
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Identify emerging best-sellers, category shifts, and new market
          opportunities before your rivals. We provide the comprehensive market
          data you need for strategic planning, product development, and
          confident expansion.
        </p>
      </>
    ),
  },
  {
    id: "personalization",
    title: "Personalization",
    icon: <User className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Enhanced Customer Understanding
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Aggregate customer behavior data, reviews, and feedback from across
          the web. Build rich customer profiles to power hyper-personalized
          marketing campaigns, increase engagement, and boost customer lifetime
          value.
        </p>
      </>
    ),
  },
  {
    id: "inventory",
    title: "Inventory & Ops",
    icon: <Package className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Optimized Inventory & Operations
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Monitor competitor stock levels and assortment strategies to optimize
          your own inventory. Avoid stockouts of high-demand products and reduce
          carrying costs on slow-movers with data-driven inventory management.
        </p>
      </>
    ),
  },
  {
    id: "map",
    title: "MAP Violation Monitoring",
    icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          MAP Violation Monitoring
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Protect your brand and maintain channel pricing integrity. We
          automatically detect and report sellers who violate your Minimum
          Advertised Price (MAP) policy, providing the documentation you need
          for enforcement.
        </p>
      </>
    ),
  },
];

export default function StrategicDataAdvantage() {
  const [active, setActive] = useState("dynamic");
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <section className="pb-20 pt-10 bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Your Strategic Data Advantage
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Don’t just compete—dominate. PromptCloud delivers the precise,
            clean, and timely data you need to power your most critical
            e-commerce functions. Click each tab to discover how our data can
            become your most valuable asset for growth and efficiency.
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
