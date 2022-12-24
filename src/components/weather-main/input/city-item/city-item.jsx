import React from "react";
import {CityText, CityWrap} from "./city-item.styles";

export const CityItem = (props) => {
    return(
        <CityWrap onClick={props.click}>
            <CityText>{props.city.name}, {props.city.admin1}, {props.city.country}</CityText>
        </CityWrap>
    );
}