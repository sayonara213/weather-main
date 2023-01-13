import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./main/main";
import {ListContainer} from "./saved-list/list-container";
import {Theme} from "../constants/theme";
import {useSelector} from "react-redux";

export const App = () => {

    const themeNow = useSelector(state => state.settings.lightTheme);

    return(
        <Theme theme={themeNow}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route index element={<Main />} />
                <Route path="list" element={<ListContainer />}/>
            </Routes>
        </BrowserRouter>
        </Theme>
    )
}