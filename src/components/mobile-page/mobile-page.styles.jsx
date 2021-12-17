import styled from "styled-components";

import mobileImage from "../../assests/mobile-screen.svg";
import mobileShadow from "../../assests/mobile-screen-shadow.svg";

export const MobilePageContainer = styled.div`
  display: flex;
  background-color: white;
  /* height: 100vh; */

  @media (max-width: 950px) {
    /* flex-wrap: wrap; */
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
  /* width: 300px; */
  margin: 20% 0;
  /* filter: drop-shadow(2px 4px 32px rgba(0, 0, 0, 0.12)); */
`;

export const MobileShadow = styled.img.attrs({ src: `${mobileShadow}` })`
  width: 18vw;
  /* width: 206px; */
  margin: -14vh auto 0 auto;
  /* z-index: -1; */
`;

export const TempRectangle = styled.div`
  margin: ${(props) => props.margin};

  background-color: #ec5863;
  position: absolute;
  /* z-index: -1; */
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  display: ${(props) => props.display};

  @media (max-width: 950px) {
    display: ${(props) => props.mediaDisplay};
    top: ${(props) => props.mediaTop};
    right: ${(props) => props.mediaRight};
    bottom: ${(props) => props.mediaBottom};
    left: ${(props) => props.mediaLeft};
  }
`;

export const MobileRightSide = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
    justify-content: center;
    margin: 70px 0 40px 0;
  }
`;

export const TempBox = styled.div`
  width: 379px;
  height: 238px;
  background-color: red;
`;
