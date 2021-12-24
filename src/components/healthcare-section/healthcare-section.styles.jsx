import styled from "styled-components";

export const HealthcareSectionContainer = styled.div``;

const basicTitle = `
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    font-size: 44px;
  `;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 950px) {
    display: grid;
  }
`;

export const HealthcareTitle = styled.div`
  ${basicTitle}
  color: #ec5863;
  text-align: center;
  line-height: 55.44px;
  margin: max(11.5vh, 80px) 20px 14px 20px;
  margin: 7% 20px 14px 20px;

  @media (max-width: 950px) {
    margin: 7% 40px 14px 40px;
  }
`;

export const HealthcareTitleBlack = styled.span`
  ${basicTitle}
  color: black;
`;

export const HealthcareText = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #616161;
  letter-spacing: 0.08em;
  line-height: 16.62px;
  text-align: center;
  width: max(52vw, 296px);
  max-width: 600px;
  margin: 0 auto max(8vh, 48px) auto;
`;
