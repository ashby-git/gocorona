import React, { useState } from "react";
import ExpertsSection from "../components/experts-section/experts-section.component";
import HealthcareSection from "../components/healthcare-section/healthcare-section.component";
import LandingPage from "../components/landing-page/landing-page.component";
import MobileMenu from "../components/mobile-menu/mobile-menu.component";
import MobileSection from "../components/mobile-section/mobile-section.component";
import Navbar from "../components/navbar/navbar.component";
import { PagesContainer } from "./pages.styles";

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PagesContainer>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LandingPage />
      <MobileSection />
      <ExpertsSection />
      <HealthcareSection />
    </PagesContainer>
  );
};

export default Pages;
