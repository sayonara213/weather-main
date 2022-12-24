import React from "react";
import {TodayIcon, TodayItemWrap, TodayTemp, TodayTime} from "./today-item.styles";
import {IMAGES} from "../../../../const/images";

export const TodayItem = () => {
    return(
        <TodayItemWrap>
            <TodayTime>12:00 PM</TodayTime>
            <TodayIcon src={IMAGES.rain}></TodayIcon>
            <TodayTemp>23°</TodayTemp>
        </TodayItemWrap>
    );

}