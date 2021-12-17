import React from "react";
import {
  MobileImage,
  MobileImagesContainer,
  MobileLeftSide,
  MobilePageContainer,
  MobileRightSide,
  MobileShadow,
  TempBox,
  TempRectangle,
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
          <TempBox />
        </MobileRightSide>
      </MobilePageContainer>
    </>
  );
};

export default MobilePage;
