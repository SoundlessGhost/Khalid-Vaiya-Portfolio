"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Database, Globe, Shield } from "lucide-react";

const floatingIcons = [
  { icon: Database, delay: 0, x: 100, y: 50 },
  { icon: Globe, delay: 0.5, x: -80, y: 80 },
  { icon: Shield, delay: 1, x: 120, y: -60 },
  { icon: Zap, delay: 1.5, x: -100, y: -40 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <div className="relative">
      {/* full-height but mobile-safe; safe top padding for fixed navbar */}
      <section className="relative isolate overflow-hidden min-h-[100svh] flex items-center pt-[calc(var(--nav-h,72px)+0.5rem)] pb-5 sm:pb-7">
        {/* bg */}
        <div className="absolute inset-0 -z-20 bg-[#08111a]" />
        <div
          className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000_40%,transparent_80%)] animate-grid-pan"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,198,130,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(12,198,130,.12) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />
        {/* glows */}
        <div className="pointer-events-none absolute -left-24 top-24 size-[320px] sm:size-[380px] md:size-[520px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,.25),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-24 -top-8 size-[260px] sm:size-[340px] md:size-[460px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.22),transparent_70%)] blur-2xl" />
        <div className="absolute left-1/2 top-1/2 -z-10 size-[720px] sm:size-[880px] md:size-[1040px] -translate-x-1/2 -translate-y-1/2 opacity-40">
          <div className="size-full rounded-full [background:conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,.25)_60deg,transparent_120deg)] blur-2xl animate-sweep" />
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        {/* float icons (hide <=lg) */}
        <div className="hidden lg:block">
          {floatingIcons.map((f, i) => (
            <motion.div
              key={i}
              className="absolute text-emerald-400/20"
              style={{
                left: `calc(50% + ${f.x}px)`,
                top: `calc(50% + ${f.y}px)`,
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 360], scale: [1, 1.1, 1] }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: f.delay,
                ease: "easeInOut",
              }}
            >
              <f.icon className="h-10 w-10 xl:h-12 xl:w-12" />
            </motion.div>
          ))}
        </div>

        {/* content */}
        <div className="relative mx-auto w-full max-w-[1400px] px-3 sm:px-4">
          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 xl:grid-cols-2">
            {/* text */}
            <motion.div
              className="mr-0 lg:mr-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.h1
                custom={1}
                variants={fadeUp}
                className="text-balance font-extrabold leading-tight text-white mb-3
                           text-[clamp(1.35rem,2.4vw+1rem,2.4rem)]
                           sm:text-[clamp(1.6rem,2vw+1.2rem,2.7rem)]
                           xl:text-[clamp(2rem,1.4vw+1.2rem,3rem)]"
              >
                Your Own Web Scraping Team on Demand
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-white/90 mb-5 max-w-[65ch] text-[15px] sm:text-base md:text-[17px] leading-relaxed"
              >
                We deliver structured data at large scale - no Cloudflare, no
                captchas, no blocks, no maintenance. Just tell us what you need
                we&apos;ll handle everything.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* image */}
            <motion.div
              custom={1.5}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-center xl:justify-end ml-0 lg:ml-40"
            >
              <div className="relative w-full max-w-[380px] sm:max-w-[440px] xl:max-w-[520px]">
                <Image
                  src="/images/Web Extraction/Data extraction-pana.png"
                  alt="Illustration web scraping Image"
                  width={520}
                  height={420}
                  priority
                  className="w-full h-auto drop-shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
        <motion.div
          className="hidden sm:block absolute bottom-5 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-gray-600 flex justify-center">
            <motion.div
              className="mt-2 h-3 w-1 rounded-full bg-emerald-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
