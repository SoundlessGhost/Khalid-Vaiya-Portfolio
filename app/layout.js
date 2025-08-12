import "./globals.css";

import Footer from "@/components/footer";
import ChatWidget from "@/components/ChatWidget";
import NavbarAnimated from "@/components/navbar";

import { Toaster } from "react-hot-toast";
import { Work_Sans } from "next/font/google";

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
        <NavbarAnimated />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
