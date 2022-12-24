import React from "react";
import {Header} from "../header/header";
import {MainWrap, WeatherWrap} from "./main.styles";
import {WeatherMain} from "../weather-main/weather-main";
import {WeatherWeekly} from "../weather-weekly/weather-weekly";

export const Main = () => {
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