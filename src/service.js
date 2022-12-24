import axios from "axios";

export const getCity = async (city) => {
    try {
       return await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    } catch (err) {
        console.log(err);
    }
}

