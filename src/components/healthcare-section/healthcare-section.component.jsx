import React from "react";
import IconTextCard from "../icon-text-card/icon-text-card.component";
// import icon1 from "../../assests"
import {
  CardGroup,
  HealthcareSectionContainer,
} from "./healthcare-section.styles";

const HealthcareSection = () => {
  return (
    <HealthcareSectionContainer>
      <CardGroup>
        <IconTextCard
          //   cardIcon="{icon1}"
          title="Symptom Checker"
          description="Check if you are infected by COVID-19 with our Symptom Checker"
        />
        <IconTextCard
          title="24x7 Medical support"
          description="Consult with 10,000+ health workers about your concerns."
        />
        <IconTextCard
          title="Conditions"
          description="Bringing premium healthcare features to your fingertips."
        />
      </CardGroup>
    </HealthcareSectionContainer>
  );
};

export default HealthcareSection;
