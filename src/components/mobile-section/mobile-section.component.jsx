import React from "react";
import TitleTextButton from "../title-text-button/title-text-button.component";
import { Rectangle } from "../UI/rectangle.styles";
import {
  MobileImage,
  MobileImagesContainer,
  MobileLeftSide,
  MobileSectionContainer,
  MobileRightSide,
  MobileShadow,
  MobileShadowWrapper,
  RectangleWrapper,
  TitleTextButtonWrapper,
} from "./mobile-section.styles";

const MobileSection = () => {
  return (
    <MobileSectionContainer>
      <MobileLeftSide>
        <RectangleWrapper
          margin="min(-102%, -588px) 0 0 0"
          margin950="max(-102%, -588px) 0 0 0"
          margin580="min(-102%, -588px) 0 0 0"
          right="15px"
        >
          <Rectangle
            margin="min(-25.5%, 147px) 0 0 0"
            width="max(12.76%, 147px)"
            padding="0 0 max(12.76%, 147px) 0"
            left="10.6%"
            mediaLeft="33%"
            borderRadius="max(2.6vw, 30px)"
          />
        </RectangleWrapper>
        <RectangleWrapper right="-15px">
          <Rectangle
            margin="max(15.8%, 182px) 0 0 0"
            padding="0 0 max(6.68%, 77px) 0"
            width="max(6.68%, 77px)"
            left="13.5%"
            mediaLeft="36%"
            borderRadius="max(2.6vw, 30px)"
          />
        </RectangleWrapper>
        <RectangleWrapper left="245px">
          <Rectangle
            margin="max(6%, 69px) 0 0 0"
            padding="0 0 max(6.68%, 77px) 0"
            width="max(6.68%, 77px)"
            left="33.3%"
            mediaLeft="56%"
            borderRadius="max(2.6vw, 30px)"
          />
        </RectangleWrapper>
        <MobileImagesContainer>
          <MobileImage />
          <MobileShadowWrapper>
            <MobileShadow />
          </MobileShadowWrapper>
        </MobileImagesContainer>
      </MobileLeftSide>
      <MobileRightSide>
        <TitleTextButtonWrapper>
          <TitleTextButton
            title={"Stay safe with Go"}
            titleRed={"Corona."}
            text="24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture."
            redButton
            buttonLink="https://en.wikipedia.org/wiki/COVID-19"
            buttonText="features"
          />
        </TitleTextButtonWrapper>
      </MobileRightSide>
    </MobileSectionContainer>
  );
};

export default MobileSection;
