import React from "react";
import {
  LinkText,
  PlayIconBlue,
  PlayIconWhite,
  TextContainer,
  VideoLinkGroupContainer,
  VideoTitle,
} from "./video-link-group.styles";

const VideoLinkGroup = (props) => {
  return (
    <VideoLinkGroupContainer>
      <PlayIconWhite />
      <PlayIconBlue />
      <TextContainer>
        <VideoTitle>{props.children}</VideoTitle>
        <LinkText>WATCH VIDEO</LinkText>
      </TextContainer>
    </VideoLinkGroupContainer>
  );
};

export default VideoLinkGroup;
