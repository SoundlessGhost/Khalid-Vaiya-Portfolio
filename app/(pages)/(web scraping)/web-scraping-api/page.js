import React from "react";
import HowItWorkHeroSection from "@/components/Web Scraping Components/Web Scraping Api/web-scraping-api-hero-section";
import RealTimeScrapingSection from "@/components/Web Scraping Components/Web Scraping Api/web-scraping-api-real-time-section";
import ScrapingHero from "@/components/Web Scraping Components/Web Scraping Api/web-scraping-hero";
import BenefitsCustomizedSection from "@/components/Web Scraping Components/Web Scraping Api/web-scraping-api-benefits-scraping";

const WebScrapingApiPage = () => {
  return (
    <div>
      <HowItWorkHeroSection />
      <RealTimeScrapingSection />
      <BenefitsCustomizedSection />
      <ScrapingHero />
    </div>
  );
};

export default WebScrapingApiPage;
