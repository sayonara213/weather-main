import React, {useEffect} from "react";
import {Header} from "../header/header";
import {MainWrap, WeatherWrap} from "./main.styles";
import {WeatherMain} from "../weather-main/weather-main";
import {WeatherWeekly} from "../weather-weekly/weather-weekly";
import {getCity, getWeather} from "../../service";
import {useDispatch, useSelector} from "react-redux";

export const Main = () => {

    const [isLoading, setIsLoading] = React.useState(true);

    const dispatch = useDispatch();
    const weather = useSelector(state => state.cityWeather);

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
    },[])

    if(isLoading) {
        return(<h1>Loading...</h1>)
    }

    return(
        <MainWrap>
            <WeatherWrap>
                {/*<Header/>*/}
                <WeatherMain/>
                {/*<WeatherWeekly/>*/}
            </WeatherWrap>
        </MainWrap>
    );
}