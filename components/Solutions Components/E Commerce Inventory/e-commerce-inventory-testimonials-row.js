"use client";

const testimonials = [
  {
    brand: "Fastscraping",
    quote: `“Automated quality checks, quick response times, willingness to investigate and implement new scraping projects.”`,
    name: "Nicole Grazioso",
    role: "Director Payments & Risk | HubSpot",
  },
  {
    brand: "Fastscraping",
    quote: `“It's clear that the team behind Fastscraping is dedicated to providing a robust and reliable service.”`,
    name: "Josh Tyson",
    role: "Product Manager | Capsule",
  },
  {
    brand: "Fastscraping ",
    quote: `“Delegate a costly data collection task to professionals. Quick to understand our need, quality data extraction.”`,
    name: "Luisa",
    role: "Senior Director of Operations | Fitbit",
  },
];

export default function TestimonialsRow() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              {/* brand */}
              <div className="mb-6 text-xl font-semibold tracking-tight text-slate-600">
                {t.brand}
              </div>

              {/* quote */}
              <p className="text-lg italic leading-8 text-slate-900">
                {t.quote}
              </p>

              {/* author */}
              <div className="mt-6">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
