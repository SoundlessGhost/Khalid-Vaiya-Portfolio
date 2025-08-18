import React from "react";
import AboutHeroSection from "./Components/about-hero-section";
import CoreValues from "./Components/about-core-values";
import LeadershipTeam from "./Components/about-leadership-team";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <CoreValues />
      <LeadershipTeam />
    </div>
  );
};

export default AboutPage;
