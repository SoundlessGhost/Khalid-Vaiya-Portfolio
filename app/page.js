import { AccordionDemo } from "@/components/Home Components/frequently-asked-questions";

import HeroSection from "@/components/Home Components/hero-section";
import MarketplaceGrid from "@/components/Home Components/marketplace-grid";
import DataExtractionService from "@/components/Home Components/data-extraction-service";
import StartYourDataPipeline from "@/components/Home Components/start-your-data-pipeline";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MarketplaceGrid />
      <StartYourDataPipeline />
      <DataExtractionService />
      <AccordionDemo />
    </div>
  );
}
