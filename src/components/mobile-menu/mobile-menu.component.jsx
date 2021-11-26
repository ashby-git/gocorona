import React from "react";
import { Button } from "../UI/button.styles";
import {
  MenuContainer,
  MenuItem,
  MobileMenuContainer,
  MobileXIcon,
} from "./mobile-menu.styles";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
      <MobileXIcon onClick={toggle} />
      <MenuContainer>
        <Button
          blue
          href="https://en.wikipedia.org/wiki/COVID-19"
          target="_blank"
        >
          download
        </Button>
        <MenuItem href="https://en.wikipedia.org/wiki/COVID-19" target="_blank">
          home
        </MenuItem>
        <MenuItem href="https://en.wikipedia.org/wiki/COVID-19" target="_blank">
          features
        </MenuItem>
        <MenuItem href="https://en.wikipedia.org/wiki/COVID-19" target="_blank">
          support
        </MenuItem>
        <MenuItem href="https://en.wikipedia.org/wiki/COVID-19" target="_blank">
          contact us
        </MenuItem>
      </MenuContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
