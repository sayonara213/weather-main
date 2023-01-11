import React from "react";

import {getDayDate, getWeatherIcon, getWeekDay} from "../../../constants/weather-images";

import {AdaptContainer, Temperature, WeatherIcon, WeekDate, WeekDay, WeekDayWeather} from "./weather-item.styles";

export const DayWeather = (props) => {
    return (
        <WeekDayWeather>
            <AdaptContainer>
                <WeekDay>{props.index === 0 ? "Today" : getWeekDay(props.weather.time[props.index])}</WeekDay>
                <WeekDate>{getDayDate(props.weather.time[props.index])}</WeekDate>
            </AdaptContainer>
            <WeatherIcon src={getWeatherIcon(props.weather.weathercode[props.index], "")} alt={""}></WeatherIcon>
            <Temperature>{parseInt(props.weather.temperature_2m_max[props.index])}°/{parseInt(props.weather.temperature_2m_min[props.index])}°
            </Temperature>
        </WeekDayWeather>
    );

}