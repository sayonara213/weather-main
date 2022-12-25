import cloudy from '../assets/images/cloudy.png';
import day_clear from '../assets/images/day_clear.png';
import day_partly_cloudy from '../assets/images/day_partly_cloudy.png';
import day_rain from '../assets/images/day_rain.png';
import day_snow from '../assets/images/day_snow.png';
import day_thunder from '../assets/images/day_thunder.png';
import day_wind from '../assets/images/day_wind.png';
import night_clear from '../assets/images/night_clear.png';
import night_partly_cloudy from '../assets/images/night_partly_cloudy.png';
import night_rain from '../assets/images/night_rain.png';
import night_snow from '../assets/images/night_snow.png';
import night_thunder from '../assets/images/night_thunder.png';
import night_wind from '../assets/images/night_wind.png';
import freezing from '../assets/images/freezing.png';
import rain from '../assets/images/rain.png';
import snow from '../assets/images/snow.png';
import snow_showers from '../assets/images/snow_showers.png';
import thunder from '../assets/images/thunder.png';
import wind from '../assets/images/wind.png';

export const IMAGES = {
    cloudy,
    day_clear,
    day_partly_cloudy,
    day_rain,
    day_snow,
    day_thunder,
    day_wind,
    night_clear,
    night_partly_cloudy,
    night_rain,
    night_snow,
    night_thunder,
    night_wind,
    freezing,
    rain,
    snow,
    thunder,
    wind,
    snow_showers,
}

const convertTime = (time) => {
    let hour = parseInt(time.slice(11, 13))
    if (hour >= 6 && hour < 18) {
        return 'day';
    } else {
        return 'night';
    }
}

export const getWeatherIcon = (weatherCode, time) => {
    console.log(time)
    const daytime = convertTime(time)
    console.log(daytime);

    if(daytime === 'day'){
        switch (true) {
            case weatherCode >= 1 && weatherCode <= 3:
                return IMAGES.day_partly_cloudy;
            case weatherCode >= 45 && weatherCode <= 57:
                return IMAGES.cloudy;
            case weatherCode === 61:
                return IMAGES.day_rain;
            case weatherCode >= 63 && weatherCode <= 65:
                return IMAGES.rain;
            case weatherCode >= 66 && weatherCode <= 67:
                return IMAGES.snow;
            case weatherCode >= 71 && weatherCode <= 75:
                return IMAGES.day_snow;
            case weatherCode === 77:
                return IMAGES.snow;
            case weatherCode >= 80 && weatherCode <= 82:
                return IMAGES.snow_showers;
            case weatherCode >= 85 && weatherCode <= 86:
                return IMAGES.snow;
            case weatherCode === 95:
                return IMAGES.day_thunder;
            case weatherCode >= 96 && weatherCode <= 99:
                return IMAGES.thunder;
            default:
                return IMAGES.day_clear;
        }
    } else {
        switch (true) {
            case weatherCode >= 1 && weatherCode <= 3:
                return IMAGES.night_partly_cloudy;
            case weatherCode >= 45 && weatherCode <= 57:
                return IMAGES.cloudy;
            case weatherCode === 61:
                return IMAGES.night_rain;
            case weatherCode >= 63 && weatherCode <= 65:
                return IMAGES.rain;
            case weatherCode >= 66 && weatherCode <= 67:
                return IMAGES.snow;
            case weatherCode >= 71 && weatherCode <= 75:
                return IMAGES.night_snow;
            case weatherCode === 77:
                return IMAGES.snow;
            case weatherCode >= 80 && weatherCode <= 82:
                return IMAGES.snow_showers;
            case weatherCode >= 85 && weatherCode <= 86:
                return IMAGES.snow;
            case weatherCode === 95:
                return IMAGES.night_thunder;
            case weatherCode >= 96 && weatherCode <= 99:
                return IMAGES.thunder;
            default:
                return IMAGES.day_clear;
        }
    }
}