import React from "react";
import { Button } from "../UI/button.styles";
import {
  ButtonContainer,
  Text,
  Title,
  TitleBlue,
  TitleRed,
} from "./title-text-button.styles";

const TitleTextButton = (props) => {
  return (
    <>
      <Title>
        {props.title}
        <TitleBlue>{props.titleBlue}</TitleBlue>
        <TitleRed>{props.titleRed}</TitleRed>
      </Title>
      <Text>{props.text}</Text>

      <ButtonContainer>
        <Button red={props.redButton} to={props.to}>
          {props.buttonText}
        </Button>
      </ButtonContainer>
    </>
  );
};

export default TitleTextButton;
