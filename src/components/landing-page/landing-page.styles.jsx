import styled from "styled-components";

import doctorImg from "../../assests/Landing-img-doctor.svg";

export const Background = styled.div`
  background-color: #fafbfd;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  min-height: 600px;
  min-width: 362px;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  min-height: 600px;
  justify-content: space-around;
  margin: -60px 5% 0 5%;
  overflow: hidden;

  @media (max-width: 950px) {
    display: grid;
    justify-content: center;
    gap: 0;
    height: 100%;
    margin: -60px 0 0 0;
  }
`;

export const TitleTextButtonWrapper = styled.div`
  margin: 34vh 0 0 0;

  @media (max-width: 950px) {
    margin: 25px 0 42px 0;
  }
`;

export const DoctorImg = styled.img.attrs({
  src: `${doctorImg}`,
})`
  width: 47.5vw;
  max-width: 760px;

  @media (max-width: 950px) {
    height: 228px;
    width: 316px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 22vh;

  @media (max-width: 950px) {
    margin: 62px auto 0 auto;
  }
`;

export const VideoLinkGroupSmall = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: block;
    position: relative;
    top: 50%;
    left: 44%;
    margin-top: 0;
  }
`;

export const VideoLinkGroupNormal = styled.div`
  margin-top: 29vh;
  @media (max-width: 950px) {
    display: none;
  }
`;
