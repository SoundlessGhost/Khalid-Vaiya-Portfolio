"use client";

import { useRef } from "react";
import { ArrowRight, Zap, Database, Globe, Shield } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const floatingIcons = [
  { icon: Database, delay: 0, x: 100, y: 50 },
  { icon: Globe, delay: 0.5, x: -80, y: 80 },
  { icon: Shield, delay: 1, x: 120, y: -60 },
  { icon: Zap, delay: 1.5, x: -100, y: -40 },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: ySpring, opacity, scale }}
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-emerald-400/20"
          style={{
            left: `calc(50% + ${item.x}px)`,
            top: `calc(50% + ${item.y}px)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon className="w-12 h-12" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div>
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white leading-tight font-bold"
          >
            <span className="block text-5xl md:text-6xl">
              Effective Web Scraping
            </span>
            <span className="block text-5xl md:text-6xl">
              Solutions That Deliver
            </span>
            <span className="block text-5xl md:text-6xl">
              Measurable Results
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-gray-300 text-base md:text-lg space-y-1.5"
          >
            <p>Make unlimited requests without getting blocked.</p>
            <p>
              Our infrastructure keeps your scraping invisible to detection
              systems.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-8"
          >
            <a
              href="#get-started"
              className="inline-flex items-center text-white text-base md:text-lg font-medium group"
            >
              Get Started
              <span className="ml-3 h-[1px] w-16 bg-white/60 group-hover:w-24 transition-all" />
              <ArrowRight className="w-5 h-5 ml-3 opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "50M+", label: "Pages Scraped Daily", icon: Database },
              { number: "99.9%", label: "Uptime SLA", icon: Shield },
              { number: "10K+", label: "Active Developers", icon: Globe },
              { number: "<100ms", label: "Average Response", icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
