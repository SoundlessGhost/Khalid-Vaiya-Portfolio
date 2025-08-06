import Image from "next/image";
import React from "react";

const WebScrapingServiceHeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            All the Web Data You Need In One Place
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Fully-Managed Web
            <br />
            Scraping Service
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Collect accurate and reliable data from every corner of the
            internet—make smarter business decisions and always stay one step
            ahead of the competition.
          </p>
          <button className="bg-gray-600 hover:bg-gray-700 cursor-pointer text-white font-semibold px-6 py-3 rounded shadow">
            Contact a Data Expert
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/Money.png"
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

export default WebScrapingServiceHeroSection;
