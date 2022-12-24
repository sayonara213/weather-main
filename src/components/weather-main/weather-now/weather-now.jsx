import React from "react";
import {
    WeatherNowCity,
    WeatherNowIcon,
    WeatherNowRain,
    WeatherNowTemp,
    WeatherNowWrap,
    WeatherTextWrap
} from "./weather-now.styles";
import {IMAGES} from "../../../const/images";

export const WeatherNow = () => {
    return(
        <WeatherNowWrap>
            <WeatherTextWrap>
                <WeatherNowCity>Madrid</WeatherNowCity>
                <WeatherNowRain>Chance of rain: 0%</WeatherNowRain>
                <WeatherNowTemp>31°</WeatherNowTemp>
            </WeatherTextWrap>
            <WeatherNowIcon src={IMAGES.sun}/>
        </WeatherNowWrap>
    );
}