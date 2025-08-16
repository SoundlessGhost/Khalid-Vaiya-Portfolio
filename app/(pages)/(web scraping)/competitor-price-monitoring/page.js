import PricingInsightSection from "@/components/Web Scraping Components/Competitor Price Data/competiitor-pricing-Insight-section";
import EbookPromo from "@/components/Web Scraping Components/Competitor Price Data/competitor-ebook-promo";
import CompetitorPriceDataHeroSection from "@/components/Web Scraping Components/Competitor Price Data/competitor-price-data-hero-section";
import CompetitorPricingSection from "@/components/Web Scraping Components/Competitor Price Data/competitor-pricing-section";
import ProfessionalSolutions from "@/components/Web Scraping Components/Competitor Price Data/competitor-professional-solutions";
import React from "react";

const CompetitorPriceMonitoringPage = () => {
  return (
    <div>
      <CompetitorPriceDataHeroSection />
      <CompetitorPricingSection />
      <ProfessionalSolutions />
      <EbookPromo />
      <PricingInsightSection />
    </div>
  );
};

export default CompetitorPriceMonitoringPage;
