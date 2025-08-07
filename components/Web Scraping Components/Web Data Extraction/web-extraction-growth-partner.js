import Image from "next/image";

export default function GrowthPartner() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/images/Web Extraction/Directing the arrow up-cuate.png"
            alt="Data Dashboard UI"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Beyond Just Data — A Growth Partner You Can Trust
          </h2>
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            We don’t just provide tools. We deliver real impact.
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We believe data should drive action — not confusion. With decades of
            experience in web data extraction, we’ve helped companies of all
            sizes turn scattered data into structured insights that fuel growth.
            Whether you&apos;re in retail, finance, logistics, or research — we
            adapt to your needs with scalable, secure infrastructure and expert
            support. No technical maze. No vague promises. Just precise data
            that actually works for your goals.
          </p>

          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded shadow">
            Schedule a Call with Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
