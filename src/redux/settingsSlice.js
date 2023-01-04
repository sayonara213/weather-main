import {createSlice} from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        lightTheme: true,
        celsius: true,
    },
    reducers: {
        switchTheme: (state) => {
            state.lightTheme = !state.lightTheme
        },
        switchCelsius: (state) => {
            state.celsius = !state.celsius
        }
    }
})

export default settingsSlice.reducer;
export const {switchTheme, switchCelsius} = settingsSlice.actions;