import Image from "next/image";

export default function CompetitorPriceMonitoringPromo() {
  return (
    <section className="bg-white py-20 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <p className="text-green-600 font-medium text-lg mb-2">
          Competitor Price Monitoring
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Real-time Competitor Pricing Insights for Smarter Decisions
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Track competitor prices in real time and respond with confidence. Our
          solution helps you optimize pricing strategies, protect profit
          margins, and stay one step ahead in your market.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>
            Get live competitor price updates to react quickly and accurately.
          </li>
          <li>
            Detect trends and shifts early with advanced monitoring tools.
          </li>
          <li>
            Back your pricing strategy with trusted data for competitive
            advantage.
          </li>
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/images/Competitor Price/Monitor-rafiki.svg"
          alt="Competitor Price Monitoring Illustration"
          width={500}
          height={400}
          className="w-[70%] h-auto"
        />
      </div>
    </section>
  );
}
