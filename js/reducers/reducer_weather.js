import {FETCH_WEATHER} from '../actions/index.js';
import {REMOVE_ITEM} from '../actions/index.js';
export default function (state=[], action){
    console.log('stateWeather', state)
    switch(action.type){
        case FETCH_WEATHER: 
           return [action.payload.data, ...state];
           
        case REMOVE_ITEM : 
        let index = state.filter(item => item === action);
              return [
                     ...state.slice(0, index),
                      ...state.slice(index + 1)];
        }
    return state;

}
