import { AccordionDemo } from "@/components/Home Components/frequently-asked-questions";

import MarketplaceGrid from "@/components/Home Components/marketplace-grid";
import DataExtractionService from "@/components/Home Components/data-extraction-service";
import StartYourDataPipeline from "@/components/Home Components/start-your-data-pipeline";
import HeroSection from "@/components/Home Components/hero-section";
import GradientSlidesSection from "@/components/Home Components/mixed-slides-section";
import PricingLanding from "@/components/Home Components/home-sheet-file-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DataExtractionService />
      <MarketplaceGrid />
      <StartYourDataPipeline />
      <GradientSlidesSection />
      <PricingLanding />
      <AccordionDemo />
    </div>
  );
}
