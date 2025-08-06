import ScrapingFeatures from "@/components/ScrapingFeatures";
import WebScrapingServiceHeroSection from "@/components/web-scraping-service-hero-section";
import WebScrapingIntro from "@/components/WebScrapingIntro";
import React from "react";

const WebScrapingService = () => {
  return (
    <div>
      <WebScrapingServiceHeroSection />
      <WebScrapingIntro />
      <ScrapingFeatures />
    </div>
  );
};

export default WebScrapingService;
