import React from "react";
import JobListingHeroSection from "@/components/Solutions Components/Job Listings Data/job-listing-hero-section";
import TrustedByClientsSection from "@/components/Solutions Components/Job Listings Data/job-listing-trusted-client-section";
import ProblemSolutionSection from "@/components/Solutions Components/Job Listings Data/job-listing-problem-solution-section";

const JobListingDataPage = () => {
  return (
    <div>
      <JobListingHeroSection />
      <TrustedByClientsSection />
      <ProblemSolutionSection />
    </div>
  );
};

export default JobListingDataPage;
