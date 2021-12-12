import React, { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <VideoModal onCloseModal={closeModal}>
          <iframe
            width="560"
            height="315"
            src={props.source}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoModal>
      )}

      <VideoLinkGroupContainer onClick={setShowModal}>
        <PlayIconWhite filledIcon={props.filledIcon} />
        <PlayIconBlue filledIcon={props.filledIcon} />
        <TextContainer>
          <VideoTitle>{props.videoTitle}</VideoTitle>
          <LinkText>{props.linkText}</LinkText>
        </TextContainer>
      </VideoLinkGroupContainer>
    </>
  );
};

export default VideoLinkGroup;
