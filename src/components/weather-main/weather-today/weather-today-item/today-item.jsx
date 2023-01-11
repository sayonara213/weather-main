import React from "react";

import {getWeatherIcon} from "../../../../constants/weather-images";
import {useSelector} from "react-redux";

import {TodayIcon, TodayItemWrap, TodayTemp, TodayTime} from "./today-item.styles";

export const TodayItem = (props) => {

    const weather = useSelector(state => state.weather.cityWeather.hourly);

    const getTime = (time) => {
        return time.slice(11, 16);
    }

    return (
        <TodayItemWrap>
            <TodayTime>{getTime(weather.time[props.weatherIndex])}</TodayTime>
            <TodayIcon
                src={getWeatherIcon(weather.weathercode[props.weatherIndex], weather.time[props.weatherIndex])}></TodayIcon>
            <TodayTemp>{`${parseInt(weather.temperature_2m[props.weatherIndex])}°`}</TodayTemp>
        </TodayItemWrap>
    );

}