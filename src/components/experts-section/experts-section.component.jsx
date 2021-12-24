import React, { useState } from "react";
import StatisticsBox from "../statistics-box/statistics-box.component";
import TitleTextButton from "../title-text-button/title-text-button.component";
import { Rectangle } from "../UI/rectangle.styles";
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
          <Rectangle
            margin="60px 0 0 -25px"
            width="66px"
            height="66px"
            mediaMargin="-15px 0 0 -30px"
            borderRadius="16px"
            transform="rotate(-30deg)"
            zIndex="-1"
          />
          <Rectangle
            margin="-40px 0 0 200px"
            width="97px"
            height="97px"
            mediaMargin="190px 0 0 280px"
            borderRadius="30px"
            transform="rotate(105deg)"
            zIndex="-1"
          />
          <Rectangle
            margin="-5px 0 0 575px"
            width="127.5px"
            height="127.5px"
            borderRadius="30px"
            transform="rotate(-30deg)"
            zIndex="-1"
            mediaDisplay="none"
          />
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
                src="https://www.youtube.com/embed/Y_N1rTPhv04?autoplay=1"
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
