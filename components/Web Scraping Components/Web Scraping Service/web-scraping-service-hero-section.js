"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const WebScrapingServiceHeroSection = () => {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div
          ref={leftRef}
          className="opacity-0 translate-y-6 transition-all duration-700 ease-out [&&.is-visible]:opacity-100 [&&.is-visible]:translate-y-0"
        >
          <p className="text-red-500 font-semibold text-sm uppercase mb-2">
            All the Web Data You Need In One Place
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Fully-Managed Web
            <br />
            Scraping Service
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            Collect accurate and reliable data from every corner of the
            internet—make smarter business decisions and always stay one step
            ahead of the competition.
          </p>

          <button className="button1 relative inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
            Contact a Data Expert
            <span className="absolute -bottom-1 left-6 right-6 h-[2px] origin-left scale-x-0 bg-gray-900/70 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
        </div>

        {/* Right Side Image */}
        <div
          ref={rightRef}
          className="flex justify-center opacity-0 translate-y-6 transition-all duration-700 ease-out delay-150 [&&.is-visible]:opacity-100 [&&.is-visible]:translate-y-0"
        >
          <Image
            src="/Money.png"
            alt="Web scraping illustration"
            width={400}
            height={300}
            className="w-full max-w-md animate-float"
            priority
          />
        </div>
      </div>

      {/* local keyframes for image float */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WebScrapingServiceHeroSection;
