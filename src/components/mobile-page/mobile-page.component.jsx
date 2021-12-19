import React from "react";
import TitleTextButton from "../title-text-button/title-text-button.component";
import {
  MobileImage,
  MobileImagesContainer,
  MobileLeftSide,
  MobilePageContainer,
  MobileRightSide,
  MobileShadow,
  TempRectangle,
  TitleTextButtonWrapper,
} from "./mobile-page.styles";

const MobilePage = () => {
  return (
    <>
      <MobilePageContainer>
        <MobileLeftSide>
          <TempRectangle
            margin="-37.5% 0 0 0"
            // height="0"
            width="max(12.76%, 147px)"
            padding="0 0 max(12.76%, 147px) 0"
            // paddingBottom="max(12.76%, 147px)"
            // height="147px"
            // width="147px"
            // minWidth="147px"
            left="9%"
            mediaLeft="33%"
            borderRadius="2.6vw"
          />
          <TempRectangle
            margin="39% 0 0 0"
            padding="0 0 max(6.68%, 77px) 0"
            width="max(6.68%, 77px)"
            // minWidth="77px"
            left="11%"
            mediaLeft="36%"
            borderRadius="2.6vw"
          />
          <TempRectangle
            margin="18% 0 0 0"
            padding="0 0 max(6.68%, 77px) 0"
            width="max(6.68%, 77px)"
            minWidth="77px"
            left="31%"
            mediaLeft="56%"
            borderRadius="2.6vw"
          />

          <MobileImagesContainer>
            <MobileImage />

            <MobileShadow />
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
      </MobilePageContainer>
    </>
  );
};

export default MobilePage;
