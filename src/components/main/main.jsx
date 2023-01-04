import React, {useEffect, useState} from "react";
import {WeatherWrap} from "./main.styles";
import {WeatherMain} from "../weather-main/weather-main";
import {getCity, getUserCity, getWeather} from "../../service";
import {useDispatch, useSelector} from "react-redux";
import {WeatherWeekly} from "../weather-weekly/weather-weekly";
import {Header} from "../header/header";
import {Theme} from "../../constants/theme";
import {setCityInfo} from "../../redux/citySlice";
import {setWeather} from "../../redux/weatherSlice";

export const Main = () => {

    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const city = useSelector(state => state.city.cityInfo);
    const themeNow = useSelector(state => state.settings.lightTheme);
    const temperature = useSelector(state => state.settings.celsius);

    const defaultCity = async () => {
        await getUserCity().then(async (cityInfo) => {
            await getCity(cityInfo.data.city).then(res => {
                dispatch(setCityInfo(res.data.results[0]))
            })
            await getWeather(cityInfo.data.latitude, cityInfo.data.longitude, temperature).then(res => {
                dispatch(setWeather(res.data))
            })
            setIsLoading(false)
        })
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

    return (
        <Theme theme={themeNow}>
            <WeatherWrap>
                <Header location={defaultCity}/>
                <WeatherMain/>
                <WeatherWeekly/>
            </WeatherWrap>
        </Theme>
    );
}