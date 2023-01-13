import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CircleFlag} from "react-circle-flags";

import {
    CountryWrap, IconWrap, SmallIcon,
    WeatherNowCity, WeatherNowCityWrap, WeatherNowCountry,
    WeatherNowIcon,
    WeatherNowRain,
    WeatherNowTemp,
    WeatherNowWrap,
    WeatherTextWrap
} from "./weather-now.styles";

import {getWeatherIcon} from "../../../constants/weather-images";
import {IMAGES} from "../../../constants/images";
import {addSavedCity, removeSavedCity} from "../../../redux/citySlice";

export const WeatherNow = () => {

    const weather = useSelector(state => state.weather.cityWeather);
    const city = useSelector(state => state.city.cityInfo);
    const savedCities = useSelector(state => state.city.savedCities);
    const [isSaved, setIsSaved] = React.useState(false);
    const dispatch = useDispatch();

    const themeNow = useSelector(state => state.settings.lightTheme);
    const saveCity = () => {
        if(isSaved){
            setIsSaved(false)
            dispatch(removeSavedCity(city.id))
        } else {
            dispatch(addSavedCity(city))
            setIsSaved(true)
        }
    }

    useEffect(() => {
        if(savedCities.some(item => item.id === city.id)){
            setIsSaved(true)
        } else {
            setIsSaved(false)
        }
    }, [city])

    return (
        <WeatherNowWrap>
            <WeatherTextWrap>
                <CountryWrap>
                    <SmallIcon src={isSaved ? themeNow ? IMAGES.savedDark : IMAGES.savedLight : themeNow ? IMAGES.saveDark : IMAGES.saveLight} onClick={saveCity}/>
                    <CircleFlag countryCode={city.country_code.toLowerCase()} height="35" alt={""}/>
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
                    src={getWeatherIcon(weather.current_weather.weathercode, weather.current_weather.time)}
                    alt={""}
                />
            </IconWrap>
        </WeatherNowWrap>
    );
}
