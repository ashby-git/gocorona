import React from "react";
import StatisticsBox from "../statistics-box/statistics-box.component";
import TitleTextButton from "../title-text-button/title-text-button.component";
import {
  BottomSide,
  ExpertsSectionContainer,
  ExpertsVideoImg,
  LeftSide,
  RightSide,
  StatisticsBoxWrapper,
  TitleTextButtonWrapper,
  TopSide,
} from "./experts-section.styles";

const ExpertsSection = () => {
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
          <ExpertsVideoImg />
        </RightSide>
      </BottomSide>
    </ExpertsSectionContainer>
  );
};

export default ExpertsSection;
