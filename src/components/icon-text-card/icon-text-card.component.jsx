import React from "react";
import {
  Card,
  CardDescription,
  CardIcon,
  CardTitle,
} from "./icon-text-card.styles";

const IconTextCard = (props) => {
  return (
    <Card>
      <CardIcon src={props.cardIcon} />
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </Card>
  );
};

export default IconTextCard;
