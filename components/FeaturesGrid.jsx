import React from "react";

const features = [
  { title: "Anti-Bot Bypass", icon: BotIcon },
  { title: "CAPTCHA Handling", icon: ShieldCheckIcon },
  { title: "User-Agent Rotation", icon: UserAgentIcon },
  { title: "Headless Browser Support", icon: BrowserIcon },
  { title: "Error Handling And Retries", icon: RetryIcon },
  { title: "Smart Proxy Rotation", icon: ProxyIcon },
  { title: "WAF Bypass", icon: WafIcon },
  { title: "JavaScript Rendering", icon: JsIcon },
  { title: "IP Fingerprint Bypass", icon: FingerprintIcon },
  { title: "Custom HTTP Headers", icon: HeadersIcon },
];

export default function FeaturesGrid() {
  // positions for the little intersection dots on large screens (5 columns)
  const dots = ["0%", "20%", "40%", "60%", "80%", "100%"]; // edges + dividers

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600">
          Explore all the features of our Web service.
        </p>

        <div className="relative mt-6 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50">
          {/* Grid (5 columns on lg to match the screenshot) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-gray-200">
            {features.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex h-32 flex-col items-center justify-center gap-3 px-4 text-center"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white">
                  <Icon className="h-5 w-5 text-gray-700" />
                </span>
                <span className="text-[13px] font-medium text-gray-800">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* --- NEW: extra-long vertical separators + midline + circles --- */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {/* make the mid horizontal line same color/thickness */}
            <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gray-200" />

            {/* Long vertical lines (span full container; extend a bit outside if you want) */}
            {["20%", "40%", "60%", "80%"].map((left, i) => (
              <span
                key={i}
                className="
                  absolute
                  -top-[6px]   /* ← চাইলে 0 দিন; -6px দিলে একটু বাইরে নেমে যায় */
                  -bottom-[6px]
                  -translate-x-1/2
                  w-px bg-gray-200
                "
                style={{ left }}
              />
            ))}

            {/* small circles at intersections (including edges) */}
            {dots.map((left, i) => (
              <span
                key={`dot-${i}`}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border border-gray-300 bg-white"
                style={{ left, width: 10, height: 10 }}
              />
            ))}
          </div>
          {/* --- /NEW --- */}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Minimal inline SVG icons
-------------------------------- */

function BotIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
      <path d="M12 3v3" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
function ShieldCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
        stroke="currentColor"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UserAgentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" />
      <path
        d="M5 20a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M4 4h16" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
function BrowserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" />
      <path d="M3 9h18" stroke="currentColor" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="10" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}
function RetryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20 12a8 8 0 1 1-2.34-5.66"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M20 6v4h-4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
function ProxyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" />
      <path d="M7 7h10M7 17h10" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
function WafIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
      <path d="M7 12h10M12 7v10" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
function JsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
      <path
        d="M9 9v6a2 2 0 0 0 2 2M15 9a2 2 0 1 1 0 4h-2v4"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
function FingerprintIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 6a6 6 0 0 0-6 6v2"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12 8a4 4 0 0 0-4 4v1"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12 10a2 2 0 0 0-2 2v7"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12 6a6 6 0 0 1 6 6v1"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M16 12v6" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
function HeadersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
      <path
        d="M7 8h10M7 12h10M7 16h6"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
