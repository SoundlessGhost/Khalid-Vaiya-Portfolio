"use client";

import Image from "next/image";
import { ShieldCheck, Zap, Globe, BarChart } from "lucide-react";

const reasons = [
  {
    title: "Compliance-First",
    icon: ShieldCheck,
    desc: "Strict adherence to data privacy laws and ethical scraping practices.",
  },
  {
    title: "Speed & Scale",
    icon: Zap,
    desc: "Automated crawlers capable of handling millions of pages per day.",
  },
  {
    title: "Global Reach",
    icon: Globe,
    desc: "Proxy networks and infrastructure across 40+ countries.",
  },
  {
    title: "Actionable Insights",
    icon: BarChart,
    desc: "Data formatted and structured to fit your analytics workflows.",
  },
];

const team = [
  { name: "Alice Johnson", role: "CEO", image: "/team1.jpg" },
  { name: "David Lee", role: "CTO", image: "/team2.jpg" },
  { name: "Sophia Chen", role: "Head of Data", image: "/team3.jpg" },
];

const milestones = [
  { year: "2019", text: "Founded with a mission to democratize web data." },
  {
    year: "2020",
    text: "Launched enterprise-grade proxy rotation & QA systems.",
  },
  { year: "2022", text: "Surpassed 1B+ web pages crawled weekly." },
  { year: "2024", text: "Expanded into AI-powered data validation pipelines." },
];

export default function LeadershipTeam() {
  return (
    <div className="">
      {/*             Leadership Section       */}
      <section className="relative bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Meet Our Leadership
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            Our experienced team blends technology expertise with business
            strategy to deliver enterprise-grade web scraping solutions.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {team.map((person, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-2xl bg-white/70 p-6 shadow-md dark:bg-gray-900/50"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*             Our Journey       */}
      <section className="relative bg-gradient-to-b from-white to-emerald-50 dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Our Journey
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base text-gray-600 dark:text-gray-300 text-center">
            We believe that strong leadership is the foundation of innovation.
            With years of combined experience in data engineering, product
            strategy, and AI-driven automation, our leaders ensure that every
            client receives world-class support and reliable results.
          </p>
          <div className="relative border-l border-emerald-400/30 pl-8">
            {milestones.map((m, i) => (
              <div key={i} className="mb-10">
                <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-2 border-emerald-500 bg-white dark:bg-gray-950" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {m.year}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*             Why Choose Us       */}
      <section className="relative bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300 text-center">
            Choosing us means partnering with a team that prioritizes
            reliability, scalability, and compliance at every step. We combine
            cutting-edge technology with years of expertise to deliver web data
            solutions that empower businesses to make faster and smarter
            decisions.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white/70 p-6 text-center shadow-md dark:border-gray-800 dark:bg-gray-900/60"
              >
                <reason.icon className="mx-auto h-10 w-10 text-emerald-600" />
                <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
