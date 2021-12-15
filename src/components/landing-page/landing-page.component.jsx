import React from "react";
import { Rectangle } from "../UI/rectangle.styles";
import {
  DoctorImg,
  ImageContainer,
  PageContent,
  VideoLinkGroupNormal,
  VideoLinkGroupSmall,
  TitleTextButtonWrapper,
  Background,
} from "./landing-page.styles";
import TitleTextButton from "../title-text-button/title-text-button.component";
import VideoLinkGroup from "../UI/video-link-group.component";

const LandingPage = () => {
  return (
    <>
      <Background />
      <PageContent>
        <Rectangle
          height="100%"
          width="28%"
          top="0"
          left="72%"
          borderRadius="30px 0 0 30px"
          mediaDisplay="none"
        />
        <ImageContainer>
          <VideoLinkGroupSmall>
            <VideoLinkGroup
              filledIcon
              source="https://www.youtube.com/embed/Y_N1rTPhv04"
            />
          </VideoLinkGroupSmall>
          <DoctorImg />
        </ImageContainer>
        <TitleTextButtonWrapper>
          <TitleTextButton
            title={"Take care of your family's "}
            titleBlue={"health."}
            text="All in one destination for COVID-19 health queries. Consult 10,000+ health workers about your concerns."
            redButton
            buttonLink="https://en.wikipedia.org/wiki/COVID-19"
            buttonText="get started"
          />
          <VideoLinkGroupNormal>
            <VideoLinkGroup
              videoTitle="Stay safe with GoCorona"
              linkText="WATCH VIDEO"
              source="https://www.youtube.com/embed/Y_N1rTPhv04"
            />
          </VideoLinkGroupNormal>
        </TitleTextButtonWrapper>
      </PageContent>
    </>
  );
};

export default LandingPage;
