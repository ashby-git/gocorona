import styled from "styled-components";

export const Card = styled.div`
  width: max(24.2vw, 278.17px);
  height: max(24vw, 276.52px);
  background: white;
  box-shadow: 0px 4px 18px rgba(88, 126, 236, 0.18);
  border-radius: 8px;
  display: grid;
  margin: 0 0 max(10vh, 72.5px) 0;
`;

export const CardIcon = styled.img`
  height: max(8vw, 72px);
  margin: max(5.5vh, 38px) auto max(8.3vh, 58px) auto;
`;

export const CardTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.08em;
  color: black;
  margin: 0 10px 0 10px;
`;

export const CardDescription = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.08em;
  line-height: 138.5%;
  color: #616161;
  margin: max(0.7vh, 5px) max(1.5vw, 18px) max(5vh, 36.5px) max(1.5vw, 18px);
`;
