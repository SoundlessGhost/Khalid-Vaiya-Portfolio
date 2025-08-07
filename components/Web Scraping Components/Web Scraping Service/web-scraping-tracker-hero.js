"use client";

import Image from "next/image";

export default function PricingTrackerHero() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Stay Ahead with Smarter Competitor Insights
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          Want to lead with confidence in a competitive market? Our cutting-edge
          platform provides live pricing intelligence from across the web. With
          real-time data at your fingertips, you can adapt faster, spot market
          changes early, and drive strategic decisions to keep your business
          ahead.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="bg-green-100 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg italic text-gray-800 mb-4">
              We gained critical pricing insights thanks to this service. Their
              data gave us a clear edge over our digital competitors. It&apos;s
              been an essential asset for making informed moves in a fast-paced
              online market.
            </p>
            <p className="font-semibold text-gray-900">
              Essam Abdalla <br />
              <span className="text-sm text-gray-700">
                Pricing Manager, MoneyGram
              </span>
            </p>
          </div>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/alexander.jpg"
              alt="alexander"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
