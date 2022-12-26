import styled from "styled-components";
import {theme} from "../../const/theme";

export const WeatherWeeklyWrap = styled.div`
    margin: 10px 0 0 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 800px;

    border-radius: ${theme.borderRadius.medium};
    background-color: ${theme.colors.background};
`;