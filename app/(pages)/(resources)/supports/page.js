import React from "react";
import { FaEnvelopeOpenText, FaHandshake } from "react-icons/fa";
import { HiDocumentText, HiCode, HiChatAlt2 } from "react-icons/hi";

const SupportsPage = () => {
  return (
    <div className="">
      <div
        className="flex pb-32 pt-40  text-black bg-gradient-to-br from-[#e6f4ea] to-[#fce4e4]
      relative overflow-hidden text-center justify-center items-center"
      >
        <div>
          <h1 className="text-5xl font-bold mb-10">
            <span>Support</span>
          </h1>
          <p className="text-sm max-w-2xl mx-auto">
            Browse our resources for helpful guides, integration tips, and fast
            answers. Whether youre setting up or troubleshooting, were here to
            support you.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E1F4B] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      </div>

      {/* support resource */}

      <div className="grid my-40 mx-20  grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Data Strategy */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <HiDocumentText className="text-red-600 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Data Strategy Insights
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Learn how smart data handling can improve business outcomes, from
            pricing to forecasting.
          </p>
          <a
            href="#"
            className="text-gray-600 text-sm font-medium hover:underline"
          >
            Read more
          </a>
        </div>

        {/* Automation Tutorials */}
        <div className="bg-white border border-blue-600 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <HiCode className="text-red-600 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Automation Walkthroughs
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Step-by-step guides on automating your workflows using web scraping
            tools.
          </p>
          <a
            href="#"
            className="text-gray-600 text-sm font-medium hover:underline"
          >
            Read more
          </a>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <HiChatAlt2 className="text-red-600 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Common Questions
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Find answers to common queries about scraping, setup, and
            troubleshooting.
          </p>
          <a
            href="#"
            className="text-gray-600 text-sm font-medium hover:underline"
          >
            Read more
          </a>
        </div>
      </div>

      {/* Get in Touch */}

      <section className="bg-white pb-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-12">
            Cant find the answer you re looking for in our help articles? No
            problem — reach out to us directly and our team will get back to you
            shortly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Support */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <FaEnvelopeOpenText className="text-red-600 text-2xl" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Contact Support
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Need help navigating our platform or stuck on something
                technical? Our support team is here to guide you through.
              </p>

              <div className="mt-10">
                <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
                  Contact Support
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

            {/* Contact Sales */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <FaHandshake className="text-red-600 text-2xl" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Contact Sales
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Curious about pricing or need a tailored solution? Our sales
                team is ready to help you explore the right plan for your needs.
              </p>
              <div className="mt-10">
                <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
                  Contact Sales
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportsPage;
