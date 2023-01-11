import cloudy from '../assets/images/weather-icons/cloudy.png';
import day_clear from '../assets/images/weather-icons/day_clear.png';
import day_partly_cloudy from '../assets/images/weather-icons/day_partly_cloudy.png';
import day_rain from '../assets/images/weather-icons/day_rain.png';
import day_snow from '../assets/images/weather-icons/day_snow.png';
import day_thunder from '../assets/images/weather-icons/day_thunder.png';
import night_partly_cloudy from '../assets/images/weather-icons/night_partly_cloudy.png';
import night_rain from '../assets/images/weather-icons/night_rain.png';
import night_snow from '../assets/images/weather-icons/night_snow.png';
import night_thunder from '../assets/images/weather-icons/night_thunder.png';
import rain from '../assets/images/weather-icons/rain.png';
import snow from '../assets/images/weather-icons/snow.png';
import snow_showers from '../assets/images/weather-icons/snow_showers.png';
import thunder from '../assets/images/weather-icons/thunder.png';
import wind from '../assets/images/weather-icons/wind.png';
import day_wind from '../assets/images/weather-icons/day_wind.png';
import night_wind from '../assets/images/weather-icons/night_wind.png';
import night_clear from '../assets/images/weather-icons/night_clear.png';

const dayWeatherImages = {
    0: day_clear,
    1: day_partly_cloudy,
    2: day_partly_cloudy,
    3: day_partly_cloudy,
    45: cloudy,
    48: cloudy,
    51: day_wind,
    53: wind,
    55: wind,
    56: wind,
    57: wind,
    61: day_rain,
    63: rain,
    65: rain,
    66: snow_showers,
    67: snow_showers,
    71: day_snow,
    73: snow,
    75: snow,
    77: snow,
    80: rain,
    81: rain,
    82: rain,
    85: snow,
    86: snow,
    95: day_thunder,
    96: thunder,
    99: thunder,
};

const nightWeatherImages = {
    0: night_clear,
    1: night_partly_cloudy,
    2: night_partly_cloudy,
    3: night_partly_cloudy,
    45: cloudy,
    48: cloudy,
    51: night_wind,
    53: wind,
    55: wind,
    56: wind,
    57: wind,
    61: night_rain,
    63: rain,
    65: rain,
    66: snow_showers,
    67: snow_showers,
    71: night_snow,
    73: snow,
    75: snow,
    77: snow,
    80: rain,
    81: rain,
    82: rain,
    85: snow,
    86: snow,
    95: night_thunder,
    96: thunder,
    99: thunder,
};

const getIsDay = (time) => {
    if (!time) return true;

    const hour = new Date(time).getHours();
    return hour >= 6 && hour < 18;
};

export const getDirection = (deg) => {
    if (deg > 337.5) return 'N';
    if (deg > 292.5) return 'NW';
    if (deg > 247.5) return 'W';
    if (deg > 202.5) return 'SW';
    if (deg > 157.5) return 'S';
    if (deg > 122.5) return 'SE';
    if (deg > 67.5) return 'E';
    if (deg > 22.5) return 'NE';
    return 'N';
}

export const getDayDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", { // you can use undefined as first argument
        month: "2-digit",
        day: "2-digit",
    })
}

export const getWeekDay = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
        weekday: "short",
    })
}

export const getWeatherIcon = (weatherCode, time) => {
    const daytime = getIsDay(time);
    return daytime ? dayWeatherImages[weatherCode] : nightWeatherImages[weatherCode];
}