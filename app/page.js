import HeroSection from "@/components/Home Components/hero-section";
import JobDataProblemsAnimated from "@/components/Home Components/suggestions";
import FastScrapingService from "@/components/Home Components/fastscraping-service";
import DataExtractionService from "@/components/Home Components/data-extraction-service";

import { AccordionDemo } from "@/components/Home Components/frequently-asked-questions";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <JobDataProblemsAnimated />

      <FastScrapingService />

      <DataExtractionService />

      <AccordionDemo />
    </div>
  );
}
