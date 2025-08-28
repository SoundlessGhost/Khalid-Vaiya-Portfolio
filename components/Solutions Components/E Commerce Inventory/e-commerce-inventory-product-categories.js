// components/ProductDataCategories.jsx
"use client";

export default function ProductDataCategories() {
  const col1 = [
    "Product name",
    "Price / Currency",
    "Availability",
    "Description",
    "MPN/GTIN/SKU",
    "Brand",
  ];
  const col2 = [
    "Breadcrumbs",
    "Image URL",
    "Rating",
    "URL",
    "Pagination",
    "Reviews",
  ];

  const Chip = ({ children, tone = "indigo" }) => (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-${tone}-50 px-2 py-1 text-[10px] font-medium text-${tone}-700 ring-1 ring-inset ring-${tone}-200`}
    >
      <span className={`h-1.5 w-1.5 rounded-full bg-${tone}-500`} />
      {children}
    </span>
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-emerald-50/30" />
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] -z-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left copy + bullets */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Product data categories
            <br /> for web scraping
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We can build your feeds to pull in any category you need, whether
            standard or custom, and provide Quality Assurance and compliance out
            of the box.
          </p>

          {/* bullets grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[col1, col2].map((list, idx) => (
              <ul key={idx} className="space-y-3">
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-sky-500" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Right: illustrative panel */}
        <div className="relative">
          <div className="mx-auto w-full max-w-[520px] rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(2,6,23,0.12)]">
            {/* header bar */}
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs font-semibold tracking-wide text-slate-600">
                Example Product Page
              </p>
              <Chip tone="sky">structured</Chip>
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4">
              {/* faux DOM gutter */}
              <div className="col-span-2 space-y-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-5 w-full rounded bg-${
                      i % 2 ? "indigo" : "sky"
                    }-100`}
                  />
                ))}
              </div>

              {/* screenshot mock */}
              <div className="col-span-6 rounded-xl border border-slate-200 p-3">
                <div className="aspect-[4/3] rounded-lg bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:14px_14px]">
                  {/* image area */}
                  <div className="m-3 h-24 rounded-lg bg-slate-100" />
                  {/* title & price row */}
                  <div className="mx-3 flex items-center justify-between">
                    <div className="h-3 w-40 rounded bg-slate-200" />
                    <div className="h-6 w-24 rounded bg-emerald-100" />
                  </div>
                  {/* gallery grid */}
                  <div className="mx-3 mt-3 grid grid-cols-4 gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-10 rounded bg-slate-100" />
                    ))}
                  </div>
                </div>
              </div>

              {/* right info panel */}
              <div className="col-span-4 space-y-3">
                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-semibold text-slate-500">
                      PRICE MATCH GUARANTEE
                    </div>
                    <Chip tone="emerald">You save $2,000.00</Chip>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold text-rose-700">
                      regularPrice
                    </span>
                    <div className="text-sm font-extrabold tracking-tight text-slate-900">
                      $9,999
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-3">
                  <dl className="grid grid-cols-2 gap-y-2 text-[12px]">
                    <dt className="text-slate-500">Brand</dt>
                    <dd className="text-right font-medium text-slate-800">
                      Refrigerator
                    </dd>
                    <dt className="text-slate-500">Model</dt>
                    <dd className="text-right font-medium text-slate-800">
                      HSQC0424P
                    </dd>
                    <dt className="text-slate-500">Availability</dt>
                    <dd className="text-right font-medium text-emerald-600">
                      In stock
                    </dd>
                    <dt className="text-slate-500">Location</dt>
                    <dd className="text-right font-medium text-slate-800">
                      5421 Kirkham Rd
                    </dd>
                  </dl>

                  {/* chips */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip tone="sky">imageURL</Chip>
                    <Chip tone="indigo">rating</Chip>
                    <Chip tone="violet">breadcrumbs</Chip>
                    <Chip tone="slate">mpn</Chip>
                    <Chip tone="emerald">currency</Chip>
                    <Chip tone="pink">reviews</Chip>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="mb-1 flex items-center justify-between text-[12px]">
                    <span className="text-slate-600">Call us now!</span>
                    <span className="font-semibold text-slate-900">
                      858.000.0000
                    </span>
                  </div>
                  <div className="h-2 w-full rounded bg-slate-100">
                    <div className="h-2 w-4/5 rounded bg-fuchsia-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-slate-500">
              Example visualization of fields we can extract &amp; structure for
              you.
            </p>
          </div>

          {/* floating shadow for depth */}
          <div className="absolute inset-x-8 -bottom-6 -z-10 h-12 rounded-full bg-slate-900/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
