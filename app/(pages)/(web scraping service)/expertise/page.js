import AboutUsSection from "@/components/Expertise/expertise-about-us-section";
import CaseStudySection from "@/components/Expertise/expertise-case-study-section";
import ExpertiseHeroSection from "@/components/Expertise/expertise-hero-section";
import WhyChooseUs from "@/components/Expertise/expertise-why-choose-us";
import React from "react";

const ExpertisePage = () => {
  return (
    <div className="pt-28">
      <ExpertiseHeroSection />
      <WhyChooseUs />
      <AboutUsSection />
      <CaseStudySection />
    </div>
  );
};

export default ExpertisePage;
