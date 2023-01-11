import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {CityItem} from "./city-item/city-item";

import {getCity, getWeather} from "../../../service";
import {setCityInfo, setLastSearch} from "../../../redux/citySlice";
import {setWeather} from "../../../redux/weatherSlice";

import {CityList, InputField, InputForm, InputWrap} from "./input.style";

export const Input = () => {

    const [city, setCity] = useState('')

    const [showCity, setShowCity] = useState(false)

    const [cityList, setCityList] = useState([])

    const dispatch = useDispatch();

    const cityInfo = useSelector(state => state.city.cityInfo);

    const lastSearch = useSelector(state => state.city.lastSearch);

    const temperature = useSelector(state => state.settings.celsius);

    useEffect(() => {
        if (city.length > 2) {
            const delayRequest = setTimeout(async () => {
                await getCity(city).then(res => {
                    if (Object.keys(res.data).length === 2) {
                        setCityList(res.data.results)
                    }
                })
                setShowCity(true)
            }, 1000)
            return () => clearTimeout(delayRequest)
        } else {
            setShowCity(false)
        }
    }, [city])

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const switchShowCity = () => {
        setShowCity(!showCity)
    }

    const handleShowCity = async (city) => {
        setShowCity(false)
        dispatch(setLastSearch(cityInfo))
        await getWeather(city.latitude, city.longitude, temperature).then(res => {
            dispatch(setWeather(res.data))
            dispatch(setCityInfo(city))
        })
    }

    return (
        <InputWrap>
            <InputForm>
                <InputField
                    placeholder={"Search for city"}
                    onChange={handleChange}
                    onClick={switchShowCity}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                ></InputField>
            </InputForm>
            {showCity ?
                <CityList
                onClick={switchShowCity}>
                    {Object.keys(lastSearch).length > 0 ? <CityItem city={lastSearch} click={() => handleShowCity(lastSearch)} lastSearch={true}/> : null}
                    {cityList.map((item, index) => (
                        <CityItem city={item} key={index} click={() => handleShowCity(item)}/>
                    ))}
                </CityList> : null}
        </InputWrap>

    );
};