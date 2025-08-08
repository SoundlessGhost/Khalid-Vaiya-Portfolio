import Image from "next/image";

export default function CaseStudySection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left - Text Content */}
      <div className="w-full lg:w-2/3">
        <p className="text-red-600 text-sm font-medium mb-2">CASE STUDY</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 max-w-2xl">
          How Alexander Strengthened Market Position with Fastscraping Precision
          Data
        </h2>
        <blockquote className="text-gray-600 italic border-l-4 border-gray-300 pl-4 mb-6">
          Fastscraping team took the time to truly understand our operational
          goals. Their dedication to customization and timely delivery proved
          they weren’t just a vendor—they were a strategic partner we could
          trust.”
        </blockquote>
        <div className="mb-6">
          <p className="font-semibold text-gray-800">Margaret Lane</p>
          <p className="text-gray-600 text-sm">VP of Retail Sales, Alexander</p>
        </div>

        <div className="mt-10">
          <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
            Read Case Study
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right - Profile Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <Image
          src="/images/Web Scraping/alexander.jpg"
          alt="Margaret Lane"
          width={160}
          height={160}
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
}
