import styled from "styled-components";

export const WeekDayWeather = styled.div`
  margin: 0 10px 20px 10px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    flex-direction: column;

    margin: 0 -2px 30px 0;
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
  margin: 10px;
  width: 75px;
  height: auto;
`;

export const AdaptContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeekDate = styled.p`
  margin-top: 5px;
  
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.font.bold};
`;