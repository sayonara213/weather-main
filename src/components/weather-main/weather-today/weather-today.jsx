import React from "react";
import {PlainText, SectionWrap, TodayWrap} from "./weather-today.styles";
import {TodayItem} from "./weather-today-item/today-item";

export const WeatherToday = () => {
    return(
        <SectionWrap>
            <PlainText>TODAY'S FORECAST: </PlainText>
            <TodayWrap>
                <TodayItem/>
                <TodayItem/>
                <TodayItem/>
                <TodayItem/>
                <TodayItem/>
                <TodayItem/>
                <TodayItem/>
            </TodayWrap>
        </SectionWrap>
    );
}