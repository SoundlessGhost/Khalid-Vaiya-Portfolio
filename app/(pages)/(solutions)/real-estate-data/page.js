import React from "react";
import RealEstateHeroSection from "@/components/Solutions Components/Real Estate/real-estate-hero-section";
import RealEstateCategoriesSection from "@/components/Solutions Components/Real Estate/real-estate-product-categories";
import RealEstateStrategicDataAdvantage from "@/components/Solutions Components/Real Estate/real-estate-strategic-advantage";
import RealEstatePowerSection from "@/components/Solutions Components/Real Estate/real-estate-power-section";

const RealEstatePage = () => {
  return (
    <div>
      <RealEstateHeroSection />
      <RealEstateStrategicDataAdvantage />
      <RealEstateCategoriesSection />
      <RealEstatePowerSection />
    </div>
  );
};

export default RealEstatePage;
