import styled from "styled-components";

import doctorImg from "../../assests/Landing-img-doctor.svg";

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
  margin: 27vh 0 0 0;

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
  margin-top: 14vh;
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
