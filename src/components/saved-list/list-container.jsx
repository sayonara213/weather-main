import React from "react";
import {useSelector} from "react-redux";

import {DummyText, DummyWrap, ListWrap} from "./list-container.styles";
import {ListItem} from "./list-item/list-item";
import {WeatherWrap} from "../main/main.styles";
import {Header} from "../header/header";

export const ListContainer = () => {

    const savedCities = useSelector(state => state.city.savedCities);

    return(
        <WeatherWrap>
            <Header />
            <ListWrap>
                {savedCities.length > 0 ? savedCities.map((city, index) => (
                    <ListItem city={city} key={index}/>
                )) :
                    <DummyWrap>
                        <DummyText>Save some cities first</DummyText>
                    </DummyWrap>}
            </ListWrap>
        </WeatherWrap>
    )
}