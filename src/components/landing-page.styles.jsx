import styled from "styled-components";

import doctorImg from "../assests/Landing-img-doctor.svg";

export const MidPage = styled.div`
  display: flex;

  @media (max-width: 950px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`;

export const TitleTextButtonWrapper = styled.div`
  margin: 240px 80px 0 70px;

  @media (max-width: 950px) {
    margin: 25px 0px 0 0;
  }
`;

export const DoctorImg = styled.img.attrs({
  src: `${doctorImg}`,
})`
  height: 394px;
  width: 547px;
  margin-top: 153px;
  @media (max-width: 950px) {
    height: 228px;
    width: 316px;
    margin-top: 92px;
  }
`;

export const TempoVidLink = styled.div`
  height: 44px;
  width: 228px;
  background-color: red;

  @media (max-width: 950px) {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 200px;
    left: 47%;
    cursor: pointer;
  }
`;
