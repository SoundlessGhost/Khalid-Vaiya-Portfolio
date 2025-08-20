import React from "react";

const PricingSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Choose the plan that works best for you and your team.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="relative flex flex-col items-center p-6 bg-white border rounded-lg shadow-xl">
            <span className="absolute top-0 right-0 py-1 px-4 bg-green-500 text-white text-xs font-semibold rounded-bl-lg">
              Essential features for individuals
            </span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              $9 <span className="text-sm">/month</span>
            </h3>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>{" "}
                1 user
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>{" "}
                5 projects
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>{" "}
                5GB storage
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>{" "}
                Basic support
              </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col items-center p-6 bg-white border rounded-lg shadow-xl">
            <span className="absolute top-0 right-0 py-1 px-4 bg-blue-500 text-white text-xs font-semibold rounded-bl-lg">
              Most Popular
            </span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              $29 <span className="text-sm">/month</span>
            </h3>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                5 users
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                Unlimited projects
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                50GB storage
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                Priority support
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>{" "}
                API access
              </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Team Plan */}
          <div className="relative flex flex-col items-center p-6 bg-white border rounded-lg shadow-xl">
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              $79 <span className="text-sm">/month</span>
            </h3>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                Unlimited users
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                Unlimited projects
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                500GB storage
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                24/7 support
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                API access
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                SSO authentication
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>{" "}
                Custom integrations
              </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
