export default function CaseStudySection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image Placeholder */}
        <div className="w-full">
          <img
            src="/images/Pricing Data/Online calendar-amico.png"
            alt="Case Study"
            className="w-[70%] rounded-lg shadow-md"
          />
        </div>

        {/* Right Side: Text */}
        <div>
          <span className="text-green-600 font-semibold uppercase text-sm">
            Case Study
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
            How Apex & Co. Gained a Market Advantage Using Data from Insightly
          </h2>
          <p className="text-gray-600 mb-6">
            With help from Insightly’s expert data analysts, Apex & Co. was able
            to access accurate pricing data, optimize product positioning, and
            make informed business moves that improved their competitive edge.
          </p>
          <a
            href="#"
            className="bg-gray-500 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition"
          >
            Read Case Study
          </a>
        </div>
      </div>
    </section>
  );
}
