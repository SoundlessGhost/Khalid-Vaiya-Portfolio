import Image from "next/image";
import React from "react";

const PricingDataHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#e6f4ea] to-[#fce4e4] pt-48 pb-28">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            Pricing Data Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Accurate, Real-Time Pricing
            <br />
            Insights to Outpace the Competition
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Unlock the power of smart pricing with Fastscraping — track
            competitor prices in real-time and make data-driven decisions that
            boost your market advantage.
          </p>
          <div className="mt-10">
            <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
              Get Started
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Pricing Data/Data extraction-cuate.png"
            alt="Web scraping illustration"
            width={400}
            height={300}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingDataHeroSection;
