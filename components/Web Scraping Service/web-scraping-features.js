import React from "react";
import { FaClock, FaCheckCircle, FaHandHolding } from "react-icons/fa";

const ScrapingFeatures = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Smooth & Smart Web Scraping Solutions
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Feature 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <FaClock className="text-red-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No More Delays</h3>
          <p className="text-gray-600">
            Get web data faster with a reliable system that works quietly behind
            the scenes—so you never miss a beat.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <FaCheckCircle className="text-red-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Accurate Every Time</h3>
          <p className="text-gray-600">
            Our service delivers precise, tailored data—built to meet your
            requirements with zero guesswork.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <FaHandHolding className="text-red-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Effortless Operations</h3>
          <p className="text-gray-600">
            Focus on strategy while we manage the technical work—saving you
            time, cost, and complexity.
          </p>
        </div>
      </div>

      <button className="button1 mt-10">Start Free Trial</button>
    </section>
  );
};

export default ScrapingFeatures;
