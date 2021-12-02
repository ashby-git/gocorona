import styled from "styled-components";

import closeIcon from "../../assests/MENU_X.svg";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const ModalElementsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 23px;
  width: 23px;
  z-index: 100;
  position: fixed;
  padding: 10px;
  top: 15vh;
  cursor: pointer;
`;

export const CloseIcon = styled.img.attrs({ src: `${closeIcon}` })`
  height: 23px;
  width: 23px;
`;

export const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  position: fixed;
  width: max-content;
  z-index: 100;
  overflow: hidden;
  padding: 1rem;
  top: 25vh;
`;
