import styled from "styled-components";
import {theme} from "../../const/theme";

export const WeatherWeeklyWrap = styled.div`
    margin: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    height: 900px;

    border-radius: ${theme.borderRadius.medium};
    background-color: ${theme.colors.background};
`;