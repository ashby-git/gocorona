import styled from "styled-components";

import doctorImg from "../assests/Landing-img-doctor.svg";

export const MidPage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;

  justify-content: space-around;
  /* gap: 4%; */
  margin: 0 5%;

  @media (max-width: 950px) {
    /* flex-wrap: wrap-reverse; */
    display: grid;
    justify-content: center;
    gap: 0;
  }
`;

export const TitleTextButtonWrapper = styled.div`
  margin: 240px 0 0 0;

  @media (max-width: 950px) {
    margin: 25px 0 0 0;
  }
`;

export const DoctorImg = styled.img.attrs({
  src: `${doctorImg}`,
})`
  height: 394px;
  width: 547px;
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
  margin-top: 153px;

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

export const TempoVidLink = styled.div`
  height: 44px;
  width: 228px;
  background-color: red;
  /* margin-top: 60px; */

  @media (max-width: 950px) {
    height: 40px;
    width: 40px;
    /* position: absolute;
    top: 200px;
    left: 47%; */

    /* position: relative; */
    /* top: 50%; */
    /* left: 41%; */
    /* margin-top: 92px; */
    /* margin-top: 0; */
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
  margin-top: 150px;
  @media (max-width: 950px) {
    display: none;
  }
`;
