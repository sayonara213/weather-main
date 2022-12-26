import React from "react";
import {PlainText, SectionWrap} from "./weather-today.styles";
import {TodayItem} from "./weather-today-item/today-item";

import { Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {useSelector} from "react-redux";

export const WeatherToday = () => {

    const weatherToday = useSelector(state => state.cityWeather.hourly);

    return(
        <SectionWrap>
            <PlainText>TODAY'S FORECAST: </PlainText>
            <Swiper
                mousewheel={true}
                keyboard={true}
                spaceBetween={0}
                slidesPerView={5}
                modules={[Mousewheel, Keyboard]}
            >
                {weatherToday.time.map((item, index) => {
                    if(index > 24) return;
                    return(
                        <SwiperSlide key={index}>
                            <TodayItem weatherIndex={index}/>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SectionWrap>
    );
}