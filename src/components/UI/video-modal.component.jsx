import React from "react";
import ReactDOM from "react-dom";
import {
  BackDrop,
  Card,
  CloseButton,
  CloseIcon,
  ModalElementsContainer,
} from "./video-modal.styles";

const Backdrop = (props) => {
  return <BackDrop onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalElementsContainer>
      <CloseButton onClick={props.onCloseModal}>
        <CloseIcon />
      </CloseButton>
      <Card>{props.children}</Card>
    </ModalElementsContainer>
  );
};

const VideoModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCloseModal={props.onCloseModal}
          children={props.children}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default VideoModal;
