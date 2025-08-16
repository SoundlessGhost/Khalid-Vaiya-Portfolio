import React from "react";
import StepTwo from "@/components/Web Scraping Components/Web Scraping Api/how-it-work-step-two-demo";
import StepThree from "@/components/Web Scraping Components/Web Scraping Api/how-it-work-step-three-demo";
import StepOneDemo from "@/components/Web Scraping Components/Web Scraping Api/how-it-work-step-one-demo";
import HowItWorkHeroSection from "@/components/Web Scraping Components/Web Scraping Api/web-scraping-api-hero-section";
import CustomDataDelivery from "@/components/Web Scraping Components/Web Scraping Api/how-it-work-custom-data-delivery";

const WebScrapingApiPage = () => {
  return (
    <div>
      <HowItWorkHeroSection />
      <CustomDataDelivery />
      <StepOneDemo />
      <StepTwo />
      <StepThree />
    </div>
  );
};

export default WebScrapingApiPage;
