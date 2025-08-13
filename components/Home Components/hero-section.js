"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Database,
  Globe,
  Shield,
  ShieldCheck,
  ShieldOff,
} from "lucide-react";

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
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden
                 flex items-center justify-center
                 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-48
                 py-16 sm:py-20 md:py-24"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: ySpring, opacity, scale }}
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Floating Icons (hidden on small to avoid overlap) */}
      <div className="hidden md:block">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-emerald-400/20"
            style={{
              left: `calc(50% + ${item.x}px)`,
              top: `calc(50% + ${item.y}px)`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.icon className="w-10 h-10 lg:w-12 lg:h-12" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10 -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-14">
        <div className="mx-auto max-w-3xl lg:max-w-6xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white leading-tight font-bold text-center lg:text-left"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              Your Own Web Scraping
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              Team on Demand
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg space-y-1.5 max-w-xl md:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <p>
              We deliver structured data at large scale - no Cloudflare, no
              captchas,
            </p>
            <p>
              no blocks, no maintenance. Just tell us what you need we&apos;ll
              handle everything.
            </p>
          </motion.div>

          {/* Feature bullets (wrap on small screens) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-8 justify-center lg:justify-start">
            <div className="flex items-center">
              <div className="flex justify-center mr-3">
                <ShieldOff className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-gray-400 font-medium text-xs sm:text-sm">
                Bypass Cloudflare <br className="hidden sm:block" /> & Captchas
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex justify-center mr-3">
                <Database className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-gray-400 font-medium text-xs sm:text-sm">
                Large-Scale On <br className="hidden sm:block" /> Demand
                Scraping
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex justify-center mr-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-gray-400 font-medium text-xs sm:text-sm">
                No Proxy or <br className="hidden sm:block" /> Maintenance
                Hassle
              </div>
            </div>
          </div>

          {/* (kept the empty stats map exactly as-is to avoid logic changes) */}
          <motion.div
            className="mt-4 flex mx-0 sm:mx-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { label: "Bypass Cloudflare & Captchas", icon: Database },
              { label: "Large-Scale On-Demand Scraping", icon: Shield },
              { label: "No Proxy or Maintenance Hassle", icon: Globe },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              ></motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-8 text-center lg:text-left"
          >
            <a
              href="#get-started"
              className="inline-flex items-center text-white text-base md:text-lg font-medium group"
            >
              Get Started
              <span className="ml-3 h-[1px] w-12 sm:w-16 bg-white/60 group-hover:w-24 transition-all" />
              <ArrowRight className="w-5 h-5 ml-3 opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (hide on very small) */}
      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
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

      {/* Illustration (scales down on mobile) */}
      <div className="mt-10 md:mt-0 justify-center hidden lg:flex">
        <Image
          src="/images/Customized Data/Advanced customization-amico.png"
          alt="Web scraping illustration"
          width={500}
          height={500}
          className="w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto"
          priority
        />
      </div>
    </section>
  );
}
