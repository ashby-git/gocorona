import styled from "styled-components";

import { mobileImage } from "../../assests/mobile-screen.svg";
import { mobileShadow } from "../../assests/mobile-screen-shadow.svg";

export const MobilePageContainer = styled.div`
  display: flex;
  background-color: white;
  height: 100vh;

  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
`;

export const MobileLeftSide = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileImage = styled.img.attrs({ src: `${mobileImage}` })``;

export const MobileShadow = styled.img.attrs({ src: `${mobileShadow}` })``;

export const MobileRightSide = styled.div`
  display: flex;
  align-items: center;
`;
