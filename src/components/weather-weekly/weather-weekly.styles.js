import styled from "styled-components";

export const WeatherWeeklyWrap = styled.div`
  padding: 0 20px;
  margin: 0;
  width: 30%;
  height: 860px;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    padding: 0;
    margin: 10px 0;
    display: block;
    width: 100%;
    height: auto;
  }

  border-radius: ${props => props.theme.borderRadius.medium};
  background-color: ${props => props.theme.colors.background};
`;