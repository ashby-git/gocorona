import styled from "styled-components";
import goCoronaLogo from "../../assests/logo.png";
import menuIcon from "../../assests/MENU_ICON.png";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: sticky;
  top: 0;
  z-index: 10;
  height: ${({ scrollNav }) => (scrollNav ? "50px" : "null")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0px 1px 20px #c8cae7" : "null"};
  padding: ${({ scrollNav }) =>
    scrollNav ? "0 40px 0 40px" : "20px 40px 0 40px"};
`;

export const NavbarLogo = styled.img.attrs({
  src: `${goCoronaLogo}`,
})`
  @media (max-width: 750px) {
    margin: auto;
  }
`;

export const MenuIcon = styled.img.attrs({
  src: `${menuIcon}`,
})`
  display: none;
  @media (max-width: 750px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavbarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
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
  @media (max-width: 750px) {
    display: none;
  }
`;
