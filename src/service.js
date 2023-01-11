import axios from "axios";

export const getCity = async (city) => {
    try {
        return await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    } catch (err) {
        console.log(err);
    }
}

export const getWeather = async (lat, lon, temp) => {
    const unit = temp ? "celsius" : "fahrenheit";
    try {
        return await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,weathercode&daily=weathercode,sunrise,sunset,precipitation_sum,winddirection_10m_dominant,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FKiev&temperature_unit=${unit}`)
    } catch (err) {
        console.log(err);
    }
}

export const getUserCity = async () => {
    try {
        return await axios.get(`https://ipapi.co/json/`)
    } catch (err) {
        console.log(err);
        alert("Turn off adblock to get your location")
    }
}
