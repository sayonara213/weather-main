import React from "react";
import {AdaptContainer, Temperature, WeatherIcon, WeekDate, WeekDay, WeekDayWeather} from "./weather-item.styles";
import {getDayDate, getWeatherIcon, getWeekDay} from "../../../constants/weather-images";

export const DayWeather = (props) => {
    return (
        <WeekDayWeather>
            <AdaptContainer>
                <WeekDay>{props.index === 0 ? "Today" : getWeekDay(props.weather.time[props.index])}</WeekDay>
                <WeekDate>{getDayDate(props.weather.time[props.index])}</WeekDate>
            </AdaptContainer>
            <WeatherIcon src={getWeatherIcon(props.weather.weathercode[props.index], "")}></WeatherIcon>
            <Temperature>{parseInt(props.weather.temperature_2m_max[props.index])}°/{parseInt(props.weather.temperature_2m_min[props.index])}°
            </Temperature>
        </WeekDayWeather>
    );

}