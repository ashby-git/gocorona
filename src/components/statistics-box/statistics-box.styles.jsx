import styled from "styled-components";

export const StatisticsBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 654px;
  background-color: white;
  box-shadow: 0px 2px 24px rgba(88, 126, 236, 0.15);
  border-radius: 16px;
  z-index: 1;

  @media (max-width: 950px) {
    flex-flow: column wrap;
    width: 343px;
  }
`;

export const GroupWrapper = styled.div`
  padding: 28px 0;

  @media (max-width: 950px) {
    padding: 13px 0;
  }
`;

export const Statistic = styled.h1`
  font-size: 36px;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #ec5863;
  text-align: center;
  margin: 0 0 5px 0;
`;

export const Description = styled.h2`
  font-size: 11px;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  letter-spacing: 0.37em;
  color: black;
  text-transform: uppercase;
  text-align: center;
`;
