import Image from "next/image";
import React from "react";

const ProductDataHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#e6f4ea] to-[#fce4e4] pt-48 pb-28">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            Advanced Product Data Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tailored Product Data
            <br />
            Solutions for Enterprise Success{" "}
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Get accurate product matching and seamless data collection tailored
            to your business goals.
          </p>
          <button className="button1">Get Started</button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Product Data/New year's resolutions-pana.png"
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

export default ProductDataHeroSection;
