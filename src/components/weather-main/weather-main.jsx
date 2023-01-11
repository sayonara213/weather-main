import React from "react";

import {Input} from "./input/input";
import {WeatherNow} from "./weather-now/weather-now";
import {AdditionalInfo} from "./additional-info/additional-info";
import {WeatherToday} from "./weather-today/weather-today";

import {WeatherMainWrap} from "./weather-main.styles";

export const WeatherMain = () => {
    return (
        <WeatherMainWrap>
            <Input/>
            <WeatherNow/>
            <WeatherToday/>
            <AdditionalInfo/>
        </WeatherMainWrap>
    );
}