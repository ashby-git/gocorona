import React from "react";
import IconTextCard from "../icon-text-card/icon-text-card.component";
import icon1 from "../../assests/healthcare-icon-1.svg";
import icon2 from "../../assests/healthcare-icon-2.svg";
import icon3 from "../../assests/healthcare-icon-3.svg";
import {
  AppleAppStore,
  AppStoreImagesContainer,
  CardGroup,
  CardWrapper,
  GooglePlayStore,
  HealthcareSectionContainer,
  HealthcareText,
  HealthcareTitle,
  HealthcareTitleBlack,
  TempRectangle,
} from "./healthcare-section.styles";

const HealthcareSection = () => {
  return (
    <HealthcareSectionContainer>
      <HealthcareTitle>
        Healthcare
        <HealthcareTitleBlack> at your Fingertips.</HealthcareTitleBlack>
      </HealthcareTitle>
      <HealthcareText>
        Bringing premium healthcare features to your fingertips. User friendly
        mobile platform to bring healthcare to your fingertips. Signup and be a
        part of the new health culture.
      </HealthcareText>
      <CardGroup>
        <CardWrapper>
          <TempRectangle
            margin="max(87%, 242.5px) 0 0 0"
            width="max(5.7vw, 65.75px)"
            padding="0 0 max(5.7vw, 65.75px) 0"
            left="-6%"
            // mediaLeft="88%"
            borderRadius="max(1.3vw, 16px)"
            transform="rotate(-30deg)"
            zIndex="-1"
          />
          <TempRectangle
            margin="max(15%, 41.8px) 0 0 0"
            width="max(8.4vw, 96.96px)"
            padding="0 0 max(8.4vw, 96.96px) 0"
            left="85%"
            mediaLeft="88%"
            borderRadius="max(2.6vw, 30px)"
            transform="rotate(105deg)"
            zIndex="-1"
            mediaMargin="max(-12%, -33.3px) 0 0 0"
          />
          <IconTextCard
            cardIcon={icon1}
            title="Symptom Checker"
            description="Check if you are infected by COVID-19 with our Symptom Checker"
          />
        </CardWrapper>
        <CardWrapper>
          <TempRectangle
            margin="max(65%, 181px) 0 0 0"
            width="max(11vw, 127.47px)"
            padding="0 0 max(11vw, 127.47px) 0"
            left="84%"
            mediaLeft="78%"
            borderRadius="max(2.6vw, 30px)"
            transform="rotate(-30deg)"
            zIndex="-1"
            mediaMargin="max(79%, 219.7px) 0 0 0"
          />
          <IconTextCard
            cardIcon={icon2}
            title="24x7 Medical support"
            description="Consult with 10,000+ health workers about your concerns."
          />
        </CardWrapper>
        <CardWrapper>
          <TempRectangle
            margin="min(-12%, -36.8px) 0 0 0"
            width="max(5.7vw, 65.75px)"
            padding="0 0 max(5.7vw, 65.75px) 0"
            left="84%"
            mediaLeft="-9%"
            borderRadius="max(1.3vw, 16px)"
            transform="rotate(-30deg)"
            zIndex="-1"
            mediaMargin="max(84%, 233.6px) 0 0 0"
          />
          <IconTextCard
            cardIcon={icon3}
            title="Conditions"
            description="Bringing premium healthcare features to your fingertips."
          />
        </CardWrapper>
      </CardGroup>
      <AppStoreImagesContainer>
        <GooglePlayStore />
        <AppleAppStore />
      </AppStoreImagesContainer>
    </HealthcareSectionContainer>
  );
};

export default HealthcareSection;
