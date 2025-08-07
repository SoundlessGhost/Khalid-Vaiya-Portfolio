import PricingTrackerHero from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-tracker-hero";
import ReusableComponent from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-component";
import ScrapingFeatures from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-features";
import WebScrapingServiceHeroSection from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-service-hero-section";
import WebScrapingIntro from "@/components/Web Scraping Components/Web Scraping Service/web-scraping-Intro";
import React from "react";

const WebScrapingService = () => {
  return (
    <div className="pt-28">
      <WebScrapingServiceHeroSection />
      <WebScrapingIntro />
      <ReusableComponent />
      <ScrapingFeatures />
      <PricingTrackerHero />
    </div>
  );
};

export default WebScrapingService;
