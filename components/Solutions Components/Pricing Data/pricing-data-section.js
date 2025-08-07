export default function PricingDataSection() {
  return (
    <section className="bg-white text-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Trusted Market Insights, Backed by Data
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Gain access to a wealth of accurate and updated pricing data from
          multiple sources – eCommerce sites, retail stores, and industry
          platforms. Empower your decisions with real-time intelligence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="border border-gray-300 p-6 rounded-xl hover:shadow-lg transition">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold">Live Price Tracking</h3>
            <p className="text-gray-600 text-sm mt-2">
              Monitor pricing updates as they happen — never miss a shift.
            </p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl hover:shadow-lg transition">
            <div className="text-3xl mb-4">🔓</div>
            <h3 className="text-xl font-semibold">Smart Access Bypass</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our tech avoids blocks so your data flow stays smooth and stable.
            </p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl hover:shadow-lg transition">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold">Certified Data Precision</h3>
            <p className="text-gray-600 text-sm mt-2">
              Accuracy you can count on — verified and validated numbers.
            </p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl hover:shadow-lg transition">
            <div className="text-3xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold">Tailored Market Reports</h3>
            <p className="text-gray-600 text-sm mt-2">
              Insights that align with your industry’s unique pricing trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
