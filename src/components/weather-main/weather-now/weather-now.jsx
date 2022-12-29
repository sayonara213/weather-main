import React from "react";
import {
    CountryWrap, IconWrap,
    WeatherNowCity,
    WeatherNowIcon,
    WeatherNowRain,
    WeatherNowTemp,
    WeatherNowWrap,
    WeatherTextWrap
} from "./weather-now.styles";
import {getWeatherIcon} from "../../../constants/weather-images";
import {useSelector} from "react-redux";
import {CircleFlag} from "react-circle-flags";

export const WeatherNow = () => {

    const weather = useSelector(state => state.cityWeather);
    const city = useSelector(state => state.cityInfo);

    return (
        <WeatherNowWrap>
            <WeatherTextWrap>
                <CountryWrap>
                    <CircleFlag countryCode={city.country_code.toLowerCase()} height="35"/>
                    <WeatherNowCity>{city.name + ", " + city.country}</WeatherNowCity>
                </CountryWrap>
                <WeatherNowRain>Wind speed: {weather.current_weather.windspeed} m/s</WeatherNowRain>
                <WeatherNowTemp>{parseInt(weather.current_weather.temperature) + `°`}</WeatherNowTemp>
            </WeatherTextWrap>
            <IconWrap>
                <WeatherNowIcon
                    src={getWeatherIcon(weather.current_weather.weathercode, weather.current_weather.time)}/>
            </IconWrap>
        </WeatherNowWrap>
    );
}
