import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather.js';
import RemoveItem from './reducer_removeItem.js';
const rootReducer=combineReducers({
   weather: WeatherReducer,
   removeItem: RemoveItem
   
});

export default rootReducer;