import React from "react";
import {
  MobileImage,
  MobileLeftSide,
  MobilePageContainer,
  MobileRightSide,
  MobileShadow,
} from "./mobile-page.styles";

const MobilePage = () => {
  return (
    <>
      <MobilePageContainer>
        <MobileLeftSide>
          <MobileImage />
          <MobileShadow />
        </MobileLeftSide>
        <MobileRightSide></MobileRightSide>
      </MobilePageContainer>
    </>
  );
};

export default MobilePage;
