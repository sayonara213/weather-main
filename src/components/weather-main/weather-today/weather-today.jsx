import React from "react";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';

import {TodayItem} from "./weather-today-item/today-item";

import {Mousewheel, Keyboard} from "swiper";

import {PlainText, SectionWrap} from "./weather-today.styles";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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
                {weatherToday.time.slice(0, 24).map((item, index) => {
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