import styled from "styled-components";

import googlePlayStore from "../../assests/google-app-store.svg";
import appleAppStore from "../../assests/apple-app-store.svg";

export const HealthcareSectionContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const basicTitle = `
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    font-size: 44px;
  `;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 4vw;

  @media (max-width: 950px) {
    display: grid;
    margin: 0;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const HealthcareTitle = styled.div`
  ${basicTitle}
  color: #ec5863;
  text-align: center;
  line-height: 55.44px;
  margin: max(11.5vh, 80px) 20px 14px 20px;
  margin: 7% 20px 14px 20px;

  @media (max-width: 950px) {
    margin: 7% 40px 14px 40px;
  }
`;

export const HealthcareTitleBlack = styled.span`
  ${basicTitle}
  color: black;
`;

export const HealthcareText = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #616161;
  letter-spacing: 0.08em;
  line-height: 16.62px;
  text-align: center;
  width: max(52vw, 296px);
  max-width: 600px;
  margin: 0 auto max(8vh, 48px) auto;
`;

export const AppStoreImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5vw;
  margin: 0 auto 46px auto;
  width: max-content;
`;

export const GooglePlayStore = styled.img.attrs({
  src: `${googlePlayStore}`,
})``;
export const AppleAppStore = styled.img.attrs({
  src: `${appleAppStore}`,
})``;

export const TempRectangle = styled.div`
  background-color: #ec5863;
  position: absolute;
  z-index: ${(props) => props.zIndex};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  @media (max-width: 950px) {
    display: ${(props) => props.mediaDisplay};
    left: ${(props) => props.mediaLeft};
    margin: ${(props) => props.mediaMargin};
  }
`;
