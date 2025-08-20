import React from "react";
import AboutHeroSection from "./Components/about-hero-section";
import CoreValues from "./Components/about-core-values";
import LeadershipTeam from "./Components/about-leadership-team";
import Achievements from "./Components/about-achievements";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <CoreValues />
      <LeadershipTeam />
      <Achievements />
    </div>
  );
};

export default AboutPage;
