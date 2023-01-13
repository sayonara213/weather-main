import styled from "styled-components";

export const WeatherMainWrap = styled.div`
    margin: 0 10px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    @media (max-width: 1200px) {
      width: 60%;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
`;