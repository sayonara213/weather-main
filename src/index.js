import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
    cityWeather: {
        current_weather: {},
        hourly: {},
        daily: {}
    },
    cityInfo: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {...state, cityWeather: action.payload}
        case 'SET_CITY_INFO':
            return {...state, cityInfo: action.payload}
        default:
            return state
    }
}

const store = createStore(reducer)

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

reportWebVitals();
