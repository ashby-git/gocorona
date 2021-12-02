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
      <div>
        <BackDrop onClick={props.onCloseModal} />
        <ModalElementsContainer>
          <CloseButton onClick={props.onCloseModal}>
            <CloseIcon />
          </CloseButton>
          <Card>{props.children}</Card>
        </ModalElementsContainer>
      </div>
    </>
  );
};

export default VideoModal;
