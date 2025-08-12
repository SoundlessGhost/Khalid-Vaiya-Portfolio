import React from "react";
import AboutHeroSection from "./Components/about-hero-section";
import StartYourDataPipeline from "@/components/Home Components/start-your-data-pipeline";
import MarketplaceGrid from "@/components/Home Components/marketplace-grid";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <StartYourDataPipeline />
      <MarketplaceGrid />
    </div>
  );
};

export default AboutPage;
