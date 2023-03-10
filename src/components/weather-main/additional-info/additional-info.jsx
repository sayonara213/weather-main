import React from "react";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Mousewheel, Pagination} from "swiper";

import {getDirection} from "../../../constants/weather-images";

import {IMAGES} from "../../../constants/images";

import {AddWrap, AirIcon, AirTextBig, AirTextSmall, AirWrap, SectionName, TextWrap} from "./additional-info.styles";
import {PlainText, SectionWrap} from "../weather-today/weather-today.styles";

export const AdditionalInfo = () => {

    const additionalInfo = useSelector(state => state.weather.additionalInfo);
    const themeNow = useSelector(state => state.settings.lightTheme);

    return (
        <SectionWrap>
            <PlainText>OTHER:</PlainText>
            <Swiper
                mousewheel={true}
                keyboard={true}
                pagination={true}
                slidesPerView={2}
                modules={[Mousewheel, Keyboard, Pagination]}
                breakpoints={{
                    1280: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }}
            >
                <AddWrap>
                    <SwiperSlide>
                        <AirWrap>
                            <TextWrap>
                                <SectionName>
                                    <AirIcon src={themeNow ? IMAGES.sunriseDark : IMAGES.sunriseLight} alt={""}/>
                                    <AirTextBig>Sunrise</AirTextBig>
                                </SectionName>
                                <AirTextSmall>{('0' + new Date(additionalInfo.sunrise).getHours()).slice(-2)}:{('0' + new Date(additionalInfo.sunrise).getMinutes()).slice(-2)}</AirTextSmall>
                            </TextWrap>
                            <TextWrap>
                                <SectionName>
                                    <AirIcon src={themeNow ? IMAGES.sunsetDark : IMAGES.sunsetLight} alt={""}/>
                                    <AirTextBig>Sunset</AirTextBig>
                                </SectionName>
                                <AirTextSmall>{('0' + new Date(additionalInfo.sunset).getHours()).slice(-2)}:{('0' + new Date(additionalInfo.sunset).getMinutes()).slice(-2)}</AirTextSmall>
                            </TextWrap>
                        </AirWrap>
                    </SwiperSlide>
                    <SwiperSlide>
                        <AirWrap>
                            <TextWrap>
                                <SectionName>
                                    <AirIcon src={themeNow ? IMAGES.precipitationDark : IMAGES.precipitationLight} alt={""}/>
                                    <AirTextBig>Precipitation</AirTextBig>
                                </SectionName>
                                <AirTextSmall>{additionalInfo.precipitation} mm</AirTextSmall>
                            </TextWrap>
                            <TextWrap>
                                <SectionName>
                                    <AirIcon src={themeNow ? IMAGES.directionDark : IMAGES.directionLight} alt={""}/>
                                    <AirTextBig>Wind direction</AirTextBig>
                                </SectionName>
                                <AirTextSmall>{getDirection(additionalInfo.windDirection)}</AirTextSmall>
                            </TextWrap>
                        </AirWrap>
                    </SwiperSlide>
                </AddWrap>
            </Swiper>
        </SectionWrap>
    );
}