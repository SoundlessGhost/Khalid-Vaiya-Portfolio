import React from "react";
import EnterpriseCrawlingHero from "@/components/Web Scraping Components/Enterprise Web Crawling/enterprise-web-crawling-sub-hero";
import EnterpriseCrawlingSection from "@/components/Web Scraping Components/Enterprise Web Crawling/enterprise-web-crawling-section";
import EnterpriseBenefitsSection from "@/components/Web Scraping Components/Enterprise Web Crawling/enterprise-web-benefits-section";
import WebExtractionHeroSection from "@/components/Web Scraping Components/Enterprise Web Crawling/enterprise-web-crawling-hero-section";

const EnterpriseWebCrawlingPage = () => {
  return (
    <div>
      <WebExtractionHeroSection />
      <EnterpriseCrawlingSection />
      <EnterpriseBenefitsSection />
      <EnterpriseCrawlingHero />
    </div>
  );
};

export default EnterpriseWebCrawlingPage;
