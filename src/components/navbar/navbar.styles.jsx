import styled from "styled-components";
import goCoronaLogo from "../../assests/logo.png";
import menuIcon from "../../assests/MENU_ICON.png";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0 0 10px 10px;
  top: 0;
  z-index: 10;
  transition: all ease 0.8s;
  background-color: ${({ scrollNav }) => (scrollNav ? "white" : "transparent")};
  height: ${({ scrollNav }) => (scrollNav ? "50px" : "null")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0px 1px 20px #c8cae7" : "null"};
  padding: ${({ scrollNav }) =>
    scrollNav ? "0 43px 0 52px" : "20px 43px 0 52px"};
  position: ${({ scrollNav }) => (scrollNav ? "sticky" : "null")};

  @media (max-width: 950px) {
    padding: ${({ scrollNav }) =>
      scrollNav ? "0 40px 0 20px" : "20px 40px 0 20px"};
  }
`;

export const NavbarLogo = styled.img.attrs({
  src: `${goCoronaLogo}`,
})`
  cursor: pointer;
  @media (max-width: 950px) {
    margin: auto;
  }
`;

export const MenuIcon = styled.img.attrs({
  src: `${menuIcon}`,
})`
  display: none;
  @media (max-width: 950px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavbarItemContainer = styled.div`
  margin: ${({ scrollNav }) =>
    scrollNav ? "auto 20px auto auto" : "auto 0 auto auto"};

  @media (max-width: 950px) {
    display: none;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  width: ${({ scrollNav }) => (scrollNav ? "100%" : "72%")};

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const NavbarItem = styled(LinkS)`
  padding: 14px 20px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  font-family: "Raleway", sans-serif;
  font-size: 10px;
  letter-spacing: 0.14em;
  color: black;
  width: max-content;

  &:hover {
    color: #ec5863;
    cursor: pointer;
  }
`;

export const NavbarButton = styled.div`
  margin: 0 0 5px auto;

  @media (max-width: 950px) {
    display: none;
  }
`;
