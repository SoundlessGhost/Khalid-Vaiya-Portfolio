import AboutUsSection from "@/components/Web Scraping Components/Mobile App Scraping/expertise-about-us-section";
import CaseStudySection from "@/components/Web Scraping Components/Mobile App Scraping/expertise-case-study-section";
import ExpertiseHeroSection from "@/components/Web Scraping Components/Mobile App Scraping/mobile-app-scraping-hero-section";
import WhyChooseUs from "@/components/Web Scraping Components/Mobile App Scraping/expertise-why-choose-us";
import React from "react";

const MobileAppScrapingPage = () => {
  return (
    <div>
      <ExpertiseHeroSection />
      <WhyChooseUs />
      <CaseStudySection />
      <AboutUsSection />
    </div>
  );
};

export default MobileAppScrapingPage;
