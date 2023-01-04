import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        cityWeather: {
            current_weather: {},
            hourly: {},
            daily: {},
        },
        additionalInfo: {
            sunrise: {},
            sunset: {},
            precipitation: {},
            windDirection: {},
        },
    },
    reducers: {
        setWeather: (state, action) => {
            state.cityWeather = action.payload
            state.additionalInfo = {
                sunrise: action.payload.daily.sunrise[0],
                sunset: action.payload.daily.sunset[0],
                precipitation: action.payload.daily.precipitation_sum[0],
                windDirection: action.payload.daily.winddirection_10m_dominant[0],
            }
        }
    }
})

export default weatherSlice.reducer;
export const {setWeather} = weatherSlice.actions;