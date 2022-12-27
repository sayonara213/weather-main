import React from "react";
import {WeatherWeeklyWrap} from "./weather-weekly.styles";
import {DayWeather} from "./weather-item/weather-item";
import {useSelector} from "react-redux";
import {PlainText} from "../weather-main/weather-today/weather-today.styles";

export const WeatherWeekly = () => {

    const weekWeather = useSelector(state => state.cityWeather.daily);
    const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return(
        <WeatherWeeklyWrap>
            <PlainText>WEEKLY FORECAST:</PlainText>
            {weekWeather.time.map((item, index) => (
                <DayWeather weather={weekWeather} key={index} weekday={weekDay[index]} index={index}/>
            ))}
        </WeatherWeeklyWrap>
    );
}