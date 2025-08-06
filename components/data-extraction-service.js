import React from "react";

const DataExtractionService = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#d9f1fb] to-[#e6f7ed] py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Most Reliable Data Extraction Services in the Market
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-16">
            Tired of wasting time on unreliable data? Our data extraction
            services are designed to give you accurate, double-verified results
            you can trust. With secure backups and thorough quality checks, we
            take care of the hard work so you can focus on making smarter
            decisions with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div>
              <div className="text-red-500 text-5xl mb-4">📋</div>
              <h3 className="font-bold text-xl mb-2">
                Exceptional Quality You Can Count On
              </h3>
              <p className="text-gray-700">
                With over 50 quality checks, we ensure you get accurate,
                reliable, and up-to-date data every single time.
              </p>
            </div>

            <div>
              <div className="text-red-500 text-5xl mb-4">🏃</div>
              <h3 className="font-bold text-xl mb-2">Stay Ahead of Problems</h3>
              <p className="text-gray-700">
                Our proactive approach tackles potential issues before they even
                happen, guaranteeing smooth, consistent results you can rely on.
              </p>
            </div>

            <div>
              <div className="text-red-500 text-5xl mb-4">📈</div>
              <h3 className="font-bold text-xl mb-2">
                Tailored to Fit Your Needs
              </h3>
              <p className="text-gray-700">
                Our{" "}
                <a className="text-blue-600 underline" href="#">
                  data extraction solution
                </a>{" "}
                is fully customizable and grows with your business, providing
                the flexibility you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataExtractionService;
