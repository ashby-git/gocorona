import React from "react";
import { Text, Title } from "./title-text-button.styles";

//TODO button from navbar branch

const TitleTextButton = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </div>
  );
};

export default TitleTextButton;
