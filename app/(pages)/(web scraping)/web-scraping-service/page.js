import PricingTrackerHero from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-tracker-hero";
import ReusableComponent from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-component";
import ScrapingFeatures from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-features";
import WebScrapingServiceHeroSection from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-service-hero-section";
import WebScrapingIntro from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-Intro";
import React from "react";
import ScrapingComponents from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-components";
import PricingHighlights from "@/components/Solutions Components/Pricing Data/pricing-data-highlights";

const WebScrapingServicePage = () => {
  return (
    <div>
      <WebScrapingServiceHeroSection />
      <ScrapingComponents />
      {/* <WebScrapingIntro /> */}
      {/* <ReusableComponent /> */}
      <ScrapingFeatures />
      <PricingHighlights />

      {/* <PricingTrackerHero /> */}
    </div>
  );
};

export default WebScrapingServicePage;
