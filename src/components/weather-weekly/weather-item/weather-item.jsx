import React from "react";
import {AdaptContainer, Temperature, WeatherIcon, WeekDay, WeekDayWeather} from "./weather-item.styles";
import {getWeatherIcon} from "../../../constants/weather-images";

export const DayWeather = (props) => {
    return (
        <WeekDayWeather>
            <WeekDay>{props.weekday}</WeekDay>
            <WeatherIcon src={getWeatherIcon(props.weather.weathercode[props.index], "")}></WeatherIcon>
            <Temperature>{parseInt(props.weather.temperature_2m_max[props.index])}°/{parseInt(props.weather.temperature_2m_min[props.index])}°
            </Temperature>
        </WeekDayWeather>
    );

}