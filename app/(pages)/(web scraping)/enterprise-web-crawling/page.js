import DataCollectionCTA from "@/components/Web Scraping Components/Enterprise Web Crawling/web-extraction-data-collection-cta";
import GrowthPartner from "@/components/Web Scraping Components/Enterprise Web Crawling/web-extraction-growth-partner";
import WebExtractionHeroSection from "@/components/Web Scraping Components/Enterprise Web Crawling/enterprise-web-crawling-hero-section";
import WebExtraction from "@/components/Web Scraping Components/Enterprise Web Crawling/web-extraction-intro";
import React from "react";

const EnterpriseWebCrawlingPage = () => {
  return (
    <div>
      <WebExtractionHeroSection />
      <WebExtraction />
      <GrowthPartner />
      <DataCollectionCTA />
    </div>
  );
};

export default EnterpriseWebCrawlingPage;
