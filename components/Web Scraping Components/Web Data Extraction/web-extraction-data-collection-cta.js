export default function DataCollectionCTA() {
  return (
    <section className="bg-gradient-to-r from-[#e8f5e9] via-white to-[#fdecea] py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to Kickstart Your Data Journey?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover how effortless data collection can be. Follow these simple
          steps and start getting valuable insights today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              step: 1,
              title: "Book a Call",
              subtitle: "Connect with our team to understand your data needs.",
            },
            {
              step: 2,
              title: "Try It Free",
              subtitle: "Test our platform with zero cost or commitment.",
            },
            {
              step: 3,
              title: "See Real Results",
              subtitle: "Turn raw data into clear, actionable insights.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-red-500 mb-2">
                {item.step}
              </h3>
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </p>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded shadow">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
}
