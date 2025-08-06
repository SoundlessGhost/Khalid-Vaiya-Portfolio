import { CallToActionBanner } from "@/components/call-to-action-banner";
import React from "react";

const caseStudies = [
  {
    company: "RetailNova",
    challenge: "Unable to track competitor pricing across 500+ websites",
    solution:
      "Fastscraping deployed automated scraping bots that collected pricing data daily.",
    result: "Price optimization increased revenue by 12% in 3 months.",
  },
  {
    company: "MarketLens",
    challenge: "Manual research for market trends took weeks.",
    solution: "Real-time scraping of industry news and product listings.",
    result: "Cut research time by 85% and improved decision-making speed.",
  },
  {
    company: "AutoTrendz",
    challenge: "Difficulty monitoring car listings across marketplaces.",
    solution:
      "Custom scraper to pull car data with filters and location-based logic.",
    result:
      "Increased lead conversion by 30% due to better inventory matching.",
  },
];

const CaseStudy = () => {
  return (
    <div>
      <div
        className="flex pb-32 pt-40 bg-gradient-to-r from-[#44A08D] to-[#093637] text-white
      relative overflow-hidden text-center justify-center items-center"
      >
        <div>
          <h1 className="text-5xl font-bold mb-10">
            <span>Case Study</span>
          </h1>
          <p className="text-sm max-w-2xl mx-auto">
            Explore in-depth case studies that reveal how Ficstar has helped top
            manufacturers, retailers, and global enterprises tackle complex data
            challenges with precision. Our tailored solutions have empowered
            organizations to streamline operations, enhance decision-making, and
            maintain a competitive edge in rapidly evolving markets. See how
            data-driven transformation becomes a reality—with measurable
            results.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E1F4B] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      </div>

      {/* case study section */}

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Real Success Stories
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            See how our clients use Fastscraping to automate data collection and
            gain a competitive edge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#0a5c5c] mb-2">
                  {study.company}
                </h3>
                <p className="mb-2">
                  <span className="font-medium">Challenge:</span>{" "}
                  {study.challenge}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Solution:</span>{" "}
                  {study.solution}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Result:</span> {study.result}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-600 text-white rounded-xl py-10 px-6">
            <h3 className="text-2xl font-semibold mb-2">
              Want to create your own success story?
            </h3>
            <p className="mb-4">
              Start scraping with us today — no coding required!
            </p>
            <button className="bg-white text-gray-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
