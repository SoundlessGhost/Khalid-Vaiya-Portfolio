import React from "react";
import PricingDataSection from "@/components/Solutions Components/Pricing Data/pricing-data-section";
import PricingHighlights from "@/components/Solutions Components/Pricing Data/pricing-data-highlights";
import CaseStudySection from "@/components/Solutions Components/Pricing Data/pricing-data-case-study-section";
import PricingDataHeroSection from "@/components/Solutions Components/Pricing Data/pricing-data-hero-section";
import PartnerExperience from "@/components/Solutions Components/Pricing Data/pricing-data-partner-experience";
import ClientTestimonials from "@/components/Solutions Components/Pricing Data/pricing-data-client-testimonials";

const PricingDataPage = () => {
  return (
    <div className="pt-28">
      <PricingDataHeroSection />
      <PricingDataSection />
      <PricingHighlights />
      <PartnerExperience />
      <CaseStudySection />
      <ClientTestimonials />
    </div>
  );
};

export default PricingDataPage;
