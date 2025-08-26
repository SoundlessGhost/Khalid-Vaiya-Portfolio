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
      <p className="text-slate-600 leading-relaxed">
        Get precise, clean, and timely data for deep market insights. Track
        competitors, analyze demand, and understand customer behavior at scale.
      </p>
    ),
  },
  {
    id: "personalization",
    title: "Personalization",
    icon: <User className="w-5 h-5 text-blue-600" />,
    content: (
      <p className="text-slate-600 leading-relaxed">
        Deliver highly personalized experiences by leveraging enriched customer
        data, enabling targeted offers and smarter engagement strategies.
      </p>
    ),
  },
  {
    id: "inventory",
    title: "Inventory & Ops",
    icon: <Package className="w-5 h-5 text-blue-600" />,
    content: (
      <p className="text-slate-600 leading-relaxed">
        Keep operations efficient with real-time inventory tracking, supply
        chain insights, and competitive monitoring for better decision-making.
      </p>
    ),
  },
  {
    id: "map",
    title: "MAP Violation Monitoring",
    icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
    content: (
      <p className="text-slate-600 leading-relaxed">
        Monitor Minimum Advertised Price (MAP) violations seamlessly and protect
        your brand value across all online marketplaces.
      </p>
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
