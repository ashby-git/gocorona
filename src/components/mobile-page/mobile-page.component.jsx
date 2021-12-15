import React from "react";
import {
  MobileLeftSide,
  MobilePageContainer,
  MobileRightSide,
} from "./mobile-page.styles";

const MobilePage = () => {
  return (
    <div>
      <MobilePageContainer>
        <MobileLeftSide></MobileLeftSide>
        <MobileRightSide></MobileRightSide>
      </MobilePageContainer>
    </div>
  );
};

export default MobilePage;
