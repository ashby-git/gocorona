import React, { useState } from "react";
import LandingPage from "../components/landing-page/landing-page.component";
import MobileMenu from "../components/mobile-menu/mobile-menu.component";
import Navbar from "../components/navbar/navbar.component";

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LandingPage />
    </div>
  );
};

export default Pages;
