import React from "react";
import RealEstateHeroSection from "@/components/Solutions Components/Real Estate/real-estate-hero-section";
import HowItWorks from "@/components/Solutions Components/Real Estate/real-estate-how-works";
import RealEstateCategoriesSection from "@/components/Solutions Components/Real Estate/real-estate-product-categories";
import RealEstateStrategicDataAdvantage from "@/components/Solutions Components/Real Estate/real-estate-strategic-advantage";

const RealEstatePage = () => {
  return (
    <div>
      <RealEstateHeroSection />
      <RealEstateStrategicDataAdvantage />
      <RealEstateCategoriesSection />
      <HowItWorks />
    </div>
  );
};

export default RealEstatePage;
