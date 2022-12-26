import React from "react";
import {WeatherMainWrap} from "./weather-main.styles";
import {Input} from "./input/input";
import {WeatherNow} from "./weather-now/weather-now";
import {WeatherAir} from "./weather-air/weather-air";
import {WeatherToday} from "./weather-today/weather-today";

export const WeatherMain = () => {
    return(
        <WeatherMainWrap>
            <Input/>
            <WeatherNow/>
            <WeatherToday/>
            <WeatherAir/>
        </WeatherMainWrap>
    );
}