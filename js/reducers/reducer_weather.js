import {FETCH_WEATHER} from '../actions/index.js';

export default function (state=[], action){
    switch(action.type){
        case FETCH_WEATHER: 
           return [action.playload.data, ...state];
           {/*return state.concat([action.payload.data])*/}
    }
   
    return state;
}
