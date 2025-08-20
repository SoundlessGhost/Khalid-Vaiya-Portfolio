"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, Scale, Info } from "lucide-react";

const sections = {
  privacy: {
    id: "privacy",
    icon: ShieldCheck,
    label: "Privacy Policy",
  },
  terms: {
    id: "terms",
    icon: FileText,
    label: "Terms & Conditions",
  },
};

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export default function LegalPoliciesSection({
  companyName = "Fastscraping",
  websiteUrl = "https://fastscraping.example",
  contactEmail = "privacy@fastscraping.example",
  address = "123 Example Street, City, Country",
  lastUpdated = "2025-08-01",
}) {
  const [active, setActive] = React.useState(sections.privacy.id);

  return (
    <section
      aria-labelledby="legal-policies"
      className="relative isolate overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[#08111a]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000_40%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,198,130,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(12,198,130,.12) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "gridPan 24s linear infinite",
        }}
      />
      {/* soft glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 size-[520px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,.18),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-10 size-[480px] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.16),transparent_70%)] blur-2xl"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        {/* header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
            <Scale className="w-4 h-4" />
            Legal
          </div>
          <h1
            id="legal-policies"
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Policies & Terms for {companyName}
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
          </p>
        </div>

        {/* card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl ring-1 ring-white/10 backdrop-blur">
          {/* gradient top border */}
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

          {/* tabs */}
          <div className="flex flex-wrap items-center gap-2 p-3 sm:p-4 border-b border-white/10">
            {Object.values(sections).map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={[
                    "group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                    "transition-all duration-200",
                    isActive
                      ? "bg-emerald-500 text-white shadow-[0_0_0_1px_rgba(16,185,129,.35)]"
                      : "text-white/80 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              );
            })}
            <div className="ml-auto flex items-center text-white/60 text-xs">
              <Info className="w-4 h-4 mr-1.5" />
              This content is provided for general information and is not legal
              advice.
            </div>
          </div>

          {/* content */}
          <div className="p-5 sm:p-8">
            <AnimatePresence mode="wait">
              {active === sections.privacy.id ? (
                <motion.article
                  key="privacy"
                  variants={fade}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-white/90 leading-relaxed space-y-6"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Privacy Policy
                  </h2>
                  <p>
                    This Privacy Policy explains how{" "}
                    <strong>{companyName}</strong> (“we”, “us”, or “our”)
                    collects, uses, and shares your information when you access
                    or use{" "}
                    <a
                      href={websiteUrl}
                      className="text-emerald-400 underline underline-offset-4"
                    >
                      {websiteUrl}
                    </a>{" "}
                    and our related services (the “Services”).
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                      <h3 className="font-semibold text-white mb-2">
                        Information We Collect
                      </h3>
                      <ul className="list-disc ml-5 space-y-1.5">
                        <li>
                          Account data: name, email, and authentication details
                          you provide.
                        </li>
                        <li>
                          Usage data: logs, device information, and interaction
                          events.
                        </li>
                        <li>
                          Payment data: processed via our payment partner; we do
                          not store card numbers.
                        </li>
                        <li>
                          Cookies & similar technologies used for analytics and
                          preferences.
                        </li>
                      </ul>
                    </section>
                    <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                      <h3 className="font-semibold text-white mb-2">
                        How We Use Information
                      </h3>
                      <ul className="list-disc ml-5 space-y-1.5">
                        <li>Provide, maintain, and improve the Services.</li>
                        <li>
                          Personalize features and communicate with you about
                          updates.
                        </li>
                        <li>
                          Detect, prevent, and address security and abuse.
                        </li>
                        <li>
                          Comply with legal obligations and enforce our
                          agreements.
                        </li>
                      </ul>
                    </section>
                  </div>

                  <section>
                    <h3 className="font-semibold text-white mb-2">Sharing</h3>
                    <p>
                      We may share information with service providers (e.g.,
                      hosting, analytics, payments) under contracts that protect
                      your data. We may also disclose information if required by
                      law or to protect rights, safety, and the integrity of our
                      Services.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Data Retention
                    </h3>
                    <p>
                      We retain personal data only as long as needed for the
                      purposes above, unless a longer period is required by law
                      or to resolve disputes.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Your Choices
                    </h3>
                    <ul className="list-disc ml-5 space-y-1.5">
                      <li>
                        Access, update, or delete your account information.
                      </li>
                      <li>Control cookies through your browser settings.</li>
                      <li>
                        Opt out of non-essential emails by using unsubscribe
                        links.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      International Transfers
                    </h3>
                    <p>
                      If you access the Services from outside your country, your
                      information may be processed in jurisdictions with
                      different data protection laws. We implement safeguards
                      where required.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">Contact</h3>
                    <p>
                      Questions or requests? Email{" "}
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-emerald-400 underline underline-offset-4"
                      >
                        {contactEmail}
                      </a>{" "}
                      or write to {address}.
                    </p>
                  </section>
                </motion.article>
              ) : (
                <motion.article
                  key="terms"
                  variants={fade}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-white/90 leading-relaxed space-y-6"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Terms & Conditions
                  </h2>
                  <p>
                    These Terms & Conditions (“Terms”) govern your use of the
                    Services provided by <strong>{companyName}</strong>. By
                    accessing or using the Services, you agree to these Terms.
                    If you do not agree, do not use the Services.
                  </p>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Eligibility & Accounts
                    </h3>
                    <ul className="list-disc ml-5 space-y-1.5">
                      <li>
                        You must be legally capable of entering into this
                        agreement.
                      </li>
                      <li>
                        You are responsible for safeguarding your account
                        credentials and activity.
                      </li>
                      <li>
                        We may suspend or terminate accounts for breaches or
                        misuse.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Acceptable Use
                    </h3>
                    <ul className="list-disc ml-5 space-y-1.5">
                      <li>
                        Do not misuse, disrupt, or attempt to gain unauthorized
                        access to the Services.
                      </li>
                      <li>
                        Respect applicable laws, third-party rights, and rate
                        limits or technical controls.
                      </li>
                      <li>
                        Content you upload must not be illegal, harmful, or
                        infringe rights of others.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Subscriptions & Payments
                    </h3>
                    <p>
                      Fees, billing cycles, and cancellation terms are presented
                      at the point of purchase. Taxes may apply. Except where
                      required by law, payments are non-refundable once the
                      service period begins.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Intellectual Property
                    </h3>
                    <p>
                      The Services, including software, design, and trademarks,
                      are owned by {companyName} or our licensors and are
                      protected by applicable laws. You receive a limited,
                      non-exclusive, non-transferable license to use the
                      Services as permitted by these Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Disclaimers
                    </h3>
                    <p>
                      The Services are provided “as is” and “as available.” We
                      disclaim all warranties to the maximum extent permitted by
                      law, including implied warranties of merchantability,
                      fitness for a particular purpose, and non-infringement.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Limitation of Liability
                    </h3>
                    <p>
                      To the fullest extent permitted by law, {companyName} will
                      not be liable for indirect, incidental, special,
                      consequential, or punitive damages, or for any loss of
                      profits, revenues, data, or goodwill.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Termination
                    </h3>
                    <p>
                      We may suspend or terminate your access for any breach of
                      these Terms. Upon termination, your right to use the
                      Services ceases immediately, and certain provisions
                      survive.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">
                      Governing Law & Disputes
                    </h3>
                    <p>
                      These Terms are governed by applicable laws of the
                      jurisdiction in which {companyName} is established,
                      without regard to conflicts of law principles. Disputes
                      will be resolved in the competent courts of that
                      jurisdiction.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">Changes</h3>
                    <p>
                      We may update these Terms from time to time. We will post
                      the revised version with the updated date. Your continued
                      use after changes constitutes acceptance.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-white mb-2">Contact</h3>
                    <p>
                      For questions about these Terms, email{" "}
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-emerald-400 underline underline-offset-4"
                      >
                        {contactEmail}
                      </a>
                      .
                    </p>
                  </section>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* keyframe used above */}
      <style jsx global>{`
        @keyframes gridPan {
          to {
            background-position: 40px 0, 0 40px;
          }
        }
      `}</style>
    </section>
  );
}
