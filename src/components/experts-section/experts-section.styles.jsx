import styled from "styled-components";

import expertsVideoImg from "../../assests/video-group.svg";
import closeIcon from "../../assests/MENU_X.svg";

export const ExpertsSectionContainer = styled.div`
  background-color: #fafbfd;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatisticsBoxWrapper = styled.div`
  margin: 15vh 0 11.5vh 0;
  z-index: 2;
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
  display: ${(props) => (props.hide ? "none" : "block")};

  @media (max-width: 950px) {
    margin: 40px 0 0 0;
  }
`;

export const Iframe = styled.iframe`
  width: max(46vw, 345px);
  height: max(26vw, 187px);
  @media (max-width: 950px) {
    margin: 40px 0 0 0;
  }
`;

export const CloseButton = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 13px;
  width: 13px;
  position: absolute;
  padding: 7px;
  margin: -27px 0 0 0;
  cursor: pointer;
  @media (max-width: 950px) {
    margin: 10px 0 0 0;
  }
`;

export const CloseIcon = styled.img.attrs({ src: `${closeIcon}` })`
  height: 13px;
  width: 13px;
`;

export const TempRectangle = styled.div`
  background-color: #ec5863;
  position: absolute;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  z-index: ${(props) => props.zIndex};

  @media (max-width: 950px) {
    display: ${(props) => props.mediaDisplay};
    left: ${(props) => props.mediaLeft};
    margin: ${(props) => props.mediaMargin};
  }
`;
