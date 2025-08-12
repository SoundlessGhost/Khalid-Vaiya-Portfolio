export const metadata = {
  title: "Privacy Policy – Fastscraping",
  description:
    "Privacy Policy for Fastscraping web scraping and automation services.",
};

const LAST_UPDATED = "August 12, 2025"; // Change date if needed

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5 mt-20">
      <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-600 px-8 py-6 text-white">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-1 text-sm opacity-90">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          <section>
            <p>
              Fastscraping (“<strong>we</strong>,” “<strong>us</strong>,” or “
              <strong>our</strong>”) provides web-scraping, automation, and data
              tools (the “<strong>Services</strong>”). This Privacy Policy
              explains how we collect, use, disclose, and protect information
              when you use our websites, applications, APIs, and related
              Services.
            </p>
            <p className="mt-4">
              By using Fastscraping, you agree to this Privacy Policy. If you do
              not agree, please do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700">
              1) Who we are & Contact
            </h2>
            <p>
              <strong>Controller:</strong> Fastscraping <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@fastscraping.com"
                className="text-emerald-600 hover:underline"
              >
                privacy@fastscraping.com
              </a>
              <br />
              <strong>Address:</strong> 123 Example Street, City, Country
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700">
              2) Information we collect
            </h2>
            <h3 className="mt-2 font-medium">a) Information you provide</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Account details (name, email, password)</li>
              <li>Billing info processed by our payment provider</li>
              <li>Support messages, form submissions, demo requests</li>
              <li>
                API usage configuration (projects, schedules, selectors, code)
              </li>
            </ul>
            <h3 className="mt-4 font-medium">b) Automatically collected</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Log data (IP, device/OS/browser, timestamps, referrer)</li>
              <li>
                Usage data (pages viewed, features used, run status/errors)
              </li>
              <li>
                Cookies/local storage (session, auth, preferences, analytics)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700">
              3) How we use information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide, maintain, and improve the Services</li>
              <li>Authenticate users and secure accounts</li>
              <li>Run and monitor scraping/automation tasks</li>
              <li>Process payments and manage subscriptions</li>
              <li>Communicate updates, security alerts, and support</li>
              <li>Analytics and product improvement</li>
              <li>Marketing emails with consent (opt-out anytime)</li>
            </ul>
          </section>

          {/* Add more sections as needed */}

          <section>
            <h2 className="text-xl font-semibold text-emerald-700">
              4) Contact
            </h2>
            <p>
              Questions or requests? Email{" "}
              <a
                href="mailto:privacy@fastscraping.com"
                className="text-emerald-600 hover:underline"
              >
                privacy@fastscraping.com
              </a>
              <br />
              Address: 123 Example Street, City, Country
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
