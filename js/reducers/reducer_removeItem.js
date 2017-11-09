import {REMOVE_ITEM} from '../actions/index.js';

export default function (state = [], action) {

    console.log('payload', action)
    switch (action.type) {
        case REMOVE_ITEM:
            return [
                action.payload.data
            ];

    }
    return state;
}

