import styled from "styled-components";
import mobileX from "../../assests/MENU_X.png";

export const MobileMenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 265px;
  background: white;
  display: flex;
  top: 0;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 1px 20px #c8cae7;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

export const MobileXIcon = styled.img.attrs({
  src: `${mobileX}`,
})`
  height: 23.33px;
  width: 23.33px;
  cursor: pointer;
  position: absolute;
  top: 28px;
  left: 40px;
`;

export const MenuContainer = styled.div`
  display: grid;
  margin: 10px auto 10px;
`;

export const MenuItem = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 33px;
  color: black;
  margin: auto;

  &:hover {
    color: #ec5863;
    cursor: pointer;
  }
`;
