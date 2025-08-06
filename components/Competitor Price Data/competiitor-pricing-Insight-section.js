import Image from "next/image";

export default function PricingInsightSection() {
  return (
    <section className="py-20 px-6 lg:px-24 bg-white flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left - Image with blob shape */}
      <div className="relative w-full lg:w-1/2">
        <div className="relative w-full h-[400px] rounded-[60%_40%_40%_60%/60%_40%_60%_40%] overflow-hidden shadow-lg">
          <Image
            src="/images/Competitor Price/team.jpg"
            alt="Team discussing pricing"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Stay Ahead in Pricing with Strategic Market Insight
        </h2>
        <p className="text-gray-700 mb-6 text-base">
          Using accurate competitor pricing data, your team can respond to
          market changes with agility and make informed pricing decisions that
          drive growth.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Quickly align your pricing strategy with evolving competitor trends.
          </li>
          <li>Visualize a broader pricing landscape for smarter moves.</li>
          <li>
            Empower your business with confident, data-backed pricing actions.
          </li>
        </ul>
      </div>
    </section>
  );
}
