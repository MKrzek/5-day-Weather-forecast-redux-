import {REMOVE_ITEM} from '../actions/index.js';

export default function (state = [], action) {

    console.log('Your payload to be removed', action)
    switch (action.type) {

        case REMOVE_ITEM:
            const index=state.filter(city=> city.id===action.id)
            return [...state.slice(0, index),
                    ...state.slice(index+1)];

    }
    return state;
}

