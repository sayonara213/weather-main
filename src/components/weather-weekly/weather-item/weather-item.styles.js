import styled from "styled-components";
import {theme} from "../../../const/theme";

export const WeekDayWeather = styled.div`
    margin: 10px 25px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const WeekDay = styled.p`
    margin: 0;
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.text};
`;

export const TempWrap = styled.div`
    margin: 5px 0;
    display: flex;
    flex-direction: row;
`;

export const Temperature = styled.p`
    margin: 0;
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.grey};
`;

export const WeatherIcon = styled.img`
    object-fit: contain;
    width: 75px;
    height: auto;
`;