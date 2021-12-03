import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 44px;
  color: black;
  width: 400px;
  margin-bottom: 12px;

  @media (max-width: 950px) {
    text-align: center;
    width: 343px;
  }
`;

export const TitleBlue = styled.span`
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 44px;
  color: #4285f4;
`;

export const TitleRed = styled.span`
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 44px;
  color: #ec5863;
`;

export const Text = styled.div`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #616161;
  letter-spacing: 0.08em;
  width: 363px;
  margin-bottom: 24px;

  @media (max-width: 950px) {
    text-align: center;
    width: 343px;
  }
`;
