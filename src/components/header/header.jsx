import React from "react";
import {HeaderIcon, HeaderWrap} from "./header.styles";
import {IMAGES} from "../../const/images";

export const Header = (props) => {

    return(
        <HeaderWrap>
            <HeaderIcon src={IMAGES.logo}/>
            <HeaderIcon src={props.theme === "light" ? IMAGES.lightMode : IMAGES.darkMode} onClick={props.click}/>
        </HeaderWrap>
    )
}