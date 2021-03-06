import styled from "styled-components";

const basicTitle = `
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 44px;
`;

export const Title = styled.div`
  ${basicTitle}
  color: black;
  width: 400px;
  margin-bottom: 12px;

  @media (max-width: 950px) {
    text-align: center;
    width: 343px;
  }
`;

export const TitleBlue = styled.span`
  ${basicTitle}
  color: #4285f4;
`;

export const TitleRed = styled.span`
  ${basicTitle}
  color: #ec5863;
`;

export const Text = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #616161;
  letter-spacing: 0.08em;
  width: 363px;
  margin-bottom: 30px;

  @media (max-width: 950px) {
    text-align: center;
    width: 343px;
    margin-bottom: 12px;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
