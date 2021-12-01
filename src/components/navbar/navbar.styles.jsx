import styled from "styled-components";
import goCoronaLogo from "../../assests/logo.png";
import menuIcon from "../../assests/MENU_ICON.png";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0 0 10px 10px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ scrollNav }) => (scrollNav ? "white" : "transparent")};
  height: ${({ scrollNav }) => (scrollNav ? "50px" : "null")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0px 1px 20px #c8cae7" : "null"};
  padding: ${({ scrollNav }) =>
    scrollNav ? "0 43px 0 52px" : "20px 43px 0 52px"};

  @media (max-width: 950px) {
    padding: ${({ scrollNav }) =>
      scrollNav ? "0 40px 0 20px" : "20px 40px 0 20px"};
  }
`;

export const NavbarLogo = styled.img.attrs({
  src: `${goCoronaLogo}`,
})`
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
  margin: ${({ scrollNav }) => (scrollNav ? "0 20px 0 auto" : "0 13% 0 auto")};

  @media (max-width: 950px) {
    display: none;
  }
`;

export const NavbarItem = styled.a`
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
  margin-bottom: 5px;
  @media (max-width: 950px) {
    display: none;
  }
`;
