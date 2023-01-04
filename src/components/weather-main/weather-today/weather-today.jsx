import React from "react";
import {PlainText, SectionWrap} from "./weather-today.styles";
import {TodayItem} from "./weather-today-item/today-item";

import {Mousewheel, Keyboard} from "swiper";

import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {useSelector} from "react-redux";

export const WeatherToday = () => {

    const weatherToday = useSelector(state => state.weather.cityWeather.hourly);

    return (
        <SectionWrap>
            <PlainText>TODAY'S FORECAST: </PlainText>
            <Swiper
                mousewheel={true}
                keyboard={true}
                spaceBetween={0}
                modules={[Mousewheel, Keyboard]}
                className="mySwiper"
                breakpoints={{
                    1280: {
                        slidesPerView: 5
                    },
                    992: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 4
                    },
                    640: {
                        slidesPerView: 4
                    },
                    576: {
                        slidesPerView: 4,
                    },
                    375: {
                        slidesPerView: 3,
                    }
                }}
            >
                {weatherToday.time.map((item, index) => {
                    if (index > 24) return;
                    return (
                        <SwiperSlide key={index}>
                            <TodayItem weatherIndex={index}/>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SectionWrap>
    );
}