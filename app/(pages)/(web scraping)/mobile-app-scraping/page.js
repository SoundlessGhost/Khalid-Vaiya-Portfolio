import BenefitsMobileAppScraping from "@/components/Web Scraping Components/Mobile App Scraping/mobile-app-benefits-scraping";
import CustomMobileAppScraping from "@/components/Web Scraping Components/Mobile App Scraping/mobile-app-custom-scraping";
import HeroReliableMobileScraping from "@/components/Web Scraping Components/Mobile App Scraping/mobile-app-reliable-scraping";
import MobileAppScrapingHeroSection from "@/components/Web Scraping Components/Mobile App Scraping/mobile-app-scraping-hero-section";
import MobileAppScrapingSection from "@/components/Web Scraping Components/Mobile App Scraping/mobile-app-scraping-section";
import React from "react";

const MobileAppScrapingPage = () => {
  return (
    <div>
      <MobileAppScrapingHeroSection />
      <MobileAppScrapingSection />
      <CustomMobileAppScraping />
      <BenefitsMobileAppScraping />
      <HeroReliableMobileScraping />
    </div>
  );
};

export default MobileAppScrapingPage;
