import Image from "next/image";

export default function WebExtraction() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 w-full ">
          <Image
            src="/images/Web Extraction/Coding workshop-bro.png"
            alt="Web Extraction Illustration"
            width={500}
            height={400}
            className="w-[80%] -mt-10 h-auto object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Is Web Extraction?
          </h2>
          <p className="text-gray-700 mb-4">
            Not every company needs a full web scraping system. Many already
            know what data they need and where to get it. What they lack is
            clean, structured, and ready-to-use information.
          </p>
          <p className="text-gray-700 mb-4">
            Web extraction focuses on pulling specific and structured data from
            websites — like prices, directories, product listings, reviews, or
            job ads. That data is then formatted into something practical like
            spreadsheets, JSON, or API feeds.
          </p>
          <p className="text-gray-700 mb-4">
            Our tools make it easy to gather insights from many pages at once,
            especially when you need bulk data without messy code. Instead of
            scraping everything, we help you target only what matters.
          </p>
          <p className="text-gray-700">
            At Fastscraping we turn unorganized web content into reliable
            datasets — clean, fast, and fully tailored to your business needs.
          </p>
        </div>
      </div>
    </section>
  );
}
