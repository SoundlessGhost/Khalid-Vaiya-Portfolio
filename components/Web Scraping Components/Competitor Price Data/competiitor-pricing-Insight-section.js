import Image from "next/image";

export default function PricingInsightSection() {
  return (
    <section className="py-20 px-6 lg:px-24 bg-white flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left - Image with blob shape */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/images/Competitor Price/Telecommuting-pana.svg"
          alt="Competitor Price Monitoring Illustration"
          width={500}
          height={400}
          className="w-[70%] h-auto"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Smarter Competitor Price Monitoring for Confident Decisions
        </h2>
        <p className="text-gray-700 mb-6 text-base">
          With real-time competitor price monitoring, your business can react
          quickly to shifts, anticipate market changes, and optimize pricing
          strategies to maximize profit while staying competitive.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Track competitor pricing updates live with zero delays.</li>
          <li>Identify market shifts early with data-driven insights.</li>
          <li>
            Strengthen your pricing strategy with reliable, real-time data.
          </li>
        </ul>
      </div>
    </section>
  );
}
