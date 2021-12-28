import styled, { css } from "styled-components";

import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  border-radius: 5px;
  padding: 14px 29px;
  width: max-content;
  height: min-content;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  font-family: "Raleway", sans-serif;
  font-size: 10px;
  letter-spacing: 0.14em;
  margin: auto;

  ${(props) =>
    props.blue &&
    css`
      background-color: #4285f4;
      color: white;

      &:hover {
        background-color: #1d5dc4;
      }
    `};

  ${(props) =>
    props.red &&
    css`
      background-color: #ec5863;
      color: white;

      &:hover {
        background-color: #c4323c;
      }
    `};

  &:hover {
    cursor: pointer;
  }
`;
