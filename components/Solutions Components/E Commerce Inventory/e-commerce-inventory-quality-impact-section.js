"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const datasets = {
  before: [
    { name: "Conversion Rate", value: 2.5 },
    { name: "Marketing ROI", value: 150 },
    { name: "Customer Retention", value: 60 },
    { name: "Operational Efficiency", value: 55 },
  ],
  after: [
    { name: "Conversion Rate", value: 6.8 },
    { name: "Marketing ROI", value: 210 },
    { name: "Customer Retention", value: 85 },
    { name: "Operational Efficiency", value: 75 },
  ],
  net: [
    { name: "Conversion Rate", value: 4.3 },
    { name: "Marketing ROI", value: 60 },
    { name: "Customer Retention", value: 25 },
    { name: "Operational Efficiency", value: 20 },
  ],
};

export default function QualityImpactSection() {
  const [active, setActive] = useState("before");

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            The Quantifiable Impact of Quality Data
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            For e-commerce leaders like you, every decision impacts the bottom
            line. This interactive chart visualizes the proven performance lift
            our clients experience across critical metrics—from conversion rates
            to marketing ROI and operational efficiency—after integrating
            PromptCloud&apos;s data solutions. See how a strategic investment in
            precise, real-time data directly translates into a healthier, more
            competitive business.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { key: "before", label: "Before PromptCloud" },
            { key: "after", label: "After PromptCloud" },
            { key: "net", label: "Net Gain" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition 
                ${
                  active === tab.key
                    ? "bg-blue-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="w-full h-96 bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={datasets[active]} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fill: "#475569", fontSize: 12 }} />
              <YAxis
                tick={{ fill: "#475569", fontSize: 12 }}
                label={{
                  value: "Percentage (%)",
                  angle: -90,
                  position: "insideLeft",
                  style: { fill: "#475569", fontSize: 12 },
                }}
              />
              <Tooltip
                cursor={{ fill: "rgba(59,130,246,0.1)" }}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              />
              <Bar
                dataKey="value"
                fill={
                  active === "before"
                    ? "#64748b"
                    : active === "after"
                    ? "#2563eb"
                    : "#16a34a"
                }
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
