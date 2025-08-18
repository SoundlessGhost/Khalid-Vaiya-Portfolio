import React from "react";
import CompetitorPriceMonitoring from "@/components/Web Scraping Components/Competitor Price Data/competitor-price-monitoring";
import FastScrapingDifferentiators from "@/components/Web Scraping Components/Competitor Price Data/competitor-differentiators";
import PricingInsightSection from "@/components/Web Scraping Components/Competitor Price Data/competiitor-pricing-Insight-section";
import CompetitorPriceMonitoringPromo from "@/components/Web Scraping Components/Competitor Price Data/competitor-price-monitoring-promo";
import CompetitorPriceDataHeroSection from "@/components/Web Scraping Components/Competitor Price Data/competitor-price-data-hero-section";

const CompetitorPriceMonitoringPage = () => {
  return (
    <div>
      <CompetitorPriceDataHeroSection />
      <FastScrapingDifferentiators />
      <CompetitorPriceMonitoring />
      <CompetitorPriceMonitoringPromo />
      <PricingInsightSection />
    </div>
  );
};

export default CompetitorPriceMonitoringPage;
