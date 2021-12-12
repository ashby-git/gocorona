import React from "react";
import { Rectangle } from "../UI/rectangle.styles";
import {
  DoctorImg,
  ImageContainer,
  MidPage,
  TempoVidLink,
  VideoLinkGroupNormal,
  VideoLinkGroupSmall,
  TitleTextButtonWrapper,
} from "./landing-page.styles";
import TitleTextButton from "../title-text-button/title-text-button.component";

// TODO import button to TitleTextButton
// TODO import VideoLinkGroup

// TODO change img to % - to scale
// TODO img and titletextbutton margin top as %
// TODO change styled component names to better ones
// TODO add background color #FAFBFD

// TODO navbar and red rectangle alignment fix

const LandingPage = () => {
  return (
    <>
      <MidPage>
        <Rectangle
          height="100%"
          width="100%"
          top="0"
          left="72%"
          borderRadius="30px"
          mediaDisplay="none"
        />
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
