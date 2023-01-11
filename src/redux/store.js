import {combineReducers, configureStore} from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import citySlice from "./citySlice";
import settingsSlice from "./settingsSlice";

const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const rootReducer = combineReducers({
    weather: weatherSlice,
    city: citySlice,
    settings: settingsSlice,
});

const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;