import React from "react";
import JobListingHeroSection from "@/components/Solutions Components/Job Listings Data/job-listing-hero-section";
import HRStrategySection from "@/components/Solutions Components/Job Listings Data/job-listing-strategy-section";
import JobListingPersonasSection from "@/components/Solutions Components/Job Listings Data/job-listing-person-section";
import StrategicDataPartner from "@/components/Solutions Components/Job Listings Data/job-listing-strategic-partner";

const JobListingDataPage = () => {
  return (
    <div>
      <JobListingHeroSection />
      <HRStrategySection />
      <JobListingPersonasSection />
      <StrategicDataPartner />
    </div>
  );
};

export default JobListingDataPage;
