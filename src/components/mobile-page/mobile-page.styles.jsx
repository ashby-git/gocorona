import styled from "styled-components";

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

export const MobileRightSide = styled.div`
  display: flex;
  align-items: center;
`;
