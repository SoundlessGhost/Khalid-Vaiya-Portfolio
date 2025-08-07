import Image from "next/image";
import React from "react";

const CompetitorPriceDataHeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            Set the Right Price, Every Time With Confidence
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Real-Time Competitive
            <br />
            Pricing Data
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Make informed pricing decisions with confidence powered by precise,
            timely, and continuously updated competitor price data.
          </p>
          <button className="button1"> Start Free Trial</button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/Competitive intelligence.png"
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

export default CompetitorPriceDataHeroSection;
