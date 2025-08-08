import ProductDataCollection from "@/components/Solutions Components/Product Data/product-data-collection";
import CompareScrapingExperience from "@/components/Solutions Components/Product Data/product-data-compare-scraping-experience";
import ProductDataHeroSection from "@/components/Solutions Components/Product Data/product-data-hero-section";
import HeroProductScraping from "@/components/Solutions Components/Product Data/product-data-scraping";
import SimplifyDataCollection from "@/components/Solutions Components/Product Data/product-data-simplify-data-collection";
import React from "react";

const ProductDataPage = () => {
  return (
    <div>
      <ProductDataHeroSection />
      <ProductDataCollection />
      <HeroProductScraping />
      <CompareScrapingExperience />
      <SimplifyDataCollection />
    </div>
  );
};

export default ProductDataPage;
