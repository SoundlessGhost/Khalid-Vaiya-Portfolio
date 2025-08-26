"use client";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, CircleDot } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, duration: 0.4, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function ProblemConstraints({
  problems = [],
  constraints = [],
}) {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />
        <div className="absolute left-1/2 top-[-30%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-200/40 via-sky-200/30 to-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Discovery
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            Problem & Constraints
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Problems card */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className=" relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition-colors duration-300 "
          >
            {/* animated gradient ring */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 ring-2 ring-transparent transition-opacity duration-300"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #22c55e33, #3b82f633, #8b5cf633, #22c55e33)",
                mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                padding: 1,
                borderRadius: 24,
              }}
            />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
              <AlertTriangle className="h-4 w-4" /> Problems
            </div>

            <motion.ul className="space-y-3">
              {problems.map((p, i) => (
                <motion.li
                  key={`p-${i}`}
                  variants={item}
                  className="flex items-start gap-3"
                >
                  <CircleDot className="mt-1 h-4 w-4 text-rose-500" />
                  <span className="text-slate-700">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Constraints card */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className=" relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition-colors duration-300"
          >
            {/* animated gradient ring */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 ring-2 ring-transparent transition-opacity duration-300"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #0ea5e933, #22c55e33, #6366f133, #0ea5e933)",
                mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                padding: 1,
                borderRadius: 24,
              }}
            />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <ShieldAlert className="h-4 w-4" /> Constraints
            </div>

            <motion.ul className="space-y-3">
              {constraints.map((c, i) => (
                <motion.li
                  key={`c-${i}`}
                  variants={item}
                  className="flex items-start gap-3"
                >
                  <CircleDot className="mt-1 h-4 w-4 text-blue-500" />
                  <span className="text-slate-700">{c}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* connector bar animation */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-10 h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        />
      </div>
    </section>
  );
}
