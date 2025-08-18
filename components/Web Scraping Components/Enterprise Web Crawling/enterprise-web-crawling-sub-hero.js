export default function EnterpriseCrawlingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50"
      />
      {/* ambience blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full bg-indigo-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-10">
        {/* LEFT — copy */}
        <div>
          <h1 className="text-balance text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Get Reliable{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 -z-10 rounded-md bg-gradient-to-r from-indigo-200 to-sky-200" />
              <span className="relative ">Enterprise Web</span>
            </span>{" "}
            <span className="">Crawling</span> Services from a Top Data Scraping
            Company
          </h1>

          <div className="mt-6 space-y-5 text-slate-700 md:text-lg">
            <p>
              At Web Data Crawler, we help organizations harness the power of
              data through efficient and effective solutions.
            </p>
            <p>
              In today&apos;s data-driven world, businesses need reliable
              information to stay competitive. As a leading data scraping
              company, we offer Crawler as a Service, enabling businesses to
              extract valuable insights from multiple sources seamlessly.
            </p>
            <p>
              Our web crawling services are tailored to meet the specific needs
              of enterprises, ensuring that you get the most relevant data for
              your objectives. With our expert team, you can focus on your core
              business while we handle the complexities of crawling data from
              websites.
            </p>
            <p>
              We provide comprehensive crawling solutions for enterprises, from
              designing a custom web crawler to delivering actionable insights.
              By leveraging our advanced technologies, your organization can
              make data-driven decisions, optimize strategies, and gain a
              competitive edge. Trust us to be your partner in navigating the
              vast data landscape with precision and reliability.
            </p>
            <p>
              Contact us today to learn more about how we can help you succeed!
            </p>
          </div>
        </div>

        {/* RIGHT — bespoke illustration card */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_22px_70px_-24px_rgba(2,6,23,0.35)] backdrop-blur">
            {/* top bar */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                crawler-ui
              </span>
            </div>

            {/* server stack + laptop chart */}
            <div className="grid grid-cols-3 items-center gap-4">
              {/* servers */}
              <div className="col-span-1 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-slate-200 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-14 rounded bg-slate-200" />
                      <div className="h-2 w-6 rounded bg-slate-200" />
                    </div>
                    <div className="mt-2 grid grid-cols-4 gap-1">
                      {Array.from({ length: 12 }).map((__, j) => (
                        <span key={j} className="h-1.5 rounded bg-slate-100" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* laptop */}
              <div className="col-span-2">
                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="h-36 w-full rounded-lg bg-gradient-to-b from-indigo-600 to-sky-600 p-3">
                    {/* fake chart */}
                    <div className="grid h-full w-full grid-cols-6 items-end gap-1 rounded bg-white/90 p-2">
                      {[25, 60, 40, 75, 55, 85].map((h, idx) => (
                        <div
                          key={idx}
                          className="mx-auto w-3 rounded-t bg-sky-500"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 h-1 w-full rounded bg-slate-200" />
                </div>
              </div>
            </div>

            {/* dotted pipelines to file types */}
            <div className="mx-auto mt-6 grid max-w-xs grid-cols-3 gap-3">
              {["TXT", "CSV", "JSON"].map((t) => (
                <div key={t} className="text-center">
                  <div className="mx-auto h-10 w-px border-dotted border-slate-300 [border-right-width:2px]" />
                  <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* glow */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-200/40 to-sky-200/40 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
