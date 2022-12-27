import styled from "styled-components";
import {theme} from "../../const/theme";

export const WeatherWeeklyWrap = styled.div`
    margin: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    height: 860px;

    border-radius: ${props => props.theme.borderRadius.medium};
    background-color: ${props => props.theme.colors.background};
`;