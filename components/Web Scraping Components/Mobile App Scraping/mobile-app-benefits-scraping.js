import TermsThenFormInDialog from "@/components/TermsGatedForm";
import React from "react";

export default function BenefitsMobileAppScraping() {
  const perks = [
    {
      title: "Data Collection",
      text: "Gather extensive data from mobile applications effortlessly.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M7 3h10a2 2 0 0 1 2 2v2H5V5a2 2 0 0 1 2-2zm12 6H5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9zM7 11h4v2H7v-2zm0 4h7v2H7v-2z" />
        </svg>
      ),
    },
    {
      title: "Real-Time Insights",
      text: "Receive up-to-date information for informed decision-making.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M3 13h3l2-3 3 5 3-4 2 2h5v4H3v-4z" />
          <path d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4z" />
        </svg>
      ),
    },
    {
      title: "Customizable Solutions",
      text: "Tailored scraping services to meet your unique requirements.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2l2.09 4.24L18.8 7l-3.4 3.31L16.2 15 12 12.9 7.8 15l.8-4.69L5.2 7l4.71-.76L12 2z" />
          <circle cx="12" cy="12" r="3" className="opacity-40" />
        </svg>
      ),
    },
    {
      title: "Seamless Integration",
      text: "Easily integrate data into existing systems and workflows.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M7 7h10v4H7zM4 5h4v2H4zm12 12h4v2h-4zM4 17h10v2H4zM16 11h4v2h-4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/20 via-sky-400/20 to-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-400/15 via-violet-400/15 to-cyan-400/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Left content */}
          <div className="md:col-span-6">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              Benefits
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neutral-500 to-cyan-500" />
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl dark:text-white">
              Benefits of Our Customized{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-cyan-600">
                Mobile App Scraping Services
              </span>
            </h2>

            <div className="-ml-20">
              <TermsThenFormInDialog btn_name={"Get Started"} />
            </div>
          </div>

          {/* Right cards */}
          <div className="md:col-span-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {perks.map(({ title, text, icon }) => (
                <div
                  key={title}
                  className="group relative rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm ring-1 ring-transparent backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-indigo-200 dark:border-slate-800/70 dark:bg-slate-900/70 dark:hover:ring-indigo-600/30"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 text-indigo-600 dark:text-indigo-400">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
