import React from "react";
import {HeaderIcon, HeaderWrap} from "./header.styles";
import {IMAGES} from "../../constants/images";

export const Header = (props) => {

    return (
        <HeaderWrap>
            <HeaderIcon src={IMAGES.logo}/>
            <HeaderIcon src={props.theme === "light" ? IMAGES.lightMode : IMAGES.darkMode} onClick={props.themeChange}/>
            <HeaderIcon src={props.theme === "light" ? IMAGES.locationDark : IMAGES.locationLight} onClick={props.location}/>
        </HeaderWrap>
    )
}