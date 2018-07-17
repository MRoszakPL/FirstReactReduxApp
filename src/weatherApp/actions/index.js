import axios from 'axios';

const API_KEY = '457ea80e3074318e8a45716530ee863d';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };

}
