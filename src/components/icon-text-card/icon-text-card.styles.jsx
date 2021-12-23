import styled from "styled-components";

export const Card = styled.div`
  /* width: 278.17px;
  height: 276.52px; */
  width: 24.2vw;
  height: 24vw;
  background: white;
  box-shadow: 0px 4px 18px rgba(88, 126, 236, 0.18);
  border-radius: 8px;
`;

export const CardIcon = styled.img.attrs((props) => ({
  src: props.cardIcon,
}))``;

export const CardTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.08em;
  color: black;
`;

export const CardDescription = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.08em;
  color: #616161;
`;
