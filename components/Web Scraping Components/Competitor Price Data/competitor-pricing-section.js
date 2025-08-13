import Image from "next/image";

export default function CompetitorPricingSection() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <Image
          src="/images/Competitor Price/Business competition.png"
          alt="Business competition "
          width={400}
          height={300}
          className="w-[60%] h-auto"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Reliable Competitor Price Insights to Stay Ahead
        </h2>
        <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
          <li>
            ✔ Get tailored pricing data that’s precise, dependable, and
            structured for your goals.
          </li>
          <li>
            ✔ Count on on-time delivery of high-quality, up-to-date competitor
            insights—always.
          </li>
          <li>
            ✔ Experience fast and knowledgeable support from experts who know
            your market.
          </li>
          <li>
            ✔ We continuously innovate to provide smarter data and better
            outcomes.
          </li>
          <li>
            ✔ Build a lasting, professional partnership that drives mutual
            growth and value.
          </li>
        </ul>
      </div>
    </section>
  );
}
