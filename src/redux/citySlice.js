import {createSlice} from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: "city",
    initialState: {
        cityInfo: {},
        lastSearch: {},
    },
    reducers: {
        setCityInfo: (state, action) => {
            state.cityInfo = action.payload
        },
        setLastSearch: (state, action) => {
            state.lastSearch = action.payload
        }
    }
})

export default citySlice.reducer;
export const {setCityInfo, setLastSearch} = citySlice.actions;