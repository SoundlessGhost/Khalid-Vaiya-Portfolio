import Image from "next/image";
import React from "react";

const ebooks = [
  {
    title: "Smart Pricing for Fashion Brands",
    description:
      "Insights gathered from industry leaders to help fashion retailers refine their pricing models effectively.",
    image: "/images/Ebook/ebooks1.jpg",
  },
  {
    title: "Pricing Strategies in Automotive Retail",
    description:
      "Explore practical examples and pricing approaches from top automotive businesses across the globe.",
    image: "/images/Ebook/ebooks2.jpg",
  },
  {
    title: "Web Scraping Costs Explained",
    description:
      "A complete guide to help you understand what influences scraping costs and how to optimize your spend.",
    image: "/images/Ebook/ebooks3.jpg",
  },
];

const EbookPage = () => {
  return (
    <div>
      <div
        className="flex pb-32 pt-40  text-black bg-gradient-to-br from-[#e6f4ea] to-[#fce4e4]
      relative overflow-hidden text-center justify-center items-center"
      >
        <div>
          <h1 className="text-5xl font-bold mb-10">
            <span>Ebooks</span>
          </h1>
          <p className="text-sm max-w-2xl mx-auto">
            Discover our collection of in-depth ebooks offering expert insights
            on web scraping, pricing strategies, eCommerce trends, and data
            solutions. Designed for enterprise companies, our ebooks help
            manufacturers, retailers, and more harness the power of data to
            drive business growth.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E1F4B] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      </div>

      <section className="my-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Latest Ebooks & Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-lg shadow hover:shadow-md transition"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={ebook.image}
                    alt={ebook.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {ebook.title}
                  </h3>
                  <p className="text-sm text-gray-600">{ebook.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EbookPage;
