import React from "react";
import {
  AppleAppStore,
  AppleImgWrapper,
  AppStoreImagesContainer,
  DownloadContainer,
  DownloadDescription,
  DownloadTitle,
  DownloadTitleBlack,
  GoogleImgWrapper,
  GooglePlayStore,
  Logo,
  LogoWrapper,
} from "./download.styles";

const Download = () => {
  return (
    <DownloadContainer>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <DownloadTitle>
        Download
        <DownloadTitleBlack> the app now!</DownloadTitleBlack>
      </DownloadTitle>
      <DownloadDescription>
        Get access to 24x7 support and our knowledgeable experts. By downloading
        our app now, you can bring healthcare to your fingertips. Signup and be
        a part of the new health culture.
      </DownloadDescription>
      <AppStoreImagesContainer>
        <GoogleImgWrapper href="https://play.google.com/" target="_blank">
          <GooglePlayStore />
        </GoogleImgWrapper>
        <AppleImgWrapper
          href="https://www.apple.com/app-store/"
          target="_blank"
        >
          <AppleAppStore />
        </AppleImgWrapper>
      </AppStoreImagesContainer>
    </DownloadContainer>
  );
};

export default Download;
