import React from "react";
import {
  DoctorImg,
  MidPage,
  TempoVidLink,
  TitleTextButtonWrapper,
} from "./landing-page.styles";
import TitleTextButton from "./title-text-button.component";

const LandingPage = () => {
  return (
    <>
      <MidPage>
        <TitleTextButtonWrapper>
          <TitleTextButton
            title={"Take care of your family's "}
            titleBlue={"health."}
            text="All in one destination for COVID-19 health queries. Consult 10,000+ health workers about your concerns."
          />
        </TitleTextButtonWrapper>
        <DoctorImg />
      </MidPage>
      <TempoVidLink />
    </>
  );
};

export default LandingPage;
