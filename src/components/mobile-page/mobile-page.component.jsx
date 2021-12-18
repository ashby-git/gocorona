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
            margin="-40% 0 0 0"
            height="147px"
            width="147px"
            left="8%"
            borderRadius="30px"
          />
          <TempRectangle
            margin="40% 0 0 0"
            height="77px"
            width="77px"
            left="11%"
            borderRadius="30px"
          />
          <TempRectangle
            margin="18% 0 0 0"
            height="77px"
            width="77px"
            left="32%"
            borderRadius="30px"
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
