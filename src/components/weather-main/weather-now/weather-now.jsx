import React from "react";
import {useSelector} from "react-redux";
import {CircleFlag} from "react-circle-flags";

import {
    CountryWrap, IconWrap,
    WeatherNowCity, WeatherNowCityWrap, WeatherNowCountry,
    WeatherNowIcon,
    WeatherNowRain,
    WeatherNowTemp,
    WeatherNowWrap,
    WeatherTextWrap
} from "./weather-now.styles";

import {getWeatherIcon} from "../../../constants/weather-images";

export const WeatherNow = () => {

    const weather = useSelector(state => state.weather.cityWeather);
    const city = useSelector(state => state.city.cityInfo);

    return (
        <WeatherNowWrap>
            <WeatherTextWrap>
                <CountryWrap>
                    <CircleFlag countryCode={city.country_code.toLowerCase()} height="35"/>
                    <WeatherNowCityWrap>
                        <WeatherNowCity>{city.name}</WeatherNowCity>
                        <WeatherNowCountry>{city.country}</WeatherNowCountry>
                    </WeatherNowCityWrap>
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
