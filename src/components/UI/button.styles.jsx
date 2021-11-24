import styled, { css } from "styled-components";

export const Button = styled.a`
  border-radius: 5px;
  padding: 14px 29px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  font-family: "Raleway", sans-serif;
  font-size: 10px;
  letter-spacing: 0.14em;

  ${(props) =>
    props.blue &&
    css`
      background-color: #4285f4;
      color: white;
    `};

  ${(props) =>
    props.red &&
    css`
      background-color: #ec5863;
      color: white;
    `};

  &:hover {
    cursor: pointer;
  }
`;
