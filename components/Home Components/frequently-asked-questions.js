"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

// motion variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function AccordionDemo() {
  return (
    <section className="my-20">
      {/* Section background + header animation */}
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-neutral-700"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0.4 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-4 h-1 w-28 origin-left rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500"
        />

        {/* Card-like container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full divide-y divide-gray-100"
            defaultValue="item-1"
          >
            {/* Item 1 */}
            <AccordionItem
              value="item-1"
              // hover + open styles
              className="group px-4 md:px-6 transition data-[state=open]:bg-white hover:bg-gray-50"
            >
              <motion.div variants={item}>
                <AccordionTrigger className="text-left py-5 hover:no-underline">
                  <span className="font-medium text-neutral-800">
                    What Is Fastscraping?
                  </span>
                </AccordionTrigger>

                {/* subtle colored bar when open */}
                <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-data-[state=open]:opacity-100 transition ml-1 md:ml-0" />

                <AccordionContent className="flex flex-col gap-4 pb-6 pt-2 text-balance text-neutral-700">
                  <p>
                    Fastscraping is a web scraping tool used for data extraction
                    that comes with rotating proxies, headless browser
                    functionalities, deals with CAPTCHAs, and bypasses advanced
                    anti-bot systems. It allows developers to collect large
                    amounts of internet data for e-commerce price monitoring,
                    social media research, machine learning model training and
                    plenty of use cases.
                  </p>
                </AccordionContent>
              </motion.div>
            </AccordionItem>

            {/* Item 2 */}
            <AccordionItem
              value="item-2"
              className="group px-4 md:px-6 transition data-[state=open]:bg-white hover:bg-gray-50"
            >
              <motion.div variants={item}>
                <AccordionTrigger className="text-left py-5 hover:no-underline">
                  <span className="font-medium text-neutral-800">
                    What Is the Alternative to Fastscraping?
                  </span>
                </AccordionTrigger>
                <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-600 opacity-0 group-data-[state=open]:opacity-100 transition ml-1 md:ml-0" />
                <AccordionContent className="flex flex-col gap-4 pb-6 pt-2 text-balance text-neutral-700">
                  <p>
                    Fastscraping works by providing you with an advanced toolkit
                    to bypass all anti-bot measures so that you don&apos;t get
                    blocked while web scraping. Easily collect content from any
                    website with the best web scraping toolkit.
                  </p>
                </AccordionContent>
              </motion.div>
            </AccordionItem>

            {/* Item 3 */}
            <AccordionItem
              value="item-3"
              className="group px-4 md:px-6 transition data-[state=open]:bg-white hover:bg-gray-50"
            >
              <motion.div variants={item}>
                <AccordionTrigger className="text-left py-5 hover:no-underline">
                  <span className="font-medium text-neutral-800">
                    How Does Fastscraping work?
                  </span>
                </AccordionTrigger>
                <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-pink-400 to-orange-500 opacity-0 group-data-[state=open]:opacity-100 transition ml-1 md:ml-0" />
                <AccordionContent className="flex flex-col gap-4 pb-6 pt-2 text-balance text-neutral-700">
                  <p>
                    Fastscraping handles all sorts of anti-bot bypasses in a
                    single API call. We&apos;ve listed several alternatives to
                    Fastscraping, which you can find below in the footer, yet
                    we&apos;re confident we&apos;re the most functional tool for
                    individual developers, small companies and enterprises.
                  </p>
                </AccordionContent>
              </motion.div>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
