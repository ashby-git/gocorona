import React, { useState, useEffect } from "react";
import { Button } from "../UI/button.styles";
import {
  NavbarContainer,
  NavbarItem,
  NavbarItemContainer,
} from "./navbar.styles";
import goCoronaLogo from "../../assests/logo.png";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <NavbarContainer scrollNav={scrollNav}>
        <img src={goCoronaLogo} alt="logo" />
        <NavbarItemContainer>
          <NavbarItem
            href="https://en.wikipedia.org/wiki/COVID-19"
            target="_blank"
          >
            home
          </NavbarItem>
          <NavbarItem
            href="https://en.wikipedia.org/wiki/COVID-19"
            target="_blank"
          >
            features
          </NavbarItem>
          <NavbarItem
            href="https://en.wikipedia.org/wiki/COVID-19"
            target="_blank"
          >
            support
          </NavbarItem>
          <NavbarItem
            href="https://en.wikipedia.org/wiki/COVID-19"
            target="_blank"
          >
            contact us
          </NavbarItem>
        </NavbarItemContainer>
        <Button
          blue
          href="https://en.wikipedia.org/wiki/COVID-19"
          target="_blank"
        >
          Download
        </Button>
      </NavbarContainer>
      <div style={{ height: "2000px" }} />
    </>
  );
};

export default Navbar;
