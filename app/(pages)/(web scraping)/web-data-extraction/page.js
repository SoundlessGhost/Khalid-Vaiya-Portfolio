import DataCollectionCTA from "@/components/Web Scraping Components/Web Data Extraction/web-extraction-data-collection-cta";
import GrowthPartner from "@/components/Web Scraping Components/Web Data Extraction/web-extraction-growth-partner";
import WebExtractionHeroSection from "@/components/Web Scraping Components/Web Data Extraction/web-extraction-hero-section";
import WebExtraction from "@/components/Web Scraping Components/Web Data Extraction/web-extraction-intro";
import React from "react";

const ExtractionPage = () => {
  return (
    <div className="pt-28">
      <WebExtractionHeroSection />
      <WebExtraction />
      <GrowthPartner />
      <DataCollectionCTA />
    </div>
  );
};

export default ExtractionPage;
