import React, { useState } from "react";
import StatisticsBox from "../statistics-box/statistics-box.component";
import TitleTextButton from "../title-text-button/title-text-button.component";
import {
  BottomSide,
  CloseButton,
  CloseIcon,
  ExpertsSectionContainer,
  ExpertsVideoImg,
  Iframe,
  LeftSide,
  RightSide,
  StatisticsBoxWrapper,
  TitleTextButtonWrapper,
  TopSide,
} from "./experts-section.styles";

const ExpertsSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const closeVideo = () => {
    setShowVideo(false);
  };
  return (
    <ExpertsSectionContainer>
      <TopSide>
        <StatisticsBoxWrapper>
          <StatisticsBox
            statistic1="2m"
            description1="users"
            statistic2="78"
            description2="countries"
            statistic3="10,000+"
            description3="medical experts"
          />
        </StatisticsBoxWrapper>
      </TopSide>
      <BottomSide>
        <LeftSide>
          <TitleTextButtonWrapper>
            <TitleTextButton
              title="Talk to "
              titleBlue="experts."
              text="Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus."
              redButton
              buttonLink="https://en.wikipedia.org/wiki/COVID-19"
              buttonText="features"
            />
          </TitleTextButtonWrapper>
        </LeftSide>
        <RightSide>
          <ExpertsVideoImg onClick={setShowVideo} hide={showVideo} />
          {showVideo && (
            <>
              <CloseButton onClick={closeVideo}>
                <CloseIcon />
              </CloseButton>
              <Iframe
                src="https://www.youtube.com/embed/Y_N1rTPhv04"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </>
          )}
        </RightSide>
      </BottomSide>
    </ExpertsSectionContainer>
  );
};

export default ExpertsSection;
