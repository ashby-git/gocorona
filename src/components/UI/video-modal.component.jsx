import React from "react";
import {
  BackDrop,
  Card,
  CloseButton,
  CloseIcon,
  ModalElementsContainer,
} from "./video-modal.styles";

const VideoModal = (props) => {
  return (
    <>
      <BackDrop />
      <ModalElementsContainer>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
        <Card>{props.children}</Card>
      </ModalElementsContainer>
    </>
  );
};

export default VideoModal;
