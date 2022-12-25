import React, {useEffect, useState} from "react";
import {CityList, InputButton, InputField, InputForm, InputWrap} from "./input.style";
import {getCity, getWeather} from "../../../service";
import {CityItem} from "./city-item/city-item";
import {useDispatch, useSelector} from "react-redux";

export const Input = () => {

    const [city, setCity] = useState('')

    const [showCity, setShowCity] = useState(false)

    const [cityList, setCityList] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        if (city.length > 2) {
            const delayRequest = setTimeout(async () => {
                await getCity(city).then(res => {
                    setCityList(res.data.results)
                })
            }, 1000)
            setShowCity(true);
            return () => clearTimeout(delayRequest)
        }
        else {
            setCityList([]);
        }
    }, [city])

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleShowCity = async (city) => {
        if(showCity === true) {
            setShowCity(false)
        }
        else {
            setShowCity(true)
        }
        await getWeather(city.latitude, city.longitude).then(res => {
            dispatch({type: 'SET_WEATHER', payload: res.data})
            dispatch({type: 'SET_CITY_INFO', payload: city})
        })
    }

    return(
        <InputWrap>
            <InputForm>
                <InputField
                    placeholder={"Search for city"}
                    onChange={handleChange}
                    onMouseDown={() => setShowCity(true)}
                ></InputField>
            </InputForm>
            {cityList.length > 0 && showCity ?
            <CityList>
                {cityList.map((item, index) => (
                    <CityItem city={item} key={index} click={() => handleShowCity(item)}/>
                ))}
            </CityList> : null}
        </InputWrap>

    );
};