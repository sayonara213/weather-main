import React from "react";
import {useSelector} from "react-redux";

import {Keyboard, Mousewheel} from "swiper";
import {SwiperSlide, Swiper} from "swiper/react";

import {DayWeather} from "./weather-item/weather-item";

import {PlainText} from "../weather-main/weather-today/weather-today.styles";
import {WeatherWeeklyWrap} from "./weather-weekly.styles";

export const WeatherWeekly = () => {

    const weekWeather = useSelector(state => state.weather.cityWeather.daily);
    const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <WeatherWeeklyWrap>
            <PlainText>WEEKLY FORECAST:</PlainText>
            <Swiper
                mousewheel={true}
                keyboard={true}
                slidesPerView={5}
                direction={"vertical"}
                modules={[Mousewheel, Keyboard]}
                breakpoints={{
                    1280: {
                        slidesPerView: 5,
                        direction: "vertical"
                    },
                    992: {
                        slidesPerView: 5,
                        direction: "vertical"
                    },
                    768: {
                        slidesPerView: 4,
                        direction: "horizontal"
                    },
                    640: {
                        slidesPerView: 4,
                        direction: "horizontal"
                    },
                    576: {
                        slidesPerView: 4,
                        direction: "horizontal"
                    },
                    375: {
                        slidesPerView: 3,
                        direction: "horizontal"
                    }
                }}
            >
                {weekWeather.time.map((item, index) => (
                    <SwiperSlide key={index}>
                        <DayWeather weather={weekWeather} key={index} weekday={weekDay[index]} index={index}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </WeatherWeeklyWrap>
    );
}