import Image from "next/image";
import React from "react";

const ExpertiseHeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            Your Growth Our Commitment
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Trusted Partner in Your
            <br /> Pricing Journey
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            We&apos;ve helped forward-thinking organizations achieve sustainable
            success through a collaborative, partner-first approach. What sets
            us apart is our unwavering dedication to your goals—delivering
            reliable service and measurable outcomes that consistently exceed
            expectations.
          </p>
          <button className="button1"> Start Free Trial</button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Expertise/Profiling-amico.png"
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

export default ExpertiseHeroSection;
