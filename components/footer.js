import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* background: dark gradient + soft grid + glow */}
      <div className="absolute inset-0 -z-10 bg-[#0a0f1a]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_70%_-10%,rgba(99,102,241,.18),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_280px_at_15%_120%,rgba(16,185,129,.18),transparent_60%)]" />
      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[.35] mix-blend-soft-light
                      bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
                      bg-[size:40px_40px]"
      />

      {/* top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* CTA strip – optional, matches hero */}
        <div className="mb-12 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold text-lg">
                Ready to scale your web scraping?
              </h4>
              <p className="text-white/60 text-sm">
                Get a demo and see how we keep requests invisible to detection
                systems.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2
                         bg-emerald-500/10 text-emerald-300 border border-emerald-400/30
                         hover:bg-emerald-500/20 hover:border-emerald-400/60 transition"
            >
              Book a Demo →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
          {/* Web Scraping */}
          <FooterCol title="Web Scraping">
            <FooterLink>Web Scraping Service</FooterLink>
            <FooterLink>Expertise</FooterLink>
            <FooterLink>Enterprise Web Scraping</FooterLink>
            <FooterLink>Data From the Web</FooterLink>
            <FooterLink>Competitor Price Data</FooterLink>
            <FooterLink>Solution</FooterLink>
            <FooterLink>Web Data Extraction</FooterLink>
            <FooterLink>Data Collection</FooterLink>
          </FooterCol>

          {/* Solutions */}
          <FooterCol title="Solutions">
            <FooterLink>Pricing Data</FooterLink>
            <FooterLink>Product Data</FooterLink>
            <FooterLink>Data for AI</FooterLink>
            <FooterLink>Real Estate Data</FooterLink>
            <FooterLink>Job Listings Data</FooterLink>
            <FooterLink>Customized Data</FooterLink>
          </FooterCol>

          {/* About */}
          <FooterCol title="About">
            <FooterLink>Company</FooterLink>
            <FooterLink>Customers</FooterLink>
            <FooterLink>Support</FooterLink>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Price</FooterLink>
          </FooterCol>

          {/* Resources */}
          <FooterCol title="Resources">
            <FooterLink>Articles</FooterLink>
            <FooterLink>Ebooks</FooterLink>
            <FooterLink>White Papers</FooterLink>
            <FooterLink>Case Studies</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms & Conditions</FooterLink>
          </FooterCol>

          {/* Get in touch */}
          <FooterCol title="Get in touch">
            <FooterLink>LinkedIn</FooterLink>
            <FooterLink>Facebook</FooterLink>
            <FooterLink>Twitter</FooterLink>
          </FooterCol>
        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © 2025 Fastscraping Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link
              href="#"
              className="text-white/60 hover:text-white/90 transition"
            >
              Status
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white/90 transition"
            >
              Security
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white/90 transition"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- small helpers ---------- */

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-3 inline-flex items-center gap-2">
        {title}
        <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
      </h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <li>
      <Link
        href="#"
        className="text-white/70 hover:text-emerald-300 transition
                   inline-flex items-center gap-2 group"
      >
        <span>{children}</span>
        <span className="h-px w-0 group-hover:w-4 bg-emerald-300 transition-all" />
      </Link>
    </li>
  );
}
