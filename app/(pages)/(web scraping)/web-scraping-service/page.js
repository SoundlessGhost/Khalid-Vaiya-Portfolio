import React from "react";
import PricingHighlights from "@/components/Web Scraping Components/Web Scraping Service/web-seraping-pricing-data-highlights";
import ScrapingFeatures from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-features";
import ScrapingComponents from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-components";
import WebScrapingServiceHeroSection from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-service-hero-section";

const WebScrapingServicePage = () => {
  return (
    <div>
      <WebScrapingServiceHeroSection />
      <ScrapingFeatures />
      <ScrapingComponents />
      <PricingHighlights />
    </div>
  );
};

export default WebScrapingServicePage;
