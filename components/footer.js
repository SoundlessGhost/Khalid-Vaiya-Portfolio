import Link from "next/link";
import TermsThenFormInDialog from "./TermsGatedForm";

export default function Footer() {
  const columns = [
    {
      title: "Web Scraping",
      links: [
        { href: "/web-scraping-service", label: "Web Scraping Service" },
        {
          href: "/competitor-price-monitoring",
          label: "Competitor Price Monitoring",
        },
        { href: "/mobile-app-scraping", label: "Mobile App Scraping" },
        { href: "/web-scraping-api", label: "Web Scraping Api" },
        { href: "/enterprise-web-crawling", label: "Enterprise Web Crawling" },
      ],
    },
    {
      title: "Solutions",
      links: [
        {
          href: "/ticketing-website-pricing",
          label: "Ticketing Website Pricing",
        },
        {
          href: "/restaurant-food-pricing",
          label: "Restaurant & Food Pricing",
        },
        {
          href: "/e-Commerce-inventory-pricing",
          label: "E-Commerce & Pricing",
        },
        { href: "/customized-data", label: "Customized Data Solutions" },
        { href: "/real-estate-data", label: "Real Estate Listing Data" },
        { href: "/job-listings-data", label: "Job Listing Data" },
      ],
    },
    // {
    //   title: "About",
    //   links: [
    //     { href: "/company", label: "Company" },
    //     { href: "/customers", label: "Customers" },
    //     { href: "/support", label: "Support" },
    //     { href: "/contact", label: "Contact" },
    //     { href: "/price", label: "Price" },
    //   ],
    // },
    {
      title: "Resources",
      links: [
        { href: "/supports", label: "Supports" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/legal/privacy-policy", label: "Privacy Policy" },
        { href: "/legal/privacy-policy", label: "Terms & Conditions" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { href: "https://linkedin.com", label: "LinkedIn" },
        { href: "https://facebook.com", label: "Facebook" },
        { href: "https://youtube.com", label: "Youtube" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 -z-10 bg-[#0a0f1a]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_70%_-10%,rgba(99,102,241,.18),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_280px_at_15%_120%,rgba(16,185,129,.18),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[.35] mix-blend-soft-light
                      bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
                      bg-[size:40px_40px]"
      />

      {/* top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* CTA strip */}
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
            <div>
              <TermsThenFormInDialog btn_name={"Book a Demo"} />
            </div>
          </div>
        </div>

        {/* footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
          {columns.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © 2025 Fastscraping Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <FooterLink href="#">Status</FooterLink>
            <FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Cookie Settings</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- small helpers ---------- */
function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-3 inline-flex items-center gap-2">
        {title}
        <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
      </h3>
      <ul className="space-y-2">
        {links.map((link, i) => (
          <FooterLink key={i} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/70 hover:text-emerald-300 transition
                   inline-flex items-center gap-2 group"
      >
        <span>{children}</span>
        <span className="h-px w-0 group-hover:w-4 bg-emerald-300 transition-all" />
      </Link>
    </li>
  );
}
