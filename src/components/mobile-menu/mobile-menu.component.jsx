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
        <Button blue to="/download">
          download
        </Button>
        <MenuItem onClick={toggle} to="landing" smooth={true} duration={500}>
          home
        </MenuItem>
        <MenuItem
          onClick={toggle}
          to="mobile"
          smooth={true}
          duration={500}
          offset={-25}
        >
          features
        </MenuItem>
        <MenuItem
          onClick={toggle}
          to="experts"
          smooth={true}
          duration={500}
          offset={-50}
        >
          support
        </MenuItem>
        <MenuItem
          onClick={toggle}
          to="healthcare"
          smooth={true}
          duration={500}
          offset={-50}
        >
          contact us
        </MenuItem>
      </MenuContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
