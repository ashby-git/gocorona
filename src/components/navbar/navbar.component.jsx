import React, { useState, useEffect } from "react";
import { Button } from "../UI/button.styles";
import {
  LeftSide,
  MenuIcon,
  NavbarButton,
  NavbarContainer,
  NavbarItem,
  NavbarItemContainer,
  NavbarLogo,
} from "./navbar.styles";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 150) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavbarContainer scrollNav={scrollNav}>
        <MenuIcon onClick={toggle} />

        <LeftSide scrollNav={scrollNav}>
          <NavbarLogo onClick={scrollToTop} />
          <NavbarItemContainer scrollNav={scrollNav}>
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
        </LeftSide>
        <NavbarButton>
          <Button
            blue
            href="https://en.wikipedia.org/wiki/COVID-19"
            target="_blank"
          >
            Download
          </Button>
        </NavbarButton>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
