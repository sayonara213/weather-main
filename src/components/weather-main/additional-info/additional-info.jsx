import React from "react";
import {AddWrap, AirIcon, AirTextBig, AirTextSmall, AirWrap, TextWrap} from "./additional-info.styles";
import {PlainText, SectionWrap} from "../weather-today/weather-today.styles";
import {useSelector} from "react-redux";
import {IMAGES} from "../../../constants/images";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {getDirection} from "../../../constants/weather-images";

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
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1,
                    }
                }}
            >
                <AddWrap>
                    <SwiperSlide>
                        <AirWrap>
                            <TextWrap>
                                <AirIcon src={themeNow ? IMAGES.sunriseDark : IMAGES.sunriseLight}/>
                                <AirTextBig>Sunrise:</AirTextBig>
                                <AirTextSmall>{new Date(additionalInfo.sunrise).getHours()}:{new Date(additionalInfo.sunrise).getMinutes()}</AirTextSmall>
                            </TextWrap>
                            <TextWrap>
                                <AirIcon src={themeNow ? IMAGES.sunsetDark : IMAGES.sunsetLight}/>
                                <AirTextBig>Sunset:</AirTextBig>
                                <AirTextSmall>{new Date(additionalInfo.sunset).getHours()}:{new Date(additionalInfo.sunset).getMinutes()}</AirTextSmall>
                            </TextWrap>
                        </AirWrap>
                    </SwiperSlide>
                    <SwiperSlide>
                        <AirWrap>
                            <TextWrap>
                                <AirIcon src={themeNow ? IMAGES.precipitationDark : IMAGES.precipitationLight}/>
                                <AirTextBig>Precipitation:</AirTextBig>
                                <AirTextSmall>{additionalInfo.precipitation_sum} mm</AirTextSmall>
                            </TextWrap>
                            <TextWrap>
                                <AirIcon src={themeNow ? IMAGES.directionDark : IMAGES.directionLight}/>
                                <AirTextBig>Wind direction:</AirTextBig>
                                <AirTextSmall>{getDirection(additionalInfo.windDirection)}</AirTextSmall>
                            </TextWrap>
                        </AirWrap>
                    </SwiperSlide>
                </AddWrap>
            </Swiper>
        </SectionWrap>
    );
}