import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getWeather} from "../../service";
import {switchCelsius, switchTheme} from "../../redux/settingsSlice";
import {setWeather} from "../../redux/weatherSlice";

import {IMAGES} from "../../constants/images";

import {HeaderButton, HeaderIcon, HeaderWrap, ImgContainer} from "./header.styles";
import {Link} from "react-router-dom";

export const Header = (props) => {

    const dispatch = useDispatch();

    const cityInfo = useSelector(state => state.city.cityInfo);

    const themeNow = useSelector(state => state.settings.lightTheme);

    const celsius = useSelector(state => state.settings.celsius);

    const handleTheme = () => {
        dispatch(switchTheme())
    }

    const resetWeather = async () => {
        await getWeather(cityInfo.latitude, cityInfo.longitude, celsius).then(res => {
            dispatch(setWeather(res.data))
        })
    }

    const handleTemperature = () => {
        dispatch(switchCelsius());
    }

    useEffect(() => {
      resetWeather()
    }, [celsius])

    return (
        <HeaderWrap>
            <Link to={'/main'}>
                <HeaderIcon src={IMAGES.logo} alt={""}/>
            </Link>
            <HeaderIcon src={themeNow ? IMAGES.lightMode : IMAGES.darkMode} onClick={handleTheme} alt={""}/>
            <HeaderIcon src={themeNow ? IMAGES.locationDark : IMAGES.locationLight} onClick={props.location} alt={""}/>
            <Link to={'/list'}>
                <HeaderIcon src={themeNow ? IMAGES.listDark : IMAGES.listLight} alt={""}/>
            </Link>
            <ImgContainer>
                <HeaderButton onClick={handleTemperature}>{celsius ? "°C" : "°F"}</HeaderButton>
            </ImgContainer>
        </HeaderWrap>
    )
}