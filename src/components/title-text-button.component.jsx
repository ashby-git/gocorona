import React from "react";
import { Text, Title, TitleBlue, TitleRed } from "./title-text-button.styles";

//TODO button from navbar branch

const TitleTextButton = (props) => {
  return (
    <>
      <Title>
        {props.title}
        <TitleBlue>{props.titleBlue}</TitleBlue>
        <TitleRed>{props.titleRed}</TitleRed>
      </Title>
      <Text>{props.text}</Text>
    </>
  );
};

export default TitleTextButton;
