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
    display: ${props.filledIcon ? "none" : "block"};
  `}
`;

export const PlayIconBlue = styled.img.attrs({
  src: `${playIconBlue}`,
})`
  height: 40px;
  width: 40px;
  ${(props) => css`
    display: ${props.filledIcon ? "block" : "none"};
  `}
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 5px;
  height: 32px;
  margin: auto 0;
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

export const Iframe = styled.iframe`
  width: 640px;
  height: 360px;

  @media (max-width: 690px) {
    width: 426px;
    height: 240px;
  }

  @media (max-width: 475px) {
    width: 256px;
    height: 144px;
  }
`;
