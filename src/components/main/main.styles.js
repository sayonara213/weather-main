import styled from "styled-components";

export const WeatherWrap = styled.div`
  padding: 10px 200px;
  display: flex;
  height: 860px;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1500px) {
    padding: 10px 20px;
  }
  @media (max-width: 992px) {
    height: auto;
    padding: 10px 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;