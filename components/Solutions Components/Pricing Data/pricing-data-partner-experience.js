// components/PartnerExperience.jsx

export default function PartnerExperience() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-green-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          The Fastscraping Partnership: Fueling Smarter Data Decisions
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          From day one, we become an extension of your team — offering
          collaborative, hands-on support to ensure your data journey is smooth,
          scalable, and aligned with your goals. Thats why 200+ enterprises
          trust us to power their insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Block 1 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl mb-4">👍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expert-Led Support
            </h3>
            <p className="text-gray-600">
              Our specialists guide you every step of the way — from planning to
              execution — delivering personalized, expert-driven service.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Transparent Communication
            </h3>
            <p className="text-gray-600">
              Stay in sync with real-time updates and streamlined collaboration
              through our dedicated project management tools.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Strategic Partnership
            </h3>
            <p className="text-gray-600">
              We dont just deliver data — we adapt with you, supporting
              evolving needs to maximize long-term value and flexibility.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="#"
            className="bg-gray-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-600 transition"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
