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
        We deliver structured data at large scale - no Cloudflare, no captchas,
      </p>
      <p>
        no blocks, no maintenance. Just tell us what you need we&apos;ll handle
        everything.
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
          Large-Scale On <br className="hidden sm:block" /> Demand Scraping
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex justify-center mr-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
        </div>
        <div className="text-gray-400 font-medium text-xs sm:text-sm">
          No Proxy or <br className="hidden sm:block" /> Maintenance Hassle
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
</div>;
