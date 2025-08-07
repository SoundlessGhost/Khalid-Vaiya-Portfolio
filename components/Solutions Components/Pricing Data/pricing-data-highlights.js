export default function PricingHighlights() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-blue-50 to-blue-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side with Visual & Map */}
        <div className="space-y-6">
          <h3 className="text-green-600 font-semibold uppercase text-sm">
            Reliable Pricing Intelligence
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">
            Instantly Understand How Your Prices Compare
          </h2>
          <p className="text-gray-600">
            Our intelligent pricing engine continuously scans and compares
            products across your competitors, giving you unmatched visibility
            into where you stand — in real-time.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Learn more
          </a>
        </div>

        {/* Right Cards */}
        <div className="grid gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-green-600 font-medium text-sm uppercase">
              Real-Time Monitoring
            </h4>
            <h3 className="text-xl font-bold text-gray-800">
              Data Collection That Follows Your Rhythm
            </h3>
            <p className="text-gray-600 mt-2">
              From hourly scans to weekly reports, our crawlers adapt to your
              business needs — so you never miss a beat in market shifts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-green-600 font-medium text-sm uppercase">
              Quality You Can Count On
            </h4>
            <h3 className="text-xl font-bold text-gray-800">
              Multi-Step QA to Ensure Data Reliability
            </h3>
            <p className="text-gray-600 mt-2">
              Each dataset undergoes over 50 quality checks — ensuring the
              information you rely on is complete, correct, and always
              trustworthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
