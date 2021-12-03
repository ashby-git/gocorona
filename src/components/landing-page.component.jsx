import React from "react";
import TitleTextButton from "./title-text-button.component";

const LandingPage = () => {
  return (
    <div>
      <TitleTextButton
        title="Take care of your family's health."
        text="All in one destination for COVID-19 health queries. Consult 10,000+ health workers about your concerns."
      />
      <TitleTextButton
        title="Stay safe with GoCorona."
        text="24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture."
      />
      <TitleTextButton
        title="Talk to experts."
        text="Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus."
      />
    </div>
  );
};

export default LandingPage;
