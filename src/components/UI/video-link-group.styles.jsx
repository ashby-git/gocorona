import styled, { css } from "styled-components";

import playIconWhite from "../../assests/play-icon.svg";
import playIconBlue from "../../assests/video-icon.svg";

export const VideoLinkGroupContainer = styled.div`
  display: flex;
  gap: 12px;
  width: max-content;
  cursor: pointer;
`;

export const PlayIconWhite = styled.img.attrs({
  src: `${playIconWhite}`,
})`
  height: 44px;
  width: 44px;
  ${(props) => css`
    display: ${props.blue ? "none" : "block"};
  `}
`;

export const PlayIconBlue = styled.img.attrs({
  src: `${playIconBlue}`,
})`
  height: 40px;
  width: 40px;
  ${(props) => css`
    display: ${props.blue ? "block" : "none"};
  `}
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 5px;
  height: 32px;
  margin: auto 0;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const VideoTitle = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #b0b0b0;
  letter-spacing: 0.08em;
`;

export const LinkText = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 9px;
  color: black;
  letter-spacing: 0.165em;
`;
