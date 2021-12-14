import styled from "styled-components";

import doctorImg from "../../assests/Landing-img-doctor.svg";

export const Background = styled.div`
  background-color: #fafbfd;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const MidPage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;

  justify-content: space-around;
  /* gap: 4%; */
  margin: -60px 5% 0 5%;

  /* background-color: #fafbfd; */

  @media (max-width: 950px) {
    /* flex-wrap: wrap-reverse; */
    display: grid;
    justify-content: center;
    gap: 0;
  }
`;

export const TitleTextButtonWrapper = styled.div`
  margin: 34vh 0 0 0;

  @media (max-width: 950px) {
    margin: 25px 0 0 0;
  }
`;

export const DoctorImg = styled.img.attrs({
  src: `${doctorImg}`,
})`
  /* height: 394px; */
  /* width: 547px; */
  width: 47.5vw;

  /* margin-top: 153px; */
  @media (max-width: 950px) {
    height: 228px;
    width: 316px;
    /* margin-top: 92px; */
  }
`;

export const ImageContainer = styled.div`
  /* height: max-content; */
  /* width: max-content; */
  /* margin-top: 153px; */
  /* margin-top: 21vh; */
  margin-top: 22vh;
  /* height: 394px; */
  /* width: 547px; */

  @media (max-width: 950px) {
    margin-top: 92px;

    /* height: 228px; */
    /* width: 316px; */

    TempoVidLink {
      display: none;
    }
  }
`;

export const VideoLinkGroupSmall = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: block;
    position: relative;
    top: 50%;
    left: 41%;
    margin-top: 0;
  }
`;

export const VideoLinkGroupNormal = styled.div`
  margin-top: 21vh;
  @media (max-width: 950px) {
    display: none;
  }
`;
