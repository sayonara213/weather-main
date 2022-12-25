import axios from "axios";

export const getCity = async (city) => {
    try {
       return await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    } catch (err) {
        console.log(err);
    }
}

export const getWeather = async (lat, lon) => {
    try {
        return await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FKiev`)
    } catch (err) {
        console.log(err);
    }
}

