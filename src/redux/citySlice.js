import {createSlice} from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: "city",
    initialState: {
        cityInfo: {},
        lastSearch: {},
        savedCities: [],
    },
    reducers: {
        setCityInfo: (state, action) => {
            state.cityInfo = action.payload
        },
        setLastSearch: (state, action) => {
            state.lastSearch = action.payload
        },
        addSavedCity: (state, action) => {
            if(state.savedCities.length > 0){
                !state.savedCities.some(city => city.id === action.payload.id) && state.savedCities.push(action.payload)
            } else {
                state.savedCities.push(action.payload)
            }
        },
        removeSavedCity: (state, action) => {
            state.savedCities = state.savedCities.filter(city => city.id !== action.payload)
        }
    }
})

export default citySlice.reducer;
export const {setCityInfo, setLastSearch, addSavedCity, removeSavedCity} = citySlice.actions;