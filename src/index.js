import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
    cityWeather: {
        current_weather: {},
        hourly: {},
        daily: {}
    },
    cityInfo: {},
    lastSearch: {},
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {...state, cityWeather: action.payload}
        case 'SET_CITY_INFO':
            return {...state, cityInfo: action.payload}
        case 'SET_LAST_SEARCH':
            return {...state, lastSearch: action.payload}
        default:
            return state
    }
}

const store = createStore(reducer, composeWithDevTools())

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);
