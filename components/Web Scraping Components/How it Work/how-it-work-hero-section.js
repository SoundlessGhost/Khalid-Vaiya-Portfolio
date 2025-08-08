import Image from "next/image";
import React from "react";

const HowItWorkHeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            From Discovery to Delivery
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Experience How Fastscraping End-to-End
            <br />
            Web Scraping Solutions Drive Results
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            From identifying your data goals to delivering clean, real-time
            insights—tailored to move your business forward with confidence.
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
            src="/images/How it Work/Work time-amico (1).png"
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

export default HowItWorkHeroSection;
