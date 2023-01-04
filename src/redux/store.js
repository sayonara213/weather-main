import {combineReducers, configureStore} from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import citySlice from "./citySlice";
import settingsSlice from "./settingsSlice";


const rootReducer = combineReducers({
    weather: weatherSlice,
    city: citySlice,
    settings: settingsSlice,
});

export const store = configureStore({
    reducer: rootReducer,

})