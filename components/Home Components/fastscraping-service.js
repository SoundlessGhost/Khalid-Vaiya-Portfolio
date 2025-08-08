"use client";

import { Megaphone, Users, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const updates = [
  {
    title: "Dedicated Support",
    description:
      "Our expert team provides personalized support, hands-on guidance, and real-time collaboration from day one to ensure your project’s success.",
    icon: <Megaphone className="w-6 h-6 text-black" />,
  },
  {
    title: "Open Communication & Collaboration",
    description:
      "Experience seamless collaboration with Fastscraping intuitive project management platform. We ensure clear, transparent communication and real-time updates for a smooth workflow.",
    icon: <Users className="w-6 h-6 text-black" />,
  },
  {
    title: "True Partnership",
    description:
      "Fastscraping is more than a service provider—we’re your partner. We adapt to your evolving needs, providing continuous support and unmatched flexibility to ensure your success.",
    icon: <Recycle className="w-6 h-6 text-black" />,
  },
];

// motion variants
const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const handleMouseMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - rect.left}px`);
};

export default function FastScrapingService() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16 my-20"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {updates.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -6 }}
            className="group relative space-y-4 rounded-xl border border-gray-200 bg-white/70 p-6
                       shadow-sm transition hover:shadow-md hover:border-gray-300 overflow-hidden"
          >
            {/* hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
                         bg-[radial-gradient(220px_120px_at_var(--x,50%)_-20%,rgba(16,185,129,.12),transparent_60%)]"
            />

            {/* Icon with micro-interaction */}
            <motion.div
              initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 170, damping: 12 }}
              whileHover={{ rotate: 4, scale: 1.03 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* accent underline on hover */}
            <span
              className="block h-0.5 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600
                             opacity-0 group-hover:opacity-100 transition"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
