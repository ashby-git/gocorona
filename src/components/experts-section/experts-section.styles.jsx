import styled from "styled-components";

import expertsVideoImg from "../../assests/video-group.svg";

export const ExpertsSectionContainer = styled.div`
  background-color: #fafbfd;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatisticsBoxWrapper = styled.div`
  margin: 15vh 0 11.5vh 0;
  @media (max-width: 950px) {
    margin: 40px 0 11.5vh 0;
  }
`;

export const BottomSide = styled.div`
  display: flex;
  padding: 0 0 16vh 0;

  @media (max-width: 950px) {
    flex-flow: column wrap;
    padding: 0 0 40px 0;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const TitleTextButtonWrapper = styled.div`
  margin: 0 0 0 8vw;
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
    display: flex;
    justify-content: center;
  }
`;

export const ExpertsVideoImg = styled.img.attrs({
  src: `${expertsVideoImg}`,
})`
  width: max(46vw, 345px);
  cursor: pointer;
  @media (max-width: 950px) {
    margin: 40px 0 0 0;
  }
`;
