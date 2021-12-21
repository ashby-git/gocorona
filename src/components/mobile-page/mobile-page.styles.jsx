import styled from "styled-components";

import mobileImage from "../../assests/mobile-screen.svg";
import mobileShadow from "../../assests/mobile-screen-shadow.svg";

export const MobilePageContainer = styled.div`
  display: flex;
  background-color: white;

  @media (max-width: 950px) {
    display: block;
  }
`;

export const MobileLeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
    margin: 80px 0 0 0;
  }
`;

export const MobileImagesContainer = styled.div`
  display: grid;
`;

export const MobileImage = styled.img.attrs({ src: `${mobileImage}` })`
  width: 26vw;
  min-width: 300px;
  margin: 22% 0 22% 8%;
  z-index: 2;
`;

export const MobileShadow = styled.img.attrs({ src: `${mobileShadow}` })`
  width: max(18vw, 207px);
  margin: min(-39%, -117px) 0 0 0;
  z-index: 1;
  left: 23%;
  position: absolute;
`;

export const MobileShadowWrapper = styled.div`
  position: relative;
`;

export const RectangleWrapper = styled.div`
  @media (max-width: 1152px) {
    position: relative;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    margin: ${(props) => props.margin};
  }
  @media (max-width: 950px) {
    margin: ${(props) => props.margin950};
  }
  @media (max-width: 580px) {
    margin: ${(props) => props.margin580};
  }
`;

export const MobileRightSide = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 950px) {
    justify-content: center;
    margin: 0 auto 40px auto;
  }
`;

export const TitleTextButtonWrapper = styled.div`
  width: max-content;
`;
