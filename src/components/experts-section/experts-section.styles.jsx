import styled from "styled-components";

export const TopSide = styled.div`
  /* height: 43vh; */
  display: flex;
  justify-content: center;
`;

export const StatisticsBoxWrapper = styled.div`
  margin: 15vh 0 11.5vh 0;
`;

export const BottomSide = styled.div`
  margin: 0 0 16vh 0;

  @media (max-width: 950px) {
    flex-flow: column wrap;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const TitleTextButtonWrapper = styled.div`
  margin: auto 0 auto 8vw;
  width: max-content;

  @media (max-width: 950px) {
    display: grid;
    margin: auto;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
