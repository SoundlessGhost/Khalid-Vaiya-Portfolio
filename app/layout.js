import "./globals.css";

import Footer from "@/components/footer";

import { Work_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "Fast Scraping | Web Data Expert",
  description: "Bypass bot protection and extract web data easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
