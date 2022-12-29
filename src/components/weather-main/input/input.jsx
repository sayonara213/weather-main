import React, {useEffect, useState} from "react";
import {CityList, InputField, InputForm, InputWrap} from "./input.style";
import {getCity, getWeather} from "../../../service";
import {CityItem} from "./city-item/city-item";
import {useDispatch, useSelector} from "react-redux";

export const Input = () => {

    const [city, setCity] = useState('')

    const [showCity, setShowCity] = useState(false)

    const [cityList, setCityList] = useState([])

    const dispatch = useDispatch();

    const cityInfo = useSelector(state => state.cityInfo);

    const lastSearch = useSelector(state => state.lastSearch);

    useEffect(() => {
        if (city.length > 2) {
            const delayRequest = setTimeout(async () => {
                await getCity(city).then(res => {
                    if (Object.keys(res.data).length === 2) {
                        setCityList(res.data.results)
                    }
                })
            }, 1000)
            return () => clearTimeout(delayRequest)
        }
    }, [city])

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleShowCity = async (city) => {
        setShowCity(false)
        dispatch({type: 'SET_LAST_SEARCH', payload: cityInfo})
        await getWeather(city.latitude, city.longitude).then(res => {
            dispatch({type: 'SET_WEATHER', payload: res.data})
            dispatch({type: 'SET_CITY_INFO', payload: city})
        })
    }

    return (
        <InputWrap>
            <InputForm>
                <InputField
                    placeholder={"Search for city"}
                    onChange={handleChange}
                    onClick={() => setShowCity(true)}
                ></InputField>
            </InputForm>
            {showCity ?
                <CityList>
                    {Object.keys(lastSearch).length > 0 ? <CityItem city={lastSearch} click={() => handleShowCity(lastSearch)} lastSearch={true}/> : null}
                    {cityList.map((item, index) => (
                        <CityItem city={item} key={index} click={() => handleShowCity(item)}/>
                    ))}
                </CityList> : null}
        </InputWrap>

    );
};