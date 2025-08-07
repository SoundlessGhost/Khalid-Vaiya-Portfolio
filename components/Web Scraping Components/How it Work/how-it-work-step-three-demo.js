import Image from "next/image";

export default function StepThree() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/images/How it Work/Mobile Marketing-pana.png"
            alt="Results dashboard"
            width={600}
            height={400}
            className="w-[80%] h-auto object-contain rounded-md shadow"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h4 className="text-red-600 font-semibold text-lg mb-2">Step 3</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Results That Drive Real Decisions
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With access to timely pricing trends and high-quality product data,
            our platform enables businesses to move faster and act smarter. No
            more guesswork—just insights that matter.
          </p>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded shadow">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
