import React from "react";
import {
  DoctorImg,
  ImageContainer,
  MidPage,
  TempoVidLink,
  VideoLinkGroupNormal,
  VideoLinkGroupSmall,
  TitleTextButtonWrapper,
} from "./landing-page.styles";
import TitleTextButton from "./title-text-button.component";

// TODO import button to TitleTextButton
// TODO import VideoLinkGroup
// TODO change styled component names to better ones

const LandingPage = () => {
  return (
    <>
      <MidPage>
        <ImageContainer>
          <VideoLinkGroupSmall>
            <TempoVidLink />
          </VideoLinkGroupSmall>
          <DoctorImg />
        </ImageContainer>
        <TitleTextButtonWrapper>
          <TitleTextButton
            title={"Take care of your family's "}
            titleBlue={"health."}
            text="All in one destination for COVID-19 health queries. Consult 10,000+ health workers about your concerns."
          />
          <VideoLinkGroupNormal>
            <TempoVidLink />
          </VideoLinkGroupNormal>
        </TitleTextButtonWrapper>
      </MidPage>
    </>
  );
};

export default LandingPage;
