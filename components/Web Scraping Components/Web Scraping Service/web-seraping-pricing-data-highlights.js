"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const card = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.12 * i, duration: 0.55, ease: "easeOut" },
  }),
};

export default function PricingHighlights() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-blue-50 to-blue-100 py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side */}
        <motion.div className="space-y-6" variants={fadeUp}>
          <h3 className="text-green-600 font-semibold uppercase text-sm">
            Web Scraping
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Enterprise-Grade Web Scraping Services
          </h2>
          <p className="text-gray-600">
            Enterprise-scale web scraping demands the right mix of skills,
            technology, and experience. We’ve tackled the distinctive challenges
            of harvesting web data at scale for some of the world’s largest
            companies — delivering quality and reliability at the enterprise
            level.
          </p>
          <a
            href="#"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            Learn more
          </a>
        </motion.div>

        {/* Right Cards */}
        <div className="grid gap-8">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6"
              custom={i}
              variants={card}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.995 }}
            >
              {i === 0 ? (
                <>
                  <h4 className="text-green-600 font-medium text-sm uppercase">
                    Enterprise-Scale Capabilities
                  </h4>
                  <h3 className="text-xl font-bold text-gray-800">
                    Handle Massive, Complex Requirements
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Whether you’re scaling to thousands of sites, huge page
                    volumes, or strict turnaround times, we design for quality,
                    scalability, and cost-effectiveness — the kind of
                    performance that’s hard to replicate in-house or with basic
                    providers.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-green-600 font-medium text-sm uppercase">
                    Industry Experience
                  </h4>
                  <h3 className="text-xl font-bold text-gray-800">
                    Retail, Finance, Technology, Media & More
                  </h3>
                  <p className="text-gray-600 mt-2">
                    From Retail and Manufacturing to Finance, Technology,
                    Entertainment, Hospitality, and Social Media — our
                    industry-specific know-how helps you get started fast with
                    the minimum learning curve, while meeting enterprise-level
                    quality and scale.
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
