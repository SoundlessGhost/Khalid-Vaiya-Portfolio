import { AccordionDemo } from "@/components/Home Components/frequently-asked-questions";

import HeroSection from "@/components/Home Components/hero-section";
import MarketplaceGrid from "@/components/Home Components/marketplace-grid";
import GradientSlidesSection from "@/components/Home Components/mixed-slides-section";
import DataExtractionService from "@/components/Home Components/data-extraction-service";
import StartYourDataPipeline from "@/components/Home Components/start-your-data-pipeline";
import PopularScrapersCarousel from "@/components/Home Components/Popular Scraper/popular-scrapers-carousel";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DataExtractionService />
      <MarketplaceGrid />
      <StartYourDataPipeline />
      <GradientSlidesSection />
      <PopularScrapersCarousel />
      <FeaturesGrid />
      <AccordionDemo />
    </div>
  );
}
