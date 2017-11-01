const API_KEY = 'a390214491b6bc7a8ba0e0735659aec7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},us`;
    const request=fetch(url);
    console.log ('request', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

