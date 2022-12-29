import React, {useEffect, useState} from "react";
import {WeatherWrap} from "./main.styles";
import {WeatherMain} from "../weather-main/weather-main";
import {getCity, getUserCity, getWeather} from "../../service";
import {useDispatch, useSelector} from "react-redux";
import {WeatherWeekly} from "../weather-weekly/weather-weekly";
import {Header} from "../header/header";
import {Theme} from "../../constants/theme";

export const Main = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState("dark");

    const dispatch = useDispatch();
    const city = useSelector(state => state.cityInfo);

    const defaultCity = async () => {
        await getUserCity().then(async (cityInfo) => {
            await getCity(cityInfo.data.city).then(res => {
                dispatch({type: 'SET_CITY_INFO', payload: res.data.results[0]})
            })
            await getWeather(cityInfo.data.latitude, cityInfo.data.longitude).then(res => {
                dispatch({type: 'SET_WEATHER', payload: res.data})
            })
        })
        setIsLoading(false)
    }

    useEffect(() => {
        defaultCity();
    }, [])

    if (isLoading) {
        return (<h1>Loading...</h1>)
    }

    if (city.country_code === "RU") {
        window.open("https://www.youtube.com/watch?v=nybtOIxlku8", "_self")
    }

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <Theme theme={theme}>
            <WeatherWrap>
                <Header themeChange={handleTheme} theme={theme} location={defaultCity}/>
                <WeatherMain/>
                <WeatherWeekly/>
            </WeatherWrap>
        </Theme>
    );
}