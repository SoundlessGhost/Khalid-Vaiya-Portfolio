

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left - Illustration Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/Expertise/Select-amico.png"
          alt="Customer partnership"
          width={500}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Why Leading Teams Trust Us
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4 text-base leading-relaxed">
          <li>
            We deliver a complete solution—no technical guesswork required.
          </li>
          <li>Our results align exactly with your unique business needs.</li>
          <li>You get consistent, reliable service for total peace of mind.</li>
          <li>We continuously innovate to give you even greater value.</li>
          <li>Our goal is a lasting partnership built on mutual success.</li>
        </ul>
      </div>
    </section>
  );
}
