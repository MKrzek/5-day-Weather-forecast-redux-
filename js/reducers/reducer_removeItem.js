import {REMOVE_ITEM} from '../actions/index.js';

export default function (state=[], action) {
    switch (action.type) {

        case REMOVE_ITEM:
            
            let index=state.filter(item=> item===action.payload)
            return [...state.slice(0, index),
                    ...state.slice(index+1)];
    }
    return state;
}

