"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    headline: "Responsible & Flexible",
    quote:
      "Fast response, clear comms, and zero drama. They adapt to our edge-cases without breaking the promise on timelines.",
    name: "Andrew Ryan",
    role: "Marketing Manager",
    company: "LexisNexis",
    avatar: "/images/Pricing Data/user1.jpg",
  },
  {
    headline: "Partner-in-business",
    quote:
      "More than a vendor—it's a team that understands our roadmap. Their process makes collaboration easy and predictable.",
    name: "Craig Hudson",
    role: "Vice President",
    company: "Indigo Inc.",
    avatar: "/images/Pricing Data/user2.jpg",
  },
  {
    headline: "Gain a huge advantage",
    quote:
      "Their data stream gave us a measurable edge online. Cleaner inputs, faster refresh, and insights we can act on quickly.",
    name: "Essam Abdalla",
    role: "Pricing Manager",
    company: "MoneyGram",
    avatar: "/images/Pricing Data/user3.jpg",
  },
];

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      staggerChildren: 0.12,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* subtle gradient aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(16,185,129,0.10),transparent)]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-6xl px-4"
        variants={container}
      >
        {/* Header */}
        <motion.div variants={child} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Tailored to the Specific Needs of Each Industry
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-300">
            With two decades of hands-on experience, we deliver reliable
            big-data pipelines with double verification, rigorous QA, and
            proactive issue prevention—so your data is always accurate, secure,
            and ready to use.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              variants={child}
              className="group relative rounded-2xl border border-emerald-200/60 bg-white dark:bg-slate-900 p-8 shadow-sm
                         transition will-change-transform hover:shadow-xl"
              whileHover={{ y: -6, rotateX: 0.0001 }} // tiny tilt fix for gpu
            >
              {/* floating quote mark */}
              <motion.div
                aria-hidden
                className="absolute -top-5 left-8 text-rose-500"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Quote className="h-10 w-10 opacity-90" />
              </motion.div>

              <h3 className="mt-4 text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
                {t.headline}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                “{t.quote}”
              </p>

              {/* Person */}
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-emerald-500/30">
                  {/* use next/image for optimization; replace src with your files in /public */}
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>

              {/* animated underline on hover */}
              <span className="absolute left-8 right-8 bottom-0 h-0.5 origin-left scale-x-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
