import React from "react";
import {CityText, CityWrap} from "./city-item.styles";
import { CircleFlag } from 'react-circle-flags'

export const CityItem = (props) => {
    return(
        <CityWrap onClick={props.click}>
            <CircleFlag countryCode={props.city.country_code.toLowerCase()} height="35" />
            <CityText>{props.city.name}, {props.city.admin1}, {props.city.country}</CityText>
        </CityWrap>
    );
}