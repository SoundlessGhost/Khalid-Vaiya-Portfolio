import Image from "next/image";
import React from "react";

const articles = [
  {
    title: "Lessons from Working with Enterprise Data Clients",
    description:
      "After decades of helping large organizations scale their data strategies, here are the biggest insights I’ve learned.",
    image: "/images/Articles/Articles1.jpg",
  },
  {
    title: "SaaS vs Managed Web Scraping — What Should You Choose?",
    description:
      "Understanding the difference between platforms and full-service scraping helps you invest smart and scale faster.",
    image: "/images/Articles/Articles2.jpg",
  },
  {
    title: "How Clean Data Can Boost Business Decisions",
    description:
      "From pricing analysis to trend forecasting—discover how structured, accurate data leads to smarter and faster choices.",
    image: "/images/Articles/Articles3.jpg",
  },
];

const Articles = () => {
  return (
    <div>
      <div
        className="flex pb-32 pt-40  text-black bg-gradient-to-br from-[#e6f4ea] to-[#fce4e4]
      relative overflow-hidden text-center justify-center items-center"
      >
        <div>
          <h1 className="text-5xl font-bold mb-10">
            <span>Articles</span>
          </h1>
          <p className="text-sm max-w-2xl mx-auto">
            Browse expert insights on web scraping, strategic pricing,
            data-driven decisions, and emerging eCommerce trends—designed for
            enterprise businesses in retail, manufacturing, and beyond.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E1F4B] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      </div>

      {/* Article Grid Section */}

      <section className="my-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
