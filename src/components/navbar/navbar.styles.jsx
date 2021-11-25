import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px 0 50px;
`;

export const NavbarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavbarItem = styled.a`
  padding: 14px 29px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  font-family: "Raleway", sans-serif;
  font-size: 10px;
  letter-spacing: 0.14em;
  color: black;

  &:hover {
    color: #ec5863;
    cursor: pointer;
  }
`;
