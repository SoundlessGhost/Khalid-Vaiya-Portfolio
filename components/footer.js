import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        {/* Web Scraping */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Web Scraping</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Web Scraping Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Expertise
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Enterprise Web Scraping
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Data From the Web
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Competitor Price Data
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Solution
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Web Data Extraction
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Data Collection
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Pricing Data
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Product Data
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Data for AI
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Real Estate Data
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Job Listings Data
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Customized Data
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3 text-white">About</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Company
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Customers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Price
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Articles
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Ebooks
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                White Papers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-stone-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Get in touch</h3>
          <div className="flex flex-col space-y-2 mt-2">
            <Link href="#" className="text-white hover:text-stone-300">
              LinkedIn
            </Link>
            <Link href="#" className="text-white hover:text-stone-300">
              Facebook
            </Link>
            <Link href="#" className="text-white hover:text-stone-300">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white mt-10">
        © 2025 Fastscraping Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
