import React from "react";
import {CircleFlag} from 'react-circle-flags'

import {CityText, CityWrap} from "./city-item.styles";

export const CityItem = (props) => {
    return (
        <CityWrap onClick={props.click}>
            <CircleFlag countryCode={props.city.country_code.toLowerCase()} height="35" alt={""}/>
            <CityText>{props.city.name}, {props.city.admin1}, {props.city.country}</CityText>
            {props.lastSearch ? <CityText>Last Search</CityText> : null}
        </CityWrap>
    );
}