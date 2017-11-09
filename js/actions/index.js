import axios from 'axios';
const API_KEY = 'a390214491b6bc7a8ba0e0735659aec7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REMOVE_ITEM='REMOVE_ITEM';

export function fetchWeather(city) {
   
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    return {type: FETCH_WEATHER, payload: request};
}

export function removeItem(city){
         return {
             type: REMOVE_ITEM, 
             payload: city 
            }
    console.log ('to jest payload', payload)
    
             
}



    
           
    


    
