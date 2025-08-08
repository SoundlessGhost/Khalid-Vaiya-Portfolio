import Image from "next/image";

export default function EbookPromo() {
  return (
    <section className="bg-white py-20 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <p className="text-green-600 font-medium text-lg mb-2">Ebook</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          5 Essential Elements for Smart Competitor Pricing Insights
        </h2>
        <p className="text-gray-700 text-base mb-6">
          This concise, expert-written ebook is perfect for pricing
          professionals aiming to stay sharp in a dynamic market. You&apos;ll
          discover:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>
            How to leverage accurate competitor data to make faster, smarter
            pricing decisions.
          </li>
          <li>
            Techniques to protect profit margins with a strategy grounded in
            trustworthy data.
          </li>
          <li>
            Tips on choosing the right data partner for long-term competitive
            advantage.
          </li>
        </ul>

        <div className="mt-10">
          <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
            Download the Free Ebook
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

      {/* Right Image Section */}
      <div className="lg:w-1/2">
        <Image
          src="/images/Editorial commision.png"
          alt="Ebook Illustration"
          width={500}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
