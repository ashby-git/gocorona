import React from "react";
import {
  LinkText,
  PlayIconBlue,
  PlayIconWhite,
  TextContainer,
  VideoLinkGroupContainer,
  VideoTitle,
} from "./video-link-group.styles";
import VideoModal from "./video-modal.component";

const VideoLinkGroup = (props) => {
  return (
    <>
      <VideoModal>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y_N1rTPhv04"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoModal>
      <VideoLinkGroupContainer>
        <PlayIconWhite />
        <PlayIconBlue />
        <TextContainer>
          <VideoTitle>{props.children}</VideoTitle>
          <LinkText>WATCH VIDEO</LinkText>
        </TextContainer>
      </VideoLinkGroupContainer>
    </>
  );
};

export default VideoLinkGroup;
