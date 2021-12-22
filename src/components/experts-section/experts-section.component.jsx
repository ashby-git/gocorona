import React from "react";
import StatisticsBox from "../statistics-box/statistics-box.component";

const ExpertsSection = () => {
  return (
    <>
      <StatisticsBox
        statistic1="2m"
        description1="users"
        statistic2="78"
        description2="countries"
        statistic3="10,000+"
        description3="medical experts"
      />
    </>
  );
};

export default ExpertsSection;
