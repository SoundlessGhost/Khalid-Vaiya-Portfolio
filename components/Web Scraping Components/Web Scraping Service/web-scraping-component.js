"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16, duration: 0.6 },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ReusableComponent = () => {
  return (
    <section className="bg-gray-50 my-24 py-12 px-6 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Text Content */}
        <motion.div className="flex-1" variants={container}>
          <motion.p className="text-red-500 font-semibold mb-2" variants={item}>
            CASE STUDY
          </motion.p>

          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            variants={item}
          >
            Baker & Taylor gains market advantage through Fastscraping&apos;s
            trusted data solutions
          </motion.h2>

          <motion.p className="text-gray-700 mb-6" variants={item}>
            “Fastscraping has consistently delivered outstanding data accuracy
            and customer service. They&apos;re our go-to partner for data
            extraction and insights. I wouldn’t hesitate to recommend them to
            anyone needing reliable data support.”
          </motion.p>

          <motion.div variants={item}>
            <p className="font-semibold text-gray-800">Margaret Lane</p>
            <p className="text-gray-600 text-sm mb-6">
              Vice President of Retail Sales, Baker & Taylor
            </p>
          </motion.div>

          <div className="mt-10">
            <button className="button1 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow">
              Start Free Trial
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
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ rotate: 2, y: -2 }}
        >
          <Image
            src="/alexander.jpg"
            alt="Margaret Lane"
            width={160}
            height={160}
            className="rounded-full object-cover ring-4 ring-gray-200"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReusableComponent;
