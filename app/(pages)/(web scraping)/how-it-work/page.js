import React from "react";
import StepTwo from "@/components/Web Scraping Components/How it Work/how-it-work-step-two-demo";
import StepThree from "@/components/Web Scraping Components/How it Work/how-it-work-step-three-demo";
import StepOneDemo from "@/components/Web Scraping Components/How it Work/how-it-work-step-one-demo";
import HowItWorkHeroSection from "@/components/Web Scraping Components/How it Work/how-it-work-hero-section";
import CustomDataDelivery from "@/components/Web Scraping Components/How it Work/how-it-work-custom-data-delivery";

const HowItWorkPage = () => {
  return (
    <div className="pt-28">
      <HowItWorkHeroSection />
      <CustomDataDelivery />
      <StepOneDemo />
      <StepTwo />
      <StepThree />
    </div>
  );
};

export default HowItWorkPage;
