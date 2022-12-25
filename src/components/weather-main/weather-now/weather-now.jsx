import React from "react";
import {
    WeatherNowCity,
    WeatherNowIcon,
    WeatherNowRain,
    WeatherNowTemp,
    WeatherNowWrap,
    WeatherTextWrap
} from "./weather-now.styles";
import {getWeatherIcon, IMAGES} from "../../../const/images";
import {useSelector} from "react-redux";

export const WeatherNow = () => {

    const weather = useSelector(state => state.cityWeather);
    const city = useSelector(state => state.cityInfo);

    return(
        <WeatherNowWrap>
            <WeatherTextWrap>
                <WeatherNowCity>{city.name + ", " + city.country}</WeatherNowCity>
                <WeatherNowRain>Wind speed: {weather.current_weather.windspeed} m/s</WeatherNowRain>
                <WeatherNowTemp>{parseInt(weather.current_weather.temperature) + `°`}</WeatherNowTemp>
            </WeatherTextWrap>
            <WeatherNowIcon src={getWeatherIcon(weather.current_weather.weathercode, weather.current_weather.time)}/>
        </WeatherNowWrap>
    );
}
