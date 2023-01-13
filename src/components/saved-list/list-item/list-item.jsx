import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {ListButton, ListIcon, ListItemWrap, ListTempWrap} from "./list-item.styles";
import {
    CountryWrap,
    WeatherNowCity,
    WeatherNowCityWrap,
    WeatherNowCountry
} from "../../weather-main/weather-now/weather-now.styles";
import {CircleFlag} from "react-circle-flags";
import {getWeatherIcon} from "../../../constants/weather-images";
import {getWeather} from "../../../service";
import {removeSavedCity, setCityInfo} from "../../../redux/citySlice";
import {useNavigate} from "react-router-dom";
import {IMAGES} from "../../../constants/images";

export const ListItem = ({city}) => {

    const [weather, setWeather] = useState({});
    const temperature = useSelector(state => state.settings.celsius);
    const dispatch = useDispatch();

    const themeNow = useSelector(state => state.settings.lightTheme);

    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(setCityInfo(city))
        navigate("/main");
    }

    const handleDelete = () => {
        dispatch(removeSavedCity(city.id))
    }

    useEffect(() => {
        const getSavedWeather = async () => {
            await getWeather(city.latitude, city.longitude, temperature).then(res => {
                setWeather(res.data.current_weather)
                })
            }
        getSavedWeather()
    }, [])

    return(
        <ListItemWrap>
            <ListButton src={themeNow ? IMAGES.deleteLight : IMAGES.deleteDark} onClick={handleDelete}/>
            <ListIcon src={getWeatherIcon(weather.weathercode, weather.time)}>

            </ListIcon>
            <CountryWrap onClick={handleClick}>
                <CircleFlag countryCode={city.country_code.toLowerCase()} height="35" alt={""}/>
                <WeatherNowCityWrap>
                    <WeatherNowCity>{city.name}</WeatherNowCity>
                    <WeatherNowCountry>{city.country}</WeatherNowCountry>
                </WeatherNowCityWrap>
            </CountryWrap>
            <ListTempWrap>

            </ListTempWrap>
        </ListItemWrap>
    )
}