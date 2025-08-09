import AboutUsSection from "@/components/Web Scraping Components/Expertise/expertise-about-us-section";
import CaseStudySection from "@/components/Web Scraping Components/Expertise/expertise-case-study-section";
import ExpertiseHeroSection from "@/components/Web Scraping Components/Expertise/expertise-hero-section";
import WhyChooseUs from "@/components/Web Scraping Components/Expertise/expertise-why-choose-us";
import React from "react";

const ExpertisePage = () => {
  return (
    <div className="pt-28">
      <ExpertiseHeroSection />
      <WhyChooseUs />
      <CaseStudySection />
      <AboutUsSection />
    </div>
  );
};

export default ExpertisePage;
