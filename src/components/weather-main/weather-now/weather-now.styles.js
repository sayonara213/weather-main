import styled from "styled-components";
import {theme} from "../../../constants/theme";

export const WeatherNowWrap = styled.div`
  margin: 10px 0 0 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 250px;
`;

export const WeatherTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WeatherNowCity = styled.h1`
  font-size: ${props => props.theme.fontSize.city};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.font.bold};

  @media (max-width: 992px) {
    font-size: ${props => props.theme.fontSize.cityPhone};
  }
`;

export const WeatherNowCountry = styled.p`
  margin: 5px 0 0 2px;
  
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.font.bold};
`;

export const WeatherNowCityWrap = styled.div`
  margin: 0 0 10px 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WeatherNowRain = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.font.bold};
`;

export const WeatherNowTemp = styled.h2`
  margin: 10px 0;
  font-size: ${props => props.theme.fontSize.temperature};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.font.bold};
`;

export const WeatherNowIcon = styled.img`
  object-fit: contain;
  max-width: 70%;
  height: auto;
  @media (max-width: 992px) {
    max-width: 80%;
  }
`;

export const CountryWrap = styled.div`
  margin: 0 0 10px 0;
  
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
`;
