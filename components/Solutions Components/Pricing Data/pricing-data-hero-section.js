import Image from "next/image";
import React from "react";

const PricingDataHeroSection = () => {
  return (
    <section className="bg-white py-20">
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
          <button className="button1">Get Started</button>
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
