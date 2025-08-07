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
          <button className="button1">Get Started</button>
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
