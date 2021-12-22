import React from "react";
import {
  Description,
  GroupWrapper,
  Statistic,
  StatisticsBoxContainer,
} from "./statistics-box.styles";

const StatisticsBox = (props) => {
  return (
    <>
      <StatisticsBoxContainer>
        <GroupWrapper>
          <Statistic>{props.statistic1}</Statistic>
          <Description>{props.description1}</Description>
        </GroupWrapper>
        <GroupWrapper>
          <Statistic>{props.statistic2}</Statistic>
          <Description>{props.description2}</Description>
        </GroupWrapper>
        <GroupWrapper>
          <Statistic>{props.statistic3}</Statistic>
          <Description>{props.description3}</Description>
        </GroupWrapper>
      </StatisticsBoxContainer>
    </>
  );
};

export default StatisticsBox;
