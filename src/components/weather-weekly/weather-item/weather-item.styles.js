import styled from "styled-components";
import {theme} from "../../../constants/theme";

export const WeekDayWeather = styled.div`
  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    margin-bottom: 30px;
    flex-direction: column;

    margin-right: -2px;
    border-right: 1px solid ${props => props.theme.colors.border};
  }
`;

export const WeekDay = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.font.bold};
`;

export const Temperature = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.font.bold};
`;

export const WeatherIcon = styled.img`
  object-fit: contain;
  margin: 10px 0;
  width: 75px;
  height: auto;
`;

export const AdaptContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;