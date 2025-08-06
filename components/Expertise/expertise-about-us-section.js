import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
      {/* Left - Image with blob shape */}
      <div className="relative w-full lg:w-1/2">
        <div className="relative w-full h-[400px] rounded-[60%_40%_40%_60%/60%_40%_60%_40%] overflow-hidden shadow-md">
          <Image
            src="/images/Expertise/team-photo.jpg"
            alt="Team working together"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Our Story
        </h2>
        <div className="text-gray-700 text-base leading-relaxed space-y-5">
          <p>
            Fastscraping was founded in 2005 by a group of innovators who
            believed that the internet&apos;s vast and dynamic content could be
            accessed more intelligently—with automation at the core.
          </p>
          <p>
            From day one, our goal was clear: eliminate the heavy burden of
            manual data collection by offering businesses an end-to-end data
            solution tailored to their unique needs.
          </p>
          <p>
            As demand grew, so did our vision. We began working directly with
            clients to deliver flexible, custom-built solutions—ranging from
            scalable web crawling to deep market intelligence.
          </p>
          <p>
            Today, we continue to help businesses transform data into action,
            providing clarity, speed, and precision in an ever-changing digital
            landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
