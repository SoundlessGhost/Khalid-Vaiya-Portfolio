export default function ProfessionalSolutions() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 text-center">
      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Tailored Data Solutions for Every Role
        </h2>
        <p className="text-gray-700 text-base lg:text-lg">
          Whether you&apos;re optimizing pricing, analyzing trends, or leading
          strategic decisions— our insights are built to support professionals
          at every level.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
        {/* Pricing Strategists */}
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            Pricing Strategists
          </h3>
          <p className="text-gray-600">
            Use real-time competitor pricing to fine-tune strategies, respond
            swiftly to market changes, and maximize revenue opportunities.
          </p>
        </div>

        {/* Market Analysts */}
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            Market Analysts
          </h3>
          <p className="text-gray-600">
            Combine internal data with external pricing trends to uncover
            insights, predict shifts, and guide smarter market decisions.
          </p>
        </div>

        {/* Business Leaders */}
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            Business Leaders
          </h3>
          <p className="text-gray-600">
            Make data-backed decisions that drive impactful pricing strategies
            and boost competitiveness across the board.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}
