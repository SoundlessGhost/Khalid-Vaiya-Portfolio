import React from "react";

const WebScrapingIntro = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Hassle-Free Web Data Solutions That Actually Work
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600">
          Tired of messy scraping tools that slow you down? We make web data
          collection effortless, accurate, and tailored for your business needs.
        </p>
        <button className="button1"> Talk to a Data Specialist</button>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-10 text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2">Steep Learning Curve</h3>
          <p className="text-gray-600">
            Most scraping tools require deep coding knowledge to even get
            started. Our platform removes that barrier—no HTML or JS mastery
            needed.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Frustrating Interfaces</h3>
          <p className="text-gray-600">
            Traditional tools are clunky and often blocked by websites. We
            handle the tech for you, so you can focus on the data you need.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Too Technical for Small Tasks
          </h3>
          <p className="text-gray-600">
            No need to wrestle with proxies or regex. Our service is optimized
            for both simple and complex scraping—without the headache.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebScrapingIntro;
