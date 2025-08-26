"use client";

import Image from "next/image";

export default function ProductDataCategoriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* soft backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(168,85,247,0.06),transparent_60%)]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* LEFT: copy + bullets */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-neutral-700 sm:text-4xl">
            Product data categories
            <br className="hidden sm:block" />
            for web scraping
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            We can build your feeds to pull in any category you need, whether
            standard or custom, and provide Quality Assurance and compliance out
            of the box.
          </p>

          {/* bullets */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ul className="space-y-3 text-slate-700">
              {[
                "Product name",
                "Price / Currency",
                "Availability",
                "Description",
                "MPN/GTIN/SKU",
                "Brand",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-sky-500" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-3 text-slate-700">
              {[
                "Breadcrumbs",
                "Image URL",
                "Rating",
                "URL",
                "Pagination",
                "Reviews",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-sky-500" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT: product card mock */}
        <div className="mx-auto w-full max-w-xl">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
            {/* decorative gradient ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-[1px] -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-400/20 via-indigo-400/20 to-blue-400/20"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* product image */}
              <div className="relative aspect-[3/5] w-full overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                {/* Replace src with your image if you have one */}
                <Image
                  src="/E-commerce-product-detail-page-template-Yieldify.png"
                  alt="Refrigerator product"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-fuchsia-700 ring-1 ring-fuchsia-200">
                  mainImage.url
                </span>
              </div>

              {/* scraped fields preview */}
              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Price Match Guarantee
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-rose-100 px-1.5 py-0.5 text-xs font-bold text-rose-700 ring-1 ring-rose-200">
                      regularPrice
                    </span>
                    <span className="text-xl font-extrabold text-slate-900">
                      $9,999.99
                    </span>
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      You save $2,000.00
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <dl className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Brand</dt>
                      <dd className="font-medium text-slate-900">
                        Refrigerator
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Model</dt>
                      <dd className="font-medium text-slate-900">HSQC0424P</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Availability</dt>
                      <dd className="font-medium text-emerald-700">In stock</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Location</dt>
                      <dd className="font-medium text-slate-900">
                        5421 Kirkham Rd
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    "rating",
                    "imageURL",
                    "breadcrumbs",
                    "mpn",
                    "currency",
                    "reviews",
                  ].map((k) => (
                    <span
                      key={k}
                      className="truncate rounded-lg bg-indigo-50 px-2 py-1 text-center text-[11px] font-semibold text-indigo-700 ring-1 ring-indigo-200"
                    >
                      {k}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Call us now!</span>
                    <span className="font-semibold text-slate-900">
                      858.000.0000
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded bg-slate-200">
                    <div className="h-2 w-3/4 rounded bg-fuchsia-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* caption */}
          <p className="mt-3 text-center text-xs text-slate-500">
            Example visualization of fields we can extract & structure for you.
          </p>
        </div>
      </div>
    </section>
  );
}
