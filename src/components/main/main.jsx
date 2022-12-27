import React, {useEffect} from "react";
import {MainWrap, WeatherWrap} from "./main.styles";
import {WeatherMain} from "../weather-main/weather-main";
import {getCity, getWeather} from "../../service";
import {useDispatch, useSelector} from "react-redux";
import {WeatherWeekly} from "../weather-weekly/weather-weekly";
import {Header} from "../header/header";
import {Theme} from "../../const/theme";

export const Main = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [theme, setTheme] = React.useState("dark");

    const dispatch = useDispatch();
    const city = useSelector(state => state.cityInfo);


    useEffect(() => {
        const defaultCity = async () => {
            await getWeather(49.83826, 24.02324).then(res => {
                dispatch({type: 'SET_WEATHER', payload: res.data})
            })
            await getCity("Lviv").then(res => {
                dispatch({type: 'SET_CITY_INFO', payload: res.data.results[0]})
            })
            setIsLoading(false)
        }
        defaultCity();
    },[dispatch])

    if(isLoading) {
        return(<h1>Loading...</h1>)
    }

    if(city.country_code === "RU") {
        window.open("https://www.youtube.com/watch?v=nybtOIxlku8","_self")
    }

    const handleTheme = () => {
        if(theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return(
        <Theme theme={theme}>
            <WeatherWrap>
                <Header click={handleTheme} theme={theme}/>
                <WeatherMain/>
                <WeatherWeekly/>
            </WeatherWrap>
        </Theme>
    );
}