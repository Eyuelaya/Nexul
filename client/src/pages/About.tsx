import React from "react";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { MissionValuesSection } from "./sections/MissionValuesSection";
import { PortfolioGridSection } from "./sections/PortfolioGridSection";
import { FooterSection } from "./sections/FooterSection";

export const About = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black">
      <NavigationBarSection />
      
      <div className="pt-20">
        <AboutUsSection />
        <MissionValuesSection />
        <PortfolioGridSection />
      </div>

      <FooterSection />
    </div>
  );
};
