import styled from "styled-components";
import {theme} from "../../../const/theme";

export const WeatherNowWrap = styled.div`
    margin: 10px 0;
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: 200px;
`;

export const WeatherTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const WeatherNowCity = styled.h1`
    margin: 0 0 10px 0;
    font-size: 40px;
    color: ${theme.colors.text};
`;

export const WeatherNowRain = styled.p`
    margin: 0;
    font-size: 16px;
    color: ${theme.colors.grey};
`;

export const WeatherNowTemp = styled.h2`
    margin: 10px 0;
    font-size: 70px;
    color: ${theme.colors.text};
`;

export const WeatherNowIcon = styled.img`
    object-fit: contain;
  
    width: 100%;
    height: 100%;
`;