import Image from "next/image";
import React from "react";

const WebExtractionHeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            End-to-end URL extraction designed for speed, precision, and scale
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock High-Value Insights
            <br />
            with Advanced Web Data Extraction
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Web data extraction can look simple—until you need to do it at
            scale. With ever-changing site structures, maintaining accuracy
            demands intelligent parsing, continuous updates, and tailored
            solutions. Our platform simplifies this complexity, giving you the
            clean, structured data you need—fast.
          </p>
          <button className="button1">Get Started</button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Web Extraction/Data extraction-pana.png"
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

export default WebExtractionHeroSection;
