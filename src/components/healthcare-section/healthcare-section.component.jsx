import React from "react";
import IconTextCard from "../icon-text-card/icon-text-card.component";
import icon1 from "../../assests/healthcare-icon-1.svg";
import icon2 from "../../assests/healthcare-icon-2.svg";
import icon3 from "../../assests/healthcare-icon-3.svg";
import {
  CardGroup,
  HealthcareSectionContainer,
} from "./healthcare-section.styles";

const HealthcareSection = () => {
  return (
    <HealthcareSectionContainer>
      <CardGroup>
        <IconTextCard
          cardIcon={icon1}
          title="Symptom Checker"
          description="Check if you are infected by COVID-19 with our Symptom Checker"
        />
        <IconTextCard
          cardIcon={icon2}
          title="24x7 Medical support"
          description="Consult with 10,000+ health workers about your concerns."
        />
        <IconTextCard
          cardIcon={icon3}
          title="Conditions"
          description="Bringing premium healthcare features to your fingertips."
        />
      </CardGroup>
    </HealthcareSectionContainer>
  );
};

export default HealthcareSection;
