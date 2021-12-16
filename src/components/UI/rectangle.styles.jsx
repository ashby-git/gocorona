import styled from "styled-components";

export const Rectangle = styled.div`
  background-color: #ec5863;
  position: absolute;
  z-index: -1;
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  display: ${(props) => props.display};

  @media (max-width: 950px) {
    display: ${(props) => props.mediaDisplay};
    top: ${(props) => props.mediaTop};
    right: ${(props) => props.mediaRight};
    bottom: ${(props) => props.mediaBottom};
    left: ${(props) => props.mediaLeft};
  }
`;
