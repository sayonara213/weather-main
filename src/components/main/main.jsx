import React, {useEffect} from "react";
import {MainWrap, WeatherWrap} from "./main.styles";
import {WeatherMain} from "../weather-main/weather-main";
import {getCity, getWeather} from "../../service";
import {useDispatch, useSelector} from "react-redux";

export const Main = () => {

    const [isLoading, setIsLoading] = React.useState(true);

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