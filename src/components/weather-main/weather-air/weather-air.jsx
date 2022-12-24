import React from "react";
import {AirTextBig, AirTextSmall, AirWrap, TextWrap} from "./weather-air.styles";
import {PlainText, SectionWrap} from "../weather-today/weather-today.styles";

export const WeatherAir = () => {
    return(
        <SectionWrap>
            <PlainText>AIR CONDITIONS: </PlainText>
            <AirWrap>
                <TextWrap>
                    <AirTextSmall>Real Feel</AirTextSmall>
                    <AirTextBig>30</AirTextBig>
                </TextWrap>
                <TextWrap>
                    <AirTextSmall>Wind</AirTextSmall>
                    <AirTextBig>0.2 km/h</AirTextBig>
                </TextWrap>
            </AirWrap>
            <AirWrap>
                <TextWrap>
                    <AirTextSmall>Real Feel</AirTextSmall>
                    <AirTextBig>30</AirTextBig>
                </TextWrap>
                <TextWrap>
                    <AirTextSmall>Wind</AirTextSmall>
                    <AirTextBig>0.2 km/h</AirTextBig>
                </TextWrap>
            </AirWrap>
        </SectionWrap>
    );
}