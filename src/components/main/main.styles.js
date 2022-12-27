import styled from "styled-components";

export const WeatherWrap = styled.div`
    margin: 10px 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  
    @media (max-width: 1200px) {
      margin: 10px 100px;
    }
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;