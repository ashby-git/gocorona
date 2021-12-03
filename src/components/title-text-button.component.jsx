import React from "react";
import {
  Text,
  Title,
  TitleContainer,
  TitleBlue,
  TitleRed,
} from "./title-text-button.styles";

//TODO button from navbar branch

const TitleTextButton = (props) => {
  return (
    <div>
      <TitleContainer>
        <Title>
          {props.title}
          <TitleBlue>{props.titleBlue}</TitleBlue>
          <TitleRed>{props.titleRed}</TitleRed>
        </Title>
      </TitleContainer>
      <Text>{props.text}</Text>
    </div>
  );
};

export default TitleTextButton;
