import React from "react";
import StrategicDataAdvantage from "@/components/Solutions Components/E Commerce Inventory/e-commerce-inventory-strategic-advantage";
import QualityImpactSection from "@/components/Solutions Components/E Commerce Inventory/e-commerce-inventory-quality-impact-section";
import ProductDataCategoriesSection from "@/components/Solutions Components/E Commerce Inventory/e-commerce-inventory-product-categories";
import TestimonialsRow from "@/components/Solutions Components/E Commerce Inventory/e-commerce-inventory-testimonials-row";
import EcomInventoryHero from "@/components/Solutions Components/E Commerce Inventory/e-commerce-inventory-hero-section";
import ProductDataCategories from "@/components/Solutions Components/E Commerce Inventory/e-commerce-inventory-product-categories";

const ECommerceInventoryPricingPage = () => {
  return (
    <div>
      <EcomInventoryHero />
      <StrategicDataAdvantage />
      <QualityImpactSection />
      <ProductDataCategories />
      <TestimonialsRow />
    </div>
  );
};

export default ECommerceInventoryPricingPage;
