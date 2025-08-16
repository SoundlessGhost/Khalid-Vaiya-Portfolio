import Image from "next/image";

export default function StepOneDemo() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 w-full relative">
          <div className="w-full max-w-sm mx-auto relative z-10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden">
            <Image
              src="/images/Web Scraping/alexander.jpg"
              alt="User browsing tablet"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h4 className="text-red-600 font-semibold text-lg mb-2">Step 1</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Demo
          </h2>
          <p className="text-gray-700 mb-6">
            Let’s kick things off with a quick demo tailored to your business.
            We’ll walk you through the process, align on your goals, and show
            how our solution fits your workflow—without wasting a minute.
          </p>
          <div className="mt-10">
            <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
              Book a Demo
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
      </div>
    </section>
  );
}
