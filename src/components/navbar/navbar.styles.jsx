import styled from "styled-components";

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
    scrollNav ? "0 50px 0 50px" : "20px 50px 0 50px"};
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
