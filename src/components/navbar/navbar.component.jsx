import React from "react";
import { Button } from "../UI/button.styles";
import {
  NavbarContainer,
  NavbarItem,
  NavbarItemContainer,
} from "./navbar.styles";
import goCoronaLogo from "../../assests/logo.png";

const Navbar = () => {
  return (
    <NavbarContainer>
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
  );
};

export default Navbar;
