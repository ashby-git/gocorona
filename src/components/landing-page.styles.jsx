import styled from "styled-components";

import doctorImg from "../assests/Landing-img-doctor.svg";

export const DoctorImg = styled.img.attrs({
  src: `${doctorImg}`,
})`
  height: 394px;
  width: 547px;
  @media (max-width: 950px) {
    height: 228px;
    width: 316px;
  }
`;
